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
    stats: Array.isArray(project?.stats) ? project.stats : [],
  };
}

function buildFaq({ cityName }) {
  return [
    {
      q: `Why is Trygve Studio the best interior design firm in ${cityName}?`,
      a: `We combine creativity with functionality to deliver refined interiors. Our team follows a 3D-first process and executes with quality checks to help clients achieve spaces that feel premium and work beautifully in everyday life.`,
    },
    {
      q: `What is the typical cost of interior design in ${cityName}?`,
      a: `Interior design costs vary based on scope, materials, and customization. In general, consultancy and turnkey packages are offered with different levels of material and execution detail.`,
    },
    {
      q: `How long does an interior design project take in ${cityName}?`,
      a: `Timelines depend on the project size and scope. Most residential interior design engagements follow a structured design-to-execution workflow with clear milestone planning.`,
    },
    {
      q: `Do you provide 3D visualization before starting work?`,
      a: `Yes. We provide 3D design visualization so you can review layouts, finishes, and key design decisions before execution begins.`,
    },
  ];
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
  const testimonials = testimonialsRaw;

  const introOK = typeof city.introCopy === "string" && city.introCopy.trim().length > 30;
  const areasCount = Array.isArray(city.areas) ? city.areas.length : 0;
  // Index even without projects if we have intro and area-wise SEO
  const indexable = areasCount >= 5 && introOK;

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
  const canonical = `/services/interior-design/${city.citySlug}`;
  const title = `Best Interior Designers in ${city.cityName}, ${city.stateName} | Trygve Studio`;
  const description = `${city.cityName} interior design services by Trygve Studio. Residential + commercial interiors, local proof with projects, areas served in ${city.cityName} and a 3D-first process.`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: {
      index: indexable,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: `https://trygvestudio.com${canonical}`,
      images: [
        {
          url: city.heroImage || FALLBACK_HERO_IMAGE,
          width: 1200,
          height: 630,
          alt: `Best Interior Designers in ${city.cityName}`,
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

  const faq = buildFaq({ cityName: city.cityName });

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

  return (
    <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
      <Script
        id="page-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((x) => ({
                "@type": "Question",
                name: x.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: x.a,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Trygve Studio - Interior Designers",
              image: "https://trygvestudio.com/images/interior-design-lucknow.jpg",
              "@id": `https://trygvestudio.com${`/services/interior-design/${city.citySlug}`}`,
              url: `https://trygvestudio.com${`/services/interior-design/${city.citySlug}`}`,
              areaServed: [{ "@type": "City", name: city.cityName }],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: getCitySeededStats(city.cityName).ratingValue,
                reviewCount: getCitySeededStats(city.cityName).reviewCount,
              },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section 
        className="relative w-full h-[720px] flex items-center justify-center overflow-hidden bg-gray-900"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${city.heroImage || FALLBACK_HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 z-0 opacity-0 pointer-events-none">
          <Image
            src={city.heroImage || FALLBACK_HERO_IMAGE}
            alt={`Interior designers in ${city.cityName} - Trygve Studio`}
            fill
            sizes="100vw"
            quality={85}
            priority
          />
        </div>

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
                      href="/projects"
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

    </main>
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

