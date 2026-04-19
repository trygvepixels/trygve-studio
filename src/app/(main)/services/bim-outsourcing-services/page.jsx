import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export const metadata = {
    title: "BIM Outsourcing Services | Revit Modeling & Drafting Support | Trygve Studio",
    description:
        "Scale your architecture firm with precision BIM outsourcing — ISO-certified Revit modeling (LOD 100–500), CAD documentation, clash detection and VDC support. 24-hr turnaround for US, UK & UAE firms.",
    alternates: {
        canonical: "https://trygvestudio.com/services/bim-outsourcing-services",
    },
};

const COMPETENCIES = [
    {
        title: "Architectural BIM (LOD 100–500)",
        items: [
            "Schematic Design to Design Development (SD/DD)",
            "Construction Documentation (CD) Production",
            "BIM Content & Family Creation (Revit)",
            "Clash Detection & BIM Coordination",
        ],
    },
    {
        title: "Drafting & Asset Management",
        items: [
            "As-Built Drawing Generation from Point Clouds",
            "Millwork and Joinery Detailing",
            "Landscape Architecture Drafting",
            "Floor Plan Conversions (PDF to CAD/BIM)",
        ],
    },
];

const VALUE_PROPS = [
    {
        title: "24/7 Production Cycle",
        desc: "Leverage time-zone differences. Send us redlines at night, receive completed drafts by morning.",
    },
    {
        title: "US / UK / UAE Compliance",
        desc: "Expertise in AIA standards, RIBA protocols, and Imperial/Metric precision across regions.",
    },
    {
        title: "40–60% Cost Reduction",
        desc: "Significantly lower your overhead without compromising on architectural quality or timelines.",
    },
];

const SOFTWARE = [
    "Autodesk Revit 2024", "AutoCAD", "Navisworks", "ArchiCAD",
    "Rhino 3D", "Lumion", "Enscape", "BIM 360", "Bluebeam Revu",
];

export default function BIMOutsourcingServices() {
    return (
        <main className="min-h-screen bg-white text-gray-900">

            {/* Hero */}
            <section className="bg-[#F4F1EC] pt-28 pb-16 px-5">
                <div className="max-w-7xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        Global Architecture Partner
                    </span>
                    <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-5 leading-tight max-w-3xl">
                        BIM Outsourcing &amp; <br className="hidden sm:block" />
                        Revit Drafting Services
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mb-8 leading-relaxed">
                        We act as an extension of your design team. Delivering precision Revit models, Digital Twins and Construction Documentation with localised code compliance for US, UK and Middle East.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#101010] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-all"
                        >
                            Book a Capabilities Briefing
                            <FiArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-black/5 transition-all"
                        >
                            Review Quality Samples
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-16 px-5 border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
                    {VALUE_PROPS.map((v, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-[#F4F1EC] border border-gray-200 hover:border-blue-200 transition-all">
                            <h3 className="text-base font-semibold text-gray-900 mb-2">{v.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Competencies */}
            <section className="py-16 px-5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Core BIM Competencies</h2>
                    <p className="text-gray-500 mb-10 text-sm">
                        Industry-standard software stack: Revit 2024, AutoCAD, ArchiCAD and Bluebeam.
                    </p>
                    <div className="grid md:grid-cols-2 gap-5">
                        {COMPETENCIES.map((c, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-gray-200 bg-[#F4F1EC]">
                                <h3 className="text-base font-semibold text-gray-900 mb-5 pb-3 border-b border-gray-200">
                                    {c.title}
                                </h3>
                                <ul className="space-y-3">
                                    {c.items.map((item) => (
                                        <li key={item} className="flex gap-3 text-sm text-gray-600">
                                            <FiCheck className="text-blue-600 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="py-16 px-5 bg-[#F4F1EC] border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 text-center">How We Work</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { step: "01", label: "Brief & Standards", desc: "You share your project brief, templates and code compliance requirements." },
                            { step: "02", label: "Model Setup", desc: "We initialise the Revit project file, coordinate system and worksets per your firm standards." },
                            { step: "03", label: "Production Sprint", desc: "Daily or weekly deliverables — floor plans, 3D model, detail sheets — via shared cloud or BIM 360." },
                            { step: "04", label: "QC & Handover", desc: "Internal QA review against your checklist before final .rvt / .dwg / PDF handover." },
                        ].map((s, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 text-center">
                                <div className="text-2xl font-light text-blue-600 mb-3">{s.step}</div>
                                <h4 className="font-semibold text-gray-900 mb-2 text-sm">{s.label}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Software Stack */}
            <section className="py-14 px-5">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Software Stack</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {SOFTWARE.map((s) => (
                            <span
                                key={s}
                                className="px-3 py-1.5 rounded-full border border-gray-200 bg-[#F4F1EC] text-gray-600 text-xs font-medium hover:border-blue-200 hover:text-blue-700 transition-colors"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* NRI / Remote Section */}
            <section className="py-16 px-5 bg-[#F4F1EC] border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100 mb-5">
                        For NRIs · USA · UAE · UK
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 leading-snug">
                        Building Your Dream Home in Lucknow While Living Abroad?
                    </h2>
                    <p className="text-gray-600 mb-7 leading-relaxed">
                        We manage your entire Lucknow project remotely — from LDA sanctions and RERA compliance to construction supervision and furnished handover. Regular video updates, digital approvals, zero-stress execution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/blogs/building-home-in-lucknow-nri-guide-2026"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#101010] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-all"
                        >
                            Read the NRI Home Guide 2026
                            <FiArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-black/5 transition-all"
                        >
                            Book a Free Remote Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 px-5 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    Partner With Experience
                </h2>
                <p className="text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                    We aren&apos;t just draftsmen — we are trained architects who understand the intent behind every line.
                    Let&apos;s discuss how we can help your project meet deadlines and stay under budget.
                </p>
                <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#101010] text-white px-8 py-3.5 text-sm font-medium hover:opacity-90 transition-all shadow-sm"
                >
                    Request Pricing &amp; Turnaround Times
                    <FiArrowRight className="h-4 w-4" />
                </Link>
            </section>

        </main>
    );
}
