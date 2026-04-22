import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero/herobg.jpg";
import Script from "next/script";

export const metadata = {
    title: "Turnkey Construction Company in Lucknow | Design to Handover | Trygve Studio",
    description:
        "Turnkey construction company in Lucknow for design, approvals, project planning and coordinated execution. Explore how Trygve Studio supports projects from concept to handover.",
    keywords: [
        "turnkey construction company in lucknow",
        "turnkey construction lucknow",
        "design build company lucknow",
        "construction company lucknow",
        "house construction lucknow",
        "construction cost per sq ft lucknow",
        "build house lucknow",
    ],
    alternates: {
        canonical: "https://trygvestudio.com/services/turnkey-construction-companies-lucknow",
    },
    openGraph: {
        title: "Turnkey Construction Company in Lucknow | Design to Handover | Trygve Studio",
        description:
            "Turnkey construction in Lucknow with architecture, approvals, budgeting, construction coordination and interior fit-out support.",
        url: "https://trygvestudio.com/services/turnkey-construction-companies-lucknow",
        images: [
            {
                url: "https://trygvestudio.com/images/architecture-firms-lucknow.jpg",
                width: 1200,
                height: 630,
                alt: "Turnkey Construction in Lucknow — Trygve Studio",
            },
        ],
    },
};

