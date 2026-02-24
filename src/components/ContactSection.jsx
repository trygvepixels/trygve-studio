// components/ContactSection.jsx
"use client";
import Image from "next/image";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import contact from "@/assets/hero/contact.png"

export default function ContactSection() {
  return (
    <section className="bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[40px] font-light leading-snug mb-10">
          Do you have questions?
          <br />
          Contact us.
        </h2>

        {/* Content Row */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto]">
          {/* Map */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-lg overflow-hidden border border-gray-800">
            <iframe
              src="https://maps.google.com/maps?q=Trygve%20Studio,%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trygve Studio Location Map"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 text-[16px]">
            <div>
              <p className="font-medium">Phone</p>
              <p className="opacity-80">+91-9554440400</p>
            </div>

            <div>
              <p className="font-medium">Email</p>
              <p className="opacity-80">faisal.saif@trygvestudio.com</p>
            </div>

            <div>
              <p className="font-medium">Social</p>
              <div className="flex items-center gap-4 mt-1">
                <a href="#" aria-label="Twitter" className="hover:opacity-70">
                  <FaTwitter size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-70">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}