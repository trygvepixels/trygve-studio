import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

 // app/page.jsx (or app/(site)/page.jsx)
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.trygvestudio.com'),
  title: {
    default:
      'Trygve Studio Private Limited — Architecture, Interiors, PMC, EPC & 3D Visualisation',
    template: '%s | Trygve Studio',
  },
  description:
    'Full-fledged architectural & allied engineering firm based in Lucknow, India — delivering Architecture, Interior Design, PMC, EPC, and 3D Visualisation from concept to completion with design, documentation, and site coordination. Operating globally across APAC, EMEA & North America.',
  keywords: [
    'Trygve Studio',
    'architecture firm Lucknow',
    'architects in Lucknow',
    'interior designer Lucknow',
    'construction company Lucknow',
    'PMC',
    'EPC',
    '3D visualisation',
    'architectural design India',
    'interior design India',
    'project management consultancy',
    'engineering firm',
    'global architecture studio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.trygvestudio.com/',
    siteName: 'Trygve Studio',
    title:
      'Trygve Studio Private Limited — Architecture, Interiors, PMC, EPC & 3D Visualisation',
    description:
      'Architectural & allied engineering studio delivering end-to-end Architecture, Interiors, PMC, EPC & 3D Visualisation. HQ Lucknow, projects worldwide.',
    locale: 'en_IN',
    // images: [{ url: '/og/og-home.jpg', width: 1200, height: 630, alt: 'Trygve Studio — Architecture & Interiors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Trygve Studio — Architecture, Interiors, PMC, EPC & 3D Visualisation',
    description:
      'Full-fledged architectural & engineering firm based in Lucknow, delivering projects worldwide.',
    creator: '@trygvestudio', // replace with your actual Twitter/X handle or remove if none
    // images: ['/og/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  category: 'architecture',
  authors: [{ name: 'Trygve Studio Private Limited' }],
  creator: 'Trygve Studio',
  publisher: 'Trygve Studio Private Limited',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  verification: {
    // Add validation codes when available:
    // google: '',
    // yandex: '',
    // me: '',
  },
  referrer: 'strict-origin-when-cross-origin',
  other: {
    'format-detection': 'telephone=no',
  },
};

 

 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <div className="md:pt-24 pt-32">
          {children}
        </div>
        <Footer variant="oxblood" />
      </body>

    </html>
  );
}