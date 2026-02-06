"use client";
import { useState } from "react";
import Image from "next/image";
import { FiHome, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const cloudinaryLoader = ({ src }) => src;

export default function ProjectDetailClient({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const accent = project.accentColor?.split(" ")[0] || "#111";
  const images = Array.isArray(project.galleryImages) ? project.galleryImages : [];

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  const nextImage = () =>
    setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : 0));

  return (
    <div className="min-h-screen bg-[#F4F1EC] px- py-0 lg:px-24 lg:py-0">
      {/* Video Schema for Rich Snippets */}
      {project.mediaType === "video" && project.mediaUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": project.title,
              "description": project.description || `Architectural showcase of ${project.title} by Trygve Studio.`,
              "thumbnailUrl": [project.coverImage].filter(Boolean),
              "uploadDate": project.createdAt || new Date().toISOString(),
              "contentUrl": project.mediaUrl,
              "embedUrl": project.mediaUrl,
              "publisher": {
                "@type": "Organization",
                "name": "Trygve Studio",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://trygvestudio.com/logo.png"
                }
              }
            })
          }}
        />
      )}
      <Breadcrumbs projectTitle={project.title} />
      {/* Hero Section with Background */}
      <div
        className="relative max-w-7xl mx-auto w-full h-[60vh] rounded-xl overflow-hidden flex items-center justify-center text-center"
      >
        {project.coverImage ? (
          <Image
            loader={cloudinaryLoader}
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-[#F4F1EC]" />
        )}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-6">
          <h1 className="text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>
          {(project.client || project.year) && (
            <p className="text-gray-200 text-lg">
              {project.client}
              {project.client && project.year ? " • " : ""}
              {project.year}
            </p>
          )}
        </div>
      </div>

      {/* Info Section */}
      {project.description && (
        <div className="mt-16 max-w-7xl px-4 mx-auto text">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Project</h2>
          <p className="text-lg text-gray-700 leading-8 whitespace-pre-line">
            {project.description}
          </p>
        </div>
      )}

      {/* Gallery Masonry Grid */}
      {images.length > 0 && (
        <div className="mt-16 bg-[#F4F1EC] px-4 max-w-7xl mx-auto  columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white/70 backdrop-blur-md"
            >
              <img
                src={img}
                alt={`${project.title} image ${i + 1}`}
                loading="lazy"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Sidebar Section */}
      <div className="mt-20 max-w-7xl mx-auto  pb-0">
        {/* Categories Card */}


        {/* Highlights Card */}
        {project.stats?.length > 0 && (
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-6">
              Key Highlights
            </h3>
            <div className="space-y-5">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl shadow-lg border border-transparent bg-white relative overflow-hidden"

                >
                  <div className="absolute inset-0 rounded-xl pointer-events-none" />
                  <p
                    className="md:text-4xl text-2xl font-semibold text-[#244D7E] relative z-10"
                  // style={{ color: accent }}
                  >
                    {stat.value}
                  </p>
                  {stat.label && (
                    <p className="text-sm text-gray-600 mt-1 relative z-10">
                      {stat.label}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links Card */}
        {/* {(project.liveUrl || project.caseStudyUrl) && (
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col justify-center space-y-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="block py-3 rounded-full font-semibold text-white text-center shadow-md transition hover:shadow-xl"
                style={{ backgroundColor: accent }}
              >
                Visit Website
              </a>
            )}
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noreferrer"
                className="block py-3 rounded-full font-semibold text-center border border-gray-300 text-gray-700 hover:border-gray-500 transition"
              >
                View Case Study
              </a>
            )}
          </div>
        )} */}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100000000] p-6">
          <div className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center">
            <img
              src={images[lightboxIndex]}
              alt={`Project image ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
            />
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white text-2xl hover:bg-black/60 transition"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white text-3xl hover:bg-black/60 transition"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white text-3xl hover:bg-black/60 transition"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Breadcrumbs({ projectTitle }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 py-8">
      <ol className="flex items-center space-x-2 text-[14px] text-neutral-500">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-black transition-colors">
            <FiHome className="mr-1.5" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-neutral-300" />
          <Link href="/projects" className="hover:text-black transition-colors">
            Projects
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-neutral-300" />
          <span className="font-semibold text-black truncate max-w-[200px] md:max-w-none">
            {projectTitle}
          </span>
        </li>
      </ol>
    </nav>
  );
}