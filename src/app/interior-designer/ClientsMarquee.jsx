"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'

export default function ClientsMarquee() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    async function fetchLogos() {
      try {
        const res = await fetch('/api/client-logos?limit=100&sort=order', { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch logos");
        const data = await res.json();
        console.log(data)
        setLogos(Array.isArray(data.items) ? data.items : []);
      } catch (err) {
        setLogos([]);
      }
    }
    fetchLogos();
  }, []);

  const track = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <section className="bg-[#F4F1EC] py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#101010]">
          Trusted by Clients Worldwide
        </h2>
        <p className="mt-2 text-neutral-600">
          We have served brands, startups, and enterprises across industries.
        </p>

        {/* Marquee */}
        <div className="relative mt-10 overflow-hidden">
          {/* optional edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#F4F1EC] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#F4F1EC] to-transparent" />

          <div className="marquee w-[200%]">
            {track.map((logo, i) => (
              <div
                key={i}
                className="shrink-0 mx-4 md:mx-8 inline-flex h-12 w-28 md:h-16 md:w-40 items-center justify-center   opacity-70 transition hover:opacity-100  "
              >
                {logo.image?.src && (
                  <img
                    src={logo.image?.src}
                    alt={logo.name || `Client logo ${i + 1}`}
                    width={160}
                    height={64}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component-scoped CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee {
          display: flex;
          align-items: center;
          width: 200%; /* because we duplicated the list */
          animation: marquee 40s linear infinite;
        }
        @media (max-width: 640px) {
          .marquee {
            animation-duration: 10s; /* faster on mobile */
          }
        }
      `}</style>
    </section>
  );
}