import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Script from "next/script";

// app/services/page.jsx

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: {
    default:
      "Architecture & Interior Design Services in Lucknow | Trygve Studio",
    template: "%s | Trygve Studio",
  },
  description:
    "Architecture design, interior design, turnkey construction, 3D visualisation, PMC and EPC services in Lucknow. One studio for concept to handover — from ₹45/sq ft. ISO 9001:2015 certified. Free consultation.",
  keywords: [
    "architecture and interior design services lucknow",
    "pmc services lucknow",
    "3d walkthrough company lucknow",
    "turnkey construction lucknow",
    "architecture firm lucknow",
    "interior design services lucknow",
    "architectural consultancy lucknow",
    "project management consultancy lucknow",
    "engineering procurement construction lucknow",
  ],
  alternates: { canonical: "https://trygvestudio.com/services" },

  twitter: {
    card: "summary_large_image",
    title: "Architecture & Interior Design Services in Lucknow | Trygve Studio",
    description:
      "Architecture design, interior design, turnkey construction, PMC, EPC and 3D visualisation in Lucknow. From ₹45/sq ft. ISO 9001:2015 certified.",
  },
  robots: { index: true, follow: true },
  category: "architecture",
  authors: [{ name: "Trygve Studio Private Limited" }],
  creator: "Trygve Studio",
  publisher: "Trygve Studio Private Limited",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
