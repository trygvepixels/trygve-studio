import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: {
    default: "About Trygve Studio | ISO-Certified Architecture Firm in Lucknow | Founded 2019",
    template: "%s | Trygve Studio",
  },
  description:
    "Trygve Studio is an architecture and interior design practice serving clients in Lucknow and beyond. ISO 9001:2015 certified. COA-licensed architects. Led by Ar. Harsh Vardhan & Umme Maryam. 200+ projects since 2019.",
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
    title: "About Trygve Studio | ISO-Certified Architecture Firm in Lucknow",
    description:
      "Architecture and interior design practice in Lucknow. ISO 9001:2015 certified. COA-licensed architects. 200+ projects since 2019 across residential, commercial, and hospitality sectors.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Trygve Studio | Architecture Firm in Lucknow",
    description:
      "ISO-certified architecture & interior design firm in Lucknow. 200+ projects. COA-licensed architects. Founded 2019.",
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
