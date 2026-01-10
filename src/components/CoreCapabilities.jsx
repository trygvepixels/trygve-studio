"use client";
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const capabilities = [
  {
    title: "Architectural Services",
    description: "Leading architects in Lucknow offering sustainable and modern design solutions for homes and offices.",
    href: "/services/architects-in-lucknow",
    tag: "Lucknow Experts"
  },
  {
    title: "Interior Design",
    description: "Premiere interior designers in Lucknow specializing in luxury residential and functional commercial spaces.",
    href: "/services/interior-design-lucknow",
    tag: "Luxury Interiors"
  },
  {
    title: "3D Visualization",
    description: "Advanced 3D renders and virtual walkthroughs to see your project before construction starts.",
    href: "/services",
    tag: "BIM Ready"
  },
  {
    title: "PMC & EPC",
    description: "End-to-end project management and construction delivery ensuring quality and timelines.",
    href: "/services",
    tag: "Turnkey Execution"
  }
];

export default function CoreCapabilities() {
  return (
    <section className="bg-[#F4F1EC] py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Our Core Expertise
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-lg">
            Delivering excellence across architectural design, luxury interiors, and project management in Lucknow and worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.href}
              className="group block p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-4 border border-blue-100">
                {item.tag}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-900 opacity-60 group-hover:opacity-100 transition-opacity">
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
