import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";
import logo from "@/assets/logo.png";
import Script from "next/script";

export const metadata = {
    title: "Best Architects in Gomti Nagar Lucknow | Luxury Interior Design 2026",
    description:
        "Top-rated architects in Gomti Nagar, Lucknow. Expert LDA map approvals for Gomti Nagar Extension, luxury villa designs & premium interior execution. 2026 Updated.",
    alternates: {
        canonical: "/services/architects-in-gomti-nagar",
    },
};

export default function ArchitectsGomtiNagar() {
    return (
        <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
            <Script id="local-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Trygve Studio - architects in Gomti Nagar",
                    "image": "https://trygvestudio.com/logo.png",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Gomti Nagar",
                        "addressLocality": "Lucknow",
                        "addressRegion": "Uttar Pradesh",
                        "postalCode": "226010",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "26.8524",
                        "longitude": "80.9992"
                    },
                    "url": "https://trygvestudio.com/services/architects-in-gomti-nagar"
                })}
            </Script>

            {/* Hero Section */}
            <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden pt-24">
                <Breadcrumbs />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
                        alt="Architects in Gomti Nagar Lucknow - Trygve Studio"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="text-3xl md:text-5xl font-light text-white mb-5 leading-tight">
                        Architects in <br />
                        <span className="font-bold">Gomti Nagar</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
                        Specialized architecture and interior design solutions for Lucknow's premium residential hub.
                    </p>
                    <Link href="/contact-us" className="bg-white text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all">
                        Schedule a Site Visit
                    </Link>
                </div>
            </section>

            {/* Local Context */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-light mb-6">Building the Future of Gomti Nagar</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Gomti Nagar and Gomti Nagar Extension are the most sought-after residential areas in Lucknow.
                            However, building here comes with specific LDA (Lucknow Development Authority) norms
                            and soil conditions near the Gomti riverfront.
                        </p>
                        <ul className="space-y-4 text-gray-700 mb-8">
                            <li className="flex items-center gap-3">✓ <strong>LDA Approval Experts:</strong> Fast-track your map approvals in Gomti Nagar.</li>
                            <li className="flex items-center gap-3">✓ <strong>Riverfront Structural Design:</strong> Specialized foundations for high-water-table areas.</li>
                            <li className="flex items-center gap-3">✓ <strong>Luxury Villa Specialists:</strong> Over 25+ villas designed in Gomti Nagar Extension.</li>
                        </ul>
                        <div className="bg-[#F4F1EC] p-6 rounded-lg border-l-4 border-gray-900 italic">
                            "Trygve Studio transformed our corner plot in Vibhuti Khand into a modern masterpiece.
                            Their understanding of local plot orientations was impressive."
                        </div>
                    </div>
                    <div className="relative h-[500px] border border-gray-100 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                            alt="Interior Design Gomti Nagar"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Neighborhood Services */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-light mb-4">Our Local Expertise</h2>
                    <p className="text-gray-500">Tailored architectural services for specific Gomti Nagar sectors</p>
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Residential Villas", area: "Gomti Nagar Extension", desc: "Modern, open-plan villas with integrated landscaping." },
                        { title: "Commercial Offices", area: "Vibhuti Khand", desc: "Efficient, high-tech office spaces for Lucknow's business hub." },
                        { title: "Luxury Renovations", area: "Patrakar Puram", desc: "Updating classic Gomti Nagar homes with modern amenities." }
                    ].map((s, i) => (
                        <div key={i} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold mb-1">{s.title}</h3>
                            <p className="text-[#234D7E] text-sm font-semibold mb-4 uppercase tracking-wider">{s.area}</p>
                            <p className="text-gray-600 font-light">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gray-900 text-white text-center">
                <h2 className="text-4xl font-light mb-6">Own a Plot in Gomti Nagar?</h2>
                <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">Get a free design consultation and budget estimate for your dream bungalow today.</p>
                <Link href="/contact-us" className="inline-block bg-[#F4F1EC] text-gray-900 px-10 py-4 font-bold rounded-lg hover:bg-white transition-all">
                    Start Your Project
                </Link>
            </section>
        </main>
    );
}

function Breadcrumbs() {
    return (
        <nav aria-label="Breadcrumb" className="absolute top-6 left-0 right-0 z-20 max-w-7xl mx-auto px-6">
            <ol className="inline-flex flex-wrap items-center gap-2 rounded-full bg-black/20 backdrop-blur-md px-4 py-2 text-[14px] text-white/85">
                <li className="flex items-center">
                    <Link href="/" className="flex items-center hover:text-white transition-colors">
                        <FiHome className="mr-1.5" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <FiChevronRight className="text-white/50" />
                    <span className="font-semibold text-white">Architects in Gomti Nagar</span>
                </li>
            </ol>
        </nav>
    );
}
