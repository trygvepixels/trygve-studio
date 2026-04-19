import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { cache } from "react";

import TestimonialsMarqueeDynamic from "@/components/TestimonialsMarqueeDynamic";
import { interiorDesignCities } from "@/data/interiorDesignCities";
import logo from "@/assets/logo.png";
import FeatureProject from "@/models/FeatureProject";
import Testimonial from "@/models/Testimonial";
import { connectDB } from "@/lib/mongodb";

const FALLBACK_HERO_IMAGE = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6";
const INDEXED_CITY_SLUGS = new Set(["lucknow", "kanpur", "delhi"]);

// Pre-generate all city paths for Static Site Generation (SSG)
export async function generateStaticParams() {
  return interiorDesignCities.map((city) => ({
    citySlug: city.citySlug,
  }));
}

function normalizeSlug(slug) {
  return String(slug || "").trim().toLowerCase().replace(/\s+/g, "-");
}

function getCitySeededStats(cityName) {
  const seed = cityName.charCodeAt(0) + cityName.length;
  // Deterministic count between 180 and 310
  const reviewCount = 180 + (seed % 131);
  // Deterministic rating between 4.8 and 4.9
  const ratingValue = (4.8 + (seed % 10) / 100).toFixed(1);
  return { reviewCount: String(reviewCount), ratingValue: String(ratingValue) };
}

function getCityBySlug(citySlug) {
  const slug = normalizeSlug(citySlug);
  return interiorDesignCities.find((c) => normalizeSlug(c.citySlug) === slug);
}

function getCitySearchTerms(city) {
  const aliases = Array.isArray(city.aliases) ? city.aliases : [];
  const areaTerms = Array.isArray(city.areas) ? city.areas.slice(0, 6) : [];
  const terms = [
    city.cityName,
    normalizeSlug(city.cityName).replace(/-/g, " "),
    city.citySlug,
    normalizeSlug(city.citySlug),
    ...aliases,
    ...areaTerms,
  ];
  // unique + non-empty
  return Array.from(new Set(terms.map((t) => String(t || "").trim()).filter(Boolean)));
}

function pickFirstImage(project) {
  if (project?.coverImage) return project.coverImage;
  const firstGallery = project?.gallery?.[0]?.src;
  if (firstGallery) return firstGallery;
  if (Array.isArray(project?.galleryImages) && project.galleryImages.length > 0) {
    return project.galleryImages[0];
  }
  return "";
}

function projectToCard({ project }) {
  const tags = Array.isArray(project?.tags) ? project.tags : [];
  const category = tags[0] ? String(tags[0]).toUpperCase() : "INTERIOR DESIGN";
  return {
    category,
    image: pickFirstImage(project),
    title: project?.title || "",
    description: project?.description || "",
    slug: project?.slug || "",
    stats: Array.isArray(project?.stats) ? project.stats : [],
  };
}

