import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Trygve Studio | Architecture, Interiors & Project Planning Team in Lucknow",
  description:
    "Meet the team behind Trygve Studio in Lucknow. Learn how our architects, interior designers and project planners approach residential, commercial and turnkey projects.",
  alternates: {
    canonical: "https://trygvestudio.com/about-us",
  },
  openGraph: {
    title: "About Trygve Studio | Architecture, Interiors & Project Planning Team",
    description:
      "Learn about the team, credentials, process and design approach behind Trygve Studio in Lucknow.",
    url: "https://trygvestudio.com/about-us",
    siteName: "Trygve Studio",
    images: [{ url: "https://trygvestudio.com/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Trygve Studio | Architecture Team in Lucknow",
    description: "Meet the team, credentials and project approach behind Trygve Studio in Lucknow.",
    images: ["https://trygvestudio.com/twitter-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
