import ProjectListClient from "./ProjectListClient";

export const metadata = {
    title: "Luxury Portfolio | Premium Architecture & Interior Design | Trygve Studio",
    description:
        "Explore our award-winning portfolio of 200+ luxury villas, commercial spaces, and premium interiors in Lucknow and PAN India. 2026 Updated Gallery.",
    alternates: {
        canonical: "https://trygvestudio.com/projects",
    },
    openGraph: {
        title: "Our Portfolio | 200+ Luxury Projects | Trygve Studio",
        description:
            "Award-winning villas, commercial spaces & premium interiors across Lucknow and PAN India. View our 2026 portfolio.",
        url: "https://trygvestudio.com/projects",
        siteName: "Trygve Studio",
        images: [{ url: "https://trygvestudio.com/og-image.jpg", width: 1200, height: 630 }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | 200+ Luxury Architecture & Interior Projects",
        description: "Explore Trygve Studio's award-winning portfolio of luxury villas and premium interiors.",
        images: ["https://trygvestudio.com/twitter-image.jpg"],
    },
};

export default function ProjectsPage() {
    return <ProjectListClient />;
}
