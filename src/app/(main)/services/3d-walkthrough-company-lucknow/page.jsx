import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";
import logo from "@/assets/logo.png";
import Script from "next/script";

export const metadata = {
    title: "Award-Winning 3D Walkthrough Company in Lucknow | 2026 Visualization",
    description:
        "Experience Lucknow's most advanced 3D walkthrough & architectural visualization studio. Professional 3D rendering, VR tours & cinematic 4K animations for developers. ISO certified.",
    alternates: {
        canonical: "/services/3d-walkthrough-company-lucknow",
    },
    openGraph: {
        title: "Best 3D Walkthrough Company in Lucknow | High-End Visualization",
        description:
            "Cinematic 4K 3D walkthroughs and photorealistic renderings. Help your buyers visualize the dream before construction starts.",
        url: "https://trygvestudio.com/services/3d-walkthrough-company-lucknow",
        images: [
            {
                url: "https://trygvestudio.com/images/3d-walkthrough-lucknow.jpg",
                width: 1200,
                height: 630,
                alt: "3D Walkthrough Services in Lucknow - Trygve Studio",
            },
        ],
    },
};

export default function WalkthroughCompanyLucknow() {
    return (
        <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
            <Script id="service-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "3D Walkthrough and Architectural Visualization",
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
                    "description": "Premium 3D walkthrough animation and architectural visualization studio in Lucknow. Delivering hyper-realistic renders for real estate developers and designers."
                })}
            </Script>
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1558223108-630d75e4e73f"
                        alt="3D Walkthrough Company in Lucknow - Trygve Studio"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>

                <div className="relative z-10 text-center max-w-6xl px-6">
                    <h1 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
                        3D Walkthrough
                        <br />
                        <span className="font-normal text-3xl md:text-5xl block mt-2">Company in Lucknow</span>
                    </h1>

                    {/* CRO Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">✓ Cinematic Quality</span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">✓ B2B Visualization</span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">✓ ISO Certified</span>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                        Don't just show blueprints. Let your clients experience their future space with
                        Lucknow's most advanced 3D walkthough and photorealistic rendering studio.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact-us#project-form"
                            className="bg-[#F4F1EC] text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300"
                        >
                            Get Custom Quote
                        </Link>
                        <Link
                            href="/projects"
                            className="border border-white text-white px-8 py-4 text-lg font-medium hover:bg-[#F4F1EC] hover:text-gray-900 transition-all duration-300"
                        >
                            Explore Renders
                        </Link>
                    </div>
                </div>
            </section>

            {/* B2B Overview */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-light mb-6">
                                Visualize Before You Build
                            </h2>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                                For real estate developers and architectural firms in Lucknow, high-quality
                                visualization isn't a luxury—it's a sales tool. We bridge the gap between
                                complex technical drawings and a buyer's emotional connection.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Hyper-Realistic Textures:</strong> Precision lighting and physics-based materials.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Fast Turnaround:</strong> High-performance render farm for meeting developer deadlines.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>Marketing Ready:</strong> Cinematic 4K exports for social media and site offices.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">✓</span>
                                    <p className="text-gray-700"><strong>VR Integration:</strong> Virtual Reality tours for an immersive "walk-in" experience.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[600px] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                            <div className="text-center p-8">
                                <p className="text-gray-400 font-light mb-4 italic">Showcase high-end 3D Render here</p>
                                <Image
                                    src={logo}
                                    alt="Trygve Studio Rendering Quality"
                                    width={300}
                                    height={100}
                                    className="grayscale opacity-50"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Visualization Services */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-6">
                            Beyond Basic 3D
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            Specialized rendering services designed for Lucknow's real estate market
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Architectural Walkthroughs",
                                desc: "Cinematic, smooth-transition videos moving through every room and level.",
                                icon: "🎥"
                            },
                            {
                                title: "Exterior Photorealistic Rendering",
                                desc: "Day/Night mode renders with accurate landscaping and environment lighting.",
                                icon: "🌆"
                            },
                            {
                                title: "Interior Concept Visualization",
                                desc: "Showcase furniture, lighting, and finishes to prospective buyers.",
                                icon: "🛋️"
                            },
                            {
                                title: "VR Virtual Tours",
                                desc: "360-degree interactive tours for websites and site-office VR headsets.",
                                icon: "🕶️"
                            },
                            {
                                title: "360° Interior Panoramas",
                                desc: "Perfect for mobile-friendly property tours on WhatsApp and Web.",
                                icon: "🔄"
                            },
                            {
                                title: "Site Plan 3D View",
                                desc: "Birds-eye view of your layout, township, or commercial complex.",
                                icon: "🗺️"
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

            {/* Comparison Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-8 text-center">Why Partner With Trygve Visualization?</h2>

                    <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                        In an industry full of freelance '3D makers', Trygve Studio brings architectural
                        rigor to every render.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Freelance 3D Operators</h3>
                            <p className="text-gray-700 mb-4">
                                <strong>The Reality:</strong> They often lack structural understanding. They put pillars where they shouldn't be, use inaccurate scale, and struggle with complex lighting like the Lucknow humidity/sun path.
                            </p>
                            <p className="text-gray-700">
                                <strong>The Result:</strong> Buyers get confused when the real building looks different from the render.
                            </p>
                        </div>

                        <div className="bg-gray-200 p-8 rounded-lg border-2 border-gray-900">
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Trygve B2B Studio</h3>
                            <p className="text-gray-700 mb-4">
                                <strong>Our Approach:</strong> Every walkthrough is supervised by a licensed architect. We ensure the scale is 1:1, the materials are actually sourceable in Lucknow (Kajari, Italian Marble), and the lighting is physically accurate.
                            </p>
                            <p className="text-gray-700">
                                <strong>The Result:</strong> High-trust marketing assets that lead to faster pre-bookings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visualization Pipeline */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-8 text-center">Our 4-Step Rendering Pipeline</h2>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg border-l-4 border-gray-900">
                            <h3 className="text-xl font-semibold">Stage 1: Wireframe & Scale</h3>
                            <p className="text-gray-700">
                                We import your CAD/BIM data. We verify structural accuracy before adding any "beauty."
                                This ensures the 3D model is a digital twin of your future building.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-gray-900">
                            <h3 className="text-xl font-semibold">Stage 2: Material Application</h3>
                            <p className="text-gray-700">
                                We apply textures. Not just "grey wall", but specific concrete finishes, wood grains,
                                and glass reflections that match your project specs.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-gray-900">
                            <h3 className="text-xl font-semibold">Stage 3: Lighting & Atmosphere</h3>
                            <p className="text-gray-700">
                                We set the mood. Golden hour for luxury villas, high-impact clinical light for commercial
                                showrooms. This is where the emotional connection happens.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
                            <h3 className="text-xl font-semibold">Stage 4: Post-Production & Delivery</h3>
                            <p className="text-gray-700">
                                Final color grading and cinematic music addition for walkthroughs. We deliver in
                                multiple formats (Vertical for Reels, Horizontal for TV).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials for Developers */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-light mb-12 text-center">Built for Real Estate Success</h2>

                    <div className="bg-[#F4F1EC] p-10 rounded-lg">
                        <p className="text-2xl text-gray-800 italic leading-relaxed mb-6">
                            "Trygve's 3D walkthrough for our township in Gomti Nagar was the primary reason we
                            hit 70% pre-bookings within the first month. Their attention to Lucknow's local materials
                            made the renders look 'lived-in' and trustworthy."
                        </p>
                        <div className="text-gray-600">
                            <strong>Director, Leading Real Estate Group</strong><br />
                            Township Project, Lucknow
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-light mb-12 text-center">Visualization FAQs</h2>

                    <div className="space-y-8">
                        {[
                            {
                                q: "What is the typical cost of a 3D walkthrough in Lucknow?",
                                a: "Cost depends on the project scope and animation length. In 2026, premium 3D animations range from ₹40,000 to ₹1.5 Lakhs for high-end walkthroughs. Static photorealistic renders typically start from ₹7,000 per view."
                            },
                            {
                                q: "How long does it take to create a photorealistic render?",
                                a: "For a single view, we usually take 3-5 business days. A complete 2-minute architectural walkthrough takes 15-20 days including modeling, texturing, and final rendering."
                            },
                            {
                                q: "Can you work from 2D AutoCAD files?",
                                a: "Yes. Most of our projects start with 2D CAD files. Our team converts these into 3D digital twins before beginning the visualization process."
                            },
                            {
                                q: "Do you provide VR files for mobile and headsets?",
                                a: "Absolutely. We can deliver interactive 360-degree tours that work on any smartphone or high-end VR headsets like Oculus/Quest."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.q}</h3>
                                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
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
                            "name": "What is the typical cost of a 3D walkthrough in Lucknow?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "In 2026, premium 3D animations range from ₹40,000 to ₹1.5 Lakhs. Static photorealistic renders typically start from ₹7,000 per view."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does it take to create a photorealistic render?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "For a single view, we usually take 3-5 business days. A complete walkthrough takes 15-20 days."
                            }
                        }
                    ]
                })}
            </Script>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-light mb-6">
                        Impress Your Investors
                    </h2>
                    <p className="text-xl font-light mb-10 opacity-80">
                        High-end visualization for developers, architects, and discerning homeowners.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-[#F4F1EC] text-gray-900 px-10 py-4 text-lg font-medium hover:bg-white transition-all"
                    >
                        Request a Sample & Quote
                    </Link>
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
                    <span className="font-semibold text-black">3D Walkthrough Company Lucknow</span>
                </li>
            </ol>
        </nav>
    );
}