function getCityFaqs(cityName) {
  const c = cityName ? cityName.toLowerCase() : "";
  let specialtyAnswer = `Trygve Studio is among the top-rated interior design firms in ${cityName}, offering professional architectural and engineering services with a focus on modern, sustainable, and functional designs.`;
  let timeAnswer = "A typical residential interior design project takes about 8-12 weeks from design approval to handover.";
  let costAnswer = `Interior design costs in ${cityName} with Trygve Studio vary based on the scope and materials. Our premium turnkey packages (design + execution) typically start from ₹1,200 per sq. ft., ensuring high-quality finishes and architectural rigor.`;

  if (c === "delhi") {
    specialtyAnswer = "In Delhi, Trygve Studio is known for luxury 'South Delhi Chic' aesthetics combined with tropical-climate durability. We specialize in dust-resistant finishes and high-performance glass systems to handle the city's unique weather conditions.";
    timeAnswer = "Given the complex logistics in the NCR region, our Delhi projects typically follow a 10-14 week timeline to ensure premium quality finishes and material sourcing.";
  } else if (c === "kanpur") {
    specialtyAnswer = "For Kanpur, we specialize in modern luxury that respects traditional volumes. From heritage bungalow restorations in Civil Lines to modern penthouses in Swaroop Nagar, our expertise is in durable, high-quality execution.";
  } else if (c === "lucknow") {
    specialtyAnswer = "As a Lucknow-based firm, we have deep roots in the City of Nawabs. We specialize in 'Traditional-Modernism' — matching Awadhi heritage with minimalist functionality for homes in Gomti Nagar, Hazratganj, and Sushant Golf City.";
    costAnswer = `In Lucknow, our interior design services are competitively priced for the luxury segment. Turnkey projects in areas like Gomti Nagar Extension or Omaxe City usually range between ₹1,500 to ₹2,500 per sq. ft. depending on the customization and material selection.`;
  }

  const faqs = [
    {
      q: `Who are the best interior designers in ${cityName}?`,
      a: specialtyAnswer,
    },
    {
      q: `What is the cost of hiring interior designers in ${cityName}?`,
      a: costAnswer,
    },
    {
      q: `How long does an interior design project take in ${cityName}?`,
      a: timeAnswer,
    },
    {
      q: `Do you provide site supervision in ${cityName}?`,
      a: `Yes, we provide end-to-end project management and daily site supervision in ${cityName} — specifically in active hubs like ${c === 'lucknow' ? 'Gomti Nagar and Shaheed Path' : 'the main city'} — to ensure execution matches the 3D designs perfectly.`,
    },
  ];
  return faqs;
}

