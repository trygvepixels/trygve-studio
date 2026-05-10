import ContactClient from "./ContactClient";

export const metadata = {
    title: "Contact Trygve Studio | Architecture and Interior Consultation in Lucknow",
    description:
        "Contact Trygve Studio for architecture, interior design and turnkey project consultations in Lucknow. Reach our team by phone, WhatsApp or email.",
    alternates: {
        canonical: "https://trygvestudio.com/contact-us",
    },
    openGraph: {
        title: "Contact Trygve Studio | Architecture Consultation in Lucknow",
        description:
            "Talk to the Trygve Studio team in Lucknow about architecture, interiors and turnkey project requirements.",
        url: "https://trygvestudio.com/contact-us",
        siteName: "Trygve Studio",
        images: [{ url: "https://trygvestudio.com/og-image.jpg", width: 1200, height: 630 }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Trygve Studio | Architecture Consultation in Lucknow",
        description: "Get in touch with Trygve Studio for architecture, interiors and project planning support in Lucknow.",
        images: ["https://trygvestudio.com/twitter-image.jpg"],
    },
};

export default function ContactUsPage() {
    return <ContactClient />;
}
