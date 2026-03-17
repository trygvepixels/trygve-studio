"use client";

import { FaWhatsapp, FaCalculator } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div 
            className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-500 md:hidden ${
                isVisible ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <div className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl flex items-center p-2 gap-2">
                <a 
                    href="https://wa.me/919554440400" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm active:scale-95 transition-all"
                >
                    <FaWhatsapp className="text-lg" />
                    <span>WhatsApp</span>
                </a>
                <Link 
                    href="/price-calculator"
                    className="flex-1 bg-[#234D7E] text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm active:scale-95 transition-all"
                >
                    <FaCalculator />
                    <span>Get Estimate</span>
                </Link>
            </div>
        </div>
    );
}