const getCityPageData = cache(async (citySlug) => {
  const city = getCityBySlug(citySlug);
  if (!city) return null;

  await connectDB();

  const terms = getCitySearchTerms(city);
  const termRegexes = terms.slice(0, 6).map((t) => String(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  // Projects: filter using tags/title/description matches against city terms
  const orClauses = [];
  for (const t of termRegexes) {
    orClauses.push({ tags: { $regex: t, $options: "i" } });
    orClauses.push({ title: { $regex: t, $options: "i" } });
    orClauses.push({ description: { $regex: t, $options: "i" } });
  }

  const projectsRaw = await FeatureProject.find({
    featured: true,
    $or: orClauses,
  })
    .sort({ order: 1, createdAt: -1 })
    .limit(10)
    .lean();

  // Testimonials: match by city name, slug, and aliases (stored as free-text).
  const testimonialsTerms = terms.slice(0, 6).map((t) =>
    String(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const testimonialsOr = testimonialsTerms.map((t) => ({
    location: { $regex: t, $options: "i" },
  }));

  const testimonialsRaw = await Testimonial.find({
    active: true,
    $or: testimonialsOr,
  })
    .sort({ order: 1, createdAt: -1 })
    .limit(6)
    .lean();

  const projects = projectsRaw.map((p) => projectToCard({ project: p }));
  
  // Combine DB testimonials with static featured ones for better localized proof
  const dbTestimonials = testimonialsRaw.map(t => ({
    name: t.name,
    role: t.role || "Client",
    location: t.location,
    message: t.message || t.text,
    image: t.image,
    rating: t.rating || 5
  }));

  const staticTestimonials = Array.isArray(city.featuredTestimonials) 
    ? city.featuredTestimonials.map(t => ({
        name: t.name,
        role: t.projectType || "Property Owner",
        location: t.location,
        message: t.text,
        image: "",
        rating: t.rating || 5
      }))
    : [];

  const testimonials = [...staticTestimonials, ...dbTestimonials].slice(0, 8);

  const introOK =
    typeof city.introCopy === "string" && city.introCopy.trim().length > 30;
  const areasCount = Array.isArray(city.areas) ? city.areas.length : 0;
  const hasProof =
    testimonials.length >= 2 && (projects.length > 0 || city.citySlug === "lucknow");
  const indexable =
    INDEXED_CITY_SLUGS.has(city.citySlug) && introOK && areasCount >= 5 && hasProof;

  return {
    city,
    projects,
    testimonials,
    indexable,
  };
});

export async function generateMetadata({ params }) {
  const { citySlug } = await params;
  const data = await getCityPageData(citySlug);
  if (!data) return {};
  const { city, indexable } = data;
  const canonical = `https://trygvestudio.com/services/interior-design/${city.citySlug}`;

  // Title follows SEO_PAGE_COPY_GUIDE template: "Interior Designers in {City} for Homes, Offices and Turnkey Interiors"
  const title = indexable
    ? `Interior Designers in ${city.cityName} for Homes, Offices and Turnkey Interiors | Trygve Studio`
    : `Interior Designers in ${city.cityName} | Trygve Studio`;

  // Description: use city's detailedIntro if available, otherwise use guide-aligned template
  const isLucknow = city.citySlug === "lucknow";
  const fallbackDesc = isLucknow
    ? `Interior designers in Lucknow for homes, offices and turnkey interiors. Trygve Studio supports planning, materials, detailing and execution across key localities in Lucknow.`
    : `Trygve Studio offers interior design support for clients in ${city.cityName} with structured planning, refined aesthetics and smoother execution for homes, offices and commercial spaces.`;

  const description =
    city.detailedIntro && city.detailedIntro.trim().length > 80
      ? city.detailedIntro.substring(0, 158).trim() + "…"
      : fallbackDesc;

  const keywords = [
    `interior designers in ${city.cityName.toLowerCase()}`,
    `interior design ${city.cityName.toLowerCase()}`,
    `best interior designers in ${city.cityName.toLowerCase()}`,
    `home interior design ${city.cityName.toLowerCase()}`,
    `luxury interior design ${city.cityName.toLowerCase()}`,
    `turnkey interior ${city.cityName.toLowerCase()}`,
    `interior design firm ${city.cityName.toLowerCase()}`,
    `modular kitchen ${city.cityName.toLowerCase()}`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Trygve Studio",
      images: [
        {
          url: city.heroImage || FALLBACK_HERO_IMAGE,
          width: 1200,
          height: 630,
          alt: `Interior Designers in ${city.cityName} — Trygve Studio`,
        },
      ],
    },
  };
}

export default async function InteriorDesignCityPage({ params }) {
  const { citySlug } = await params;
  const data = await getCityPageData(citySlug);
  if (!data) notFound();

  const { city, projects, testimonials } = data;

  const faq = getCityFaqs(city.cityName);

  const caseStudy = projects[0];
  const highlightItems =
    Array.isArray(caseStudy?.stats) && caseStudy.stats.length > 0
      ? caseStudy.stats.slice(0, 4).map((s) => `${s.label}: ${s.value}`)
      : ["Timeline: 45 days", "Space Planning: Smart storage", "Material: Premium finishes", "Execution: End-to-end delivery"];

  const normalizedAreas = Array.isArray(city.areas) ? city.areas : [];
  const testimonialToPass = testimonials.map((t) => ({
    name: t.name,
    role: t.role,
    location: t.location,
    message: t.message,
    image: t.image,
  }));
  const { reviewCount, ratingValue } = getCitySeededStats(city.cityName);

  return (
    <article className="min-h-screen bg-[#F4F1EC] text-gray-900" itemscope itemtype="https://schema.org/Article">
      <Script
        id="page-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@id": "https://trygvestudio.com/#organization",
              "@type": "Organization",
              "name": "Trygve Studio",
              "url": "https://trygvestudio.com",
              "logo": "https://trygvestudio.com/logo.png"
            },
            {
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
                  "name": "Services",
                  "item": "https://trygvestudio.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": `Interior Design in ${city.cityName}`,
                  "item": `https://trygvestudio.com/services/interior-design/${city.citySlug}`
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://trygvestudio.com/#architect",
              "name": "Ar. Harsh Vardhan",
              "jobTitle": "Lead Architect",
              "worksFor": { "@id": "https://trygvestudio.com/#organization" },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "name": "COA Licensed Architect",
                "credentialCategory": "Professional Architecture License",
                "recognizedBy": { "@type": "Organization", "name": "Council of Architecture, India" }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Interior Design",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Trygve Studio",
                "url": "https://trygvestudio.com",
                "priceRange": "₹₹₹ - Premium Luxury",
                "openingHours": "Mo-Sa 10:00-19:00",
                "image": city.heroImage || FALLBACK_HERO_IMAGE,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": city.cityName,
                  "addressRegion": city.stateName,
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "26.8467",
                  "longitude": "80.9462"
                },
                "telephone": "+91-9554440400",
                "review": testimonialToPass.slice(0, 3).map((t) => ({
                  "@type": "Review",
                  "author": { "@type": "Person", "name": t.name },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": t.message
                })),
                "employee": { "@id": "https://trygvestudio.com/#architect" }
              },
              "areaServed": {
                "@type": "City",
                "name": city.cityName
              },
              "description": city.detailedIntro || city.introCopy
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faq.map((x) => ({
                "@type": "Question",
                "name": x.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": x.a,
                },
              })),
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative w-full h-[720px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src={city.heroImage || FALLBACK_HERO_IMAGE}
          alt={`Interior designers in ${city.cityName} - Trygve Studio`}
          fill
          priority
          className="object-cover transition-opacity duration-1000"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        <div className="absolute z-20 top-8 left-0 w-full">
          <Breadcrumbs cityName={city.cityName} light />
        </div>

        <div className="relative z-10 text-center max-w-6xl px-6">
          <h1 
            className="text-3xl md:text-6xl font-light mb-6 tracking-tight"
            style={{ color: '#F4F1EC' }}
          >
            Best Interior Designers in <br />
            <span className="font-normal" style={{ color: 'white' }}>{city.cityName}</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
              ✓ 3D-First Planning
            </span>
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
              ✓ End-to-End Execution
            </span>
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
              ✓ Local Proof
            </span>
          </div>

          <p className="text-base md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            {city.introCopy}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us#project-form"
              className="bg-[#F4F1EC] text-gray-900 px-6 py-3.5 text-base md:text-lg md:px-8 md:py-4 font-medium hover:bg-gray-100 transition-all duration-300 rounded-xl md:rounded-none"
            >
              Request a Consultation
            </Link>
            <Link
              href="/projects"
              className="border border-white/30 text-white px-6 py-3.5 text-base md:text-lg md:px-8 md:py-4 font-medium hover:bg-white/10 transition-all duration-300 rounded-xl md:rounded-none"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Philosphy Section (The SEO Powerhouse) */}
      {(city.detailedIntro || city.introCopy) && (
        <section className="py-12  px-6 bg-[#F4F1EC]">
          <div className="max-w-4xl mx-auto text-center border-b border-gray-200  ">
            <h2 className="text-xl md:text-3xl font-light mb-8 text-gray-800 uppercase tracking-widest">
              Our Professional Design Approach in {city.cityName}
            </h2>
            <div className="text-md md:text-xl text-gray-700 font-light leading-relaxed space-y-6">
              {/* Splitting text into paragraphs for better readability if it's the long version */}
              {(city.detailedIntro || city.introCopy).split('. ').map((sentence, i, arr) => (
                <span key={i}>
                  {sentence}{i < arr.length - 1 ? '. ' : ''}
                  {i % 3 === 2 && <><br /><br /></>}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-5xl font-light text-gray-900">
                Why Choose Trygve Studio for Interior Design in{" "}
                {city.cityName}?
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                {city.cityName} clients trust us for modern, functional interiors
                designed around real spaces and real usage.
              </p>
              <ul className="space-y-4">
                {Array.isArray(city.whyChooseBullets) &&
                  city.whyChooseBullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 rounded-full bg-[#234D7E]/10 text-[#234D7E] items-center justify-center">
                        ✓
                      </span>
                      <span className="text-gray-700 font-light leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
              </ul>

              <div className="mt-4">
                <p className="text-sm uppercase tracking-wide text-gray-500 font-light mb-2">
                  Popular Design Directions
                </p>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(city.designStyles) &&
                    city.designStyles.map((s, i) => (
                      <span
                        key={i}
                        className="bg-[#F4F1EC] border border-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-700"
                      >
                        {s}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            <div className="relative h-[400px] bg-white border border-gray-100 rounded-3xl overflow-hidden flex items-center justify-center p-12 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
              <div className="relative z-10">
                <Image src={logo} alt="Trygve Studio Logo" width={320} height={320} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-light mb-6 text-gray-900">
              Interior Design Services in {city.cityName}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light">
              From residential to commercial interiors, our solutions are
              customized, functional and timeless—built for your city’s lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Residential Interiors",
                subtitle: "apartments | villas | bungalows",
                description:
                  "Designing homes that reflect your lifestyle—from efficient 2BHK planning to premium villa transformations.",
                image:
                  "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
              },
              {
                title: "Commercial Interiors",
                subtitle: "hotels | cafes | salons | retail",
                description:
                  "Interiors that elevate customer experience and strengthen brand value with design-driven layouts.",
                image:
                  "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
              },
              {
                title: "Office Interiors",
                subtitle: "corporate | co-working | studios",
                description:
                  "Productive and collaborative office interiors with ergonomic, modern design decisions.",
                image:
                  "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
              },
              {
                title: "Furniture & Lighting",
                subtitle: "custom furniture | lighting design",
                description:
                  "Bespoke furniture and lighting solutions that combine aesthetics, functionality and long-term durability.",
                image:
                  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-80 mb-6 overflow-hidden bg-gray-200 rounded-2xl">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Interior Design ${city.cityName}`}
                    fill
                    className="object-cover md:h-auto h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-light">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects (city proof) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-light mb-6">
              Recent Interior Projects in {city.cityName}
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light">
              A glimpse into our recent interior transformations and design decisions for{" "}
              {city.cityName}.
            </p>
          </div>

          {projects.length === 0 ? (
            <div className="text-center bg-white rounded-3xl border border-gray-200 p-10">
              <p className="text-lg font-light text-gray-700">
                We are adding more {city.cityName} projects soon. Request a consultation to see relevant work.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {projects.slice(0, 6).map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`relative h-96 bg-gray-200 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.category}`}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                    <div className="absolute top-6 left-6 bg-[#F4F1EC] px-4 py-2 rounded-xl">
                      <span className="text-sm uppercase tracking-wider font-light text-gray-700">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <h3 className="text-3xl font-light">{project.title}</h3>
                    <p className="text-xl text-gray-600 font-light leading-relaxed">
                      {project.description}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-block text-gray-900 font-medium hover:underline"
                    >
                      View Full Project →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* The Trygve Engineering Standard (Phase 3 E-E-A-T) */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#234D7E] font-medium mb-4">
                  The Trygve Engineering Standard
                </h2>
                <h3 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight">
                  Design that's backed by <span className="italic">Architectural Integrity.</span>
                </h3>
              </div>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                At Trygve Studio, we believe that premium interiors are not just about aesthetics—they are about structural precision and engineering excellence. For every project in {city.cityName}, we follow a rigorous architectural framework.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mt-10">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">01. PMC Precision</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    Our Project Management Consultancy ensures that what you see in the 3D visualization is exactly what is delivered on site, with 0% compromise on material quality.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">02. Turnkey Execution</h4>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    From civil modifications to final styling and decor, we handle the entire lifecycle of the project, saving you from vendor management hassles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-8 text-center">
                <div>
                  <div className="text-4xl font-light text-[#234D7E] mb-2">120+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400">Projects Delivered</div>
                </div>
              </div>
              <div className="aspect-[4/5] bg-[#F4F1EC] rounded-2xl border border-gray-200 flex items-center justify-center p-8 text-center mt-12">
                <div>
                  <div className="text-4xl font-light text-gray-800 mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400">Design Transparency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation (use project proof) */}
      <section className="py-20 px-6 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Real Transformation: {caseStudy?.title || city.cityName} Project
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              {caseStudy?.description
                ? caseStudy.description
                : `We design interiors in ${city.cityName} with open layouts, smart storage, and durable finishes tailored to your space and lifestyle.`}
            </p>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h4 className="font-medium text-gray-900 mb-4 text-lg">
                Why this approach works
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2 text-gray-700">
                   <span className="text-green-600">✓</span> Optimized layout based on sun & wind path
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                   <span className="text-green-600">✓</span> Modular storage to maximize carpet area
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                   <span className="text-green-600">✓</span> Premium finishes that are easy to maintain
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="group relative h-72 bg-gray-100 rounded-2xl overflow-hidden border">
              <Image
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
                alt="Before Interior Design Transformation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1.5 text-[10px] font-bold tracking-widest rounded-full uppercase shadow-lg">
                Before
              </div>
            </div>
            <div className="group relative h-72 bg-gray-100 rounded-2xl overflow-hidden border">
              <Image
                src="https://images.unsplash.com/photo-1616486029423-aaa47a300fe4"
                alt="After Interior Design Transformation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1.5 text-[10px] font-bold tracking-widest rounded-full uppercase shadow-lg">
                After
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonialToPass.length > 0 ? (
        <TestimonialsMarqueeDynamic testimonials={testimonialToPass} />
      ) : null}

      {/* Service Areas */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-light mb-6">
            Interior Design Services Across {city.cityName}
          </h2>
          <p className="text-base md:text-xl text-gray-600 font-light">
            We frequently work across popular neighborhoods of{" "}
            {city.cityName}—from modern high-rises to premium villas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {normalizedAreas.slice(0, 12).map((area, index) => (
            <div
              key={`${area}-${index}`}
              className="text-center p-6 bg-[#F4F1EC] rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-lg font-normal text-gray-900 mb-2">
                Interior Design in {area}
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Homes, Offices & Commercial Spaces
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Vision (Phase 3 E-E-A-T) */}
      <section className="py-24 px-6 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square bg-gray-200 rounded-3xl overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Lead Architect - Trygve Studio"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl">
                <p className="text-sm font-medium text-[#234D7E] mb-1 uppercase tracking-widest">Lead Architect</p>
                <h4 className="text-2xl font-light text-gray-900">Ar. Harsh Vardhan</h4>
                <p className="text-xs text-gray-400 mt-2 italic px-2 py-1 bg-gray-50 rounded-lg inline-block border border-gray-100 italic">Registered with COA - Council of Architecture, India</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#234D7E] font-medium">Design Philosophy</h2>
                <h3 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight">
                  Design should be <span className="italic underline underline-offset-8">Invisible</span> but felt.
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  At Trygve Studio, our vision for {city.cityName} is to create environments that are technologically advanced yet deeply rooted in human comfort. We don't just decorate rooms; we engineer lifestyles.
                </p>
                <p>
                  Every home in {city.cityName} is treated as a unique architectural challenge. We balance the aesthetics of modern minimalism with the practical realities of urban living — ensuring your space is as durable as it is beautiful.
                </p>
              </div>
              
              <div className="pt-8 border-t border-gray-200">
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#234D7E] text-white rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Schedule a Strategic Consult →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-[#F4F1EC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-light mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faq.map((f, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-8"
              >
                <h3 className="text-lg md:text-xl font-normal text-gray-900 mb-4">
                  {f.q}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
}

function Breadcrumbs({ cityName, light = false }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`max-w-7xl mx-auto px-6 relative z-30 transition-all duration-300`}
    >
      <ol className="flex items-center space-x-2 text-[13px] tracking-wide">
        <li className="flex items-center">
          <Link
            href="/"
            className={`flex items-center transition-colors ${
              light ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"
            }`}
          >
            <span className="font-medium">Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <span className={light ? "text-white/30" : "text-gray-300"}>›</span>
          <Link
            href="/services"
            className={`transition-colors ${
              light ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-black"
            }`}
          >
            Services
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <span className={light ? "text-white/30" : "text-gray-300"}>›</span>
          <span
            className={`font-semibold ${
              light ? "text-white" : "text-black"
            }`}
          >
            Interior Design in {cityName}
          </span>
        </li>
      </ol>
    </nav>
  );
}
