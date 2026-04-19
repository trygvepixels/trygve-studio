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

      {/* FAQ Schema — triggers for blogs with FAQs OR architecture/cost topics */}
      {((blog.faqs && blog.faqs.length > 0) ||
        blog.slug?.includes('lda') ||
        blog.title?.toLowerCase().includes('lda') ||
        blog.slug?.includes('architect') ||
        blog.title?.toLowerCase().includes('architect') ||
        blog.slug?.includes('construction-cost') ||
        blog.title?.toLowerCase().includes('construction cost') ||
        blog.slug?.includes('interior-design') ||
        blog.title?.toLowerCase().includes('interior design') ||
        blog.slug?.includes('fees') ||
        blog.title?.toLowerCase().includes('fees')) && (
        <Script id="faq-schema-server" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              ...(blog.faqs || []).map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
              // Programmatic Injection for LDA blogs
              ...((blog.slug?.includes('lda') || blog.title?.toLowerCase().includes('lda')) ? [
                {
                  "@type": "Question",
                  name: "How much does LDA registration cost in Lucknow in 2026?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "LDA registration costs depend on the property value and area. As of 2026, it typically ranges between 5% to 7% of the total cost, plus additional administrative fees.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take for LDA map approval?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "LDA map approval typically takes 30 to 60 days if all documentation is complete and complies with the latest 2026 building bylaws.",
                  }
                }
              ] : []),
              // Programmatic Injection for architect-fee and construction-cost blogs
              ...((blog.slug?.includes('architect') || blog.title?.toLowerCase().includes('architect') ||
                   blog.slug?.includes('fees') || blog.title?.toLowerCase().includes('fees')) &&
                 !blog.faqs?.some(f => f.question?.toLowerCase().includes('charge')) ? [
                {
                  "@type": "Question",
                  name: "How much do architects charge per sq ft in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Architect fees per sq ft in India range from ₹35 to ₹150 depending on the city and firm. In Lucknow, fees typically range from ₹45–₹85/sq ft. In Delhi/Mumbai, fees can go up to ₹100–₹150/sq ft for premium firms. Trygve Studio in Lucknow offers transparent fixed-rate packages starting at ₹45/sq ft.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the architect fee percentage of construction cost in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Architect fees as a percentage of construction cost in India typically range from 3% to 8% of total construction value. For a ₹50 lakh project, architecture fees would be approximately ₹1.5–₹4 lakhs.",
                  },
                },
              ] : []),
            ],
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