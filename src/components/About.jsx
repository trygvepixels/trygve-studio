"use client";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function TrygveAnnouncement() {
  return (
    <section className="relative overflow-hidden">

      {/* Background: soft gradient + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-zinc-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_20%_-10%,rgba(99,102,241,.15),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,.12),transparent_40%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:36px_36px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Glass card */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200/70 bg-white/100 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="p-6 sm:p-10 md:p-12">
            {/* Eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium tracking-wide text-blue-800 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Built for Real Projects in Lucknow
            </div>

            <h2 className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
              Trygve Studio is an{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                architecture and interior design studio
              </span>
              {" "}serving homeowners and businesses from{" "}
              <Link href="/services/architects-in-lucknow" className="hover:underline decoration-indigo-500">
                Lucknow
              </Link>{" "}
              to nearby growth corridors.
            </h2>

            <p className="mt-4 max-w-3xl text-zinc-600 md:text-lg leading-relaxed">
              We work on residences, villas, commercial spaces, cafes and hospitality projects
              with a design process that balances function, aesthetics, technical clarity and
              execution discipline. Clients come to us when they want more than drawings. They
              want better decisions before site work starts and stronger coordination after it does.
            </p>

            <p className="mt-4 max-w-3xl text-zinc-600 md:text-lg leading-relaxed">
              Our work typically spans{" "}
              <Link href="/services/architects-in-lucknow" className="font-medium hover:underline text-zinc-800">
                architecture
              </Link>,{" "}
              <Link href="/services/interior-design/lucknow" className="font-medium hover:underline text-zinc-800">
                interior design
              </Link>,{" "}
              <Link href="/services/turnkey-construction-companies-lucknow" className="font-medium hover:underline text-zinc-800">
                turnkey delivery
              </Link>{" "}
              and visualization support for clients building in Gomti Nagar, Hazratganj,
              Sushant Golf City, Jankipuram and surrounding areas.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <h3 className="text-sm font-semibold text-zinc-900">Planning & Approvals</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Concept development, layout thinking, local planning logic and approval-oriented documentation.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <h3 className="text-sm font-semibold text-zinc-900">Interiors & Detailing</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Space planning, materials, furniture, lighting and site-ready detail development.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <h3 className="text-sm font-semibold text-zinc-900">Execution Support</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Better project coordination from drawings to handover for clients who want fewer surprises.
                </p>
              </div>
            </div>

            {/* CTA block */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919554440400"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <FiPhone className="h-4 w-4" />
                Call: +91 95544 40400
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50"
              >
                View Projects
              </Link>

              <Link href="/services/architects-in-lucknow" className="hover:underline decoration-emerald-500">
                Architecture Services
              </Link>.
            </div>

            {/* Micro badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Architecture", "Interior Design", "Turnkey Delivery", "Visualization", "Project Coordination"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>




        {/* Decorative corner accents (Awwwards vibe) */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/20 to-emerald-500/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/20 to-indigo-500/10 blur-3xl"
        />
      </div>
    </section>
  );
}
