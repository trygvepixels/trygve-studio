import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Script from "next/script";

// app/services/page.jsx

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: {
    default:
      "Services — Architecture, Interiors, PMC, EPC & 3D Visualisation | Trygve Studio",
    template: "%s | Trygve Studio",
  },
  description:
    "Trygve Studio offers comprehensive services including Architecture, Interior Design, Project Management Consultancy (PMC), Engineering-Procurement-Construction (EPC), and 3D Visualisation—delivering excellence from concept to execution globally.",
  keywords: [
    "Trygve Studio services",
    "architecture services",
    "interior design services",
    "PMC services",
    "EPC services",
    "3D visualisation services",
    "architectural consultancy India",
    "project management consultancy",
    "engineering procurement construction",
  ],
  alternates: { canonical: "https://trygvestudio.com/services" },

  twitter: {
    card: "summary_large_image",
    title: "Trygve Studio — Services",
    description:
      "Architecture · Interiors · PMC · EPC · 3D Visualisation — global services delivered with local expertise.",
    // images: ['/og/og-services.jpg'],
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
