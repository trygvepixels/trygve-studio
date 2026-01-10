import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"; // Your DB connect utility
import Blog from "@/models/Blog"; // The model you provided me
import { sanitizeBlogContent } from "@/lib/contentSanitizer";

// CORS headers helper function
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-CMS-AUTH-KEY",
  };
}

// OPTIONS handler for preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders() });
}

export async function GET() {
  return NextResponse.json(
    {
      message: "CMS Receiver Endpoint",
      description: "This endpoint only accepts POST requests from your CMS.",
      method: "POST",
      headers: {
        "X-CMS-AUTH-KEY":
          "Required - Your secret key from environment variables",
      },
      expectedFields: [
        "title",
        "content",
        "urlSlug",
        "metaTitle",
        "metaDescription",
        "focusKeyword",
        "faqs",
        "schemaMarkup",
        "category",
        "author",
      ],
    },
    { status: 200, headers: corsHeaders() }
  );
}

export async function POST(req) {
  try {
    const authHeader = req.headers.get("X-CMS-AUTH-KEY");

    await dbConnect();
    const data = await req.json();

    // Sanitize content: remove citations, garbled text, and dangerous HTML
    const sanitizedContent = data.content
      ? sanitizeBlogContent(data.content)
      : data.content;

    // Map incoming data to your Schema with all new fields
    const newBlog = new Blog({
      title: data.title,
      content: sanitizedContent, // Use sanitized content
      urlSlug: data.urlSlug,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      focusKeyword: data.focusKeyword, // Array
      faqs: data.faqs, // Array of {question, answer}
      schemaMarkup: data.schemaMarkup,
      category: data.category,
      author: data.author || "Antigravity AI",
      // Image fields from external CMS
      image: data.featuredImage || data.imageUrl || data.image, // Fallback chain
      featuredImage: data.featuredImage,
      imageUrl: data.imageUrl,
      imageAlt: data.imageAlt,
      imageAttribution: data.imageAttribution,
      imagePhotographer: data.imagePhotographer,
      imagePhotographerUrl: data.imagePhotographerUrl,
      imageSource: data.imageSource,
      // Metadata
      source: data.source || "external-cms",
      status: "visible",
      lastUpdated: new Date(),
    });

    const saved = await newBlog.save();

    return NextResponse.json(
      {
        success: true,
        id: saved._id,
        slug: saved.urlSlug,
        url: `https://your-client-domain.com/blogs/${saved.urlSlug}`,
      },
      { headers: corsHeaders() }
    );
  } catch (error) {
    console.error("CMS Receiver Error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}
