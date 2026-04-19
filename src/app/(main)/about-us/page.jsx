import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Trygve Studio | Architecture & Interior Design Practice in Lucknow",
  description:
    "Meet the team behind Trygve Studio, an architecture and interior design practice based in Lucknow. Learn about our process, project approach and design values.",
  alternates: {
    canonical: "https://trygvestudio.com/about-us",
  },
  openGraph: {
    title: "About Trygve Studio | Architecture & Interior Design Practice",
    description:
      "Learn about the team, process and design approach behind Trygve Studio in Lucknow.",
    url: "https://trygvestudio.com/about-us",
    siteName: "Trygve Studio",
    images: [{ url: "https://trygvestudio.com/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Trygve Studio | Architecture & Interior Design in Lucknow",
    description: "Meet the team and design approach behind Trygve Studio in Lucknow.",
    images: ["https://trygvestudio.com/twitter-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
