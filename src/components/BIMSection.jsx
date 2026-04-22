"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const BIM_CAPABILITIES = [
  {
    icon: "📐",
    title: "  BIM Modeling",
    desc: "LOD 100–500 architectural BIM models for residential, commercial & institutional projects.",
    tag: "LOD 100–500",
  },
  {
    icon: "📄",
    title: "Construction Documents",
    desc: "SD, DD & CD packages — floor plans, sections, elevations, details and schedules in AIA/RIBA format.",
    tag: "SD · DD · CD",
  },
  {
    icon: "🔍",
    title: "Clash Detection",
    desc: "Navisworks-based clash detection, 4D scheduling and VDC coordination across MEP systems.",
    tag: "Navisworks",
  },
  {
    icon: "🌐",
    title: "As-Built & Digital Twin",
    desc: "Point-cloud to BIM conversion. As-built documentation from laser scan data for renovation projects.",
    tag: "Point Cloud",
  },
];

export default function BIMSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Header — matches FeatureProjects / CoreCapabilities style */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100 mb-3">
              Global BIM Services
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Building Information Modeling
            </h2>
            <p className="mt-2 text-gray-500 max-w-xl">
              Precision  models and production-ready construction documents — delivered as an extension of your design team for US, UK &amp; UAE firms.
            </p>
          </div>
          <Link
            href="/services/bim-outsourcing-services"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-black/5 transition-colors whitespace-nowrap"
          >
            View BIM Services <FiArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {BIM_CAPABILITIES.map((item, i) => (
            <div
              key={i}
              className={`group p-7 rounded-2xl bg-[#F4F1EC] border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-blue-600 text-[10px] font-bold uppercase tracking-wider border border-blue-100 mb-3">
                {item.tag}
              </span>
              <h3 className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Software Stack + Stats Row */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 transition-all duration-500 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Software Pills */}
          <div className="p-6 rounded-2xl border border-gray-200 bg-[#F4F1EC]">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Software Stack</p>
            <div className="flex flex-wrap gap-2">
              {["Autodesk  2024", "AutoCAD", "Navisworks", "ArchiCAD", "Rhino 3D", "Lumion", "Enscape", "BIM 360", "Bluebeam"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: "200+", label: "BIM Projects" },
              { num: "40%", label: "Cost Reduction" },
              { num: "24 hr", label: "Turnaround" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-[#F4F1EC] border border-gray-200"
              >
                <div className="text-2xl md:text-3xl font-semibold text-gray-900">{s.num}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:items-center transition-all duration-500 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/services/bim-outsourcing-services"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#101010] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-all"
          >
            Explore BIM Outsourcing
            <FiArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium hover:bg-black/5 transition-all"
          >
            Request Sample Models
          </Link>
          <p className="text-xs text-gray-400 sm:ml-2">For architecture firms in US, UK &amp; UAE</p>
        </div>

      </div>
    </section>
  );
}
