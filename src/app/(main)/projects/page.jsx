import ProjectListClient from "./ProjectListClient";

export const metadata = {
    title: "Architecture & Interior Design Projects in Lucknow | Portfolio 2026 | Trygve Studio",
    description:
        "Browse Trygve Studio's portfolio of residential architecture, interior design and turnkey construction projects in Lucknow and PAN India. 200+ completed spaces — villas, offices, hospitality and commercial projects.",
    keywords: [
        "architecture projects in lucknow",
        "interior design portfolio lucknow",
        "residential architecture portfolio",
        "turnkey construction portfolio lucknow",
        "trygve studio projects",
    ],
    alternates: {
        canonical: "https://trygvestudio.com/projects",
    },
    openGraph: {
        title: "Architecture & Interior Design Projects | 200+ Completed | Trygve Studio",
        description:
            "Browse Trygve Studio's portfolio — residential, commercial & hospitality projects across Lucknow and PAN India. 200+ completed since 2019.",
        url: "https://trygvestudio.com/projects",
        siteName: "Trygve Studio",
        images: [{ url: "https://trygvestudio.com/og-image.jpg", width: 1200, height: 630, alt: "Architecture Projects — Trygve Studio" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Architecture & Interior Design Portfolio | Trygve Studio Lucknow",
        description: "Explore Trygve Studio's portfolio — villas, residences, offices, retail and hospitality projects across Lucknow since 2019.",
        images: ["https://trygvestudio.com/twitter-image.jpg"],
    },
};

export default function ProjectsPage() {
    return <ProjectListClient />;
}
