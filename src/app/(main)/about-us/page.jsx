import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Trygve Studio | Leading Architecture & Design Firm in Lucknow",
  description:
    "Meet the team of award-winning architects and designers at Trygve Studio. Discover our journey of delivering 200+ luxury projects in Lucknow and PAN India.",
  alternates: {
    canonical: "https://trygvestudio.com/about-us",
  },
  openGraph: {
    title: "About Trygve Studio | Award-Winning Architecture Firm",
    description:
      "200+ luxury projects delivered. Meet the ISO-certified team behind Lucknow's most trusted architecture studio.",
    url: "https://trygvestudio.com/about-us",
    siteName: "Trygve Studio",
    images: [{ url: "https://trygvestudio.com/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Trygve Studio | Leading Architects in Lucknow",
    description: "Award-winning architects. 200+ luxury projects. ISO 9001:2015 certified.",
    images: ["https://trygvestudio.com/twitter-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
