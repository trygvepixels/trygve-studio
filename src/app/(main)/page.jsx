"use client";
import React, { useEffect, useState, useCallback } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import FeatureProjects from "@/components/FeatureProjects";
import Stats from "@/components/Stats";
import Popup from "@/components/Popup";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Script from "next/script";
import whatsapp from "@/assets/whatsapp.png";
import Image from "next/image";

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [entered, setEntered] = useState(false); // for smooth mount animation

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const router = useRouter();

  // open after 30s (optional)
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  // animate in + scroll lock when open
  useEffect(() => {
    if (showPopup) {
      const t = requestAnimationFrame(() => setEntered(true));
      // lock body scroll
      document.documentElement.style.overflow = "hidden";
      return () => {
        cancelAnimationFrame(t);
        document.documentElement.style.overflow = "";
        setEntered(false);
      };
    }
  }, [showPopup]);

  // close on Escape
  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") setShowPopup(false);
  }, []);
  useEffect(() => {
    if (!showPopup) return;
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [showPopup, onKeyDown]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // honeypot
    if ((formData.get("_honey") || "").toString().trim() !== "") {
      setStatus({
        state: "success",
        message: "Thanks! Your enquiry has been saved.",
      });
      return;
    }

    setSubmitting(true);
    setStatus({ state: "idle", message: "" });

    try {
      const data = Object.fromEntries(formData);
      const res = await fetch("/api/submitContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let result = {};
      try {
        result = await res.json();
      } catch {}

      if (!res.ok || !result?.success) {
        throw new Error(
          result?.error || `Failed to submit (HTTP ${res.status})`
        );
      }

      form.reset();
      setStatus({
        state: "success",
        message: "Thanks! Your enquiry has been saved.",
      });

      // SPA replace + hard fallback
      try {
        router.replace("/thankyou");
        setTimeout(() => {
          if (
            typeof window !== "undefined" &&
            window.location.pathname !== "/thankyou"
          ) {
            window.location.assign("/thankyou");
          }
        }, 50);
      } catch {
        if (typeof window !== "undefined") window.location.assign("/thankyou");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        state: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#F4F1EC] relative">
      <>
        {/* JSON-LD: Organization + ProfessionalService + OfferCatalog + Locations */}
        <Script id="ld-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "ProfessionalService"],
            name: "TRYGVE STUDIO PRIVATE LIMITED",
            url: "https://www.trygvestudio.com/",
            email: "faisal.saif@trygvestudio.com",
            telephone: "+91-9554440400",
            brand: {
              "@type": "Brand",
              name: "Trygve Studio",
            },
            sameAs: ["https://wa.me/919554440400"],
            areaServed: [
              { "@type": "Place", name: "APAC" },
              { "@type": "Place", name: "EMEA" },
              { "@type": "Place", name: "North America" },
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+91-9554440400",
                email: "faisal.saif@trygvestudio.com",
                availableLanguage: ["en", "hi"],
                areaServed: "Worldwide",
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Plot No. 728, Khasra No. 21, Eden Enclave, Phase 2, Kursi Road, Gudamba, BKT",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              postalCode: "226026",
              addressCountry: "IN",
            },
            location: [
              {
                "@type": "Place",
                name: "Branch Office — Vikas Nagar",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Honey Lite, 1st Floor, 5/72, Sector 5, Vikas Nagar",
                  addressLocality: "Lucknow",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "226022",
                  addressCountry: "IN",
                },
              },
              {
                "@type": "Place",
                name: "Branch Office — Kursi Road (Near Integral University Hospital Gate)",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "UGF, Rukshan Complex, Gata No. 112, Dasauli, Kursi Road, Near Integral University Hospital Gate",
                  addressLocality: "Lucknow",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "226021",
                  addressCountry: "IN",
                },
              },
              {
                "@type": "Place",
                name: "Corporate Meeting Space — Levana Cyber Heights (Regus)",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Levana Cyber Heights, 10th Floor – Regus, Vibhuti Khand, Gomti Nagar",
                  addressLocality: "Lucknow",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "226010",
                  addressCountry: "IN",
                },
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Architecture & Allied Engineering Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Architecture",
                    areaServed: "Worldwide",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Interior Design",
                    areaServed: "Worldwide",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Project Management Consultancy (PMC)",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Engineering, Procurement & Construction (EPC)",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "3D Visualisation",
                  },
                },
              ],
            },
          })}
        </Script>
      </>
      <a
        href="https://wa.me/919554440400"
        className="fixed bottom-20 right-8 bg-wh ite text-green-500 rounded-full text-4xl z-50 "
      >
        <Image src={whatsapp} height={50} />
      </a>
      <Hero />
      {/* <About /> */}
      <ClientsMarquee />
      <Stats />
      <FeatureProjects />
      <Projects />
      <ProjectsGrid />
      <ContactSection />
      <TestimonialsMarquee />
      {/* <Footer /> */}

      {/* ---------- Floating trigger button (fixed) ---------- */}
      <button
        type="button"
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 right-6 z-[10] rounded-full bg-[#101010] text-white shadow-lg px-6 py-3 text-sm md:text-base hover:opacity-90 active:scale-[0.98] transition"
        aria-haspopup="dialog"
        aria-expanded={showPopup ? "true" : "false"}
        aria-controls="contact-popup"
      >
        Start Your Project
      </button>

      {/* ---------- Popup ---------- */}
      {showPopup && (
        <div
          id="contact-popup"
          className={`fixed inset-0 z-[1000000] flex items-center justify-center transition-opacity duration-200 ${
            entered ? "opacity-100" : "opacity-0"
          } bg-black/60 backdrop-blur-sm`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
          onClick={() => setShowPopup(false)} // click outside to close
        >
          <div
            className={`relative w-full max-w-3xl transition-all duration-300 ease-out ${
              entered
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-1 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-1 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 hover:shadow-xl"
              aria-label="Close popup"
            >
              ✕
            </button>

            {/* Card */}
            <div className="ring-1 ring-black/5 overflow-hidden rounded-2xl">
              {/* Optional header with your own component */}
              <div className="hidden">
                <Popup />
              </div>

              {/* Contact form inside popup */}
              <main className="mt-10 text-[#101010]  z-[1000000000000000]">
                <section>
                  <div className="mx-auto md:px-8 pb-6">
                    <div className="grid grid-cols-1">
                      <div
                        id="project-form"
                        className={`rounded-2xl border border-black/10 bg-white p-5 md:p-6 ${
                          submitting ? "opacity-90" : ""
                        }`}
                      >
                        <form
                          onSubmit={handleSubmit}
                          className="grid p-4 grid-cols-1 gap-2"
                          noValidate
                        >
                          <input
                            type="text"
                            name="_honey"
                            tabIndex="-1"
                            autoComplete="off"
                            className="hidden"
                            aria-hidden="true"
                          />

                          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <Field
                              label="Full name"
                              name="name"
                              required
                              disabled={submitting}
                            />
                            <Field
                              label="Email"
                              name="email"
                              type="email"
                              required
                              disabled={submitting}
                            />
                          </div>

                          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <Field
                              label="Phone / WhatsApp"
                              name="phone"
                              inputMode="tel"
                              disabled={submitting}
                            />
                            <Select
                              label="Project type"
                              name="projectType"
                              options={[
                                "Residential",
                                "Commercial / Office",
                                "Retail / F&B",
                                "Hospitality",
                                "Landscape",
                                "Interior Renovation",
                                "Concept / Feasibility",
                                "Others",
                              ]}
                              required
                              disabled={submitting}
                            />
                          </div>

                          <Textarea
                            label="Tell us about your project"
                            name="message"
                            placeholder="Site details, area (sqft/sqm), style inspirations, constraints, goals…"
                            required
                            disabled={submitting}
                          />

                          <label className="flex items-start gap-3 text-xs text-neutral-700">
                            <input
                              type="checkbox"
                              name="consent"
                              value="yes"
                              className=""
                              required
                              disabled={submitting}
                            />
                            I consent to Trygve Studio contacting me about this
                            enquiry and agree to the privacy policy.
                          </label>

                          <div className="flex flex-col md:flex-row text-xs items-center gap-3 pt-2">
                            <button
                              type="submit"
                              disabled={submitting}
                              className="items-center justify-center rounded-full bg-[#101010] text-white px-6 py-3 text-xs md:text-[15px] hover:opacity-90 disabled:opacity-50 transition"
                            >
                              {submitting ? "Sending…" : "Send Your Vision"}
                            </button>

                            <a
                              href="https://wa.me/919554440400" // ← replace with your WhatsApp
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-[#101010] px-5 py-3 text-xs md:text-[15px] hover:bg-black hover:text-white transition"
                            >
                              <FaWhatsapp className="text-green-600" />
                              Quick Chat on WhatsApp
                            </a>
                          </div>

                          {status.state === "error" && (
                            <p className="text-sm text-red-600" role="alert">
                              {status.message}
                            </p>
                          )}
                          {status.state === "success" && (
                            <p className="text-sm text-green-600" role="alert">
                              {status.message}
                            </p>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

/* ---------- small reusable inputs ---------- */
function Field({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
  disabled = false,
  inputMode,
}) {
  return (
    <label className="block">
      <span className="mb-2 text-xs block text-sm font-medium">
        {label}
        {required && (
          <span aria-hidden className="text-red-600">
            {" "}
            *
          </span>
        )}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        inputMode={inputMode}
        className="w-full text-xs rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-0 focus:border-black/30 disabled:bg-black/5"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options = [],
  required = false,
  disabled = false,
}) {
  return (
    <label className="block text-xs">
      <span className="mb-2 text-xs block text-xs font-medium">
        {label}
        {required && (
          <span aria-hidden className="text-red-600">
            {" "}
            *
          </span>
        )}
      </span>
      <select
        name={name}
        required={required}
        disabled={disabled}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none text-xs ring-0 focus:border-black/30 disabled:bg-black/5"
        defaultValue=""
      >
        <option value="" disabled>
          Choose…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder = "",
  required = false,
  disabled = false,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium">
        {label}
        {required && (
          <span aria-hidden className="text-red-600">
            {" "}
            *
          </span>
        )}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={6}
        disabled={disabled}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-0 text-xs focus:border-black/30 disabled:bg-black/5"
      />
    </label>
  );
}
