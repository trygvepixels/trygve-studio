import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";
import logo from "@/assets/logo.png";
import Script from "next/script";

export const metadata = {
    title: "Top Architecture Firms in Lucknow - Design Excellence Since 2019",
    description:
        "Leading architecture firm in Lucknow for residential & commercial projects. ISO certified, 200+ completed designs. Sustainable architecture, modern interiors. Call now!",
    alternates: {
        canonical: "/services/architecture-firms-lucknow",
    },
    openGraph: {
        title: "Top Architecture Firms in Lucknow | Trygve Studio",
        description:
            "ISO certified architecture firm with 200+ successful projects. Expert in sustainable design, modern aesthetics & timely delivery.",
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
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                        alt="Architecture Firms in Lucknow - Trygve Studio"
                        className="object-cover w-full h-full brightness-50"
                    />
                </div>

                <div className="relative z-10 text-center max-w-6xl px-6">
                    <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
                        Architecture Firms in
                        <br />
                        <span className="font-normal">Lucknow</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                        ISO-certified full-service architecture firm delivering exceptional design solutions
                        across residential, commercial, and institutional sectors since 2019.
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
                                Trygve Studio stands among Lucknow's premier architecture firms, combining
                                technical excellence with innovative design thinking. Our multidisciplinary
                                team delivers comprehensive architectural solutions tailored to your vision.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>200+ Projects:</strong> Successfully delivered across all categories</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Licensed & Insured:</strong> Full regulatory compliance</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Sustainable Design:</strong> Energy-efficient, eco-conscious solutions</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Timely Delivery:</strong> 98% on-time project completion rate</p>
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
                    <h2 className="text-4xl font-light mb-8 text-center">How We Compare to Other Firms</h2>

                    <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                        We get this question a lot: "What makes you different from the other 50+ architecture firms in Lucknow?"
                        Here's an honest comparison:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Large Corporate Firms</h3>
                            <p className="text-gray-700 mb-4">
                                <strong>Their Strength:</strong> Big teams, multiple ongoing projects, established processes.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>The Reality:</strong> You'll likely work with junior architects while partners focus on
                                high-value clients. Your ₹50 lakh project might not get the attention it deserves.
                            </p>
                            <p className="text-gray-700">
                                <strong>Our Approach:</strong> We're selective about projects. Every client gets partner-level
                                attention because we cap our intake at 8-10 active projects.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Solo Practitioners</h3>
                            <p className="text-gray-700 mb-4">
                                <strong>Their Strength:</strong> Personal touch, lower fees, direct access to the architect.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>The Reality:</strong> Limited bandwidth. If they get sick or busy, your project stalls.
                                Also, one person can't be expert in structural, MEP, and interior design.
                            </p>
                            <p className="text-gray-700">
                                <strong>Our Approach:</strong> We have a team of 12 specialists (structure, MEP, interiors, 3D)
                                coordinated by one point person. You get expertise across all domains.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#F4F1EC] p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">So Who Are We For?</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You're a good fit for Trygve Studio if you:
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="mr-3 text-green-600 font-bold">✓</span>
                                Want a balanced approach — not too corporate, not too casual
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-600 font-bold">✓</span>
                                Value transparent communication over sales pitches
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-600 font-bold">✓</span>
                                Need someone who'll tell you "that's a bad idea" when needed (politely, of course)
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3 text-green-600 font-bold">✓</span>
                                Are willing to invest in quality design (our sweet spot is ₹40 lakh to ₹5 crore projects)
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Real Timeline Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-8 text-center">What Actually Happens After You Sign Up</h2>

                    <p className="text-lg text-gray-700 mb-12 text-center">
                        No fluff. Here's the real timeline for a typical 2500 sq ft residential project:
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Week 1-2: Discovery</h3>
                                <span className="text-sm text-gray-500">2 weeks</span>
                            </div>
                            <p className="text-gray-700">
                                We visit your site 2-3 times, measure everything, take soil samples, check sun paths.
                                Meanwhile, we're bombarding you with questions about your lifestyle, budget priorities,
                                and pet peeves. This phase determines everything else.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Week 3-5: Concept Design</h3>
                                <span className="text-sm text-gray-500">3 weeks</span>
                            </div>
                            <p className="text-gray-700">
                                We present 2-3 layout options with 3D renders. You pick one. Then we iterate 4-5 times
                                until you're excited (not just "okay"). This takes longer than we'd like, but rushing
                                this phase causes regrets later.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Week 6-8: Detailed Design</h3>
                                <span className="text-sm text-gray-500">3 weeks</span>
                            </div>
                            <p className="text-gray-700">
                                Electrical points, plumbing lines, HVAC, false ceiling details — the boring but critical
                                stuff. You'll review 40+ pages of drawings. Most people's eyes glaze over, but we walk
                                you through what matters.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Week 9-14: LDA Approvals</h3>
                                <span className="text-sm text-gray-500">6 weeks (usually)</span>
                            </div>
                            <p className="text-gray-700">
                                This is mostly waiting. We submit, they ask for clarifications, we resubmit. Rinse, repeat.
                                Officially it's "15 days" but realistically plan for 6-8 weeks. We check status twice weekly
                                and bug them politely.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold">Month 4+: Construction Begins</h3>
                                <span className="text-sm text-gray-500">9-12 months</span>
                            </div>
                            <p className="text-gray-700">
                                We do weekly site visits during construction. When contractors say "sir, we can skip this step,"
                                we're the ones who say no. That's what you're paying us for — to be the annoying quality police.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Expertise */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-8">Why Local Expertise Actually Matters</h2>

                    <p className="text-lg text-gray-700 mb-8">
                        Some architects treat Lucknow like any other city. Big mistake. Here's what we know that others might miss:
                    </p>

                    <div className="space-y-6">
                        <div className="border-l-4 border-gray-300 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Gomti Riverfront Projects</h3>
                            <p className="text-gray-700">
                                If your plot is near Gomti, the water table is high. We design basements differently here —
                                extra waterproofing, anti-buoyancy measures, specific foundation systems. Learned this the hard
                                way in 2020.
                            </p>
                        </div>

                        <div className="border-l-4 border-gray-300 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Ring Road Noise Pollution</h3>
                            <p className="text-gray-700">
                                Houses along Ring Road need acoustic insulation that's not standard in other Lucknow areas.
                                We use double-glazed windows and specific wall assemblies. Worth the extra ₹2-3 lakh for
                                peace of mind (literally).
                            </p>
                        </div>

                        <div className="border-l-4 border-gray-300 pl-6">
                            <h3 className="text-xl font-semibold mb-2">The Termite Situation</h3>
                            <p className="text-gray-700">
                                Lucknow's soil loves termites. We don't use wood for door frames at ground level anymore after
                                seeing too many replacements. uPVC or aluminum with wood finish — looks the same, lasts 10x longer.
                            </p>
                        </div>

                        <div className="border-l-4 border-gray-300 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Materials That Actually Work Here</h3>
                            <p className="text-gray-700">
                                Italian marble in Lucknow's climate? It'll develop a patina in 3 years. We recommend vitrified
                                tiles that look identical but handle the humidity better. Save that real marble for feature
                                walls, not floors.
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
                            Exploring other architectural services in Lucknow?
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