export default function TurnkeyConstructionLucknow() {
    return (
        <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
            <Script id="service-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Turnkey Construction Services",
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
                    "description": "Premium turnkey residential and commercial construction company in Lucknow. We handle PMC, EPC, architecture, and complete execution."
                })}
            </Script>
            {/* Hero Section */}
            <section className="relative w-full min-h-[78vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
                <Breadcrumbs />

                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBg}
                        alt="Turnkey Construction Companies in Lucknow - Trygve Studio"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>

                <div className="relative z-10 text-center max-w-5xl px-5 md:px-6">
                    <h1 className="text-2xl md:text-4xl font-semibold text-white mb-4 md:mb-5 tracking-tight leading-tight">
                        Turnkey Construction Company in Lucknow
                        <br />
                        <span className="font-semibold text-white">From Design to Handover</span>
                    </h1>

                    {/* CRO Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">✓ ISO 9001:2015</span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">✓ Structured Delivery</span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">✓ Design to Handover</span>
                    </div>

                    <p className="text-sm md:text-lg text-gray-200 font-medium max-w-4xl mx-auto leading-relaxed">
                        We support turnkey construction projects in Lucknow with design thinking,
                        approval guidance, project planning and coordinated site execution so the
                        process stays clearer from concept to handover.
                    </p>

                    <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                        <Link
                            href="/price-calculator"
                            className="bg-[#234D7E] text-white px-6 md:px-7 py-3 md:py-3.5 text-sm md:text-lg font-medium hover:bg-[#1a3a60] transition-all duration-300 shadow-lg"
                        >
                            Calculate Construction Cost
                        </Link>
                        <Link
                            href="/contact-us#project-form"
                            className="bg-[#F4F1EC] text-gray-900 border border-transparent px-6 md:px-7 py-3 md:py-3.5 text-sm md:text-lg font-medium hover:bg-gray-100 transition-all duration-300"
                        >
                            Book Site Visit
                        </Link>
                    </div>
                </div>
            </section>

            {/* Firm Overview */}
            <section className="bg-white py-14 md:py-20 px-5 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">
                                Why Choose Our Turnkey Construction Company?
                            </h2>
                            <p className="text-sm md:text-lg text-gray-600 font-medium leading-relaxed mb-6 md:mb-8">
                                Trygve Studio stands among Lucknow's premier construction companies, combining
                                technical excellence with transparent project management. Our multidisciplinary
                                team delivers comprehensive building solutions from empty plot to key handover.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Integrated workflow:</strong> Design, planning and execution support under one team</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Single Point of Contact:</strong> No contractor managing</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Material Honesty:</strong> Exact specifications followed rigidly</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Budget clarity:</strong> Better scope definition and planning before execution begins</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[320px] md:h-[600px]">
                            <Image
                                src={logo}
                                alt="Trygve Studio - Leading Construction Company in Lucknow"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-14 md:py-20 px-5 md:px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">
                            Our Turnkey Services
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto font-medium">
                            End-to-end building solutions from concept to key handover
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 md:gap-8">
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
                            <div key={i} className="bg-white p-5 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{service.icon}</div>
                                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">{service.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 font-medium">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-14 md:py-20 px-5 md:px-6 bg-[#234D7E] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">
                        Ready to Start Building?
                    </h2>
                    <p className="text-sm md:text-lg font-medium mb-8 md:mb-10">
                        Schedule a free consultation with Lucknow's premier construction company today.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-white text-[#234D7E] px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-lg font-medium hover:bg-gray-100 transition-all"
                    >
                        Contact Us Now
                    </Link>
                </div>
            </section>

            {/* Honest Comparison Section */}
            <section className="py-14 md:py-20 px-5 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8 text-center">How We Compare to Traditional Thekedars</h2>

                    <p className="text-sm md:text-lg text-gray-700 mb-6 md:mb-8 text-center max-w-3xl mx-auto">
                        We get this question a lot: "Why should I hire a turnkey company instead of managing labor myself?"
                        Here's an honest comparison:
                    </p>

                    <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-12">
                        <div className="bg-gray-50 p-5 md:p-8 rounded-lg">
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

                        <div className="bg-gray-50 p-5 md:p-8 rounded-lg">
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

                    <div className="bg-[#F4F1EC] p-5 md:p-8 rounded-lg">
                        <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-gray-900">So Who Are We For?</h3>
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
            <section className="py-14 md:py-20 px-5 md:px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8 text-center">What Actually Happens After You Sign Up</h2>

                    <p className="text-sm md:text-lg text-gray-700 mb-8 md:mb-12 text-center">
                        No fluff. Here's the real timeline for a typical 2500 sq ft residential project:
                    </p>

                    <div className="space-y-4 md:space-y-6">
                        <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-[#234D7E]">
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

                        <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-[#234D7E]">
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

                        <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-[#234D7E]">
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

                        <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-[#234D7E]">
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

                        <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-green-600">
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
            <section className="py-14 md:py-20 px-5 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8">Why Local Expertise Actually Matters</h2>

                    <p className="text-sm md:text-lg text-gray-700 mb-6 md:mb-8">
                        Some architects treat Lucknow like any other city. Big mistake. Here's what we know that others might miss:
                    </p>

                    <div className="space-y-5 md:space-y-6">
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
            <section className="py-14 md:py-20 px-5 md:px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-12 text-center">What Our Clients Say</h2>

                    <div className="space-y-5 md:space-y-8">
                        <div className="bg-white p-5 md:p-8 rounded-lg">
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

                        <div className="bg-white p-5 md:p-8 rounded-lg">
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

                        <div className="bg-white p-5 md:p-8 rounded-lg">
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
            <section className="py-14 md:py-20 px-5 md:px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-8 md:mb-12 text-center">Common Questions About Turnkey Construction</h2>

                    <div className="space-y-6 md:space-y-8">
                        {[
                            {
                                q: "What does 'Turnkey Construction' actually mean?",
                                a: "Turnkey construction means you sign one contract with one company (us), and we deliver a finished, ready-to-move-in building. From soil testing and architecture to civil construction and interior finishes, we handle everything without you needing to manage separate contractors."
                            },
                            {
                                q: "How much does turnkey construction cost in Lucknow?",
                                a: "In 2026, turnkey construction in Lucknow ranges from ₹1,650/sq ft (standard) to ₹2,150/sq ft (premium) to ₹2,850+/sq ft (luxury). Rates include material, labour, design, and approval costs. Government fees and plot registration are separate. Trygve Studio offers fixed-price contracts — no hidden cost surprises. Use our free calculator to get your estimate."
                            },
                            {
                                q: "Why shouldn't I just hire a local thekedar for cheaper?",
                                a: "Local contractors often quote low initially, but hit you with 'hidden costs' later. They rarely provide structural drawings, leading to safety issues, and material theft is common. A professional turnkey company offers legal contracts, warranty, and zero cost overruns."
                            },
                            {
                                q: "How long does a typical turnkey residential project take?",
                                a: "A standard 2000-3000 sq ft house takes 9-12 months for complete turnkey delivery, assuming LDA approvals are in place. We provide a guaranteed handover date in our contract."
                            },
                            {
                                q: "Do you also do the interior design in the turnkey package?",
                                a: "Yes. Our EPC (Engineering, Procurement, and Construction) model includes full interior design and execution. You choose the tiles, laminates, and fixtures from our catalog, and we install them."
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
                            "name": "What does 'Turnkey Construction' actually mean?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Turnkey construction means you sign one contract with one company (us), and we deliver a finished, ready-to-move-in building. From soil testing and architecture to civil construction and interior finishes, we handle everything without you needing to manage separate contractors."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does turnkey construction cost in Lucknow?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "In 2026, turnkey construction in Lucknow ranges from ₹1,650/sq ft (standard) to ₹2,150/sq ft (premium) to ₹2,850+/sq ft (luxury). Rates include material, labour, design, and approval costs. Trygve Studio offers fixed-price contracts with no hidden cost surprises."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Why shouldn't I just hire a local thekedar for cheaper?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Local contractors often quote low initially, but hit you with 'hidden costs' later. They rarely provide structural drawings, leading to safety issues, and material theft is common. A professional turnkey company offers legal contracts, warranty, and zero cost overruns."
                            }
                        }
                    ]
                })}
            </Script>

            {/* Sticky Mobile/Desktop CTA (CRO Element) */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] flex justify-between items-center sm:hidden pb-safe">
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
        <nav aria-label="Breadcrumb" className="absolute top-6 left-0 right-0 z-20 max-w-7xl mx-auto px-5 md:px-6">
            <ol className="inline-flex flex-wrap items-center gap-2 rounded-full bg-black/20 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 text-[12px] md:text-[14px] text-white/85">
                <li className="flex items-center">
                    <Link href="/" className="flex items-center hover:text-white transition-colors">
                        <FiHome className="mr-1.5" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <FiChevronRight className="text-white/50" />
                    <Link href="/services" className="hover:text-white transition-colors">
                        Services
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <FiChevronRight className="text-white/50" />
                    <span className="font-semibold text-white">Turnkey Construction Companies in Lucknow</span>
                </li>
            </ol>
        </nav>
    );
}
