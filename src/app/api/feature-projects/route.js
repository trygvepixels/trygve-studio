import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import FeatureProject from "@/models/FeatureProject";

export async function GET(request) {
  await connectDB();
  const { searchParams } = new URL(request.url);

  const page  = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
  const limit = Math.min(parseInt(searchParams.get("limit") || "12", 10), 50);
  const skip  = (page - 1) * limit;

  const search   = searchParams.get("search");
  const featured = searchParams.get("featured");
  const sort     = searchParams.get("sort") || "order createdAt"; // order first, then createdAt desc-like

  const filters = {};
  if (featured === "true" || featured === "false") filters.featured = featured === "true";

  if (search) {
    const rx = new RegExp(search, "i");
    filters.$or = [
      { title: rx },
      { client: rx },
      { tags: rx },
      { blurb: rx },
      { description: rx },
    ];
  }

  const [items, total] = await Promise.all([
    FeatureProject.find(filters).sort(sort).skip(skip).limit(limit).lean(),
    FeatureProject.countDocuments(filters),
  ]);

  return NextResponse.json({
    page, limit, total, totalPages: Math.ceil(total / limit), items,
  });
}

export async function POST(request) {
  await connectDB();
  const body = await request.json();

  const required = ["title", "slug"];
  const missing = required.filter(k => !body?.[k] || String(body[k]).trim() === "");
  if (missing.length) {
    return NextResponse.json({ error: `Missing required field(s): ${missing.join(", ")}` }, { status: 400 });
  }

  try {
    const doc = await FeatureProject.create({
      title:       String(body.title).trim(),
      slug:        String(body.slug).trim().toLowerCase(),
      client:      body.client || "",
      year:        body.year || undefined,
      tags:        Array.isArray(body.tags) ? body.tags : [],
      coverImage:  body.coverImage || "",
      mediaType:   body.mediaType || "image",
      mediaUrl:    body.mediaUrl || "",
      galleryImages: Array.isArray(body.galleryImages) ? body.galleryImages : [],
      blurb:       body.blurb || "",
      description: body.description || "",
      caseStudyUrl: body.caseStudyUrl || "",
      liveUrl:     body.liveUrl || "",
      dribbbleUrl: body.dribbbleUrl || "",
      awwwardsUrl: body.awwwardsUrl || "",
      accentColor: body.accentColor || "#7C5CFF",
      order:       typeof body.order === "number" ? body.order : 100,
      featured:    typeof body.featured === "boolean" ? body.featured : true,
      stats:       Array.isArray(body.stats) ? body.stats : [],
    });
    return NextResponse.json(doc, { status: 201 });
  } catch (err) {
    console.error(err);
    // Handle duplicate slug nicely
    if (err?.code === 11000) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    }
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}