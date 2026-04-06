import ServicesClient from "./ServicesClient";

export const metadata = {
    title: "Our Services | Architecture, Interior Design & PMC Lucknow",
    description:
        "Explore our range of services including Architecture Design, Interior Design, Project Management Consultancy (PMC), and 3D Visualisation in Lucknow.",
    alternates: {
        canonical: "https://trygvestudio.com/services",
    },
    openGraph: {
        title: "Our Services | Architecture, Interior Design & PMC | Trygve Studio",
        description:
            "Architecture, Interior Design, PMC, 3D Walkthrough — full-service design studio in Lucknow. Explore our offerings.",
        url: "https://trygvestudio.com/services",
        siteName: "Trygve Studio",
        images: [{ url: "https://trygvestudio.com/og-image.jpg", width: 1200, height: 630 }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | Trygve Studio — Architecture & Interior Design Lucknow",
        description: "Full-service architecture, interior design & PMC in Lucknow.",
        images: ["https://trygvestudio.com/twitter-image.jpg"],
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
