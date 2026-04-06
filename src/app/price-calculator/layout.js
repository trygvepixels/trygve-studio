// app/interior-designer/layout.js
import Footer from "./Footer";
import "./globals.css";
import Script from "next/script";
import Header from "./Header";

export const metadata = {
  metadataBase: new URL("https://trygvestudio.com"),
  title: "Lucknow Construction Cost Calculator 2026 | Instant Home Building Estimate",
  description:
    "Estimate your 2026 home construction, architecture or interior project cost in Lucknow. Get a quick budget range based on area, scope and finish level.",
  alternates: { canonical: "https://trygvestudio.com/price-calculator" },
  keywords: [
    "Construction cost calculator Lucknow",
    "Interior design price calculator",
    "House construction rate 2026 Lucknow",
    "Turnkey construction cost",
  ],
  openGraph: {
    title: "Lucknow Construction Cost Calculator 2026 | Trygve Studio",
    description:
      "Instantly estimate your home construction, architecture or interior project cost in Lucknow. Free calculator by Trygve Studio.",
    url: "https://trygvestudio.com/price-calculator",
    siteName: "Trygve Studio",
    images: [
      {
        url: "https://trygvestudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trygve Studio Construction Cost Calculator",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucknow Construction Cost Calculator 2026 | Trygve Studio",
    description:
      "Free instant home building cost estimate for Lucknow. Calculate your budget now.",
    images: ["https://trygvestudio.com/twitter-image.jpg"],
  },
};

export default function InteriorDesignerLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Lucknow Construction Cost Calculator",
        "url": "https://trygvestudio.com/price-calculator",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "provider": {
          "@type": "Organization",
          "name": "Trygve Studio",
          "url": "https://trygvestudio.com"
        },
        "description": "Free online tool to estimate 2026 home construction, architecture or interior project cost in Lucknow."
      },
      {
        "@type": "HowTo",
        "name": "How to Estimate Your Home Construction Cost in Lucknow",
        "description": "Use our free calculator to get an instant 2026 construction budget estimate.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Choose Your Service",
            "text": "Select from Architecture Design, Turnkey Construction, or Interior Design."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Enter Project Area",
            "text": "Enter your plot or carpet area in square feet."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Select Package & Location",
            "text": "Choose your finish quality (Standard, Premium, Luxury) and Lucknow locality."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Get Instant Estimate",
            "text": "View your detailed cost breakdown with optional add-ons like LDA approval and 3D walkthrough."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the house construction cost per sq ft in Lucknow in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In 2026, the average house construction cost in Lucknow ranges from ₹1,650 to ₹2,850 per square foot for turnkey projects. Standard construction starts at ₹1,650/sq ft, Premium costs ₹2,150/sq ft, and Luxury costs ₹2,850+ per sq ft. These rates include materials, labour, and basic approvals."
            }
          },
          {
            "@type": "Question",
            "name": "What is the average construction rate in Lucknow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average construction rate in Lucknow for a residential project in 2026 is approximately ₹2,150 per square foot (premium tier). Premium localities like Gomti Nagar may cost 5% more. Architecture-only services start at ₹45/sq ft."
            }
          },
          {
            "@type": "Question",
            "name": "How much do architects charge in Lucknow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Architects in Lucknow charge between ₹45 and ₹85 per square foot for design services. For a 2,000 sq ft home, architecture fees range from ₹90,000 to ₹1,70,000. Many firms offer free initial consultations."
            }
          },
          {
            "@type": "Question",
            "name": "What is turnkey construction cost in Lucknow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Turnkey construction in Lucknow costs ₹1,650 to ₹2,850 per sq ft in 2026. For a 2,000 sq ft home, total turnkey cost ranges from ₹33 lakhs (standard) to ₹57 lakhs (luxury), including design, materials, construction, and approvals."
            }
          },
          {
            "@type": "Question",
            "name": "Is construction cheaper in outer Lucknow areas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, construction in outer Lucknow areas like Amar Shaheed Path and Kursi Road is typically 5% lower than Gomti Nagar or Hazratganj, roughly ₹80-140 per sq ft less on the base rate."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="facebook-domain-verification"
          content="dv4u9r79rw2om8h9acntau6pjitnsy"
        />
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TVF6BFPQ');
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
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVF6BFPQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />

        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
