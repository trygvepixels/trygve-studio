// components/ProjectsClient.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, useCallback } from "react";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import {
  FiSearch,
  FiFilter,
  FiMapPin,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiRefreshCw,
  FiArrowRight,
} from "react-icons/fi";

/* ------------------------------- helpers ------------------------------- */

function slugify(s = "") {
  return s
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeProjects(raw) {
  const arr = Array.isArray(raw?.items)
    ? raw.items
    : Array.isArray(raw?.data)
    ? raw.data
    : Array.isArray(raw)
    ? raw
    : [];

  return arr.map((p) => {
    const isFeature = "coverImage" in p || "galleryImages" in p;

    const cover = isFeature ? p.coverImage : p.cover;
    const gallery = isFeature ? p.galleryImages || [] : p.gallery || [];
    const title = p.title || "Untitled";
    const slug = p.slug || p._id || p.id || slugify(title);
    const type =
      p.type ||
      (Array.isArray(p.tags) && p.tags.length ? p.tags[0] : "Project");
    const location = p.location || "";
    const description = p.description || p.blurb || "";
    const timeline = isFeature ? p.year : p.timeline;

    return {
      id: p._id || p.id || slug,
      slug: String(slug),
      title,
      cover,
      gallery,
      type,
      location,
      description,
      tags: p.tags || [],
      timeline: timeline || "",
      featured: Boolean(p.featured),
      createdAt: p.createdAt || p._createdAt || null,
      _raw: p,
    };
  });
}

function parseYearish(v) {
  if (!v) return null;
  if (typeof v === "number") return v;
  const m = String(v).match(/\d{4}(?!.*\d{4})/);
  return m ? Number(m[0]) : null;
}

function useDebouncedValue(value, delay = 300) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

/* --------------------------------- UI ---------------------------------- */

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-3.5 py-1.5 rounded-full text-sm border transition-all whitespace-nowrap
      ${
        active
          ? "bg-black text-white border-black shadow-[0_6px_16px_rgba(0,0,0,0.15)]"
          : "bg-white text-neutral-700 border-black/10 hover:border-black/20 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
      }`}
    >
      {children}
    </button>
  );
}

function StatChip({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] bg-white/90 text-black border border-black/10 shadow-sm">
      {Icon && <Icon className="shrink-0" />}
      <span className="truncate">{children}</span>
    </span>
  );
}

function ProjectCard({ item }) {
  const href = `/projects/${encodeURIComponent(item.slug)}`;
  const headingId = `project-${item.slug}-title`;

  return (
    <Link
      href={href}
      aria-labelledby={headingId}
      className="block focus:outline-none"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="rounded-2xl overflow-hidden bg-[white] border border-black/10 shadow-lg flex flex-col transition-all duration-300 hover:shadow-xl">
        {/* Image with overlay title/location */}
        <figure className="relative w-full">
          <div className="relative w-full aspect-[3/2] bg-neutral-100">
            {item.cover ? (
              <img
                src={item.cover}
                alt={item.title}
                className="object-cover w-full h-full rounded-t-2xl"
                style={{ aspectRatio: "3/2" }}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-neutral-200 rounded-t-2xl" />
            )}
            {/* Overlay title/location */}
            <div className="absolute inset-x-0 bottom-0 p-4 pt-8 flex flex-col justify-end"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.60) 60%, rgba(0,0,0,0.00) 100%)",
              }}
            >
              <h3
                id={headingId}
                className="text-white text-lg font-semibold drop-shadow-sm"
              >
                {item.title}
              </h3>
              {item.location && (
                <div className="mt-1 flex items-center gap-2">
                  <FiMapPin className="text-white text-base opacity-80" />
                  <span className="text-white text-xs font-medium drop-shadow-sm">{item.location}</span>
                </div>
              )}
            </div>
          </div>
        </figure>
        {/* Card body */}
        <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
          {/* Project type */}
          {item.type && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 mb-1">
              {item.type}
            </span>
          )}
          {/* Description */}
          {item.description && (
            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-3">
              {item.description}
            </p>
          )}
          {/* Tags */}
          {!!(item.tags || []).length && (
            <div className="flex flex-wrap gap-2 mb-4">
              {(item.tags || []).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-black/10"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          {/* Timeline at bottom */}
          <div className="mt-auto flex items-center gap-2 pt-2">
            {item.timeline && (
              <>
                <FiCalendar className="text-neutral-400 text-base" />
                <span className="text-xs text-neutral-700 font-medium">{item.timeline}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ------------------------------- page ------------------------------- */

export default function ProjectsClient() {
  const [projects, setProjects] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [type, setType] = useState("All");
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const pageSize = 12;
  const qDebounced = useDebouncedValue(q, 300);

  const fetchSafely = useCallback(async (url, signal) => {
    const res = await fetch(url, { cache: "no-store", signal });
    if (!res.ok) throw new Error(`Fetch failed: ${url} -> ${res.status}`);
    return res.json();
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setErrorMsg("");
    const ctrl = new AbortController();
    try {
      const [featRes, projRes] = await Promise.allSettled([
        fetchSafely("/api/feature-projects", ctrl.signal),
        fetchSafely("/api/projects", ctrl.signal),
      ]);

      const features =
        featRes.status === "fulfilled" ? normalizeProjects(featRes.value) : [];
      const standard =
        projRes.status === "fulfilled" ? normalizeProjects(projRes.value) : [];

      // merge + de-dupe (prefer with cover or featured)
      const byKey = new Map();
      const putAll = (list) => {
        for (const item of list) {
          const key = item.slug || item.id;
          if (!key) continue;
          if (!byKey.has(key)) byKey.set(key, item);
          else {
            const existing = byKey.get(key);
            const replace =
              (item.cover && !existing.cover) ||
              (item.featured && !existing.featured);
            if (replace) byKey.set(key, item);
          }
        }
      };
      putAll(standard);
      putAll(features);

      let merged = Array.from(byKey.values());

      // featured → timeline desc → createdAt desc → title
      merged.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        const ay = parseYearish(a.timeline);
        const by = parseYearish(b.timeline);
        if (ay !== by) return (by || 0) - (ay || 0);
        const ad = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const bd = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        if (ad !== bd) return bd - ad;
        return String(a.title).localeCompare(String(b.title));
      });

      setProjects(merged);

      const tags = Array.from(
        new Set(merged.flatMap((p) => (Array.isArray(p.tags) ? p.tags : [])))
      );
      setAllTags(tags);
    } catch (e) {
      if (e.name !== "AbortError") {
        console.error(e);
        setErrorMsg("We couldn’t load projects right now. Please try again.");
        setProjects([]);
        setAllTags([]);
      }
    } finally {
      setLoading(false);
    }
    return () => ctrl.abort();
  }, [fetchSafely]);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(() => {
    let list = Array.isArray(projects) ? [...projects] : [];
    if (type && type !== "All") list = list.filter((p) => p.type === type);
    if (qDebounced) {
      const s = qDebounced.toLowerCase();
      list = list.filter((p) => {
        const tagsStr = Array.isArray(p.tags) ? p.tags.join(" ") : "";
        return (
          (p.title || "").toLowerCase().includes(s) ||
          (p.location || "").toLowerCase().includes(s) ||
          tagsStr.toLowerCase().includes(s)
        );
      });
    }
    if (tag) list = list.filter((p) => p.tags?.includes(tag));
    return list;
  }, [projects, type, qDebounced, tag]);

  const tagCounts = useMemo(() => {
    const counts = new Map();
    for (const p of filtered) for (const t of p.tags || []) counts.set(t, (counts.get(t) || 0) + 1);
    return Array.from(counts.entries())
      .sort((a, b) => (b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))
      .map(([name, count]) => ({ name, count }));
  }, [filtered]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [pageCount, page]);

  const visible = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const typeTabs = ["All", "Interior", "Architecture"];

  return (
    <main className="min-h-screen mt-10 bg-[#F5F4F1] text-[#101010]">
      
       <div className="fixed bottom-5 z-10 right-5">
               
            </div>
      {/* Hero */}
      <section className="relative  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F7F5] to-[#EFEDE8]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#ddd 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-0 py-16 lg:py-10">
          <span className="inline-flex items-center text-[11px] tracking-[0.22em] font-semibold uppercase px-3 py-1 rounded-full border border-black/10 bg-white">
            Projects


          </span>
          <h1 className="mt-4 text-3xl lg:text-5xl font-semibold tracking-tight">
            Project Gallery
          </h1>
          <p className="mt-3 text-neutral-700 max-w-2xl">
            Interiors and architecture delivered across the globe — filter by category, location or tags.


          </p>

          {/* Controls */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 bg-white/70 backdrop-blur rounded-2xl border border-black/10 p-3">
            <div className="relative flex-1 min-w-[220px]">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                aria-label="Search projects"
                placeholder="Search titles, locations, tags…"
                value={q}
                onChange={(e) => {
                  setPage(1);
                  setQ(e.target.value);
                }}
                className="w-full h-10 pl-9 pr-3 rounded-xl bg-white border border-black/10 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-black/20"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 text-neutral-700 text-sm">
                <FiFilter />
                Filter
              </div>
              <select
                aria-label="Project type"
                value={type}
                onChange={(e) => {
                  setPage(1);
                  setType(e.target.value);
                }}
                className="h-10 rounded-xl bg-white border border-black/10 px-3 text-neutral-800 focus:ring-2 focus:ring-black/20 outline-none"
              >
                {typeTabs.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 overflow-x-auto">
            <div className="flex flex-wrap gap-2 min-w-max max-h-[5.5rem] overflow-y-hidden">
              <Pill
                active={!tag}
                onClick={() => {
                  setTag("");
                  setPage(1);
                }}
              >
                All
              </Pill>
              {tagCounts.map(({ name, count }) => (
                <Pill
                  key={name}
                  active={tag === name}
                  onClick={() => {
                    setTag(name === tag ? "" : name);
                    setPage(1);
                  }}
                >
                  {name} <span className="opacity-70">({count})</span>
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative max-w-7xl pt-10 mx-auto px-6 lg:px-0 pb-14">
        {errorMsg ? (
          <div className="flex items-center gap-3 text-neutral-700 bg-white border border-black/10 rounded-xl p-4">
            <span>{errorMsg}</span>
            <button
              type="button"
              onClick={() => load()}
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-3 py-1.5 text-sm text-neutral-800 bg-white hover:bg-black hover:text-white transition"
            >
              <FiRefreshCw className="animate-spin-slow motion-reduce:animate-none" />
              Retry
            </button>
          </div>
        ) : loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : visible.length === 0 ? (
          <div className="bg-white/70 border border-black/10 rounded-2xl p-6">
            <p className="text-neutral-700">
              No projects match your filters. Try clearing the search or choose
              a different tag.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setQ("");
                  setTag("");
                  setType("All");
                  setPage(1);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm text-neutral-800 bg-white hover:bg-black hover:text-white transition"
              >
                Reset filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {visible.map((p) => (
              <ProjectCard key={p.id} item={p} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {filtered.length > pageSize && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setPage((x) => Math.max(1, x - 1))}
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm text-neutral-800 bg-white hover:bg-black hover:text-white transition disabled:opacity-40"
              disabled={page <= 1}
            >
              <FiChevronLeft /> Prev
            </button>
            <span className="text-sm text-neutral-700">
              Page {page} of {pageCount}
            </span>
            <button
              type="button"
              onClick={() => setPage((x) => Math.min(pageCount, x + 1))}
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-sm text-neutral-800 bg-white hover:bg-black hover:text-white transition disabled:opacity-40"
              disabled={page >= pageCount}
            >
              Next <FiChevronRight />
            </button>
          </div>
        )}
      </section>

      {/* slow spin helper (Tailwind keyframe "spin" exists by default) */}
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 1.5s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}