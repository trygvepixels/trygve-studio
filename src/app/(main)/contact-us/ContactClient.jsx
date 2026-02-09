"use client";
import React, { useState } from "react";
import {
  FiMail, FiPhone, FiGlobe, FiClock, FiMapPin, FiArrowRight, FiHome, FiChevronRight,
} from "react-icons/fi";
import Link from "next/link";
import {
  FaInstagram, FaLinkedin, FaBehance, FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

import contactImg from '@/assets/contact/contact.png'
import LocationsList from "@/components/LocationsList";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          page: window.location.pathname
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Failed to submit");
      }

      setSubmitting(false);
      form?.reset();
      setStatus({ state: "success", message: "Thanks! We'll reply within 24 hours." });
      // Navigate to thank-you. Use SPA replace, then hard fallback just in case.
      try {
        window.location.href = `/thank-you`;
        // Fallback in case client-side nav is interrupted by form context or transitions
        setTimeout(() => {
          if (typeof window !== "undefined" && window.location.pathname !== "/thank-you") {
            window.location.assign("/thank-you");
          }
        }, 50);
      } catch (_) {
        if (typeof window !== "undefined") window.location.assign("/thank-you");
      }
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  }
  return (
    <main className="bg-[#F4F1EC]     pt-10 pb-6 md:pt-16 text-[#101010]">
      <Breadcrumbs />

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* subtle world-map style background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              " ",
          }}
        />

        <div className="max-w-7xl mx-auto px-5   pb-10   md:pb-16 relative">
          <div className="flex items-center gap-2 text-sm tracking-wide text-neutral-700">
            <div>
              <div className="flex items-center gap-2 text-sm tracking-wide text-neutral-700">
                <FiGlobe className="shrink-0" />
                <span>Architecture & Interiors — Delivered Worldwide</span>
              </div>

              <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl font-semibold tracking-tight">
                Let’s design your legacy — <br className="hidden md:block" />
                anywhere in the world.
              </h1>

              <p className="mt-5 max-w-2xl text-[17px] md:text-lg text-neutral-700">
                We create timeless spaces by integrating form, function and detail.
                From residences to hospitality & retail, we manage end-to-end —
                concept to completion — across every country, state and city.
              </p>
            </div>

            <Image src={contactImg} alt="Contact Trygve Studio" className="md:block hidden" />

          </div>


          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#project-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#101010] text-white px-5 py-3 text-sm md:text-[15px] hover:opacity-90 transition"
            >
              Start Your Project <FiArrowRight />
            </a>
            <a
              href="https://wa.me/919554440400" // ← replace with your WhatsApp
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#101010] px-5 py-3 text-sm md:text-[15px] hover:bg-black hover:text-white transition"
            >
              <FaWhatsapp className="text-green-600" />
              Quick Chat on WhatsApp
            </a>

          </div>

          {/* credibility strip */}
          <ul className="mt-10 grid grid-cols-2 gap-3 text-sm md:grid-cols-4 md:text-[15px]">
            <li className="flex items-center gap-2">
              <FiGlobe /> Global Delivery
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> Local Compliance
            </li>
            <li className="flex items-center gap-2">
              <FiClock /> On-time Execution
            </li>
            <li className="flex items-center gap-2">
              <FiArrowRight /> Bespoke, End-to-End
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Contact + Form ===== */}
      <section className="relative mt-20 ">
        <div className="max-w-7xl mx-auto px-5 pb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr]">
            {/* Info panel */}
            <aside className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold">Contact Trygve Studio</h2>
              <p className="mt-2 text-neutral-700">
                Share a few details. Our team will respond within 24 hours with
                next steps, timelines and an initial consultation.
              </p>

              <div className="mt-6 grid gap-4 text-[15px]">
                <a href="mailto:faisal.saif@trygvestudio.com" className="group flex items-start gap-3">
                  <FiMail className="mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-neutral-700 group-hover:underline">
                      faisal.saif@trygvestudio.com
                    </div>
                  </div>
                </a>

                <a href="tel:+919554440400" className="group flex items-start gap-3">
                  <FiPhone className="mt-0.5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-neutral-700 group-hover:underline">
                      +91 95544 40400
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5" />
                  <div>
                    <div className="font-medium">Studios</div>
                    <div className="text-neutral-700">
                      Operating globally — project teams across APAC, EMEA & NA.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiClock className="mt-0.5" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-neutral-700">Within 24 hours (Mon–Sat)</div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-7">
                <div className="text-sm font-medium uppercase tracking-wide">
                  Follow
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.behance.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition"
                    aria-label="Behance"
                  >
                    <FaBehance />
                  </a>
                </div>
              </div>

              {/* mini testimonials */}
              <div className="mt-8 space-y-4">
                <blockquote className="rounded-xl bg-[#F4F1EC] p-4 text-sm">
                  “Their attention to detail gave our villa a soul.”
                  <span className="block mt-1 text-neutral-600">— Client, Dubai</span>
                </blockquote>
                <blockquote className="rounded-xl bg-[#F4F1EC] p-4 text-sm">
                  “Seamless end-to-end execution across two continents.”
                  <span className="block mt-1 text-neutral-600">— Hospitality Group, London</span>
                </blockquote>
              </div>
            </aside>

            {/* Form */}
            <div id="project-form" className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
                <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="Full name" name="fullName" required />
                  <Field label="Email" name="email" type="email" required />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="Phone / WhatsApp" name="phone" />
                  <Field label="Company / Brand (optional)" name="company" />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Select
                    label="Project type"
                    name="projectType"
                    options={[
                      "Residential",
                      "Commercial / Office",
                      "Retail / F&B",
                      "Hospitality",
                      "Landscape",
                      "Interior Renovation",
                      "Concept / Feasibility",
                      "Others"
                    ]}
                    required
                  />
                  <Field label="City & Country" name="location" placeholder="e.g., Mumbai, India / Dubai, UAE" required />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Select
                    label="Estimated budget"
                    name="budget"
                    options={[
                      "To be discussed",
                      "₹25k – ₹50k",
                      "₹50k – ₹100k",
                      "₹100k – ₹250k",
                      "₹250k+",
                    ]}
                  />
                  <Select
                    label="Timeline"
                    name="timeline"
                    options={[
                      "Immediate (0–1 month)",
                      "Soon (1–3 months)",
                      "Planning (3–6 months)",
                      "Exploring options",
                    ]}
                  />
                </div>

                <Textarea
                  label="Tell us about your project"
                  name="message"
                  placeholder="Site details, area (sqft/sqm), style inspirations, constraints, goals…"
                  required
                />

                <label className="flex items-start gap-3 text-sm text-neutral-700">
                  <input type="checkbox" name="consent" value="yes" className="mt-1" required />
                  I consent to Trygve Studio contacting me about this enquiry and agree to the privacy policy.
                </label>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-full bg-[#101010] text-white px-6 py-3 text-sm md:text-[15px] hover:opacity-90 disabled:opacity-50 transition"
                  >
                    {submitting ? "Sending…" : "Send Your Vision"}
                  </button>

                  <a
                    href="https://wa.me/919554440400" // ← replace
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#101010] px-5 py-3 text-sm md:text-[15px] hover:bg-black hover:text-white transition"
                  >
                    <FaWhatsapp className="text-green-600" />
                    Or chat on WhatsApp
                  </a>
                </div>

                <div aria-live="polite" className="text-sm mt-2">
                  {status.state === 'success' && (
                    <p className="text-green-700">{status.message}</p>
                  )}
                  {status.state === 'error' && (
                    <p className="text-red-700">{status.message}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <LocationsList />

    </main>
  );
}

/* ---------- small reusable inputs ---------- */
function Field({ label, name, type = "text", placeholder = "", required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}{required && <span aria-hidden className="text-red-600"> *</span>}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-0 focus:border-black/30"
      />
    </label>
  );
}

function Select({ label, name, options = [], required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}{required && <span aria-hidden className="text-red-600"> *</span>}</span>
      <select
        name={name}
        required={required}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-0 focus:border-black/30"
        defaultValue=""
      >
        <option value="" disabled>Choose…</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

function Textarea({ label, name, placeholder = "", required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}{required && <span aria-hidden className="text-red-600"> *</span>}</span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={6}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-0 focus:border-black/30"
      />
    </label>
  );
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-5 mb-8">
      <ol className="flex items-center space-x-2 text-[14px] text-neutral-500">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-black transition-colors">
            <FiHome className="mr-1.5" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-neutral-300" />
          <span className="font-semibold text-black">Contact Us</span>
        </li>
      </ol>
    </nav>
  );
}