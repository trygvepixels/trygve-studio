import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: {
    default: "Architecture & Interior Design Blog | Expert Tips 2026 | Trygve Studio",
    template: "%s | Trygve Studio",
  },
  description:
    "Expert articles on architecture costs, interior design trends, construction tips, LDA approvals & home building in Lucknow — by ISO-certified architects at Trygve Studio. 200+ projects delivered.",
  keywords: [
    "architecture blog Lucknow",
    "interior design tips India",
    "construction cost guide",
    "LDA approval Lucknow",
    "architect fees India 2026",
    "home building guide Lucknow",
    "interior design trends 2026",
    "turnkey construction guide",
  ],
  alternates: { canonical: "https://trygvestudio.com/blogs" },
  openGraph: {
    type: "website",
    url: "https://trygvestudio.com/blogs",
    siteName: "Trygve Studio",
    title: "Architecture & Design Blog — Lucknow Construction & Interior Design Guides",
    description:
      "Expert architecture and interior design guides for Lucknow homebuilders — construction costs, architect fees, LDA process, interior trends. By Trygve Studio (ISO 9001:2015).",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture & Interior Design Blog — Trygve Studio",
    description:
      "Expert guides on Lucknow construction costs, architect fees, interior design & LDA approvals — by ISO certified architects.",
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
              streetAddress:
                "Plot No. 728, Khasra No. 21, Eden Enclave, Phase 2, Kursi Road, Gudamba, BKT",
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
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://trygvestudio.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blogs",
              item: "https://trygvestudio.com/blogs",
            },
          ],
        })}
      </Script>

      <Script id="ld-website-search" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Trygve Studio",
          url: "https://trygvestudio.com/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://trygvestudio.com/blogs?query={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      {children}
    </>
  );
}
