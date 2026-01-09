import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "Trygve Studio - Premium Architecture & Interior Design",
  description:
    "Transform your space with Trygve Studio. We offer premium architecture and interior design services worldwide.",
  keyword:
    "Trygve studio, Faisal Saif, Faisal saif architetct, Architects in Lucknow, best architects in lucknow, best interior designer in lucknow, interior designers in lucknow, architecture firms in lucknow, commercial architects in lucknow, residential architects in lucknow, luxury home designers lucknow, budget architects lucknow, building contractors in lucknow, hospitality architects lucknow, retail store designers lucknow, house design services lucknow, office interior designers lucknow, farmhouse architects lucknow",
  alternates: {
    canonical: "https://www.trygvestudio.com/",
  },
  openGraph: {
    title: "Trygve Studio - Premium Architecture & Interior Design",
    description:
      "Transform your space with Trygve Studio. Professional architecture and interior design services.",
    url: "https://www.trygvestudio.com/",
    siteName: "Trygve Studio",
    images: [
      {
        url: "https://www.trygvestudio.com/og-image.jpg",
        width: 1200,
        height: 630,
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
    images: ["https://www.trygvestudio.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const isInteriorPage =
    typeof window !== "undefined" &&
    window.location.pathname === "/interior-designer";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
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
            url: "https://www.trygvestudio.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "{search_term_string}",
              "query-input": "required name=search_term_string",
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
