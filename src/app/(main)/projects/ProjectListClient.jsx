import ProjectsClient from "@/components/ProjectsClient";
import Script from "next/script";

export const metadata = {
  title: "Projects in Lucknow | Trygve Studio",
  description:
    "Explore our latest Architecture & Interior Design projects in Lucknow (Gomti Nagar, Hazratganj). Hospitality, Residential & Commercial spaces crafted with precision.",
};

export default function Page() {
  return (
    <>
      <Script id="projects-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Trygve Studio Architecture & Interior Design Portfolio",
          "description": "A collection of premium residential and commercial design projects across India and worldwide.",
          "url": "https://trygvestudio.com/projects",
          "creator": {
            "@type": "Organization",
            "name": "Trygve Studio"
          }
        })}
      </Script>
      <ProjectsClient />
    </>
  );
}