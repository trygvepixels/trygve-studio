import HomeClient from "./HomeClient";
import Script from "next/script";

export const metadata = {
    title: "Architect Office Near Me in Lucknow | Residential, Interior & Turnkey Design | Trygve Studio",
    description:
        "Looking for an architect office near me in Lucknow? Trygve Studio supports homes, interiors and turnkey projects with local consultation, planning, approvals and execution guidance.",
    alternates: {
        canonical: "https://trygvestudio.com/",
    },
    openGraph: {
        title: "Architect Office Near Me in Lucknow | Residential, Interior & Turnkey Design",
        description:
            "A Lucknow-based architect office for homes, commercial spaces, interiors and turnkey project delivery across key local growth corridors.",
        url: "https://trygvestudio.com/",
    },
};

const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who are the best architects in Lucknow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Trygve Studio is widely recognized as one of the best architecture firms in Lucknow. ISO 9001:2015 certified with 200+ delivered projects across luxury residential, commercial, and turnkey construction. Located in Kursi Road, Lucknow.",
            },
        },
        {
            "@type": "Question",
            name: "How much do architects charge in Lucknow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Architect fees in Lucknow typically range from ₹45 to ₹85 per square foot for design services. For a 2,000 sq ft home, architecture fees range from ₹90,000 to ₹1,70,000. Trygve Studio offers free initial consultations.",
            },
        },
        {
            "@type": "Question",
            name: "What is the construction cost per sq ft in Lucknow in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In 2026, the house construction cost in Lucknow ranges from ₹1,650 (standard) to ₹2,850+ per sq ft (luxury turnkey). This includes materials, labour, and basic approvals.",
            },
        },
        {
            "@type": "Question",
            name: "Does Trygve Studio provide turnkey construction in Lucknow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Trygve Studio provides complete turnkey construction services in Lucknow — from architecture design, LDA sanction, construction management to interior fit-out. We handle everything under one roof.",
            },
        },
        {
            "@type": "Question",
            name: "Which areas in Lucknow does Trygve Studio serve?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Trygve Studio serves all major areas in Lucknow including Gomti Nagar, Hazratganj, Kursi Road, Sushant Golf City, Shaheed Path, Jankipuram, Amar Shaheed Path, and surrounding regions.",
            },
        },
        {
            "@type": "Question",
            name: "Where is your architect office near me in Lucknow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Trygve Studio works with clients across Lucknow and offers meeting access near Kursi Road, Vikas Nagar and Gomti Nagar, depending on the project stage and consultation requirement.",
            },
        },
    ],
};

export default function HomePage() {
    return (
        <>
            <Script id="home-faq-schema" type="application/ld+json">
                {JSON.stringify(homeFaqSchema)}
            </Script>
            <HomeClient />
        </>
    );
}
