"use client";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiMapPin,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

/* ----------------------------- Small Components ---------------------------- */

function Tag({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm transition ${
        active
          ? "bg-black text-white border-black shadow-[0_6px_16px_rgba(0,0,0,0.15)]"
          : "bg-white border-black/15 hover:border-black/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
      }`}
    >
      {label}
    </button>
  );
}

function ProjectCard({ item, onOpen }) {
  return (
    <button
      onClick={() => onOpen(item)}
      className="text-left rounded-2xl overflow-hidden border border-black/10 bg-white group shadow-[0_6px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)] transition-shadow"
    >
      <figure className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.cover}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3">
          <div className="text-white font-semibold">{item.title}</div>
          <div className="text-white/80 text-xs flex items-center gap-2">
            <FiMapPin /> {item.location}
          </div>
        </figcaption>
      </figure>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-neutral-600">
          {item.type}
        </div>
        <div className="mt-2 line-clamp-2 text-neutral-800 text-[15px]">
          {item.description}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {(item.tags ?? []).slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#F4F1EC] border border-black/10 px-2 py-1 text-[12px]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-neutral-600">
          <FiCalendar /> {item.timeline}
        </div>
      </div>
    </button>
  );
}

/* --------------------------------- Lightbox -------------------------------- */

function Lightbox({ open, item, onClose }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStart = useRef(null);

  const images = item ? [item.cover, ...(item.gallery || [])] : [];

  // Reset index when a new item is opened
  useEffect(() => {
    if (open) setIndex(0);
  }, [open, item]);

  // Lock body scroll + focus trap basics
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // focus the dialog for keyboard events
    containerRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, images.length]);

  const prev = () => {
    if (!images || images.length === 0) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };
  const next = () => {
    if (!images || images.length === 0) return;
    setIndex((i) => (i + 1) % images.length);
  };

  if (!open || !item) return null;

  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    // prevent bounce while swiping images
    if (touchStart.current != null) e.preventDefault();
  };
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStart.current = null;
  };

  return (
    <div
      onClick={onBackdrop}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label={`${item.title} gallery`}
    >
      <div
        ref={containerRef}
        tabIndex={-1}
        className="relative max-w-6xl w-full rounded-2xl overflow-hidden bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 border border-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Close"
        >
          <FiX />
        </button>

        <div className="grid md:grid-cols- relative">
          {/* Media column */}
          <div
            className="relative bg-neutral-50 select-none"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Image */}
            <div className="aspect-[4/3] md:aspect-auto md:h-[80vh] overflow-hidden">
              <img
                key={images[index]}
                src={images[index]}
                alt={`${item.title} – image ${index + 1}`}
                className="h-full w-full object-contain md:object-cover transition-all duration-500"
                draggable={false}
              />
            </div>

            {/* Gradient edges for polish */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />

            {/* Prev / Next */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
              <button
                onClick={prev}
                disabled={images.length < 2}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 border border-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={next}
                disabled={images.length < 2}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 border border-black/10 hover:bg-white focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
            </div>

            {/* Counter + dots */}
            {/* <div className="absolute -bottom- left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-xs bg-black/70 text-white">
                {index + 1} / {images.length}
              </span>
              <div className="flex gap-1.5">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-4 rounded-full transition-all ${
                      i === index ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div> */}
          </div>
          {/* <div className="absolute bottom-0 left-0 w-full h-f ull bg-gradient-to-bl from-transparent to-black/50 h-20 z -10">

</div> */}
          {/* Meta column */}
          <div className="p-5 bottom-4 left-4 absolute md:p-6 overflow-auto  ">
            {/* <div className="text-[11px] uppercase tracking-[0.16em] bg-[#F4F1EC] px-2  text-neutral-600">
              {item.type}
            </div> */}
            {/* <h3 className="text-2xl bg-[#F4F1EC] px-2  md:text-3xl font-semibold mt-1.5">
              {item.title}
            </h3> */}
            {/* <div className="mt-2 text-neutral-700 leading-relaxed">
              {item.description}
            </div> */}

            <div className="mt-4 grid gap-2 text-sm">
              {/* <div className="flex items-center gap-2 text-white">
                <FiMapPin className="shrink-0" /> {item.location}
              </div> */}
              {/* <div className="flex items-center gap-2 text-neutral-700">
                <FiCalendar className="shrink-0" /> {item.timeline}
              </div> */}
              {/* <div className="mt-2 flex flex-wrap gap-2">
                {(item.tags || []).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#F4F1EC] border border-black/10 px-2 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Page Component ---------------------------- */

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);
  const [type, setType] = useState("All");
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(buildUrl(), { cache: "no-store" });
    const json = await res.json();
    const arr = Array.isArray(json?.data)
      ? json.data
      : Array.isArray(json)
      ? json
      : [];
    setProjects(arr);
    const uniqueTags = Array.from(
      new Set(arr.flatMap((p) => (Array.isArray(p.tags) ? p.tags : [])))
    );
    setTags(uniqueTags);
    setLoading(false);
  };

  // Slight polish: prefetch images when the modal opens (simple hinting)
  useEffect(() => {
    if (!activeItem) return;
    const imgs = [activeItem.cover, ...(activeItem.gallery || [])];
    imgs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [activeItem]);

  const buildUrl = () => "/api/projects";

  

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProjects = useMemo(() => {
    let list = Array.isArray(projects) ? [...projects] : [];
    if (type && type !== "All") list = list.filter((p) => p.type === type);
    if (q) {
      const s = q.toLowerCase();
      list = list.filter(
        (p) =>
          (p.title || "").toLowerCase().includes(s) ||
          (p.location || "").toLowerCase().includes(s) ||
          (Array.isArray(p.tags) ? p.tags.join(" ") : "")
            .toLowerCase()
            .includes(s)
      );
    }
    if (tag)
      list = list.filter((p) => Array.isArray(p.tags) && p.tags.includes(tag));
    return list;
  }, [projects, type, q, tag]);

  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [pageCount]);

  const visibleProjects = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredProjects.slice(start, start + pageSize);
  }, [filteredProjects, page]);

  const onOpen = (item) => {
    setActiveItem(item);
    setLightboxOpen(true);
  };
  const onClose = () => {
    setLightboxOpen(false);
    setActiveItem(null);
  };

  const typeTabs = useMemo(() => ["All", "Interior", "Architecture"], []);

  return (
    <main className="bg-[#F4F1EC] text-[#101010] min-h-screen">
      <section className="max-w-7xl mx-auto px-5 pt-10 pb-6 md:pt-16">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-wider uppercase text-neutral-600">
              Projects
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Gallery
            </h1>
            <p className="mt-2 text-neutral-700">
              Interiors and architecture delivered across the globe — filter by
              category, location or tags.
            </p>
          </div>

          {/* Search & filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                placeholder="Search projects, locations, tags…"
                value={q}
                onChange={(e) => {
                  setPage(1);
                  setQ(e.target.value);
                }}
                className="pl-9 pr-3 h-10 rounded-full border border-black/15 bg-white outline-none focus:ring-2 focus:ring-black/30"
              />
            </div>
            <div className="flex items-center gap-2">
              <FiFilter className="text-neutral-500" />
              <select
                value={type}
                onChange={(e) => {
                  setPage(1);
                  setType(e.target.value);
                }}
                className="h-10 rounded-full border border-black/15 bg-white px-3 focus:ring-2 focus:ring-black/30"
              >
                {typeTabs.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>

        {/* Tags row */}
        <div className="mt-5 flex flex-wrap gap-2">
          <Tag
            label="All tags"
            active={!tag}
            onClick={() => {
              setTag("");
              setPage(1);
            }}
          />
          {tags.map((t) => (
            <Tag
              key={t}
              label={t}
              active={tag === t}
              onClick={() => {
                setTag(t);
                setPage(1);
              }}
            />
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-5 pb-12">
        <section className="max-w-7xl mx-auto md:px-0 px-4 pb-12">
          {loading ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-neutral-600">No projects found.</div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {visibleProjects.map((p) => (
                <ProjectCard key={p.id || p._id} item={p} onOpen={onOpen} />
              ))}
            </div>
          )}
        </section>

        {/* Pagination */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={() => setPage((x) => Math.max(1, x - 1))}
            className="rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition disabled:opacity-40"
            disabled={page <= 1}
          >
            Prev
          </button>
          <span className="text-sm text-neutral-700">
            Page {page} of {pageCount}
          </span>
          <button
            onClick={() => setPage((x) => Math.min(pageCount, x + 1))}
            className="rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition disabled:opacity-40"
            disabled={page >= pageCount}
          >
            Next
          </button>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox open={lightboxOpen} item={activeItem} onClose={onClose} />
    </main>
  );
}

/* ---------------------- app/api/projects/route.js (unchanged) ---------------------- */
// You can keep your existing API route exactly as you shared.
