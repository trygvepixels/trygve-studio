"use client";
import Image from "next/image";
import herobg from '@/assets/hero/herobg.jpg'
export default function Hero() {
  return (
    <section className="bg-bgWarm">
      {/* Headline */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <h1 className="
          text-5xl text-right font-semibold leading-tight
         
        ">
          we are architects & interior designers.<br className="hidden sm:block" />
          we create timeless spaces,<br className="hidden sm:block" />
          integrating form, function, and detail,<br className="hidden sm:block" />
          to craft places people remember.
        </h1>
      </div>

      {/* Image */}
      <div className="max-w-[1200px] mx-auto mt-6 sm:mt-8 px-4 sm:px-6 pb-8">
        <div className="relative w-full h-[220px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
          <Image
            src={herobg}
            alt="Modern home exterior"
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover rounded-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}