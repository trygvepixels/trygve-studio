import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: {
    default: "About Trygve Studio | Architecture, Interiors & Planning Team in Lucknow",
    template: "%s | Trygve Studio",
  },
  description:
    "Trygve Studio is a Lucknow-based architecture and interior design practice with design, planning and execution support across residential, commercial and turnkey projects.",
  keywords: [
    "Trygve Studio",
    "about Trygve Studio",
    "architecture company Lucknow",
    "interior design studio Lucknow",
    "PMC EPC firm India",
    "3D visualisation studio",
    "architecture team",
    "engineering consultancy 7414",
  ],
  alternates: { canonical: "https://trygvestudio.com/about-us" },
  openGraph: {
    type: "profile",
    url: "https://trygvestudio.com/about-us",
    siteName: "Trygve Studio",
    title: "About Trygve Studio | Architecture and Interior Team in Lucknow",
    description:
      "Meet the architects, interior designers and planners behind Trygve Studio in Lucknow, along with our process, offices and project sectors.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Trygve Studio | Architecture Team in Lucknow",
    description:
      "Meet the team, process and local office network behind Trygve Studio in Lucknow.",
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
