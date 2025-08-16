"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="bg-[#F4F1EC] pt-[14px] pb-[10px]">
      <div className="max-w-[1200px] mx-auto px-[18px] flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* Left block (logo + title) */}
        <div className="flex flex-col items-center md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-[18px] md:min-h-[68px]">
          {/* Logo */}
          <div className="relative inline-block leading-none md:justify-self-start">
            <Image
              src={logo}
              alt="TRYGVE STUDIO logo"
              width={90}
              height={90}
              priority
              className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]"
            />
          </div>

          {/* Company name */}
          <h1
            className="
              m-0 font-medium text-ink tracking-[0.02em]
              text-center md:text-left
              leading-[1.1]
              text-[clamp(20px,6vw,28px)]
              mt-2 md:mt-0
            "
          >
            TRYGVE STUDIO PRIVATE
            <span className="block md:inline"> LIMITED</span>
          </h1>
        </div>

        {/* Right block (Contact) */}
        <nav className="flex justify-center md:justify-end">
          <Link
            href="#contact"
            className="text-[15px] md:text-[16px] text-ink underline-offset-4 hover:underline"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Divider */}
      <hr className="border-0 h-[1px] bg-rule max-w-[1200px] mx-auto mt-[10px]" />
    </header>
  );
}