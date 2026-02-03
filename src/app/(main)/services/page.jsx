import ServicesClient from "./ServicesClient";

export const metadata = {
    title: "Our Services | Architecture, Interior Design & PMC Lucknow",
    description:
        "Explore our range of services including Architecture Design, Interior Design, Project Management Consultancy (PMC), and 3D Visualisation in Lucknow.",
    alternates: {
        canonical: "https://trygvestudio.com/services",
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
