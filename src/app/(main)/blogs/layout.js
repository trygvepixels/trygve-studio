import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: {
    default: "Strategies, Stories & Solutions — Blogs | Trygve Studio",
    template: "%s | Trygve Studio",
  },
  description:
    "Insights, playbooks, and stories on architecture, interiors, PMC, EPC, and 3D visualisation. Fresh thinking for founders & operators — curated weekly by Trygve Studio.",
  keywords: [
    "Trygve Studio blog",
    "architecture insights",
    "interior design tips",
    "PMC best practices",
    "EPC project management",
    "3D visualisation tutorials",
    "construction trends India",
    "design thinking",
    "case studies",
    "playbooks",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "https://trygvestudio.com/blogs",
    siteName: "Trygve Studio",
    title: "Strategies, Stories & Solutions — Blogs",
    description:
      "Practical growth, marketing, and product lessons from the trenches — curated weekly by Trygve Studio.",
    locale: "en_IN",
    // images: [{ url: '/og/og-blogs.jpg', width: 1200, height: 630, alt: 'Trygve Studio — Blogs' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trygve Studio — Blogs",
    description:
      "Insights • Playbooks • Stories — fresh thinking for founders & operators.",
    // images: ['/og/og-blogs.jpg'],
  },
  robots: { index: true, follow: true },
  category: "architecture",
  authors: [{ name: "Trygve Studio Private Limited" }],
  creator: "Trygve Studio",
  publisher: "Trygve Studio Private Limited",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10884548494"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10884548494');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            fbq('init', '1510015907088015');
            fbq('init', '779698648292728');
            fbq('init', '1526099745243779');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1510015907088015&ev=PageView&noscript=1"
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=779698648292728&ev=PageView&noscript=1"
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1526099745243779&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <Script id="ld-blogs" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Strategies, Stories & Solutions — Trygve Studio Blogs",
          description:
            "Insights, playbooks, and stories on Architecture, Interiors, PMC, EPC & 3D Visualisation — curated weekly.",
          url: "https://trygvestudio.com/blogs",
          inLanguage: "en",
          publisher: {
            "@type": ["Organization", "ProfessionalService"],
            name: "TRYGVE STUDIO PRIVATE LIMITED",
            url: "https://trygvestudio.com/",
            telephone: "+91-9554440400",
            email: "faisal.saif@trygvestudio.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Plot No. 728, Khasra No. 21, Eden Enclave, Phase 2, Kursi Road, Gudamba, BKT",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              postalCode: "226026",
              addressCountry: "IN",
            },
          },
        })}
      </Script>

      <Script id="ld-breadcrumbs" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://trygvestudio.com/" },
            { "@type": "ListItem", position: 2, name: "Blogs", item: "https://trygvestudio.com/blogs" },
          ],
        })}
      </Script>

      <Script id="ld-website-search" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Trygve Studio",
          "url": "https://trygvestudio.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://trygvestudio.com/blogs?query={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      {children}
    </>
  );
}
