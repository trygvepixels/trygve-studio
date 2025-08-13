"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"

export default function Header() {
  return (
    <header className="bg-[#F4F1EC] pt-[14px] pb-[10px]">
      <div className="flex items-center justify-between gap-6 max-w-[1200px] mx-auto px-[18px]">
        
        {/* Left section */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-[18px] min-h-[68px]">
          <div className="relative inline-block leading-none">
            <Image
              src={logo}
              alt="TRYGVE STUDIO logo"
              width={90}
              height={90}
              priority
            />
           </div>

          <h1 className="m-0 border- font-medium tracking-[0.03em] text-[clamp(18px,2.8vw,28px)] text-ink whitespace-nowrap">
            TRYGVE STUDIO PRIVATE LIMITED
          </h1>
        </div>

        {/* Right section */}
        <nav className="flex items-center">
          <Link
            href="#"
            className="text-[16px] text-ink hover:underline"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Divider line */}
      <hr className="border-0 h-[1px] bg-rule max-w-[1200px] mx-auto mt-[10px]" />
    </header>
  );
}