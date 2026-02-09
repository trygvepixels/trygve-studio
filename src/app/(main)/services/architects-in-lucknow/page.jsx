import Image from "next/image";
import Link from "next/link";
import TestimonialsMarquee from "./TestimonialsMarquee";
import { FiHome, FiChevronRight } from "react-icons/fi";
import logo from "@/assets/logo.png"
import Script from "next/script";

export const metadata = {
  title: "Hire Top Architects in Lucknow - 200+ Projects Delivered | Trygve Studio",
  description:
    "Award-winning architects in Lucknow with 98% client satisfaction. Expert in residential, commercial & hospitality design. LDA approvals handled. Get free consultation today!",
  alternates: {
    canonical: "/services/architects-in-lucknow",
  },
  openGraph: {
    title: "Hire Top Architects in Lucknow - 200+ Projects | Trygve Studio",
    description:
      "Award-winning architects with 98% satisfaction rate. Residential, commercial & hospitality design experts. LDA approvals handled. Free consultation!",
    url: "https://trygvestudio.com/services/architects-in-lucknow",
    images: [
      {
        url: "https://trygvestudio.com/images/architects-lucknow.jpg",
        width: 1200,
        height: 630,
        alt: "Best Architects in Lucknow",
      },
    ],
  },
};
export default function ArchitectsInLucknow() {
  const testimonials = [
    "They translated our abstract moodboard into a refined, timeless space.",
    "Every decision felt intentional. The team balanced brand consistency with local constraints beautifully.",
    "Our retail launch timeline didn't slip by a day—rare, and deeply appreciated.",
    "The space feels effortless yet profoundly considered. Materiality and light are handled with mastery.",
    "They delivered a warm, modern hospitality experience across continents."
  ];

  const services = [
    {
      title: "Residential Architecture",
      subtitle: "apartments | villas | bungalows",
      description: "Transform your home with designs that blend functionality with timeless aesthetics. From cozy 2BHK apartments to luxurious villas.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      title: "Commercial Spaces",
      subtitle: "hotels | cafe | salons",
      description: "Create impactful commercial environments that enhance your brand and boost customer experience.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    {
      title: "Office Design",
      subtitle: "corporate | co-working | studios",
      description: "Design productive workspaces that inspire collaboration and reflect your company culture.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    },
    {
      title: "Interior Design",
      subtitle: "complete interiors | furniture | lighting",
      description: "Full-service interior design solutions that bring personality and functionality to every space.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const projects = [
    {
      category: "RESIDENTIAL SPACES",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: "Modern Villa in Gomti Nagar",
      description: "A 4BHK villa transformation featuring contemporary design with traditional elements"
    },
    {
      category: "COMMERCIAL SPACES",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
      title: "Boutique Hotel in Hazratganj",
      description: "Luxury hospitality design that captures Lucknow's cultural heritage"
    },
    {
      category: "WORKPLACE DESIGN",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Tech Office in IT City",
      description: "Modern co-working space designed for productivity and collaboration"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What makes Trygve Studio the best architecture firm in Lucknow?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We combine global design expertise with deep local knowledge of Lucknow's architectural needs. Our track record includes 200+ successful projects across residential, commercial, and hospitality sectors with a 98% client satisfaction rate."
              }
            },
            {
              "@type": "Question",
              name: "What is the typical cost for architectural services in Lucknow?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Architectural fees typically range from 8-12% of the total project cost. For residential projects, we offer packages starting from ₹500 per sq ft for design consultancy and ₹1200 per sq ft for complete turnkey solutions."
              }
            },
            {
              "@type": "Question",
              name: "How long does an architectural project take in Lucknow?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Timeline varies by project scope. Residential designs take 4-8 weeks, while commercial projects may require 8-16 weeks. Construction timelines depend on project complexity and approvals but typically range from 6-18 months."
              }
            },
            {
              "@type": "Question",
              name: "Do you handle government approvals and NOCs in Lucknow?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we manage all regulatory approvals including building permissions, fire NOC, environmental clearances, and utility connections with Lucknow Development Authority (LDA) and other concerned departments."
              }
            }
          ]
        })}
      </Script>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Architectural and Interior Design Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Trygve Studio",
            "image": "https://trygvestudio.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Lucknow",
            "sameAs": "https://www.wikidata.org/wiki/Q4705"
          },
          "description": "Premium architectural and interior design services in Lucknow, specializing in luxury residential and commercial spaces."
        })}
      </Script>
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Best Architects in Lucknow - Trygve Studio"
            fill
            className="object-cover md:h-auto h-full brightness-50"
            priority
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl px-6">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
            Best Architects in
            <br />
            <span className="font-normal">Lucknow</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            Crafting spaces with care — from concept to completion.
            We serve brands, startups, and enterprises across Lucknow with timeless, functional designs.
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
            Architectural Excellence in Lucknow: At a Glance
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Experience:</strong> 200+ successful projects across residential and commercial sectors in Lucknow.
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                <strong className="text-gray-900">Service Range:</strong> End-to-end design, PMC, EPC, and 3D Visualization.
              </p>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Local Expertise:</strong> Deep understanding of LDA approvals and Lucknow's climate-responsive design.
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                <strong className="text-gray-900">Satisfaction:</strong> Leading design firm with a 98% client retention and satisfaction rate.
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
              Architecture & Interior Design Services in Lucknow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              We have served brands, startups, and enterprises across industries.
              A selection of our services — crafted with care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-80 mb-6 overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={`${service.title} - Architects in Lucknow`}
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

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
                  Why Choose the Best Architecture Firm in Lucknow?
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  At Trygve Studio, we provide comprehensive architectural and interior design solutions
                  across Lucknow, Gomti Nagar, Hazratganj, and beyond. From concept to execution,
                  we ensure every project reflects your vision.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-normal">Expert Architects</h3>
                  <p className="text-gray-600 font-light">
                    Award-winning architects with global experience and local expertise in Lucknow's unique architectural landscape.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-normal">Sustainable Design</h3>
                  <p className="text-gray-600 font-light">
                    Modern, eco-friendly designs that reduce environmental impact while maximizing functionality and aesthetics.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-normal">End-to-End Management</h3>
                  <p className="text-gray-600 font-light">
                    Complete project management services (PMC + EPC) ensuring timely delivery and budget adherence.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-normal">3D Visualization</h3>
                  <p className="text-gray-600 font-light">
                    Advanced 3D modeling and virtual reality walkthroughs before construction begins.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-[600px] bg-gra y-200">
                <Image
                  src={logo}
                  alt="Top Architects in Lucknow - Trygve Studio Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Recent Projects in Lucknow
            </h2>
            <p className="text-xl text-gray-600 font-light">
              A selection of recent work — crafted with care across Lucknow's diverse neighborhoods.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>

                {/* Image */}
                <div className={`relative h-96 bg-gray-200 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
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

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-light">{project.title}</h3>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    href="/portfolio"
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-6">
                  Real Transformation: 2BHK Apartment in Indira Nagar
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                  Our clients in Lucknow's Indira Nagar faced a common challenge: a cramped 2BHK
                  apartment that lacked natural light and felt claustrophobic.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-900">The Challenge</h4>
                    <p className="text-gray-600 font-light">
                      • Limited natural light due to poor orientation<br />
                      • Inefficient space utilization<br />
                      • Outdated layout restricting movement<br />
                      • Need for modern amenities within budget constraints
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-900">Our Solution</h4>
                    <p className="text-gray-600 font-light">
                      We redesigned the apartment with an open-plan concept, strategic use of mirrors,
                      and light-colored materials. The result: 40% more usable space and dramatically
                      improved natural lighting.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 space-y-2">
                    <h4 className="font-medium text-gray-900">Project Results</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Timeline:</span> 45 days
                      </div>
                      <div>
                        <span className="font-medium">Space Gain:</span> +40%
                      </div>
                      <div>
                        <span className="font-medium">Budget:</span> ₹12 lakhs
                      </div>
                      <div>
                        <span className="font-medium">Satisfaction:</span> 5/5 stars
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="space-y-6">
              <div className="relative h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
                  alt="Before - 2BHK Apartment in Indira Nagar, Lucknow"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-medium">
                  BEFORE
                </div>
              </div>

              <div className="relative h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154154-1c1b8a1e2c3e"
                  alt="After - 2BHK Transformation by Best Architects in Lucknow"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-sm font-medium">
                  AFTER
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Trusted by homeowners, businesses, and enterprises across Lucknow.
            </p>
          </div>

          <TestimonialsMarquee />
        </div>
      </section>

      {/* Service Areas in Lucknow */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Architecture Services Across Lucknow
            </h2>
            <p className="text-xl text-gray-600 font-light">
              We proudly serve clients across all major areas of Lucknow with our comprehensive architectural services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Gomti Nagar", "Hazratganj", "Indira Nagar", "Aliganj",
              "Rajajipuram", "Mahanagar", "Jankipuram", "Ashiyana",
              "Chinhat", "Alambagh", "Faizabad Road", "IT City"
            ].map((area, index) => (
              <div key={index} className="text-center p-6 bg-[#F4F1EC] rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-normal text-gray-900 mb-2">
                  Architects in {area}
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  Residential & Commercial Design
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[#F4F1EC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "What makes Trygve Studio the best architecture firm in Lucknow?",
                a: "We combine global design expertise with deep local knowledge of Lucknow's architectural needs. Our track record includes 200+ successful projects across residential, commercial, and hospitality sectors with a 98% client satisfaction rate."
              },
              {
                q: "What is the typical cost for architectural services in Lucknow?",
                a: "Architectural fees typically range from 8-12% of the total project cost. For residential projects, we offer packages starting from ₹500 per sq ft for design consultancy and ₹1200 per sq ft for complete turnkey solutions."
              },
              {
                q: "How long does an architectural project take in Lucknow?",
                a: "Timeline varies by project scope. Residential designs take 4-8 weeks, while commercial projects may require 8-16 weeks. Construction timelines depend on project complexity and approvals but typically range from 6-18 months."
              },
              {
                q: "Do you handle government approvals and NOCs in Lucknow?",
                a: "Yes, we manage all regulatory approvals including building permissions, fire NOC, environmental clearances, and utility connections with Lucknow Development Authority (LDA) and other concerned departments."
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

      {/* Real Talk Section - Authentic Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-8">Let's Talk About What Really Matters</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Look, we've been doing architecture in Lucknow since 2019, and here's what we've learned:
              most people don't care about our awards or fancy terminology. They care about four things:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Will you actually listen to what I want?</h3>
                <p className="text-gray-700">
                  Yes. We've had clients come to us after bad experiences with architects who imposed their
                  "artistic vision" on them. That's not our style. Your home is yours. We're here to translate
                  what's in your head into reality, not to win design competitions with your money.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Will you stick to the budget?</h3>
                <p className="text-gray-700">
                  Here's the truth: construction costs in Lucknow have gone up 30% since COVID. Anyone promising
                  you a luxury villa for ₹1000/sq ft is lying. We give you realistic numbers upfront. Then we
                  help you prioritize—maybe you go imported for the living room flooring but local for bedrooms.
                  That's real budgeting, not fantasy.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Can you handle the LDA mess?</h3>
                <p className="text-gray-700">
                  Lucknow's approval system is... let's just say it requires patience. We've been through it
                  200+ times. We know which clerks are helpful, what documents actually matter (vs what they
                  say online), and how long things really take. Usually 6-8 weeks for residential if done right.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">4. What about after the project?</h3>
                <p className="text-gray-700">
                  We don't disappear when the final payment is done. Last month we fixed a waterproofing issue
                  for a client whose project finished 2 years ago. No charge. Because that's how you build a
                  reputation in this city.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">The Gomti Nagar Reality</h3>
            <p className="text-gray-700 mb-4">
              If you're building in Gomti Nagar Extension, you probably already know: plot sizes are getting
              smaller (200-300 sq yd is common now), but people want the same features they see in 500 sq yd
              plots. It's tough but doable. We've designed 50+ homes there. The trick is vertical expansion
              and smart space planning.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">What We're NOT Good At</h3>
            <p className="text-gray-700 mb-4">
              Being honest here: if you want ultra-modern minimalist design with all white and concrete,
              we're probably not your best fit. Our strength is modern-contemporary with warmth. We use
              wood, we like color, we design for actual living—not Instagram posts.
            </p>
            <p className="text-gray-700">
              Also, if you need something done in 2 weeks, we can't help. Quality architecture takes time.
            </p>
          </div>
        </div>
      </section>

      {/* Local Insights */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Lucknow-Specific Challenges We Solve</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">The Monsoon Problem</h3>
              <p className="text-gray-700 leading-relaxed">
                Lucknow gets 40+ inches of rain, mostly in 2-3 months. We've seen too many homes with
                water seepage, damaged walls, and foundation issues. Every design we do includes proper
                slope management, strategic drainage, and waterproofing where it actually matters (not
                just everywhere which is expensive and unnecessary).
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Summer Heat Design</h3>
              <p className="text-gray-700 leading-relaxed">
                45°C summers are normal here. We orient buildings to minimize afternoon sun, use
                double-height spaces for natural ventilation, and spec AAC blocks instead of red bricks
                (better insulation). Your AC bills will thank us.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">The Parking Reality</h3>
              <p className="text-gray-700 leading-relaxed">
                In Lucknow, everyone has at least 2 cars. Plus a scooter. Plus guests. We plan for
                4-vehicle parking minimum in Gomti Nagar projects. It's not optional, it's practical.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Soil Testing is NOT Negotiable</h3>
              <p className="text-gray-700 leading-relaxed">
                Lucknow has clay-heavy soil in many areas. We've seen houses crack because someone
                skipped the ₹8,000 soil test to save money. We don't let that happen. Foundation
                design is based on actual data, not guesswork.
              </p>
            </div>
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
          <span className="font-semibold text-black">Architects in Lucknow</span>
        </li>
      </ol>
    </nav>
  );
}

