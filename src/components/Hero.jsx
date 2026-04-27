 "use client";
import Image from "next/image";
import Link from "next/link";
import herobg from '@/assets/hero/herobg.jpg'
export default function Hero() {
  return (
    <section className="bg- md:px-0 px-4">
      {/* Headline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-0 pt-10 sm:pt-10">
        <div className="flex justify-start mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[10px] font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
           ARCHITECTURE • ENGINEERING • BIM •
PRODUCT DEVELOPMENT
          </span>
        </div>
        <h1 className="max-w-5xl md:text-5xl text-3xl text-left font-semibold leading-tight">
         Architecture, Engineering, BIM and Product  <span className="bg-[#234D7E] text-white px-2 rounded-md"> Development in Lucknow</span>  
        </h1>
        <p className="mt-5 max-w-4xl text-left text-base md:text-xl text-zinc-700 leading-relaxed">
A multi-disciplinary design and engineering firm delivering architecture, interiors, BIM coordination, technical detailing and product development for residential, commercial and corporate
projects.        </p>
        <p className="mt-3 max-w-4xl text-left text-sm md:text-base text-zinc-600 leading-relaxed">
          Common project zones include Gomti Nagar, Gomti Nagar Extension, Hazratganj,
          Sushant Golf City, Jankipuram, Kursi Road and the Shaheed Path growth corridor.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact-us#project-form"
            className="inline-flex items-center rounded-full bg-[#234D7E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1b3b62]"
          >
            Book a Consultation
          </Link>
          <Link
            href="/services/architects-in-lucknow"
            className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
          >
            Explore Services
          </Link>
          <Link
            href="/price-calculator"
            className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
          >
            Check Construction Cost
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 px-4 sm:px-0 pb-8">
        <div className="relative w-full h-[220px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <Image
            src={herobg}
            alt="Residential architecture and interior design project by Trygve Studio in Lucknow"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            quality={85}
            className="object-cover rounded-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
