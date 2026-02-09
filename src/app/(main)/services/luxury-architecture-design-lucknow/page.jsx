import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";
import logo from "@/assets/logo.png";
import Script from "next/script";

export const metadata = {
    title: "Luxury Architecture Design in Lucknow - Premium Villas & Residences",
    description:
        "Bespoke luxury architecture in Lucknow. Designing ultra-premium villas, penthouses & mansions. Award-winning team, celebrity clientele. View our exclusive portfolio.",
    alternates: {
        canonical: "/services/luxury-architecture-design-lucknow",
    },
    openGraph: {
        title: "Luxury Architecture Design Lucknow | Trygve Studio",
        description:
            "Ultra-premium architectural design for discerning clients. Bespoke villas, penthouses, and luxury estates.",
        url: "https://trygvestudio.com/services/luxury-architecture-design-lucknow",
        images: [
            {
                url: "https://trygvestudio.com/images/luxury-architecture-lucknow.jpg",
                width: 1200,
                height: 630,
                alt: "Luxury Architecture Design in Lucknow",
            },
        ],
    },
};

export default function LuxuryArchitectureLucknow() {
    return (
        <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
            <Script id="service-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Luxury Architecture Design",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Trygve Studio",
                        "image": "https://trygvestudio.com/logo.png",
                        "priceRange": "$$$$",
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
                    "description": "Exclusive luxury architecture design services for ultra-premium residential properties in Lucknow including villas, penthouses, and private estates."
                })}
            </Script>
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
                        alt="Luxury Architecture Design in Lucknow"
                        className="object-cover w-full h-full brightness-[0.4]"
                    />
                </div>

                <div className="relative z-10 text-center max-w-6xl px-6">
                    <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
                        Luxury Architecture
                        <br />
                        <span className="font-normal">Design in Lucknow</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                        Bespoke architectural masterpieces for discerning clientele.
                        Where timeless elegance meets contemporary innovation.
                    </p>

                    <div className="mt-12">
                        <Link
                            href="/contact-us#project-form"
                            className="bg-white text-gray-900 px-10 py-5 text-lg font-medium hover:bg-gray-100 transition-all duration-300 inline-block"
                        >
                            Schedule Private Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Luxury Philosophy */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl font-light mb-8">The Art of Luxury Living</h2>
                    <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                        Our luxury architecture practice in Lucknow caters exclusively to clients who demand
                        extraordinary design, uncompromising quality, and absolute attention to detail.
                        Each project is a unique masterpiece, crafted to reflect your personal vision.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-light mb-6">Exclusive Services</h2>
                        <p className="text-xl text-gray-400 font-light">
                            Bespoke design solutions for the most discerning clients
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Ultra-Luxury Villas",
                                desc: "20,000+ sq ft estates with private amenities, smart home integration",
                            },
                            {
                                title: "Penthouse Design",
                                desc: "Sky-high residences with panoramic views and bespoke interiors",
                            },
                            {
                                title: "Heritage Restoration",
                                desc: "Modernizing historic properties while preserving architectural legacy",
                            },
                            {
                                title: "Private Estates",
                                desc: "Multi-acre compounds with guest houses, pools, and landscaping",
                            },
                            {
                                title: "Yacht-Inspired Interiors",
                                desc: "Fluid, sophisticated spaces with premium materials and finishes",
                            },
                            {
                                title: "Boutique Hotels",
                                desc: "5-star hospitality design with unique character and luxury amenities",
                            },
                        ].map((service, i) => (
                            <div key={i} className="border border-gray-700 p-8 hover:border-gray-500 transition-colors">
                                <h3 className="text-2xl font-normal mb-4">{service.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Highlight */}
            <section className="py-24 px-6 bg-[#F4F1EC]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="relative h-[600px]">
                            <Image
                                src={logo}
                                alt="Luxury Villa Design Lucknow"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div>
                            <span className="text-sm uppercase tracking-wider text-gray-500">FEATURED PROJECT</span>
                            <h3 className="text-4xl font-light mt-4 mb-6">
                                Gomti Nagar Estate - 25,000 sq ft
                            </h3>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                                A modern masterpiece featuring Italian marble, floor-to-ceiling glass,
                                infinity pool, private cinema, and wine cellar. Completed in 14 months.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-3xl font-light text-[#234D7E] mb-2">₹18 Cr</div>
                                    <div className="text-sm text-gray-500">Project Value</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-light text-[#234D7E] mb-2">14 Mo</div>
                                    <div className="text-sm text-gray-500">Completion Time</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/projects"
                            className="inline-block border-2 border-gray-900 text-gray-900 px-10 py-4 text-lg font-medium hover:bg-gray-900 hover:text-white transition-all"
                        >
                            View Complete Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-light text-center mb-16">Why Trygve for Luxury Design</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-normal mb-3">Award-Winning Team</h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    Our principal architect is a recipient of the National Architecture Excellence Award
                                    and has trained at globally renowned design studios.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-normal mb-3">Celebrity Clientele</h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    Trusted by business leaders, celebrities, and high-net-worth individuals
                                    across North India for our discretion and excellence.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-normal mb-3">Global Materials Sourcing</h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    Direct partnerships with Italian marble suppliers, German fixture manufacturers,
                                    and Japanese electronics brands for authentic luxury.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-normal mb-3">White-Glove Service</h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    Dedicated project manager, 24/7 availability, and complete confidentiality
                                    throughout your project journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-[#234D7E] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-light mb-8">
                        Begin Your Luxury Journey
                    </h2>
                    <p className="text-xl font-light mb-12 leading-relaxed">
                        Schedule a private consultation to discuss your vision. We accept a limited number
                        of projects each year to ensure uncompromising quality.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-white text-[#234D7E] px-12 py-5 text-lg font-medium hover:bg-gray-100 transition-all"
                    >
                        Contact Us for Consultation
                    </Link>
                </div>
            </section>

            {/* Honest Conversation About Luxury */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-light mb-8">The Real Conversation About Luxury Architecture</h2>

                    <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                        <p>
                            Let's be direct: if you're reading this page, you're probably used to getting what you want.
                            Good. But luxury architecture isn't about throwing money around. It's about intelligent spending
                            on things that actually matter.
                        </p>

                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">What ₹15-20 Crore Actually Gets You</h3>
                            <p className="mb-4">
                                This is our typical luxury project budget in Lucknow. Here's the breakdown nobody else will tell you:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-3">•</span>
                                    <span><strong>₹4-5 Cr:</strong> Land (if you don't already own it) — premium 500 sq yd plots in Gomti Nagar Extension</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3">•</span>
                                    <span><strong>₹8-10 Cr:</strong> Construction — shell, finishes, fixtures (this is where quality shows)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3">•</span>
                                    <span><strong>₹2-3 Cr:</strong> Premium fittings — Italian sanitaryware, imported kitchen, automation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3">•</span>
                                    <span><strong>₹1-2 Cr:</strong> Landscape, pool, driveway, outdoor features</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-[#234D7E] pl-6">
                            <h3 className="text-2xl font-semibold mb-3">Where Most People Overspend</h3>
                            <p className="mb-3">
                                <strong>Mistake #1:</strong> Imported marble everywhere. It's beautiful but impractical in Lucknow's climate.
                                We use it strategically — maybe your lobby and master bath. Everywhere else? High-end vitrified
                                tiles that look identical and perform better.
                            </p>
                            <p className="mb-3">
                                <strong>Mistake #2:</strong> Over-automation. Do you really need app-controlled curtains in the guest
                                bedroom? Smart homes are great, but keep it functional. We automate what matters: security, AC,
                                lighting in main areas.
                            </p>
                            <p>
                                <strong>Mistake #3:</strong> Ignoring resale value. Yes, this is your dream home. But in 10-15 years?
                                Ultra-niche design choices can limit your buyer pool. We balance uniqueness with timeless appeal.
                            </p>
                        </div>

                        <div className="bg-[#F4F1EC] p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4">Are You Actually Ready for This?</h3>
                            <p className="mb-4">
                                We're selective about who we work with. Not because of snobbery, but because luxury projects are
                                emotionally intense. Here's what we need from you:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="mr-3 text-green-600 font-bold text-xl">✓</span>
                                    <div>
                                        <strong>Time commitment:</strong> At least 8-10 meetings spanning 6 months of design.
                                        Plus bi-weekly construction reviews for 12-14 months. Can't delegate this to your secretary.
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="mr-3 text-green-600 font-bold text-xl">✓</span>
                                    <div>
                                        <strong>Trust in process:</strong> We'll push back on bad ideas (politely). If you want
                                        yes-men, we're not it. Our job is excellence, not agreement.
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="mr-3 text-green-600 font-bold text-xl">✓</span>
                                    <div>
                                        <strong>Realistic timeline:</strong> Rush jobs don't exist at this level. Minimum 18 months
                                        from signing to moving in. We've had clients wait 2 years. Worth it.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real Project Story */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-12">Case Study: The ₹22 Crore Gomti Nagar Villa</h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="text-4xl font-light text-[#234D7E] mb-2">28,000</div>
                            <div className="text-sm text-gray-600">Square feet built-up</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="text-4xl font-light text-[#234D7E] mb-2">19 Mo</div>
                            <div className="text-sm text-gray-600">Construction timeline</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="text-4xl font-light text-[#234D7E] mb-2">₹22Cr</div>
                            <div className="text-sm text-gray-600">Total project value</div>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p>
                            <strong>The Client:</strong> A returning NRI entrepreneur who'd lived in Dubai and Singapore.
                            Wanted "that level" of luxury but adapted for Lucknow living. Three generations under one roof.
                        </p>

                        <div className="bg-white p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                            <p className="mb-4">
                                Luxury standards in Lucknow are honestly 5-7 years behind Mumbai/Delhi. Finding craftsmen who
                                could execute flawless plaster mouldings? Suppliers who had real Calacatta marble (not Pakistani
                                lookalikes)? That was the hard part.
                            </p>
                            <p>
                                We brought in specialists from Mumbai for critical work. Cost an extra ₹80 lakhs. Client didn't
                                even blink because he understood: local skills are great for most things, but ultra-luxury needs
                                specific expertise.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">What Made It Special</h3>
                            <ul className="space-y-2">
                                <li>• Triple-height entrance with a custom 15-foot chandelier (took 4 months to get from Italy)</li>
                                <li>• Temperature-controlled wine cellar with glass walls (holds 500 bottles)</li>
                                <li>• Infinity pool with underwater speakers and mood lighting that actually looks good</li>
                                <li>• Separate 2BHK staff quarters that's nicer than most people's main homes</li>
                                <li>• Full Lutron automation (₹45 lakhs just for lighting and curtains — worth every rupee)</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-[#234D7E] pl-6 italic">
                            "We interviewed 7 architecture firms. Trygve was the only one that told us what WOULDN'T work,
                            not just what we wanted to hear. That honesty is why we signed." <br />
                            <span className="text-sm not-italic">— Client testimonial (name withheld for privacy)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Won't Get */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-light mb-8">What We Don't Do</h2>

                    <p className="text-lg text-gray-700 mb-8">
                        Being clear about what we're not good at saves everyone time:
                    </p>

                    <div className="space-y-6 text-gray-700">
                        <div className="border-l-4 border-red-400 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Rush Projects</h3>
                            <p>
                                "We need to move in within 12 months" — can't help you. Quality luxury takes 18+ months. Period.
                                If you're on a deadline, there are faster firms out there.
                            </p>
                        </div>

                        <div className="border-l-4 border-red-400 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Budget Luxury</h3>
                            <p>
                                Below ₹8 crore total project cost, we're honestly overkill. You'll get better value from mid-tier
                                firms. Our pricing model assumes certain quality baselines that don't make sense at lower budgets.
                            </p>
                        </div>

                        <div className="border-l-4 border-red-400 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Extreme Minimalism</h3>
                            <p>
                                All-white concrete boxes with exposed everything? Not our aesthetic. We do contemporary luxury
                                with warmth, texture, richness. If you want industrial chic, we'll recommend someone better suited.
                            </p>
                        </div>

                        <div className="border-l-4 border-red-400 pl-6">
                            <h3 className="text-xl font-semibold mb-2">Multiple Simultaneous Projects</h3>
                            <p>
                                We take 3-4 luxury projects per year. That's it. If we're at capacity, you'll wait 4-6 months
                                for a slot. We don't scale luxury.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Luxury Client Testimonials */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-12 text-center">Testimonials from Our Clients</h2>

                    <div className="space-y-8">
                        <div className="bg-white p-10 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex items-start mb-4">
                                <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
                            </div>
                            <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                                "After building homes in Mumbai and Dubai, I had very specific expectations for our Lucknow estate.
                                Trygve didn't just meet them — they educated us on what would actually work in this climate versus
                                what looks good in magazines. The ₹18 crore investment was managed with complete transparency. Every
                                expense was justified, every decision explained."
                            </p>
                            <div className="text-sm text-gray-600">
                                <strong>Name Withheld (NRI Business Owner)</strong><br />
                                25,000 sq ft Estate, Gomti Nagar | ₹18 Cr | Completed: 2024
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex items-start mb-4">
                                <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
                            </div>
                            <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                                "We interviewed 7 architecture firms before selecting Trygve. What stood out wasn't their portfolio
                                (everyone showed good photos) but their honesty. They told us which imported materials would fail in
                                Lucknow's humidity and suggested better alternatives. That saved us lakhs in future maintenance."
                            </p>
                            <div className="text-sm text-gray-600">
                                <strong>Mr. & Mrs. Khanna</strong><br />
                                Luxury Penthouse Renovation | ₹4.5 Cr | Completed: 2023
                            </div>
                        </div>

                        <div className="bg-white p-10 rounded-lg border-l-4 border-[#234D7E]">
                            <div className="flex items-start mb-4">
                                <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
                            </div>
                            <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                                "The level of detail was remarkable. They specified the exact Calacatta Gold variant, vetted the
                                Italian supplier, and flew someone to Bangalore to inspect our custom chandelier before shipping.
                                This attention to detail throughout 19 months of construction is why our home looks exactly like
                                the renders — which never happens with other architects."
                            </p>
                            <div className="text-sm text-gray-600">
                                <strong>Dr. S. Mehta (Physician)</strong><br />
                                Modern Villa with Private Practice | ₹12 Cr | Completed: 2023
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Luxury FAQ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-light mb-12 text-center">Luxury Architecture FAQs</h2>

                    <div className="space-y-8">
                        {[
                            {
                                q: "What's the minimum budget for a luxury architecture project in Lucknow?",
                                a: "Realistically, ₹8-10 crore minimum for a true luxury home (land + construction). You can build something nice for less, but ultra-luxury features, imported materials, and bespoke everything requires this baseline. Our average project is ₹15-20 crore."
                            },
                            {
                                q: "How long does a luxury villa actually take to complete?",
                                a: "Plan for 24 months minimum from first meeting to move-in. Design: 6 months (we don't rush this), Approvals: 2-3 months, Construction: 14-16 months. Anyone promising faster is cutting corners. Quality craftsmanship can't be rushed."
                            },
                            {
                                q: "Do you source materials internationally?",
                                a: "Yes, we have direct relationships with suppliers in Italy (marble, tiles), Germany (fixtures), and Japan (home automation). We handle import logistics, customs, and quality checks. Costs 20-30% more than local but the quality difference is stark."
                            },
                            {
                                q: "Can we make changes during construction?",
                                a: "Minor changes, yes. Major layout changes after construction starts? That's expensive and delays the project. This is why we spend 6 months in design — to get everything right before breaking ground. But we've accommodated reasonable requests."
                            },
                            {
                                q: "How is luxury architecture different from regular architecture?",
                                a: "It's not just more expensive materials. It's bespoke everything — custom furniture, one-of-a-kind fixtures, tailored lighting schemes. We coordinate 15-20 specialist vendors vs 5-6 for standard homes. Every detail is considered, nothing is off-the-shelf."
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
                            Not ready for ultra-luxury? Explore our other services:
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/services/architects-in-lucknow" className="text-[#234D7E] hover:underline">
                                General Architecture Services →
                            </Link>
                            <Link href="/services/architecture-firms-lucknow" className="text-[#234D7E] hover:underline">
                                Full-Service Architecture Firm →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Script id="luxury-faq-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What's the minimum budget for a luxury architecture project in Lucknow?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Realistically, ₹8-10 crore minimum for a true luxury home (land + construction). You can build something nice for less, but ultra-luxury features, imported materials, and bespoke everything requires this baseline. Our average project is ₹15-20 crore."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does a luxury villa actually take to complete?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Plan for 24 months minimum from first meeting to move-in. Design: 6 months, Approvals: 2-3 months, Construction: 14-16 months. Quality craftsmanship cannot be rushed."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How is luxury architecture different from regular architecture?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "It's bespoke everything — custom furniture, one-of-a-kind fixtures, tailored lighting schemes. We coordinate 15-20 specialist vendors vs 5-6 for standard homes. Every detail is considered, nothing is off-the-shelf."
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
                    <span className="font-semibold text-black">Luxury Architecture Design</span>
                </li>
            </ol>
        </nav>
    );
}
