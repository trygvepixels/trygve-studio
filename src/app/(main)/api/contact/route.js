import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Accepts POSTed JSON and forwards to Google Apps Script (which writes to Google Sheets).
 *
 * Expected body:
 * {
 *   fullName: string,              // required
 *   email: string,                 // required
 *   phone: string,                 // required
 *   company: string,               // optional
 *   location: string,              // city & country (required)
 *   projectType: string,           // required
 *   budget: string,                // optional (e.g., "₹25–35L" / "USD 50–70k")
 *   timeline: string,              // optional
 *   message: string,               // required
 *   // optional: honeypot, utm, page info, etc.
 * }
 */

function clean(s) {
  if (typeof s !== "string") return "";
  return s.replace(/\s+/g, " ").trim();
}
function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s || "");
}
function digitsOnly(s) {
  return (s || "").replace(/\D/g, "");
}
function hasEnoughLetters(s, min = 2) {
  const matches = (s || "").match(/[A-Za-z]/g);
  return (matches || []).length >= min;
}
function stringifyMeta(value) {
  if (!value) return "";
  if (typeof value === "string") return clean(value);
  try {
    return JSON.stringify(value);
  } catch {
    return "";
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));

    console.log("contact form", body);

    // --- basic validation ---
    const payload = {
      fullName: clean(body.fullName || body.name),
      email: clean(body.email),
      phone: clean(body.phone || body.whatsapp || body.contact),
      company: clean(body.company || body.brand),
      location: clean(body.location || body.cityCountry || body.regionName),
      projectType: clean(body.projectType || body.service || body.serviceName),
      budget: clean(body.budget),
      timeline: clean(body.timeline),
      message: clean(body.message || body.brief),
      submissionType: clean(body.submissionType || body.source || "contact"),
      // optional extras (nice to have in the sheet)
      page: clean(body.page), // where form was submitted
      utm: stringifyMeta(body.utm),
      submittedAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "",
      referer: req.headers.get("referer") || "",
      ip: req.headers.get("x-forwarded-for") || "",
    };

    // honeypot (optional)
    if (clean(body.website)) {
      return NextResponse.json({ ok: true }, { status: 202 }); // silently accept bots
    }

    const phoneDigits = digitsOnly(payload.phone);
    const isLeadMagnet = payload.submissionType === "lead-magnet";
    const hasValidPhone = !payload.phone || phoneDigits.length >= 10;

    if (payload.email && !isEmail(payload.email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    if (!hasValidPhone) {
      return NextResponse.json(
        { error: "Please enter a valid phone or WhatsApp number." },
        { status: 400 },
      );
    }

    if (isLeadMagnet) {
      const leadMagnetNameOk =
        payload.fullName.length >= 2 &&
        payload.fullName.length <= 80 &&
        hasEnoughLetters(payload.fullName, 2);
      const leadMagnetMessageOk = payload.message.length >= 10;

      if (!leadMagnetNameOk || !payload.email || phoneDigits.length < 10 || !leadMagnetMessageOk) {
        return NextResponse.json({ ok: true }, { status: 202 });
      }
    }

    // required checks (Optional)
    const isMissingCritical = !payload.fullName && !payload.email && !payload.phone;
    if (isMissingCritical && !clean(body.website)) {
       // We still want to ensure they provided at least ONE way to contact them
       // but we'll fulfill the user's request of "no field is mandatory" by 
       // just logging a warning instead of erroring out.
       console.warn("Processing inquiry with very low data density.");
    }

    const GAS_URL =
      process.env.GOOGLE_APPS_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbx-fEc6gUTXne3hmbHK-kZEBdwYXaM68dP8SUfDyPHjEFJHx7ZrHpf1g9X2xtg1SOdn/exec";
    const GAS_TOKEN = process.env.GOOGLE_APPS_SCRIPT_TOKEN;

    if (!GAS_URL) {
      console.warn(
        "WARNING: GOOGLE_APPS_SCRIPT_URL is not defined. Submission logged to console only.",
      );
      return NextResponse.json(
        {
          ok: true,
          message: "Submission received (Dev Mode: Logged to console)",
        },
        {
          status: 201,
          headers: { "Access-Control-Allow-Origin": "*" },
        },
      );
    }

    // Forward to Google Apps Script (which appends to the sheet)
    const res = await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(GAS_TOKEN ? { "X-API-KEY": GAS_TOKEN } : {}),
      },
      body: JSON.stringify({
        // These keys become columns in your sheet (Apps Script auto-creates headers)
        name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        company: payload.company,
        location: payload.location,
        projectType: payload.projectType,
        budget: payload.budget,
        timeline: payload.timeline,
        message: payload.message,
        consent: "Yes",
        submissionType: payload.submissionType,

        // Useful metadata
        page: payload.page,
        utm: payload.utm,
        submittedAt: payload.submittedAt,
        userAgent: payload.userAgent,
        referer: payload.referer,
        ip: payload.ip,
        estimatedPrice: clean(body.estimatedPrice ? String(body.estimatedPrice) : ""),
      }),
      // You can optionally set a timeout with AbortController if needed.
    });

    // We keep it simple — if GAS responded at all, treat as success
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        { error: "Upstream error", detail: text },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { ok: true },
      {
        status: 201,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
