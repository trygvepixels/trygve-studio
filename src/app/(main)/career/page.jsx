import Script from "next/script";
import CareerClient from "./CareerClient";

export const metadata = {
  title: "Career | Join Trygve Studio - Architecture & Design Team",
  description:
    "Join our global architecture and design studio. Explore job opportunities and build the future of premium digital and physical experiences with Trygve Studio.",
  alternates: {
    canonical: "https://trygvestudio.com/career",
  },
};

export default function CareerPage() {
  const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "3D Architectural Visualizer & Designer (Remote / Local)",
    "description": "We are looking for creative architects and 3D visualizers to join Trygve Studio. You will work on luxury villas, commercial spaces, and retail experiences worldwide.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Trygve Studio",
      "value": "TS-2026-ARCH"
    },
    "datePosted": "2026-02-26",
    "validThrough": "2026-12-31",
    "employmentType": ["FULL_TIME", "CONTRACTOR"],
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Trygve Studio Private Limited",
      "sameAs": "https://trygvestudio.com",
      "logo": "https://trygvestudio.com/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 728, Phase 2, Kursi Road, Gudamba",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226026",
        "addressCountry": "IN"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India"
    },
    "jobLocationType": "TELECOMMUTE",
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 300000,
        "maxValue": 800000,
        "unitText": "YEAR"
      }
    }
  };

  return (
    <>
      <Script id="job-posting-schema" type="application/ld+json">
        {JSON.stringify(jobSchema)}
      </Script>
      <CareerClient />
    </>
  );
}
