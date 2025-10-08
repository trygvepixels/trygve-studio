import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

 export const metadata = {
   metadataBase: new URL('https://www.trygvestudio.com'),
   title: {
     default: 'About Us — Trygve Studio Private Limited',
     template: '%s | Trygve Studio',
   },
   description:
     'We are a full-fledged Architectural & allied Engineering firm based in Lucknow, India — delivering Architecture, Interiors, PMC, EPC & 3D visualisation worldwide. Founded in 2017; incorporated on 10 Dec 2021; 11–50 team members.',
   keywords: [
     'Trygve Studio',
     'about Trygve Studio',
     'architecture company Lucknow',
     'interior design studio Lucknow',
     'PMC EPC firm India',
     '3D visualisation studio',
     'architecture team',
     'engineering consultancy 7414',
   ],
   alternates: { canonical: '/about-us' },
   openGraph: {
     type: 'profile',
     url: 'https://www.trygvestudio.com/about-us',
     siteName: 'Trygve Studio',
     title: 'About Trygve Studio — Architecture, Interiors, PMC, EPC & 3D',
     description:
       'Architectural & allied engineering studio headquartered in Lucknow with global delivery across APAC, EMEA & North America.',
     locale: 'en_IN',
     // images: [{ url: '/og/og-about.jpg', width: 1200, height: 630, alt: 'Trygve Studio — About Us' }],
   },
   twitter: {
     card: 'summary_large_image',
     title: 'About Trygve Studio',
     description:
       'Architecture, Interiors, PMC, EPC & 3D visualisation — global delivery, local understanding.',
     // images: ['/og/og-about.jpg'],
   },
   robots: { index: true, follow: true },
   category: 'architecture',
   authors: [{ name: 'Trygve Studio Private Limited' }],
   creator: 'Trygve Studio',
   publisher: 'Trygve Studio Private Limited',
 };
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/favicon.ico" />
         <Script id="meta-pixel" strategy="afterInteractive">{`
           fbq('init', '1510015907088015');
           fbq('init', '779698648292728');
           fbq('init', '1526099745243779');
           fbq('track', 'PageView');
         `}</Script>
         <noscript>
           <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1510015907088015&ev=PageView&noscript=1" />
           <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=779698648292728&ev=PageView&noscript=1" />
           <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1526099745243779&ev=PageView&noscript=1" />
         </noscript>
      </head>
      <body>
           {children}
        </body>

    </html>
  );
}