"use client";
import { useState, useEffect } from "react";
import {
  HiBolt,
  HiBriefcase,
  HiCheckCircle,
  HiChevronDown,
  HiGlobeAlt,
  HiHeart,
  HiInbox,
  HiMapPin,
  HiRocketLaunch,
  HiShieldCheck,
  HiSparkles,
  HiStar,
  HiUsers,
} from "react-icons/hi2";

// Single-component Careers page with a more professional, awards-style visual language
// Inspired by modern awards sites: dark UI, vibrant accent, glossy cards, big type
// Uses only Tailwind classes (no custom theme tokens required)

export default function Careers() {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/jobs?active=true&limit=50", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load jobs");
        const data = await res.json();
        setOpenings(Array.isArray(data.items) ? data.items : []);
      } catch (e) {
        setError(e.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const perks = [
    {
      icon: <HiShieldCheck className="h-6 w-6" />,
      title: "Health-first",
      desc: "Medical cover + mental wellness stipend.",
    },
    {
      icon: <HiGlobeAlt className="h-6 w-6" />,
      title: "Remote-friendly",
      desc: "Work from anywhere, sync in IST core hours.",
    },
    {
      icon: <HiBolt className="h-6 w-6" />,
      title: "Gear & Learning",
      desc: "Mac/PC of choice + courses & conferences.",
    },
    {
      icon: <HiUsers className="h-6 w-6" />,
      title: "Ownership",
      desc: "High trust, low bureaucracy, real impact.",
    },
    {
      icon: <HiStar className="h-6 w-6" />,
      title: "Performance Bonus",
      desc: "We celebrate results with meaningful rewards.",
    },
    {
      icon: <HiHeart className="h-6 w-6" />,
      title: "Time Off",
      desc: "Flexible PTO + local holidays.",
    },
  ];

  const values = [
    { icon: <HiSparkles className="h-5 w-5" />, label: "Craft over noise" },
    { icon: <HiRocketLaunch className="h-5 w-5" />, label: "Ship, learn, repeat" },
    { icon: <HiCheckCircle className="h-5 w-5" />, label: "Bias for clarity" },
    { icon: <HiInbox className="h-5 w-5" />, label: "Own the outcome" },
  ];

  const faqs = [
    {
      q: "Do I need to be in India?",
      a: "We’re remote-first with an India hub. Roles note location expectations; we work async with a few IST core hours.",
    },
    {
      q: "What does the hiring process look like?",
      a: "Intro chat → portfolio/tech deep-dive → practical exercise (paid for some roles) → panel interview → offer & references.",
    },
    {
      q: "Do you sponsor equipment?",
      a: "Yes. Everyone gets a Mac/PC of choice, productivity software, and workspace stipend.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#F3F1EB] text-black">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Glow background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0.08) 35%, rgba(11,11,15,0) 70%), radial-gradient(40% 35% at 80% 10%, rgba(255,77,141,0.35) 0%, rgba(11,11,15,0) 70%)",
            filter: "blur(20px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide uppercase">
              <span className="inline-block h-2 w-2 rounded-full bg-[#FF4D8D]" /> We’re hiring
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Build the future with <span className="bg-gradient-to-r from-[#FF4D8D] via-[#E14C93] to-[#7C5CFF] bg-clip-text text-transparent">Trygve Studio</span>
            </h1>
            <p className="mt-6 text-base text-black/70 md:text-lg">
              Join a product-obsessed team crafting elegant, performant digital experiences.
            </p>
            <div className="mt-10 flex items-center justify-center gap-3">
              <a href="#openings" className="rounded-lg bg-white text-[#0B0B0F] px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">
                View open roles
              </a>
              <a href="#perks" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
                Why work with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-6 text-xs text-black/60 md:justify-between">
          <p>Fast hiring • Clear feedback • Fair offers</p>
          <p>Remote-first • IST core overlap</p>
          <p>Growth budget • Premium gear</p>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Open Positions</h2>
            <p className="mt-2 text-black/60">We hire for craft, curiosity, and ownership.</p>
          </div>
          <a
            href="mailto:careers@trygvestudio.com?subject=General%20Application"
            className="hidden rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-black/90 hover:bg-white/10 md:inline-block"
          >
            Send open application
          </a>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-black/10 bg-black/5 p-6">
                <div className="h-6 w-2/3 rounded bg-black/10" />
                <div className="mt-3 h-4 w-full rounded bg-black/10" />
                <div className="mt-2 h-4 w-5/6 rounded bg-black/10" />
                <div className="mt-4 flex gap-2">
                  <div className="h-6 w-20 rounded-full bg-black/10" />
                  <div className="h-6 w-24 rounded-full bg-black/10" />
                </div>
                <div className="mt-6 h-9 w-28 rounded bg-black/10" />
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            Failed to load jobs: {error}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && openings.length === 0 && (
          <div className="mt-10 rounded-2xl border border-black/10 bg-white p-10 text-center">
            <h3 className="text-xl font-semibold">No open roles right now</h3>
            <p className="mt-2 text-black/60">We update this page as new positions open. You can still send an open application.</p>
            <a
              href="mailto:careers@trygvestudio.com?subject=Open%20application"
              className="mt-6 inline-flex rounded-lg bg-[#234D7E] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Send resume
            </a>
          </div>
        )}

        {openings.length > 0 && (<div className="mt-10 grid  gap-6 md:grid-cols-2">
          {openings.map((job) => (
            <article
              key={job.id}
              className="group  relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-50 hover:bg-zinc-100  shadow  p-6 transition hover:border-white/20 hover:bg-white/[0.05] "
            >
              <div className="flex items-start justify-between  gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{job.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{job.blurb}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-black/70">
                    <span className="inline-flex items-center gap-1"><HiBriefcase className="h-4 w-4" />{job.type}</span>
                    <span className="inline-flex items-center gap-1"><HiMapPin className="h-4 w-4" />{job.location}</span>
                    <span className="inline-flex items-center gap-1"><HiUsers className="h-4 w-4" />{job.team}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Accent badge */}
                <div className="shrink-0 rounded-xl   p-[1px]">
                  <div className="rounded-[10px] bg-[#ff ffff] px-3 py-2 text-xs text-black/80">Hiring</div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  className="rounded-lg bg-[#234D7E] text-white px-4 py-2 text-sm font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition hover:opacity-90"
                  href={`mailto:careers@trygvestudio.com?subject=${encodeURIComponent(job.title)}%20-%20Application`}
                >
                  Share CV at careers@trygvestudio.com
                </a>
                {/* <button className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-black/90 transition hover:bg-white/10">
                  View details
                </button> */}
              </div>

              {/* Card glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
              </div>
            </article>
          ))}
        </div>)}
      </section>

      {/* Perks */}
      <section id="perks" className="relative border-y border-white/10 bg-white/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Perks & Benefits</h2>
            <p className="mt-2 text-black/60">Everything you need to do your best work.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="inline-flex items-center justify-center rounded-lg bg-white/10 p-3">
                  {perk.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{perk.title}</h3>
                <p className="mt-1 text-sm text-black/70">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 md:px-0 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-8">
          <h2 className="text-3xl font-semibold">Our Values</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {values.map((val, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-black/90"
              >
                {val.icon} {val.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-3xl font-semibold">Hiring Process</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            { icon: HiUsers, label: "Intro chat" },
            { icon: HiInbox, label: "Deep-dive" },
            { icon: HiBolt, label: "Practical task" },
            { icon: HiCheckCircle, label: "Offer" },
          ].map((step, i) => (
            <li key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#244D7E]">
                {step.icon && <step.icon className="h-5 w-5 text-white" />}
              </div>
              <p className="mt-3 font-medium">{`${i + 1}. ${step.label}`}</p>
              <p className="mt-1 text-sm text-black/70">
                {i === 0 && "A 20–30 min conversation about your goals and our work."}
                {i === 1 && "Portfolio or systems/architecture deep-dive with the team."}
                {i === 2 && "A short, scoped exercise. Paid for select roles."}
                {i === 3 && "We move quickly with transparent compensation."}
              </p>
            </li>
          ))}
        </ol>
      </section>

   

      {/* CTA */}
      <section className="relative py-2 ">
        <div className="absolute inset-0 -z-10 opacity-50" aria-hidden style={{
          background: "radial-gradient(40% 40% at 50% 50%, rgba(124,92,255,0.25) 0%, rgba(11,11,15,0) 70%)"
        }} />
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 text-center">
          <h2 className="text-3xl font-semibold">Ready to make an impact?</h2>
          <p className="mt-3 text-black/70">Join us and shape digital experiences that matter.</p>
          <a
            href="mailto:careers@trygvestudio.com"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#244D7E] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition hover:opacity-90"
          >
            Send your resume
          </a>
        </div>
      </section>
    </div>
  );
}