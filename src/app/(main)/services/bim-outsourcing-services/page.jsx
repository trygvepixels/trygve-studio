import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiGlobe, FiClock, FiShield } from "react-icons/fi";

export const metadata = {
    title: "BIM Outsourcing & Architectural Drafting Services for NRI & Global Firms | Trygve Studio",
    description:
        "High-quality BIM outsourcing and architectural drafting for international firms and NRI clients. Remote Revit modeling, CAD documentation, VDC services, and full NRI home-build management for US, UK & UAE.",
    alternates: {
        canonical: "/services/bim-outsourcing-services",
    },
};

export default function BIMOutsourcingServices() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Professional B2B Hero */}
            <section className="bg-gray-950 text-white pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-500/20">
                            <FiGlobe /> Global Architecture Partner
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Scale Your Firm with Precision <br />
                            <span className="text-blue-500 text-3xl md:text-5xl font-light">BIM & Drafting Support</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light mb-10 max-w-xl">
                            We act as an extension of your design team. Delivering RevitDigital Twins and Construction Documentation with localized code compliance for US, UK, and Middle East.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact-us" className="bg-blue-600 text-white px-8 py-4 text-lg font-bold hover:bg-blue-700 transition-all text-center">
                                Book a Capabilities Briefing
                            </Link>
                            <Link href="/projects" className="border border-white/20 text-white px-8 py-4 text-lg font-bold hover:bg-white/10 transition-all text-center">
                                Review Quality Samples
                            </Link>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10">
                        <Image
                            src="https://images.unsplash.com/photo-1541888941259-79d745bc472a"
                            alt="BIM Outsourcing Services Architecture"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* B2B Value Props */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                    {[
                        { title: "24/7 Production Cycle", icon: <FiClock />, desc: "Leverage time-zone differences. Send us redlines at night, get drafts by morning." },
                        { title: "US/UK Compliance", icon: <FiCheck />, desc: "Expertise in AIA standards, RIBA protocols, and Imperial/Metric precision." },
                        { title: "Cost Efficiency", icon: <FiShield />, desc: "Reduce overheads by 40-60% without compromising on architectural rigor." }
                    ].map((v, i) => (
                        <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:border-blue-100 transition-all group">
                            <div className="text-3xl text-blue-600 mb-6 group-hover:scale-110 transition-transform">{v.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Competencies */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Core BIM Competencies</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto italic">Industry-standard software stack: Revit 2024, AutoCAD, ArchiCAD, and Bluebeam.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-4">Architectural BIM (LOD 100-500)</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3"><FiCheck className="text-green-500 mt-1" /><span>Schematic Design to Design Development (SD/DD)</span></li>
                                <li className="flex gap-3"><FiCheck className="text-green-500 mt-1" /><span>Construction Documentation (CD) Production</span></li>
                                <li className="flex gap-3"><FiCheck className="text-green-500 mt-1" /><span>BIM Content & Family Creation (Revit)</span></li>
                                <li className="flex gap-3"><FiCheck className="text-green-500 mt-1" /><span>Clash Detection & BIM Coordination</span></li>
                            </ul>
                        </div>
                        <div className="bg-white p-10 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-4">Drafting & Asset Management</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3"><FiCheck className="text-green-500 mt-1" /><span>As-Built Drawing Generation from Point Clouds</span></li>
                                <li className="flex gap-3"><FiCheck className="text-green-500 mt-1" /><span>Millwork and Joinery Detailing</span></li>
                                <li className="flex gap-3"><FiCheck className="text-green-500 mt-1" /><span>Landscape Architecture Drafting</span></li>
                                <li className="flex gap-3"><FiCheck className="text-green-500 mt-1" /><span>Floor Plan Conversions (PDF to CAD/BIM)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* NRI Home Build Section */}
            <section className="py-24 px-6 bg-[#234D7E] text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-xs font-black uppercase tracking-widest mb-6">
                        For NRIs in USA · UAE · UK
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Building Your Dream Home in Lucknow <br />
                        <span className="text-blue-300">While Living Abroad?</span>
                    </h2>
                    <p className="text-blue-100 text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        We manage your entire Lucknow project remotely — from LDA sanctions and RERA compliance to construction supervision and furnished handover. Regular video updates, digital approvals, and zero-stress execution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/blogs/building-home-in-lucknow-nri-guide-2026" className="bg-white text-[#234D7E] px-8 py-4 text-base font-bold rounded-lg hover:bg-blue-50 transition-colors">
                            Read the NRI Home Guide 2026 →
                        </Link>
                        <Link href="/contact-us" className="border border-white/30 text-white px-8 py-4 text-base font-bold rounded-lg hover:bg-white/10 transition-colors">
                            Book a Free Remote Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Outro */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Partner With Experience</h2>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                    We aren't just draftsmen; we are trained architects who understand the intent behind the line.
                    Let's discuss how we can help your project meet deadlines and stay under budget.
                </p>
                <Link href="/contact-us" className="bg-gray-900 text-white px-12 py-5 text-xl font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl active:scale-95">
                    Request Pricing & Turnaround Times
                </Link>
            </section>
        </main>
    );
}

