import React from "react";
import Link from "next/link";
import { pillars } from "@/data/pillars";
import { FiBookOpen, FiClock, FiArrowRight, FiSearch } from "react-icons/fi";

export const metadata = {
  title: "Architecture & Design Resources | Trygve Studio Knowledge Hub",
  description: "Explore our comprehensive guides on modern architecture, luxury interiors, project management, and construction technology.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EC] pb-20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6">
            Authority Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Our collective knowledge on architecture, interiors, and construction 
            excellence—curated for founders, homeowners, and industry professionals.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Link 
                key={pillar.slug}
                href={`/resources/${pillar.slug}`}
                className="group relative bg-white border border-black/5 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-6">{pillar.icon}</div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold px-2 py-1 border border-gray-100 rounded">
                      {pillar.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                      <FiClock className="text-[12px]" />
                      {pillar.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-normal text-gray-900 mb-4 group-hover:text-[#234D7E] transition-colors leading-tight">
                    {pillar.title}
                  </h2>
                  <p className="text-gray-500 font-light text-sm line-clamp-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    Read Guide <FiArrowRight />
                  </span>
                </div>

                {/* Subtle border accent on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#234D7E]/10 rounded-2xl pointer-events-none transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 px-6">
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Need specialist insight for your project?</h2>
            <p className="text-gray-400 mb-10 font-light text-lg">
              Our team of experts is ready to help you navigate the complexities of design and construction.
            </p>
            <Link 
              href="/contact-us"
              className="inline-block bg-[#F4F1EC] text-gray-900 px-10 py-4 rounded-full font-medium hover:bg-white transition-colors"
            >
              Consult with our Strategists
            </Link>
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#234D7E]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />
        </div>
      </section>
    </main>
  );
}
