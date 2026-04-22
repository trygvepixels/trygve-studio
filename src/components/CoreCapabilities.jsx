"use client";
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const capabilities = [
  {
    title: "Architecture & Design",
    description: "Residential, commercial and turnkey architecture in Lucknow — from LDA map sanction to site execution. COA-licensed architects.",
    href: "/services/architects-in-lucknow",
    tag: "Lucknow Experts",
    icon: "🏛️",
  },
  {
    title: "Interior Design",
    description: "Luxury residential and commercial interiors in Lucknow. Turnkey packages from ₹1,200/sq ft with material, execution and site supervision.",
    href: "/services/interior-design/lucknow",
    tag: "Turnkey Interiors",
    icon: "🪑",
  },
  {
    title: "BIM & 3D Visualization",
    description: "  BIM modeling (LOD 100–500), clash detection, and photorealistic 3D renders for global architecture firms and local projects.",
    href: "/services/bim-outsourcing-services",
    tag: "BIM Ready",
    icon: "📐",
  },
  {
    title: "Turnkey Construction",
    description: "Complete design-to-handover construction management in Lucknow. ISO 9001:2015 certified. Fixed-price contracts.",
    href: "/services/turnkey-construction-companies-lucknow",
    tag: "Zero Overruns",
    icon: "🏗️",
  },
  {
    title: "PMC & EPC",
    description: "Project Management Consultancy and Engineering, Procurement & Construction services for institutional and commercial projects.",
    href: "/services",
    tag: "End-to-End",
    icon: "📋",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="bg-[#F4F1EC] py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-lg">
            Architecture, interiors, turnkey construction and project management for homeowners, businesses and hospitality projects in Lucknow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {capabilities.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group block p-7 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-3 border border-blue-100">
                {item.tag}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc || item.description}
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-900 opacity-60 group-hover:opacity-100 transition-opacity">
                <span>View Details</span>
                <FiArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
