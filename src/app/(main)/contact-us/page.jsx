import ContactClient from "./ContactClient";

export const metadata = {
    title: "Contact Trygve Studio | Book a Free Architectural Consultation",
    description:
        "Ready to build your dream space? Contact Trygve Studio for premium architecture, interior design, and turnkey construction. Offices in Lucknow & Patna.",
    alternates: {
        canonical: "https://trygvestudio.com/contact-us",
    },
    openGraph: {
        title: "Contact Trygve Studio | Free Consultation",
        description:
            "Book a free architectural consultation. Premium architecture, interior design & turnkey construction in Lucknow.",
        url: "https://trygvestudio.com/contact-us",
        siteName: "Trygve Studio",
        images: [{ url: "https://trygvestudio.com/og-image.jpg", width: 1200, height: 630 }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Trygve Studio | Book Free Consultation",
        description: "Get in touch for architecture, interior design & construction in Lucknow & Patna.",
        images: ["https://trygvestudio.com/twitter-image.jpg"],
    },
};

export default function ContactUsPage() {
    return <ContactClient />;
}
