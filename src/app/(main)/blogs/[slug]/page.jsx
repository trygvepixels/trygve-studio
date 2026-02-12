export const dynamic = 'force-dynamic';
// optionally:
export const revalidate = 0; import { notFound } from "next/navigation";
import BlogsClientUI from "@/components/BlogsClientUI";
import Script from "next/script";

const API_BASE = "https://trygvestudio.com";

// --- data ---
async function getBlog(slug) {
  try {
    const res = await fetch(`${API_BASE}/api/blogs/${slug}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blog");
    return await res.json();
  } catch (err) {
    console.error("❌ getBlog error:", err.message);
    return null;
  }
}

// --- metadata ---
export async function generateMetadata({ params }) {
  const { slug } = await params;                 // ✅ await params
  try {
    const res = await fetch(`${API_BASE}/api/blogs/${slug}`, { cache: "no-store" });
    if (!res.ok) return {};
    const blog = await res.json();

    return {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || "",
      keywords: blog.focusKeyword?.join(", ") || "",
      alternates: { canonical: blog.canonicalUrl || `https://trygvestudio.com/blogs/${slug}` },
      openGraph: {
        type: "article",
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || "",
        url: blog.canonicalUrl || `https://trygvestudio.com/blogs/${slug}`,
        images: blog.image ? [{ url: blog.image, width: 1200, height: 630 }] : [],
        publishedTime: blog.createdAt,
        modifiedTime: blog.lastUpdated || blog.updatedAt || blog.createdAt,
        authors: [blog.author || "Trygve Studio Team"],
        section: blog.category || "Architecture & Design",
      },
      twitter: {
        card: "summary_large_image",
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || "",
        images: blog.image ? [blog.image] : [],
        creator: "@trygvestudio",
      },
    };
  } catch (err) {
    console.error("❌ generateMetadata error:", err.message);
    return {};
  }
}

// optional: static params stays the same
export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_BASE}/api/blogs`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blogs list");
    const blogs = await res.json();
    return Array.isArray(blogs) ? blogs.map((b) => ({ slug: b.urlSlug })) : [];
  } catch (err) {
    console.error("❌ generateStaticParams error:", err.message);
    return [];
  }
}

// --- page ---
export default async function BlogDetails({ params }) {
  const { slug } = await params;                 // ✅ await params
  const blog = await getBlog(slug);
  if (!blog) return notFound();

  return (
    <div>
      {/* Article Schema - CRITICAL FOR RANKING */}
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": blog.title,
          "image": blog.image ? {
            "@type": "ImageObject",
            "url": blog.image,
            "width": 1200,
            "height": 630
          } : undefined,
          "datePublished": blog.createdAt,
          "dateModified": blog.lastUpdated || blog.updatedAt || blog.createdAt,
          "author": {
            "@type": "Person",
            "name": blog.author || "Trygve Studio Team",
            "url": "https://trygvestudio.com/about-us"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Trygve Studio",
            "logo": {
              "@type": "ImageObject",
              "url": "https://trygvestudio.com/logo.png",
              "width": 200,
              "height": 60
            },
            "url": "https://trygvestudio.com"
          },
          "description": blog.metaDescription,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://trygvestudio.com/blogs/${slug}`
          },
          "keywords": blog.focusKeyword?.join(", ") || "",
          "articleSection": blog.category || "Architecture & Design",
          "inLanguage": "en-IN"
        })}
      </Script>

      {/* FAQ Schema */}
      {blog.faqs && blog.faqs.length > 0 && (
        <Script id="faq-schema-server" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: blog.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          })}
        </Script>
      )}
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://trygvestudio.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blogs",
              "item": "https://trygvestudio.com/blogs"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": blog.title,
              "item": `https://trygvestudio.com/blogs/${slug}`
            }
          ]
        })}
      </Script>
      <BlogsClientUI key={blog._id} blog={blog} />
    </div>
  );
}