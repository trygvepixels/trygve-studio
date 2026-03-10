import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FiHome, FiChevronRight, FiMapPin } from "react-icons/fi";
import logo from "@/assets/logo.png";

export const metadata = {
    title: "Architect Near Me in Lucknow | Top Local Designers",
    description:
        "Find the best 'architect near me' in Lucknow. Trygve Studio provides premium residential and commercial design services across Gomti Nagar, Aliganj, Hazratganj, and more.",
    alternates: {
        canonical: "/services/architect-near-me",
    },
};

export default function ArchitectNearMe() {
    const localities = [
        { name: "Gomti Nagar & Extension", link: "/services/architects-in-gomti-nagar" },
        { name: "Sushant Golf City", link: "/services/architects-in-sushant-golf-city" },
        { name: "Hazratganj & Mahanagar", link: "/services/architecture-firms-lucknow" },
        { name: "Aliganj & Vikas Nagar", link: "/services/architecture-firms-lucknow" },
        { name: "Indira Nagar", link: "/services/architecture-firms-lucknow" },
        { name: "Ashiyana & South City", link: "/services/architecture-firms-lucknow" },
    ];

    return (
        <main className="min-h-screen bg-[#F4F1EC] text-gray-900">
            <Script id="local-hub-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Trygve Studio - Architect Near Me",
                    "image": "https://trygvestudio.com/logo.png",
                    "url": "https://trygvestudio.com/services/architect-near-me",
                    "description": "Premium architecture and interior design services across all major localities in Lucknow.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Lucknow",
                        "addressRegion": "Uttar Pradesh",
                        "addressCountry": "IN"
                    },
                    "areaServed": localities.map(l => ({
                        "@type": "City",
                        "name": l.name.split(" ")[0] + " Lucknow"
                    })),
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5.0",
                        "reviewCount": "218"
                    }
                })}
            </Script>

            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
                        alt="Find an architect near me in Lucknow - Trygve Studio"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                        quality={85}
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
                        Find the Best <br />
                        <span className="font-bold">Architect Near You</span>
                    </h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        Trygve Studio is Lucknow's premier architecture firm, with completed projects in every major neighborhood across the city.
                    </p>
                </div>
            </section>

            {/* Localities Grid */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light mb-4">We Design Near You</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Our architects understand the specific LDA bylaws, soil conditions, and architectural vernacular of different Lucknow localities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {localities.map((loc, idx) => (
                            <Link
                                href={loc.link}
                                key={idx}
                                className="group flex items-center justify-between p-6 border border-gray-100 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all bg-gray-50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#234D7E]">
                                        <FiMapPin />
                                    </div>
                                    <span className="font-medium text-lg text-gray-800">{loc.name}</span>
                                </div>
                                <FiChevronRight className="text-gray-400 group-hover:text-gray-900 transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust CTA */}
            <section className="py-20 px-6 bg-[#234D7E] text-white text-center">
                <h2 className="text-4xl font-light mb-6">Ready to Build in Lucknow?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                    Whether you have a plot in Gomti Nagar or an office space in Hazratganj, get a free consultation today.
                </p>
                <Link href="/price-calculator" className="inline-block bg-white text-[#234D7E] px-10 py-4 font-bold rounded-lg hover:bg-gray-100 transition-all">
                    Calculate Your Construction Cost
                </Link>
            </section>
        </main>
    );
}

function Breadcrumbs() {
    return (
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-8 -mb-4 relative z-20">
            <ol className="flex items-center space-x-2 text-[14px] text-gray-200">
                <li className="flex items-center">
                    <Link href="/" className="flex items-center hover:text-white transition-colors">
                        <FiHome className="mr-1.5" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <FiChevronRight className="text-gray-300" />
                    <span>Architect Near Me</span>
                </li>
            </ol>
        </nav>
    );
}
