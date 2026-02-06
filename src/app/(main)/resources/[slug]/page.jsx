import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pillars } from "@/data/pillars";
import { FiArrowLeft, FiClock, FiShare2, FiBookmark } from "react-icons/fi";

export async function generateStaticParams() {
  return pillars.map((pillar) => ({
    slug: pillar.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return {};

  return {
    title: `${pillar.title} | Trygve Studio Resources`,
    description: pillar.description,
    alternates: {
      canonical: `https://trygvestudio.com/resources/${slug}`,
    },
  };
}

export default async function PillarPage({ params }) {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);

  if (!pillar) {
    notFound();
  }

  // Content fallbacks for non-deep-dive pages
  const content = pillar.content || {
    intro: `In this comprehensive guide, we delve deep into ${pillar.title}, exploring its critical role in modern development and design excellence.`,
    quote: "Great architecture is not just about what you see, it's about how it makes you feel and how it serves the purpose of those who inhabit it.",
    sections: [
      {
        title: "Standard Principles",
        text: `When addressed with the lens of ${pillar.category}, several key factors stand out as non-negotiable for high-end results.`,
        list: [
          "Functional Excellence",
          "Aesthetic Durability",
          "Strategic Materiality"
        ]
      }
    ],
    methodology: "Our unified services (Architecture, PMC, EPC) ensure that nothing is lost in translation from concept to reality."
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "Resources",
                "item": "https://trygvestudio.com/resources"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": pillar.title,
                "item": `https://trygvestudio.com/resources/${slug}`
              }
            ]
          })
        }}
      />
      {/* Article Header */}
      <header className="bg-[#F4F1EC] pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-12 transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] bg-white text-gray-900 border border-black/5 px-3 py-1.5 rounded font-bold">
              {pillar.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium ml-2">
              <FiClock /> {pillar.readTime} read
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
            {pillar.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
            {pillar.description}
          </p>

          <div className="mt-12 pt-12 border-t border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-bold">
                TS
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Trygve Studio Editorial</div>
                <div className="text-xs text-gray-500 font-light italic">Expertise in Architecture & PMC</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-full border border-black/5 hover:bg-white text-gray-500 hover:text-gray-900 transition-all">
                <FiShare2 />
              </button>
              <button className="p-2.5 rounded-full border border-black/5 hover:bg-white text-gray-500 hover:text-gray-900 transition-all">
                <FiBookmark />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose prose-lg prose-neutral max-w-none">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Introduction</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
            {content.intro}
          </p>

          <div className="my-16 p-10 bg-[#F4F1EC]/50 border-l-4 border-gray-900 rounded-r-2xl italic text-xl text-gray-700 font-light leading-relaxed">
            "{content.quote}"
          </div>

          {content.sections.map((section, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8">{section.title}</h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                {section.text}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {section.list.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-gray-900 rounded-3xl p-10 text-white mb-20 relative overflow-hidden group">
            <h3 className="text-white text-2xl font-light mb-6 relative z-10 transition-transform group-hover:translate-x-1 duration-500">Expert Methodology</h3>
            <p className="text-gray-400 font-light mb-8 italic relative z-10">
              "{content.methodology}"
            </p>
            <Link
              href="/contact-us"
              className="relative z-10 text-white border-b border-white/30 hover:border-white transition-all font-medium pb-1"
            >
              Consult with our experts →
            </Link>

            {/* Decorative background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-white/10 transition-colors" />
          </div>

          <h2 className="text-3xl font-light text-gray-900 mb-8">Conclusion</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-0">
            Mastering <strong>{pillar.title}</strong> is a journey of continuous refinement. At Trygve Studio, we are dedicated to pushing the boundaries of what is possible in the built environment. Explore our other guides to deepen your understanding of premium design and project execution.
          </p>
        </div>
      </article>

      {/* Recommended Section */}
      <section className="bg-gray-50 py-20 px-6 border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-10">Recommended Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.filter(p => p.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 2).map((p) => (
              <Link
                key={p.slug}
                href={`/resources/${p.slug}`}
                className="group bg-white p-8 rounded-2xl border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-normal text-gray-900 mb-2 group-hover:text-[#234D7E] transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-500 font-light line-clamp-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
