import ProjectListClient from "./ProjectListClient";

export const metadata = {
    title: "Projects | Architecture & Interior Design Portfolio | Trygve Studio",
    description:
        "Explore our portfolio of premium architecture and interior design projects in Lucknow and worldwide. Luxury residences, commercial spaces, and more.",
    alternates: {
        canonical: "https://trygvestudio.com/projects",
    },
};

export default function ProjectsPage() {
    return <ProjectListClient />;
}
