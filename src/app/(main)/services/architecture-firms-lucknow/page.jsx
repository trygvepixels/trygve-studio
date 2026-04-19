import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";
import logo from "@/assets/logo.png";
import Script from "next/script";

export const metadata = {
    title: "Architecture Firms in Lucknow | Design & Build Services | Trygve Studio",
    description:
        "Explore Trygve Studio as an architecture firm in Lucknow for residential, commercial and design-build services with planning, detailing and execution support.",
    alternates: {
        canonical: "/services/architecture-firms-lucknow",
    },
    openGraph: {
        title: "Architecture Firms in Lucknow | Trygve Studio",
        description:
            "Architecture, planning and design-build support in Lucknow for residential, commercial and hospitality projects.",
        url: "https://trygvestudio.com/services/architecture-firms-lucknow",
        images: [
            {
                url: "https://trygvestudio.com/images/architecture-firms-lucknow.jpg",
                width: 1200,
                height: 630,
                alt: "Architecture Firms in Lucknow - Trygve Studio",
            },
        ],
    },
};

export default function ArchitectureFirmsLucknow() {
    return (
        <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
            <Script id="service-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Architecture Firm Services",
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
                    "description": "Full-service architecture firm in Lucknow specializing in residential, commercial, and institutional projects with sustainable design principles."
                })}
            </Script>
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                        alt="Architecture Firms in Lucknow - Trygve Studio"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>

                <div className="relative z-10 text-center max-w-6xl px-6">
                    <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight text-center sm:text-left">
                        Architecture Firm in
                        <br />
                        <span className="font-normal text-white">Lucknow</span>
                    </h1>

                    {/* CRO Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">✓ ISO 9001:2015</span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">✓ Design & Build Support</span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">✓ Residential & Commercial</span>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                        Architecture, planning and execution support in Lucknow for homes, workspaces
                        and mixed-use projects that need clear coordination from concept to site.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact-us#project-form"
                            className="bg-[#F4F1EC] text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300"
                        >
                            Get Free Consultation
                        </Link>
                        <Link
                            href="/projects"
                            className="border border-white text-white px-8 py-4 text-lg font-medium hover:bg-[#F4F1EC] hover:text-gray-900 transition-all duration-300"
                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* Firm Overview */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-6">
                                Why Choose Our Architecture Firm?
                            </h2>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                                We work as a planning and design partner for clients who want one team to
                                coordinate architecture, interiors, approvals and execution support with a
                                practical understanding of how projects move in Lucknow.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Structured planning:</strong> Design decisions backed by drawings, specifications and site coordination</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Multi-disciplinary support:</strong> Architecture, interiors and visualization aligned in one workflow</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Local relevance:</strong> Design choices shaped around climate, approvals and material availability</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Clear communication:</strong> Practical updates so scope, cost and execution stay easier to track</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[600px]">
                            <Image
                                src={logo}
                                alt="Trygve Studio - Leading Architecture Firm in Lucknow"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-6">
                            Our Architecture Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            End-to-end architectural solutions from concept to completion
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Residential Architecture",
                                desc: "Custom homes, villas, apartments tailored to your lifestyle",
                                icon: "🏡"
                            },
                            {
                                title: "Commercial Design",
                                desc: "Offices, retail spaces, hospitality projects",
                                icon: "🏢"
                            },
                            {
                                title: "Institutional Projects",
                                desc: "Schools, hospitals, community centers",
                                icon: "🏛️"
                            },
                            {
                                title: "Interior Design",
                                desc: "Complete interior solutions with furniture & lighting",
                                icon: "🎨"
                            },
                            {
                                title: "3D Visualization",
                                desc: "Photorealistic renders & virtual walkthroughs",
                                icon: "🖼️"
                            },
                            {
                                title: "PMC & EPC",
                                desc: "Full project management & execution services",
                                icon: "📋"
                            }
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-normal mb-3">{service.title}</h3>
                                <p className="text-gray-600 font-light">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-[#234D7E] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-light mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl font-light mb-10">
                        Schedule a free consultation with Lucknow's top architecture firm today.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-white text-[#234D7E] px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-all"
                    >
                        Contact Us Now
                    </Link>
                </div>
            </section>

            {/* Honest Comparison Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-8 text-center">How Our Approach Differs</h2>

                    <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                        Different firms suit different project types. This is where our working style
                        usually fits best for clients looking for architecture support in Lucknow.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Large Corporate Firms</h3>
                            <p className="text-gray-700 mb-4">
                                <strong>Their Strength:</strong> Big teams, multiple ongoing projects, established processes.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Typical challenge:</strong> Communication can become layered, especially when the design team,
                                coordination team and site team are all separate.
                            </p>
                            <p className="text-gray-700">
                                <strong>Our Approach:</strong> We keep the workflow more direct so design, detailing and client
                                decisions stay connected through the project.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Solo Practitioners</h3>
                            <p className="text-gray-700 mb-4">
                                <strong>Their Strength:</strong> Personal touch, lower fees, direct access to the architect.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Typical challenge:</strong> A single-person setup can struggle when a project needs parallel
                                input across structure, interiors, visualization and approvals.
                            </p>
                            <p className="text-gray-700">
                                <strong>Our Approach:</strong> We coordinate across design disciplines while keeping one clear point
                                of contact for the client.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#F4F1EC] p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Who We Usually Work Best With</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our process tends to work well for clients who:
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="mr-3 text-green-600 font-bold">✓</span>
                                Want a balanced process that is structured without becoming impersonal
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-600 font-bold">✓</span>
                                Value clear communication over heavy sales language
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-600 font-bold">✓</span>
                                Want practical design feedback before money gets committed on site
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-600 font-bold">✓</span>
                                Need planning support for projects where coordination quality matters
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Real Timeline Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-8 text-center">What the Process Usually Looks Like</h2>

                    <p className="text-lg text-gray-700 mb-12 text-center">
                        A typical residential project in Lucknow moves through these stages before construction starts.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Week 1-2: Discovery</h3>
                                <span className="text-sm text-gray-500">2 weeks</span>
                            </div>
                            <p className="text-gray-700">
                                We visit the site, review constraints, understand your brief and align on budget priorities,
                                lifestyle needs and project goals. This phase shapes the rest of the design work.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Week 3-5: Concept Design</h3>
                                <span className="text-sm text-gray-500">3 weeks</span>
                            </div>
                            <p className="text-gray-700">
                                We present layout directions and early visual references, then refine the selected option
                                through feedback rounds until the planning approach is ready for detailed development.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Week 6-8: Detailed Design</h3>
                                <span className="text-sm text-gray-500">3 weeks</span>
                            </div>
                            <p className="text-gray-700">
                                This stage covers electrical layouts, plumbing, structure coordination, ceilings,
                                finishes and construction details so execution teams can work with clarity.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Week 9-14: LDA Approvals</h3>
                                <span className="text-sm text-gray-500">6 weeks (usually)</span>
                            </div>
                            <p className="text-gray-700">
                                Submission, review comments and clarifications usually take time. We plan for practical
                                approval timelines rather than ideal ones and keep the file moving with follow-ups.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Month 4+: Construction Begins</h3>
                                <span className="text-sm text-gray-500">9-12 months</span>
                            </div>
                            <p className="text-gray-700">
                                Once work begins, site coordination helps drawings translate properly on ground and keeps
                                key quality decisions from drifting during execution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Expertise */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-8">Why Local Context Matters in Lucknow</h2>

                    <p className="text-lg text-gray-700 mb-8">
                        Design decisions in Lucknow are shaped by climate, approvals, site conditions and material choices.
                        These are some of the local factors that usually need attention.
                    </p>

                    <div className="space-y-6">
                        <div className="border-l-4 border-gray-300 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Gomti Riverfront Projects</h3>
                            <p className="text-gray-700">
                                Plots closer to the riverfront often need more attention around waterproofing, foundation
                                strategy and basement detailing because of local soil and water-table conditions.
                            </p>
                        </div>

                        <div className="border-l-4 border-gray-300 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Ring Road Noise Pollution</h3>
                            <p className="text-gray-700">
                                Sites along high-traffic stretches may need better acoustic planning, glazing choices and
                                wall assemblies to keep indoor comfort at the right level.
                            </p>
                        </div>

                        <div className="border-l-4 border-gray-300 pl-6">
                            <h3 className="text-xl font-semibold mb-2">The Termite Situation</h3>
                            <p className="text-gray-700">
                                Ground-contact detailing, material choice and preventive treatment matter because termite
                                risk is a practical issue on many sites in this region.
                            </p>
                        </div>

                        <div className="border-l-4 border-gray-300 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Materials That Actually Work Here</h3>
                            <p className="text-gray-700">
                                Not every premium-looking material performs equally well here. Finishes need to be selected
                                around maintenance, humidity and long-term usability, not just showroom appearance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-12 text-center">What Our Clients Say</h2>

                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg">
                            <div className="flex items-start mb-4">
                                <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
                            </div>
                            <p className="text-gray-700 mb-4 italic leading-relaxed">
                                "We'd worked with two other firms before Trygve and the difference was night and day. They actually
                                listened instead of imposing their 'vision.' When we wanted to add a puja room mid-construction, they
                                accommodated it without the drama we expected. Our 3BHK in Gomti Nagar Extension turned out exactly
                                how we imagined."
                            </p>
                            <div className="text-sm text-gray-600">
                                <strong>Rajesh & Priya Sharma</strong><br />
                                3BHK Residential Project, Gomti Nagar Extension | Completed: Jan 2025
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg">
                            <div className="flex items-start mb-4">
                                <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
                            </div>
                            <p className="text-gray-700 mb-4 italic leading-relaxed">
                                "The budget transparency was refreshing. They told us upfront that our initial ₹80 lakh budget wouldn't
                                work for what we wanted, and helped us prioritize. We ended up at ₹1.1 crore but got everything that
                                mattered to us. No hidden costs, no surprises. That's rare."
                            </p>
                            <div className="text-sm text-gray-600">
                                <strong>Ankit Verma</strong><br />
                                Commercial Office Space, Hazratganj | Completed: Nov 2024
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg">
                            <div className="flex items-start mb-4">
                                <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
                            </div>
                            <p className="text-gray-700 mb-4 italic leading-relaxed">
                                "I'm a returning NRI and didn't know anyone in Lucknow construction. Trygve handled everything — LDA approvals,
                                contractor supervision, material sourcing. I visited the site 3 times in 14 months and moved into a finished
                                home. They made long-distance project management actually work."
                            </p>
                            <div className="text-sm text-gray-600">
                                <strong>Dr. Meera Kapoor</strong><br />
                                Luxury Villa, Sushant Golf City | Completed: Mar 2024
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-light mb-12 text-center">Common Questions About Architecture Firms</h2>

                    <div className="space-y-8">
                        {[
                            {
                                q: "How do architecture firms in Lucknow charge for their services?",
                                a: "Most firms use one of three models: (1) Percentage of construction cost (8-12% is standard), (2) Per square foot rate (₹200-500/sq ft for design), or (3) Fixed project fee. We typically work on percentage basis because it aligns our incentives with keeping your costs reasonable."
                            },
                            {
                                q: "What's the difference between a small firm and a large architecture firm?",
                                a: "Large firms have more bandwidth and specialist departments but you might work with junior architects. Small firms give you partner attention but have limited capacity. Mid-size firms like ours (12 people) offer the sweet spot — specialist expertise with partner involvement on every project."
                            },
                            {
                                q: "Do I need an architecture firm for a renovation project?",
                                a: "For basic renovations (paint, flooring), probably not. But if you're changing layouts, adding floors, or modifying structure, absolutely yes. You need structural drawings for LDA approval and safety. We've rescued too many DIY renovations that compromised structural integrity."
                            },
                            {
                                q: "How long does it take from first meeting to construction start?",
                                a: "Realistically? 4-5 months minimum. Design consultations (1 month), detailed drawings (1 month), LDA approvals (2-3 months). Anyone promising faster is either cutting corners or hasn't actually done this before. The timeline is what it is."
                            },
                            {
                                q: "Can I use my own contractor or do you require specific ones?",
                                a: "You can absolutely use your own contractor. We provide detailed drawings and specifications that any competent contractor can execute. That said, we have relationships with 4-5 excellent contractors we can recommend if you're starting from scratch."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.q}</h3>
                                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-6">
                            Explore related services in Lucknow:
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/services/architects-in-lucknow" className="text-[#234D7E] hover:underline">
                                General Architecture Services →
                            </Link>
                            <Link href="/services/luxury-architecture-design-lucknow" className="text-[#234D7E] hover:underline">
                                Luxury Architecture Design →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Script id="faq-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How do architecture firms in Lucknow charge for their services?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Most firms use one of three models: (1) Percentage of construction cost (8-12% is standard), (2) Per square foot rate (₹200-500/sq ft for design), or (3) Fixed project fee. We typically work on percentage basis because it aligns our incentives with keeping your costs reasonable."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What's the difference between a small firm and a large architecture firm?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Large firms have more bandwidth and specialist departments but you might work with junior architects. Small firms give you partner attention but have limited capacity. Mid-size firms like ours (12 people) offer the sweet spot — specialist expertise with partner involvement on every project."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do I need an architecture firm for a renovation project?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "For basic renovations (paint, flooring), probably not. But if you're changing layouts, adding floors, or modifying structure, absolutely yes. You need structural drawings for LDA approval and safety."
                            }
                        }
                    ]
                })}
            </Script>

            {/* Sticky Mobile/Desktop CTA (CRO Element) */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] flex justify-between items-center sm:hidden pb-safe">
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Start Your Project</span>
                    <span className="text-sm font-bold text-gray-900 leading-tight">Book Free Setup</span>
                </div>
                <Link href="/contact-us#project-form" className="bg-[#234D7E] text-white px-5 py-3 rounded-lg font-medium shadow-md active:scale-95 transition-transform flex items-center gap-1 text-sm">
                    Consult Expert <FiChevronRight />
                </Link>
            </div>

            <Link href="/contact-us#project-form" className="hidden sm:flex fixed bottom-8 right-8 z-50 bg-[#234D7E] text-white px-6 py-4 rounded-full font-medium shadow-[0_8px_30px_rgba(35,77,126,0.3)] hover:scale-105 transition-all items-center gap-2 group">
                <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-100"></span>
                </span>
                Book Your Free Consultation
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

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
                    <span className="font-semibold text-black">Architecture Firms in Lucknow</span>
                </li>
            </ol>
        </nav>
    );
}
