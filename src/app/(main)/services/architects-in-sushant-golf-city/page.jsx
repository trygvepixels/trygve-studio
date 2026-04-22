import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";
import logo from "@/assets/logo.png";
import Script from "next/script";

export const metadata = {
    title: "Best Architects in Sushant Golf City, Lucknow | Luxury Villa Design",
    description:
        "Looking for top architects in Sushant Golf City, Lucknow? Trygve Studio offers premium villa design, sustainable architecture, and turnkey construction services in Ansal API.",
    alternates: {
        canonical: "/services/architects-in-sushant-golf-city",
    },
};

export default function ArchitectsSushantGolfCity() {
    return (
        <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
            <Script id="local-schema-ansal" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Trygve Studio - architects in Sushant Golf City",
                    "url": "https://trygvestudio.com/services/architects-in-sushant-golf-city",
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "26.7865",
                        "longitude": "81.0116"
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Sushant Golf City",
                        "addressLocality": "Lucknow",
                        "addressRegion": "Uttar Pradesh",
                        "postalCode": "226030",
                        "addressCountry": "IN"
                    }
                })}
            </Script>

            {/* Hero Section */}
            <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden pt-24">
                <Breadcrumbs />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7"
                        alt="Architects in Sushant Golf City Lucknow - Trygve Studio"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="text-3xl md:text-5xl font-light text-white mb-5 leading-tight">
                        Architects in <br />
                        <span className="font-bold">Sushant Golf City</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
                        Designing sustainable, high-end lifestyle spaces in Lucknow's premier green township.
                    </p>
                    <Link href="/contact-us" className="bg-[#234D7E] text-white px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-all">
                        Consult Our Principal Architect
                    </Link>
                </div>
            </section>

            {/* Neighborhood Values */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35"
                            alt="Sustainable Architecture Lucknow"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-light mb-6">Green Design for a Green Township</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Sushant Golf City (Ansal API) represents a shift towards eco-conscious living.
                            As local architecture experts, we specialize in maximizing green space and
                            integrating sustainable energy systems (solar, greywater) into luxury villa designs.
                        </p>
                        <ul className="space-y-4 text-gray-700 mb-8">
                            <li className="flex items-center gap-3">✓ <strong>Golf View Architecture:</strong> Designing facades that maximize panoramic township views.</li>
                            <li className="flex items-center gap-3">✓ <strong>Zero-Energy Concepts:</strong> Implementation of passive cooling and solar integration.</li>
                            <li className="flex items-center gap-3">✓ <strong>Turnkey Project Management:</strong> Hassle-free construction oversight within Ansal API guidelines.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Portfolio Hint */}
            <section className="py-20 px-6 bg-gray-50 text-center">
                <h2 className="text-3xl font-light mb-12">Recent Projects in Sushant Golf City</h2>
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-xs font-bold uppercase tracking-widest">View Project</span>
                            </div>
                            <Image
                                src={`https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop&sig=${i}`}
                                alt="Trygve Project Lucknow"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                <Link href="/projects" className="inline-block mt-12 text-[#234D7E] font-bold border-b-2 border-[#234D7E] pb-1">
                    Explore Our Full Portfolio →
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
                    <span className="font-semibold text-white">Architects in Sushant Golf City</span>
                </li>
            </ol>
        </nav>
    );
}
