"use client";

import Script from "next/script";

export default function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ar. Faisal Saif",
        "jobTitle": "Founder & Director",
        "url": "https://trygvestudio.com/about-us",
        "image": "https://trygvestudio.com/faisal-saif.jpg", // Ensure this exists or use a valid URL
        "sameAs": [
            "https://in.linkedin.com/in/faisal-saif-5a8b7a1b/", // Example, should be verified
            "https://www.instagram.com/trygvestudio/",
            "https://wa.me/919554440400"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Trygve Studio Private Limited",
            "url": "https://trygvestudio.com/"
        },
        "description": "Founder and Director of Trygve Studio, Ar. Faisal Saif is an experienced architect and interior designer specializing in luxury residential and commercial projects in Lucknow and worldwide.",
        "knowsAbout": [
            "Architecture",
            "Interior Design",
            "Luxury Home Design",
            "Sustainable Architecture",
            "Lucknow Development Authority Bylaws",
            "Project Management"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
        }
    };

    return (
        <Script
            id="person-schema-faisal"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
