import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// app/career/page.jsx
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: {
    default: "Careers — Build the Future with Trygve Studio",
    template: "%s | Trygve Studio",
  },
  description:
    "Join a product-obsessed team crafting elegant, performant experiences in architecture & interiors.",
  keywords: [
    "Trygve Studio careers",
    "architecture careers",
    "design studio team",
  ],
  alternates: { canonical: "https://trygvestudio.com/career" },
  openGraph: {
    type: "website",
    url: "https://trygvestudio.com/career",
    siteName: "Trygve Studio",
    title: "Careers at Trygve Studio",
    description: "Join our team at Trygve Studio.",
    locale: "en_IN",
    // images: [{ url: '/og/og-career.jpg', width: 1200, height: 630, alt: 'Trygve Studio — Careers' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Trygve Studio",
    description:
      "Join a craft-driven team in Architecture, Interiors, PMC, EPC & 3D.",
    // images: ['/og/og-career.jpg'],
  },
  // CRITICAL CHANGE: Prevent indexing to stop "work from home" traffic
  robots: { index: false, follow: false },
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
            alt=""
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=779698648292728&ev=PageView&noscript=1"
            alt=""
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1526099745243779&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>

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
              name: "Career",
              item: "https://trygvestudio.com/career",
            },
          ],
        })}
      </Script>

      {children}
    </>
  );
}
