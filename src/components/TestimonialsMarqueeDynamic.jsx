"use client";
import { useEffect, useMemo, useRef } from "react";

export default function TestimonialsMarqueeDynamic({
  testimonials = [],
  emptyFallback = [],
}) {
  const trackRef = useRef(null);

  const resolved = useMemo(() => {
    if (Array.isArray(testimonials) && testimonials.length > 0) {
      return testimonials;
    }
    return Array.isArray(emptyFallback) && emptyFallback.length > 0
      ? emptyFallback
      : [];
  }, [testimonials, emptyFallback]);

  // Duplicate data for seamless looping
  const doubled = useMemo(() => [...resolved, ...resolved], [resolved]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || doubled.length === 0) return;

    let scrollAmount = 0;
    let req;

    const animate = () => {
      scrollAmount += 0.5;
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0;
      }
      track.style.transform = `translateX(-${scrollAmount}px)`;
      req = requestAnimationFrame(animate);
    };

    req = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(req);
  }, [doubled.length]);

  if (resolved.length === 0) return null;

  return (
    <section className="bg-[#F4F1EC] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10 text-center">
          <p className="text-xs tracking-wider uppercase text-neutral-600">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#101010]">
            Our clients love working with us
          </h2>
        </header>

        <div className="overflow-hidden relative">
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform transition-transform"
          >
            {doubled.map((t, i) => (
              <div
                key={`${t.name || "client"}-${t.message || i}-${i}`}
                className="w-[300px] md:w-[360px] shrink-0 bg-white border border-black/10 rounded-2xl shadow-sm hover:shadow-md transition relative overflow-hidden"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3">
                    {t.image?.src ? (
                      // When using data from DB, image is stored as { src, alt } (or {src,alt}).
                      // We keep this component resilient to different shapes.
                      <img
                        src={t.image.src}
                        alt={t.image.alt || t.name || "Client"}
                        className="h-12 w-12 rounded-full object-cover ring-1 ring-black/10"
                      />
                    ) : t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={t.name || "Client"}
                        className="h-12 w-12 rounded-full object-cover ring-1 ring-black/10"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-neutral-100 ring-1 ring-black/10" />
                    )}

                    <div>
                      <div className="font-semibold text-[15px] leading-tight">
                        {t.name || "Client"}
                      </div>
                      <div className="text-xs text-neutral-600">
                        {t.role || ""}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {t.location || ""}
                      </div>
                    </div>
                  </div>

                  <blockquote className="mt-4 text-[15px] text-neutral-800 leading-relaxed flex-1">
                    “{t.message || t.quote || ""}”
                  </blockquote>
                  <div className="mt-4 text-xs text-neutral-500">
                    Verified feedback
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none hidden md:absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F4F1EC] to-transparent" />
          <div className="pointer-events-none hidden md:absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F4F1EC] to-transparent" />
        </div>
      </div>
    </section>
  );
}

