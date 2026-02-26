import Image from "next/image";
import Link from "next/link";
import { FiHome, FiChevronRight, FiMapPin, FiFileText, FiDollarSign, FiCheckCircle } from "react-icons/fi";
import Script from "next/script";

export const metadata = {
    title: "The Ultimate Guide to Building a House in Lucknow (2026)",
    description:
        "Everything you need to know about building a house in Lucknow - from LDA approvals, construction costs, hiring architects, to finding the best builders.",
    alternates: {
        canonical: "/the-ultimate-guide-to-building-in-lucknow",
    },
    openGraph: {
        title: "Building a House in Lucknow | Ultimate Guide",
        description: "The complete 2026 playbook for LDA map approvals, architecture costs, and turnkey construction in Lucknow.",
        url: "https://trygvestudio.com/the-ultimate-guide-to-building-in-lucknow",
        images: [
            {
                url: "https://trygvestudio.com/images/lucknow-building-guide.jpg",
                width: 1200,
                height: 630,
                alt: "The Ultimate Guide to Building a House in Lucknow",
            },
        ],
    },
};

export default function PillarPageLucknowBuilding() {
    return (
        <main className="min-h-screen bg-[#F4F1EC] text-gray-900 pb-24">
            <Script id="article-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: "The Ultimate Guide to Building a House in Lucknow (2026)",
                    description: "A comprehensive guide on LDA rules, construction rates, and architectural design for building a home in Lucknow.",
                    author: {
                        "@type": "Organization",
                        name: "Trygve Studio Private Limited",
                        url: "https://trygvestudio.com"
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "Trygve Studio",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://trygvestudio.com/logo.png"
                        }
                    },
                    datePublished: "2026-02-24",
                    dateModified: "2026-02-24"
                })}
            </Script>
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
                <div className="inline-block px-4 py-2 bg-[#234D7E]/10 text-[#234D7E] rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                    Comprehensive Details
                </div>
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                    The Ultimate Guide to <br className="hidden md:block" /> Building a Home in Lucknow
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    From navigating <strong className="text-gray-900">LDA approvals</strong> to understanding the nuances of <strong className="text-gray-900">2026 construction costs</strong>.
                    Everything you need to know before you lay the first brick.
                </p>
            </section>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_350px] gap-12 mt-8">
                {/* Main Content Area */}
                <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg prose-blue max-w-none">
                    <p className="lead text-2xl text-gray-600 font-light mb-8">
                        Building a house in Lucknow has changed dramatically in the past five years. With expanding urban boundaries into areas like Gomti Nagar Extension and Shaheed Path, navigating the local real estate and construction landscape requires expert, local knowledge.
                    </p>

                    <h2 className="text-3xl font-semibold mt-12 mb-6 text-[#234D7E] border-b pb-4">1. Understanding Construction Costs in Lucknow (2026)</h2>
                    <p>
                        The most common question we receive at Trygve Studio is: <em>"How much will it cost to build my house?"</em>
                        While there isn't a single answer, standard turnkey construction in Lucknow currently starts at an average of <strong>₹1,550 per sq.ft</strong> for A-class construction.
                    </p>
                    <p>However, rates fluctuate based on material quality, local labor availability, and location.</p>

                    <div className="bg-[#F4F1EC] p-6 rounded-xl my-6 not-prose border-l-4 border-[#234D7E]">
                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><FiCheckCircle className="text-[#234D7E]" /> Deep Dive</h4>
                        <p className="text-gray-700 mb-4">Want the exact breakdown per square foot for standard vs. premium finishes in 2026?</p>
                        <Link href="/blogs/house-construction-cost-lucknow-2026" className="text-[#234D7E] font-medium hover:underline flex items-center gap-1">
                            Read: Current House Construction Costs in Lucknow <FiChevronRight />
                        </Link>
                    </div>

                    <h2 className="text-3xl font-semibold mt-12 mb-6 text-[#234D7E] border-b pb-4">2. The LDA Approval Process</h2>
                    <p>
                        The Lucknow Development Authority (LDA) has strict bylaws governing setbacks, FAR (Floor Area Ratio), and maximum heights. Ignorance of these rules can lead to heavy compounding fines or demolition notices.
                    </p>
                    <p>
                        Securing a map approval requires structural drawings, ownership proofs, and adherence to the latest 2026 guidelines. It's highly recommended to use an architect who understands the local civic body.
                    </p>

                    <div className="bg-[#F4F1EC] p-6 rounded-xl my-6 not-prose border-l-4 border-yellow-600">
                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><FiFileText className="text-yellow-700" /> Essential Reading</h4>
                        <p className="text-gray-700 mb-4">Need a step-by-step checklist of documents required for LDA Maps?</p>
                        <Link href="/blogs/lda-map-approval" className="text-yellow-800 font-medium hover:underline flex items-center gap-1">
                            Read: The Complete Checklist for LDA Map Approvals <FiChevronRight />
                        </Link>
                    </div>

                    <h2 className="text-3xl font-semibold mt-12 mb-6 text-[#234D7E] border-b pb-4">3. Hiring the Right Architect</h2>
                    <p>
                        A good architect doesn't just draw maps; they manage light, ventilation, spatial efficiency, and the emotional resonance of your home. In Lucknow, architectural fees can be structured as lumpsum, percentage of construction, or per-square-foot.
                    </p>

                    <div className="bg-[#F4F1EC] p-6 rounded-xl my-6 not-prose border-l-4 border-green-600">
                        <h4 className="font-semibold text-lg flex items-center gap-2 mb-2"><FiDollarSign className="text-green-700" /> Compare Rates</h4>
                        <p className="text-gray-700 mb-4">Are you being overcharged by your architect?</p>
                        <Link href="/blogs/how-much-do-architects-charge-in-lucknow" className="text-green-800 font-medium hover:underline flex items-center gap-1">
                            Read: How Much Do Architects Charge in Lucknow? <FiChevronRight />
                        </Link>
                    </div>

                    <h2 className="text-3xl font-semibold mt-12 mb-6 text-[#234D7E] border-b pb-4">4. Turnkey Construction vs. Self-Managed</h2>
                    <p>
                        You essentially have two choices when building: manage the daily procurement of cement, steel, and labor yourself, or hand the project over to a Turnkey Construction company like Trygve Studio. While self-management appears cheaper initially, material wastage and delays often negate savings.
                    </p>
                    <ul className="pl-6 space-y-2 mt-4">
                        <li><strong>Turnkey:</strong> Fixed budget, single point of contact, guaranteed timelines.</li>
                        <li><strong>Self-Managed:</strong> High daily involvement, risk of pilferage, fluid budget.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold mt-12 mb-6 text-[#234D7E] border-b pb-4">Calculate Your Custom Budget</h2>
                    <p>
                        Every plot and family requirement is unique. Instead of relying on approximations, use our custom Lucknow price calculator to get an instant budget estimate tailored to your exact plot size, location, and desired finish quality.
                    </p>

                    <div className="text-center mt-8 mb-4 not-prose">
                        <Link
                            href="/price-calculator"
                            className="inline-flex items-center gap-2 bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Open the 2026 Price Calculator <FiChevronRight />
                        </Link>
                    </div>

                    <hr className="my-12 border-gray-200" />

                    <h3>Why Trygve Studio?</h3>
                    <p>
                        At Trygve Studio, we are an ISO-certified Architecture and Turnkey Construction firm. With over 200+ successful projects across Lucknow and Northern India, we bring transparency, ethical engineering, and stunning aesthetics to every home we build.
                    </p>
                    <p className="not-prose mt-6">
                        <Link href="/contact-us" className="text-[#234D7E] font-medium hover:underline text-lg">
                            Book a Free Consultation with our Principal Architects →
                        </Link>
                    </p>
                </article>

                {/* Sidebar / Quick Links */}
                <aside className="space-y-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-8">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <FiMapPin className="text-[#234D7E]" /> Quick Navigation
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services/architects-in-lucknow" className="block p-4 rounded-xl bg-gray-50 hover:bg-[#234D7E]/5 hover:text-[#234D7E] transition-colors border border-transparent hover:border-[#234D7E]/20">
                                    <div className="font-medium mb-1">Architecture Services</div>
                                    <div className="text-sm text-gray-500">View our design philosophy</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/interior-design-lucknow" className="block p-4 rounded-xl bg-gray-50 hover:bg-[#234D7E]/5 hover:text-[#234D7E] transition-colors border border-transparent hover:border-[#234D7E]/20">
                                    <div className="font-medium mb-1">Interior Design</div>
                                    <div className="text-sm text-gray-500">Turnkey interior solutions</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/luxury-architecture-design-lucknow" className="block p-4 rounded-xl bg-gray-50 hover:bg-[#234D7E]/5 hover:text-[#234D7E] transition-colors border border-transparent hover:border-[#234D7E]/20">
                                    <div className="font-medium mb-1">Luxury Homes</div>
                                    <div className="text-sm text-gray-500">Premium estates & villas</div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="block p-4 rounded-xl bg-gray-50 hover:bg-[#234D7E]/5 hover:text-[#234D7E] transition-colors border border-transparent hover:border-[#234D7E]/20">
                                    <div className="font-medium mb-1">Our Portfolio</div>
                                    <div className="text-sm text-gray-500">Browse completed projects</div>
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h4 className="font-semibold mb-4">Have specific questions?</h4>
                            <Link href="/contact-us" className="bg-[#234D7E] text-white block text-center py-3 rounded-xl font-medium hover:bg-[#1a3a60] transition-colors">
                                Contact Experts
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}

function Breadcrumbs() {
    return (
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 py-6 border-b border-gray-200/50 mb-0">
            <ol className="flex items-center space-x-2 text-[14px] text-gray-500">
                <li className="flex items-center">
                    <Link href="/" className="flex items-center hover:text-black transition-colors">
                        <FiHome className="mr-1.5" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <FiChevronRight className="text-gray-300" />
                    <span className="font-semibold text-black">Ultimate Guide</span>
                </li>
            </ol>
        </nav>
    );
}
