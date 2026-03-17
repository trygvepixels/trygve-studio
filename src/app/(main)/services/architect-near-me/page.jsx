"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { 
    FiHome, FiChevronRight, FiMapPin, FiShield, 
    FiAward, FiArrowRight, FiCheck, FiInfo, 
    FiBriefcase, FiZap, FiDownload 
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamic Imports for Performance
const LocalityGuides = dynamic(() => Promise.resolve(({ activeLocality, setActiveLocality, detailedLocalities, ca, ca3 }) => (
    <section className="py-16 md:py-24 px-6 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">The Local Expert Vault</h2>
                <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base">
                    We don't just design; we understand the geography, laws, and soil of Lucknow.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                {detailedLocalities.map((loc, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setActiveLocality(idx)}
                        className={`px-5 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all ${
                            activeLocality === idx 
                            ? "bg-[#234D7E] text-white shadow-lg shadow-blue-900/20" 
                            : "bg-white text-neutral-500 border border-neutral-200 hover:border-neutral-400"
                        }`}
                    >
                        {loc.name}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div 
                    key={activeLocality}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-2xl border border-neutral-100 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                    <div className="space-y-6 md:space-y-8">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#234D7E] text-[10px] md:text-xs font-black uppercase tracking-widest">
                            {detailedLocalities[activeLocality].usp}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                            Architectural Insights for {detailedLocalities[activeLocality].name}
                        </h3>
                        <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                            {detailedLocalities[activeLocality].content}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {detailedLocalities[activeLocality].tags.map(tag => (
                                <span key={tag} className="flex items-center gap-2 text-sm font-bold text-neutral-700 bg-neutral-100 px-4 py-2 rounded-xl">
                                    <FiCheck className="text-blue-600" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100">
                        <Image 
                            src={activeLocality === 1 ? ca3 : ca} 
                            alt={`Blueprint for ${detailedLocalities[activeLocality].name}`}
                            fill
                            className="object-cover opacity-50 contrast-125"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 pt-12 bg-gradient-to-t from-white to-transparent">
                            <div className="bg-[#234D7E] text-white p-6 rounded-2xl shadow-xl">
                                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2">Local Sanction Tip</p>
                                <p className="text-sm font-medium leading-relaxed">
                                    {activeLocality === 0 
                                        ? "Ensure stilt heights are strictly within 2.4 meters to avoid LDA clearance delays." 
                                        : "Medanta side projects require specific drainage approvals due to slightly varying soil topography."}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    </section>
)), { ssr: false });

const TrustVault = dynamic(() => Promise.resolve(({ FiShield, FiAward, FiBriefcase, FiZap, FiDownload }) => (
    <section className="py-16 md:py-24 bg-[#101010] text-white overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/20 rounded-full translate-x-1/3 translate-y-1/3 blur-[80px] md:blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-2xl mb-12 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Why Choose Us Locally?</h2>
                <p className="text-base md:text-xl text-white/60">
                    Beyond aesthetics, we bring the structural and legal integrity required for Lucknow's unique geography.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {[
                    { icon: FiShield, title: "15+ Years", text: "A collective decade and a half of navigating UP's local building codes." },
                    { icon: FiAward, title: "CoA Registered", text: "Fully licensed by the Council of Architecture and registered with IIA." },
                    { icon: FiBriefcase, title: "Turnkey Flow", text: "From initial layout to final flooring, we manage every single vendor." },
                    { icon: FiZap, title: "45-Day Sanction", text: "Optimized liaison team to minimize map approval waiting periods." },
                ].map((item, idx) => (
                    <div key={idx} className="p-6 md:p-8 rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-colors">
                        <item.icon className="text-2xl md:text-3xl text-blue-400 mb-4 md:mb-6" />
                        <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h4>
                        <p className="text-xs md:text-sm text-white/50 leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 md:mt-20 p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-white text-black flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Our Material Guide</h3>
                    <p className="text-neutral-500 text-sm md:text-base">Download our 2026 Lucknow Material Pricing & Brand Guide.</p>
                </div>
                <button className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#234D7E] text-white rounded-full font-bold flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all">
                    <FiDownload /> Download PDF
                </button>
            </div>
        </div>
    </section>
)), { ssr: false });

const FAQSection = dynamic(() => Promise.resolve(({ faqs, FiInfo }) => (
    <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">Location FAQ</h2>
                <p className="text-neutral-500 text-sm md:text-base">Answers to the most common queries from Lucknow homeowners.</p>
            </div>
            
            <div className="space-y-4 md:space-y-6">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="p-6 md:p-8 rounded-2xl md:rounded-3xl border border-neutral-100 bg-[#F9F7F4] hover:border-neutral-300 transition-all">
                        <div className="flex gap-3 md:gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#234D7E]">
                                <FiInfo className="text-sm md:text-base" />
                            </div>
                            <div>
                                <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3">{faq.q}</h4>
                                <p className="text-neutral-600 text-[13px] md:text-[15px] leading-relaxed italic border-l-2 border-blue-200 pl-4">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)), { ssr: false });

const TurnkeyBenefits = dynamic(() => Promise.resolve(({ FiCheck, FiZap, FiAward, FiShield }) => (
    <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="bg-[#234D7E] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6">
                            The Trygve Advantage
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 tracking-tight leading-tight">
                            Why Turnkey is <br /><span className="text-blue-300">Non-Negotiable</span> for You.
                        </h2>
                        
                        <div className="space-y-6 md:space-y-8">
                            {[
                                { title: "Unorganized Contractors", status: "Painful", content: "Hidden costs, ghosting vendors, and zero accountability for structural cracks.", color: "text-red-400" },
                                { title: "Trygve Turnkey Model", status: "Premium", content: "One point of contact, ISO-certified timelines, and standardized pricing audits.", color: "text-blue-400" }
                            ].map((item, idx) => (
                                <div key={idx} className={`p-6 rounded-2xl backdrop-blur-sm border ${idx === 1 ? 'bg-white/10 border-white/20' : 'bg-black/20 border-white/5'}`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${idx === 1 ? 'bg-blue-500 text-white' : 'bg-red-500/20 text-red-300'}`}>
                                            {item.status}
                                        </span>
                                    </div>
                                    <p className="text-sm opacity-70 leading-relaxed">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {[
                            { icon: FiAward, label: "ISO 9001:2015", desc: "Design Quality" },
                            { icon: FiShield, label: "5-Year", desc: "Civil Warranty" },
                            { icon: FiZap, label: "45-Day", desc: "Map Approval" },
                            { icon: FiCheck, label: "100%", desc: "Brand Matching" }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl text-center hover:bg-white/10 transition-colors">
                                <stat.icon className="text-2xl md:text-3xl text-blue-300 mx-auto mb-4" />
                                <div className="text-xl md:text-2xl font-black mb-1">{stat.label}</div>
                                <div className="text-[10px] md:text-xs uppercase tracking-widest opacity-50 font-bold">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
)), { ssr: false });

// Local Assets
import r1 from "@/assets/r1.png";
import r2 from "@/assets/r2.png";
import r3 from "@/assets/r3.png";
import r4 from "@/assets/r4.png";
import r5 from "@/assets/r5.png";
import ca from "@/assets/ca.png";
import ca2 from "@/assets/ca2.png";
import ca3 from "@/assets/ca3.png";

export default function ArchitectNearMe() {
    const [activeLocality, setActiveLocality] = useState(0);

    const projectGallery = [
        { img: r1, title: "Modern Villa", area: "Gomti Nagar Extension", type: "Residential" },
        { img: r2, title: "Luxury Penthouse", area: "Sushant Golf City", type: "Interior" },
        { img: r3, title: "Boutique Office", area: "Hazratganj", type: "Commercial" },
        { img: ca, title: "Premium Apartment", area: "Aliganj", type: "Architecture" },
        { img: r4, title: "Contemporary Home", area: "Indira Nagar", type: "Residential" },
        { img: ca2, title: "Retail Space", area: "Mahanagar", type: "Commercial" },
    ];

    const detailedLocalities = [
        { 
            name: "Gomti Nagar & Extension", 
            usp: "Lucknow's Gold Standard",
            content: "Governed by LDA's 'Stilt + 3' floor regulations, Gomti Nagar requires precision in setback calculations and drainage planning. Our team specializes in maximizing FSI while maintaining the aesthetic integrity required for premium villa clusters near Janeshwar Mishra Park.",
            tags: ["LDA Sanction Expert", "Stilt Parking Design", "High-End Finishes"],
        },
        { 
            name: "Sushant Golf City", 
            usp: "The Modern Frontier",
            content: "As a private township (Ansal API), building in Sushant Golf City involves unique RERA compliance and township-specific architectural approvals. We focus on modern, open-plan villa designs that complement the lush, green landscape near Medanta.",
            tags: ["RERA Compliant", "Township Specialist", "Modernist Design"],
        },
        { 
            name: "Hazratganj & Mahanagar", 
            usp: "The Heritage Core",
            content: "Designing in Hazratganj requires a delicate balance between modern commercial utility and the area's rich architectural heritage. We help clients navigate restoration projects and high-density commercial space optimization.",
            tags: ["Heritage Sensitive", "Commercial ROIs", "Sanction Assistance"],
        },
    ];

    const faqs = [
        {
            q: "What are the current LDA map approval charges in Lucknow (2026)?",
            a: "As of early 2026, LDA approval charges vary by plot size and area category. Generally, for a 2000 sq.ft plot, expect administrative fees around ₹1.5L - ₹2.5L, including stacking and external development charges. We provide a full itemized breakdown during consultation."
        },
        {
            q: "Do you handle soil testing and foundation design for Indiranagar?",
            a: "Yes. Areas like Indiranagar often have specific clay-heavy soil layers. We mandate professional soil testing (SBC) to design safe, cost-effective foundations, ensuring zero structural cracks over decades."
        },
        {
            q: "Can you help with 3D visualization before construction starts?",
            a: "Absolutely. Every project near you includes photorealistic 3D renders and VR walkthroughs. This ensures you see exactly how your home in Lucknow will look before a single brick is laid."
        },
        {
            q: "How long does it take to complete a luxury bungalow in Lucknow?",
            a: "Our standard delivery timeline is 10-14 months, depending on the complexity and size. This includes the 'Curing Period'—a vital step often skipped by local contractors but essential for Lucknow's extreme weather."
        }
    ];

    return (
        <main className="min-h-screen bg-[#F4F1EC] text-[#101010] selection:bg-[#234D7E] selection:text-white">
            <Script id="local-hub-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Trygve Studio - Lucknow's #1 Architect",
                    "image": "https://trygvestudio.com/logo.png",
                    "url": "https://trygvestudio.com/services/architect-near-me",
                    "description": "Lucknow's highest-rated architecture firm specializing in LDA sanctions, premium residential builds, and RERA compliance across Gomti Nagar, Sushant Golf City, and Hazratganj.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "B-3, 3rd Floor, Rohit Bhavan, Hazratganj",
                        "addressLocality": "Lucknow",
                        "addressRegion": "Uttar Pradesh",
                        "postalCode": "226001",
                        "addressCountry": "IN"
                    },
                    "telephone": "+91-9554440400",
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "26.8467",
                        "longitude": "80.9462"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5.0",
                        "reviewCount": "342"
                    },
                    "areaServed": [
                        { "@type": "City", "name": "Lucknow" },
                        { "@type": "Place", "name": "Gomti Nagar Extension" },
                        { "@type": "Place", "name": "Sushant Golf City" },
                        { "@type": "Place", "name": "Janeshwar Mishra Park Area" }
                    ],
                    "knowsAbout": ["Turnkey Construction", "LDA Sanctions", "Luxury Residential Architecture", "Structural Engineering"],
                    "amenityFeature": [
                        { "@type": "LocationFeatureSpecification", "name": "Near Janeshwar Mishra Park", "value": true },
                        { "@type": "LocationFeatureSpecification", "name": "Hazratganj Rohit Bhavan Office", "value": true }
                    ]
                })}
            </Script>

            {/* Hero Section - Refined Typography */}
            <section className="relative pt-24 md:pt-36 pb-16 md:pb-24 px-6 overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 0.05 }} 
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
                </motion.div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#234D7E] text-[11px] font-bold uppercase tracking-widest shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Trusted Locally. Ranked Nationally.
                        </motion.div>
                        <motion.h1 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
                        >
                             Lucknow's Most <br />
                            <span className="text-[#234D7E] italic">Trusted</span> Architect.
                        </motion.h1>
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed max-w-2xl mx-auto"
                        >
                            From LDA sanctioning to premier turnkey handover — we solve the "near me" doubt with hyper-local expertise and world-class design.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Visual Showcase - Optimized Padding */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Built Near You.</h2>
                            <p className="text-neutral-500 max-w-lg text-sm md:text-base">
                                Real projects from our portfolio executed across Lucknow's premier localities. 
                            </p>
                        </div>
                        <Link href="/projects" className="group flex items-center gap-2 font-bold text-[#234D7E] hover:underline">
                            View Entire Portfolio <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectGallery.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -8 }}
                                className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-neutral-100 shadow-xl"
                            >
                                <Image 
                                    src={item.img} 
                                    alt={`${item.title} in ${item.area} Lucknow`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    priority={idx < 3}
                                />
                                {/* Bottom Gradient - Always slightly visible for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="absolute inset-x-0 bottom-0 p-8 text-white transition-transform duration-300">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1">{item.type}</p>
                                    <h3 className="text-xl md:text-2xl font-bold mb-1 leading-tight">{item.title}</h3>
                                    <div className="flex items-center gap-1.5 opacity-80 text-xs md:text-sm font-medium">
                                        <FiMapPin className="text-blue-400 shrink-0" />
                                        {item.area}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Below the fold sections - Dynamically Loaded */}
            <LocalityGuides 
                activeLocality={activeLocality} 
                setActiveLocality={setActiveLocality} 
                detailedLocalities={detailedLocalities} 
                ca={ca} 
                ca3={ca3} 
            />

            <TrustVault 
                FiShield={FiShield} 
                FiAward={FiAward} 
                FiBriefcase={FiBriefcase} 
                FiZap={FiZap} 
                FiDownload={FiDownload} 
            />

            <TurnkeyBenefits 
                FiCheck={FiCheck} 
                FiZap={FiZap} 
                FiAward={FiAward} 
                FiShield={FiShield} 
            />

            <FAQSection 
                faqs={faqs} 
                FiInfo={FiInfo} 
            />

            {/* Premium CTA Block - Scaled for Mobile */}
            <section className="px-6 pb-16 md:pb-24">
                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="max-w-7xl mx-auto bg-[#234D7E] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-24 text-center text-white overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] md:blur-[100px]" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter">Ready to Build <br /> Near You?</h2>
                        <p className="text-lg md:text-xl opacity-70 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
                            Unlock Lucknow's premier architectural experience. Get a detailed quote based on current market rates.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                            <Link href="/price-calculator" className="w-full sm:w-auto bg-white text-[#234D7E] px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-lg shadow-2xl hover:scale-105 transition-all">
                                Get Instant Estimate
                            </Link>
                            <Link href="/contact-us" className="w-full sm:w-auto border-2 border-white/20 backdrop-blur-md px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-lg hover:bg-white/10 transition-all">
                                Book Free Consult
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Breadcrumbs - Minimalist Footstyle */}
            <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 py-12 opacity-30 border-t border-neutral-200">
                <ol className="flex items-center space-x-3 text-[11px] font-black uppercase tracking-widest">
                    <li><Link href="/">Home</Link></li>
                    <li><FiChevronRight className="text-neutral-400" /></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><FiChevronRight className="text-neutral-400" /></li>
                    <li className="text-[#234D7E]">Architect Near Me</li>
                </ol>
            </nav>
        </main>
    );
}
