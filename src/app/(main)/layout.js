import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaCalculator } from "react-icons/fa6";
// app/page.jsx (or app/(site)/page.jsx)
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: "Trygve Studio - Premium Architecture & Interior Design",
  description:
    "Transform your space with Trygve Studio. We offer premium architecture and interior design services worldwide.",
  keywords: [
    "Trygve studio",
    "Faisal Saif",
    "Faisal saif architect",
    "Architects in Lucknow",
    "best architects in lucknow",
    "best interior designer in lucknow",
    "interior designers in lucknow",
    "architecture firms in lucknow",
    "commercial architects in lucknow",
    "residential architects in lucknow",
    "luxury home designers lucknow",
    "budget architects lucknow",
    "building contractors in lucknow",
    "hospitality architects lucknow",
    "retail store designers lucknow",
    "house design services lucknow",
    "office interior designers lucknow",
    "farmhouse architects lucknow",
    // Hyper-local keywords
    "Architects in Gomti Nagar",
    "Architects in Hazratganj",
    "Architects in Aliganj",
    "Architects in Indira Nagar",
    "Interior Designers in Gomti Nagar",
    // Specific Services
    "Turnkey construction Lucknow",
    "Villa architects Lucknow",
    "3D elevation design Lucknow",
    "School architects Lucknow",
    "Hospital design Lucknow",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trygve Studio - Premium Architecture & Interior Design",
    description:
      "Transform your space with Trygve Studio. Professional architecture and interior design services.",
    url: "https://trygvestudio.com/",
    siteName: "Trygve Studio",
    images: [
      {
        url: "https://trygvestudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trygve Studio - Premium Architecture & Interior Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trygve Studio - Premium Architecture & Interior Design",
    description:
      "Transform your space with Trygve Studio. Professional architecture and interior design services.",
    images: [
      {
        url: "https://trygvestudio.com/twitter-image.jpg",
        alt: "Trygve Studio - Premium Architecture & Interior Design",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const isInteriorPage =
    typeof window !== "undefined" &&
    window.location.pathname === "/interior-designer";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="facebook-domain-verification"
          content="dv4u9r79rw2om8h9acntau6pjitnsy"
        />

        {/* --- Global Site Tag (gtag.js) - Google Ads --- */}
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

        {/* --- Google Tag Manager --- */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TVF6BFPQ');
          `}
        </Script>

        {/* --- Meta Pixel Code --- */}
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
            alt="Facebook Pixel Tracking - 1510015907088015"
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1510015907088015&ev=PageView&noscript=1"
          />
          <img
            alt="Facebook Pixel Tracking - 779698648292728"
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=779698648292728&ev=PageView&noscript=1"
          />
          <img
            alt="Facebook Pixel Tracking - 1526099745243779"
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1526099745243779&ev=PageView&noscript=1"
          />
        </noscript>

        {/* --- Clarity Tracking Code --- */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nd74p67554");
          `}
        </Script>

        {/* --- JSON-LD Structured Data --- */}
        <Script id="ld-main" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Trygve Studio",
            url: "https://trygvestudio.com/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://trygvestudio.com/blogs?query={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>
        <Script id="ld-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Trygve Studio",
            legalName: "TRYGVE STUDIO PRIVATE LIMITED",
            url: "https://trygvestudio.com/",
            logo: "https://trygvestudio.com/logo.png",
            brand: { "@type": "Brand", name: "Trygve Studio" },
            areaServed: [
              { "@type": "Place", name: "APAC" },
              { "@type": "Place", name: "EMEA" },
              { "@type": "Place", name: "North America" },
              { "@type": "Country", name: "India" },
            ],
            sameAs: [
              "https://www.instagram.com/trygvestudio/",
              "https://in.linkedin.com/company/trygvestudio",
              "https://www.behance.net/trygvestudio",
              "https://wa.me/919554440400",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9554440400",
              contactType: "customer support",
              email: "faisal.saif@trygvestudio.com",
              availableLanguage: ["en", "hi"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Plot No. 728, Khasra No. 21, Eden Enclave, Phase 2, Kursi Road, Gudamba, BKT",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              postalCode: "226026",
              addressCountry: "IN",
            },
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVF6BFPQ"
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {!isInteriorPage && <Header />}

        <div className={isInteriorPage ? "" : "md:pt-24 pt-32"}>{children}</div>

        {!isInteriorPage && (
          <Link
            href="/price-calculator"
            className="fixed bottom-6 left-6 z-[999] flex items-center gap-2 rounded-full bg-[#234D7E] text-white px-5 py-3 shadow-lg hover:bg-[#1a3a5f] hover:scale-105 active:scale-95 transition-all duration-300 group"
            aria-label="Price Calculator"
          >
            <FaCalculator className="text-xl group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-medium tracking-wide">
              Price Calculator
            </span>
          </Link>
        )}

        {!isInteriorPage && <Footer variant="oxblood" />}
      </body>
    </html>
  );
}
