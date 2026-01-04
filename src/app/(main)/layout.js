import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// app/page.jsx (or app/(site)/page.jsx)
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.trygvestudio.com"),
  title: {
    default:
      "Trygve Studio Private Limited — Architecture, Interiors, PMC, EPC & 3D Visualisation",
    template: "%s | Trygve Studio",
  },
  description:
    "Full-fledged architectural & allied engineering firm based in Lucknow, Hire the Best Architects in Lucknow | Modern Homes, Smart Offices, On-Time Delivery | Trygve Studio",
  keywords: [
    "architecture firm Lucknow",
    "architects in Lucknow",
    "interior designer Lucknow",
    "construction company Lucknow",
    "PMC",
    "EPC",
    "3D visualisation",
    "architectural design India",
    "interior design India",
    "project management consultancy",
    "engineering firm",
    "global architecture studio",
    // Broad / Category
    "Trygve Studio",
    "architecture firm Lucknow",
    "architects in Lucknow",
    "architectural services India",
    "interior designer Lucknow",
    "interior design India",
    "design studio India",
    "construction company Lucknow",
    "project management consultancy",
    "engineering firm India",
    "global architecture studio",
    "architectural design services",

    // Services
    "architecture services",
    "interior design services",
    "custom home design",
    "residential design services",
    "commercial space planning",
    "architectural planning and drafting",
    "renovation and remodeling plans",

    // Styles & Project Types
    "modern architecture",
    "minimalist house design",
    "luxury home architect",
    "industrial office design",
    "hospitality design",
    "restaurant interior design",
    "mid century modern design",
    "farmhouse interior design",

    // Long-Tail / Niche
    "residential architect in Lucknow",
    "commercial architect in Lucknow",
    "interior architect near me",
    "sustainable architecture consulting",
    "modern farmhouse design",

    // Local / Regional
    "architects near me",
    "architecture firms near me",
    "local architects near me",
    "contemporary home design Lucknow",
    "residential architect near me",

    // Keyword Ideas from Trend Data
    "architecture",
    "architect",
    "architectural design",
    "building design",
    "interior architecture",
    "architectural services",
    "architectural rendering",
    "architectural drafting",

    // Technical / Specialized
    "3d visualisation",
    "architectural rendering services",
    "BIM architecture",
    "AutoCAD architecture",
    "architectural drafting",

    // Conversational / Long-tail
    "Who is the best architect for sustainable office design?",
    "historic home renovation in Lucknow",
    "sustainable architecture for residential homes",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.trygvestudio.com/",
    siteName: "Trygve Studio",
    title:
      "Trygve Studio Private Limited — Architecture, Interiors, PMC, EPC & 3D Visualisation",
    description:
      "Architectural & allied engineering studio delivering end-to-end Architecture, Interiors, PMC, EPC & 3D Visualisation. HQ Lucknow, projects worldwide.",
    locale: "en_IN",
    // images: [{ url: '/og/og-home.jpg', width: 1200, height: 630, alt: 'Trygve Studio — Architecture & Interiors' }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Trygve Studio — Architecture, Interiors, PMC, EPC & 3D Visualisation",
    description:
      "Full-fledged architectural & engineering firm based in Lucknow, delivering projects worldwide.",
    creator: "@trygvestudio", // replace with your actual Twitter/X handle or remove if none
    // images: ['/og/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "architecture",
  authors: [{ name: "Trygve Studio Private Limited" }],
  creator: "Trygve Studio",
  publisher: "Trygve Studio Private Limited",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  verification: {
    // Add validation codes when available:
    // google: '',
    // yandex: '',
    // me: '',
  },
  referrer: "strict-origin-when-cross-origin",
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }) {
  const isInteriorPage =
    typeof window !== "undefined" &&
    window.location.pathname === "/interior-designer";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="facebook-domain-verification"
          content="dv4u9r79rw2om8h9acntau6pjitnsy"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TVF6BFPQ');
          `}
        </Script>
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
            gtag('config', 'AW-10884548494/Ex_sCP_JudsbEI6PlMYo', {
              'phone_conversion_number': '+91 95544 40400'
            });
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
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
        </noscript>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVF6BFPQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {!isInteriorPage && <Header />}

        <div className={isInteriorPage ? "" : "md:pt-24 pt-32"}>{children}</div>

        {!isInteriorPage && <Footer variant="oxblood" />}
      </body>
    </html>
  );
}
