import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import TestimonialsMarquee from "./TestimonialsMarquee";
import { FiHome, FiChevronRight } from "react-icons/fi";
import logo from "@/assets/logo.png";

export const metadata = {
  title: "Best Interior Designers in Lucknow | Trygve Studio",
  description:
    "Hire the best interior designers in Lucknow. Trygve Studio specializes in modern, functional, and timeless interior design solutions for homes, offices, and commercial spaces.",
  alternates: {
    canonical: "/services/interior-design-lucknow",
  },
  openGraph: {
    title: "Best Interior Designers in Lucknow | Trygve Studio",
    description:
      "Transform your home, office, or commercial space with Trygve Studio – the leading interior design firm in Lucknow.",
    url: "https://trygvestudio.com/services/interior-design-lucknow",
    images: [
      {
        url: "https://trygvestudio.com/images/interior-design-lucknow.jpg",
        width: 1200,
        height: 630,
        alt: "Best Interior Designers in Lucknow",
      },
    ],
  },
};

export default function InteriorDesignInLucknow() {
  const testimonials = [
    "They turned our dull 2BHK into a bright, spacious modern home.",
    "Our office interiors now truly reflect our brand — vibrant, functional, and welcoming.",
    "They delivered world-class interiors on time and within budget.",
    "The attention to detail in material, lighting, and furniture was incredible.",
    "Trygve Studio made our restaurant interiors Instagram-worthy and business soared!"
  ];

  const services = [
    {
      title: "Residential Interiors",
      subtitle: "apartments | villas | bungalows",
      description:
        "Designing homes that reflect your lifestyle — cozy 2BHKs, luxury villas, and modern bungalows.",
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    },
    {
      title: "Commercial Interiors",
      subtitle: "hotels | cafes | salons | retail",
      description:
        "Interiors that enhance customer experience and brand value for hospitality and retail spaces.",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
    {
      title: "Office Interiors",
      subtitle: "corporate | co-working | studios",
      description:
        "Productive, modern, and collaborative office interiors that drive employee satisfaction.",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    },
    {
      title: "Furniture & Lighting",
      subtitle: "custom furniture | lighting design",
      description:
        "Bespoke furniture and lighting solutions that combine functionality with aesthetic appeal.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    },
  ];

  const projects = [
    {
      category: "RESIDENTIAL INTERIORS",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: "Modern 3BHK in Gomti Nagar",
      description:
        "Bright, minimal interiors with open-plan living and smart storage solutions.",
    },
    {
      category: "COMMERCIAL INTERIORS",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
      title: "Boutique Café in Hazratganj",
      description:
        "Chic interiors designed to attract millennials with Instagrammable spots.",
    },
    {
      category: "WORKPLACE INTERIORS",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Startup Office in IT City",
      description:
        "A colorful co-working office designed to boost collaboration and creativity.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
      <Breadcrumbs />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why is Trygve Studio the best interior design firm in Lucknow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We combine creativity with functionality, delivering 200+ successful interior projects across Lucknow, with a 98% client satisfaction rate."
                }
              },
              {
                "@type": "Question",
                "name": "What is the typical cost of interior design in Lucknow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Interior design packages start at ₹500 per sq ft for consultancy and ₹1200 per sq ft for turnkey projects."
                }
              }
            ]
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
            alt="Best Interior Designers in Lucknow - Trygve Studio"
            fill
            className="object-cover md:h-auto h-full brightness-50"
          />
        </div>
        <div className="relative z-10 text-center max-w-6xl px-6">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
            Best Interior Designers in
            <br />
            <span className="font-normal">Lucknow</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            Transforming interiors across Lucknow — homes, offices, and
            commercial spaces with timeless, functional design.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us#project-form"
              className="bg-[#F4F1EC] text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="border border-white text-white px-8 py-4 text-lg font-medium hover:bg-[#F4F1EC] hover:text-gray-900 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* At a Glance - GEO/AI Optimization */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto border-l-4 border-[#234D7E] pl-6 md:pl-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Luxury Interior Design in Lucknow: At a Glance
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Expertise:</strong> Premiere interior designers for luxury villas, modern apartments, and corporate offices.
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                <strong className="text-gray-900">Customization:</strong> 100% personalized design concepts with advanced 3D visualization.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Timelines:</strong> Efficient 45-day design-to-delivery transformation for standard projects.
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                <strong className="text-gray-900">Full Service:</strong> From moodboards and material selection to turnkey site execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Interior Design Services in Lucknow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              From residential to commercial interiors, our design solutions are
              customized, functional, and timeless.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-80 mb-6 overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={`${service.title} - Interior Design Lucknow`}
                    fill
                    className="object-cover md:h-auto h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-normal text-gray-900">{service.title}</h3>
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

      {/* Why Choose Trygve Studio */}
      <section className="py-20 px-6 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
                Why Choose Trygve Studio for Interior Design?
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                We bring global expertise and local knowledge together, offering
                modern interiors that suit Lucknow’s evolving lifestyle and
                business needs.
              </p>
              <ul className="space-y-4">
                <li>✨ Personalized designs for every client</li>
                <li>✨ Use of sustainable and modern materials</li>
                <li>✨ End-to-end execution — design to delivery</li>
                <li>✨ Advanced 3D visualization before execution</li>
              </ul>
            </div>
            <div className="relative h-[600px]">
              <Image src={logo} alt="Interior Design Team - Trygve Studio" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Recent Interior Projects in Lucknow
            </h2>
            <p className="text-xl text-gray-600 font-light">
              A glimpse into some of our recent interior transformations across
              Lucknow.
            </p>
          </div>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                <div
                  className={`relative h-96 bg-gray-200 ${index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#F4F1EC] px-4 py-2">
                    <span className="text-sm uppercase tracking-wider font-light">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""
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
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-6 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Real Transformation: 2BHK in Indira Nagar
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              Our client’s apartment felt small, dark, and outdated. We redesigned
              it with open layouts, smart storage, and modern finishes — making it
              40% more spacious and full of natural light.
            </p>
            <div className="bg-gray-50 p-6">
              <h4 className="font-medium text-gray-900">Project Highlights</h4>
              <ul className="grid grid-cols-2 gap-4 text-sm mt-3">
                <li>⏱️ Timeline: 45 days</li>
                <li>📐 Space Gain: +40%</li>
                <li>💰 Budget: ₹12 lakhs</li>
                <li>⭐ Client Rating: 5/5</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
                alt="Before Interior Design - Lucknow"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                BEFORE
              </div>
            </div>
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1600585154154-1c1b8a1e2c3e"
                alt="After Interior Design - Lucknow"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-sm font-medium">
                AFTER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Trusted for interior design by homeowners and businesses across
            Lucknow.
          </p>
        </div>
        <TestimonialsMarquee />
      </section>

      {/* Service Areas */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Interior Design Services Across Lucknow
          </h2>
          <p className="text-xl text-gray-600 font-light">
            We proudly serve all major neighborhoods of Lucknow with our interior
            design expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            "Gomti Nagar", "Hazratganj", "Indira Nagar", "Aliganj",
            "Rajajipuram", "Mahanagar", "Jankipuram", "Ashiyana",
            "Chinhat", "Alambagh", "Faizabad Road", "IT City"
          ].map((area, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#F4F1EC] rounded-lg shadow-sm hover:shadow-md transition-shadow"
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
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "Why is Trygve Studio the best interior design firm in Lucknow?",
                a: "We combine creativity with functionality, delivering 200+ successful interior projects across Lucknow, with a 98% client satisfaction rate."
              },
              {
                q: "What is the typical cost of interior design in Lucknow?",
                a: "Interior design packages start at ₹500 per sq ft for consultancy and ₹1200 per sq ft for turnkey projects, depending on requirements."
              },
              {
                q: "How long does an interior design project take?",
                a: "Residential interiors take 4–8 weeks for design, while execution depends on scope. Full home interiors typically complete in 2–4 months."
              },
              {
                q: "Do you provide 3D visualization before starting work?",
                a: "Yes, we offer 3D renders and walkthroughs so clients can visualize their interiors before execution begins."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-normal text-gray-900 mb-4">
                  {faq.q}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-8 -mb-4 relative z-20">
      <ol className="flex items-center space-x-2 text-[14px] text-gray-500">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-black transition-colors">
            <FiHome className="mr-1.5" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-gray-300" />
          <Link href="/services" className="hover:text-black transition-colors">
            Services
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-gray-300" />
          <span className="font-semibold text-black">Interior Design in Lucknow</span>
        </li>
      </ol>
    </nav>
  );
}

