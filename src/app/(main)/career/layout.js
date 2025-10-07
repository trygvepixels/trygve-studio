import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// app/career/page.jsx
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.trygvestudio.com'),
  title: {
    default: 'Careers — Build the Future with Trygve Studio',
    template: '%s | Trygve Studio',
  },
  description:
    'We’re hiring! Join a product-obsessed team crafting elegant, performant experiences in architecture & interiors. Remote-first (IST core overlap), fast hiring, clear feedback, fair offers — with health cover, premium gear, growth budget, performance bonus & flexible PTO.',
  keywords: [
    'Trygve Studio careers',
    'architecture jobs Lucknow',
    'interior design jobs',
    'remote architecture jobs India',
    'PMC jobs',
    'EPC jobs',
    '3D visualisation jobs',
    'architect job openings',
    'design studio hiring',
  ],
  alternates: { canonical: '/career' },
  openGraph: {
    type: 'website',
    url: 'https://www.trygvestudio.com/career',
    siteName: 'Trygve Studio',
    title: 'Careers at Trygve Studio',
    description:
      'Remote-first roles with IST overlap. Fast process, fair offers, and benefits from day one.',
    locale: 'en_IN',
    // images: [{ url: '/og/og-career.jpg', width: 1200, height: 630, alt: 'Trygve Studio — Careers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We’re Hiring — Trygve Studio',
    description:
      'Join a craft-driven team in Architecture, Interiors, PMC, EPC & 3D — remote-first with great perks.',
    // images: ['/og/og-career.jpg'],
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
      </head>
      <body>
          <>
      {/* Your Careers UI */}

      {/* JSON-LD: "Open Application" JobPosting + Breadcrumbs */}
      <Script id="ld-job-open-application" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: 'Open Application — Architecture, Interiors, PMC, EPC & 3D',
          description:
            'We’re hiring! Join a product-obsessed team crafting elegant, performant experiences. Remote-first with IST core overlap. Perks from day one: medical cover, mental-wellness stipend, premium gear, growth budget (courses & conferences), flexible PTO, performance bonus, and a high-trust culture.',
          datePosted: new Date().toISOString().slice(0, 10),
          employmentType: ['FULL_TIME', 'PART_TIME', 'CONTRACT'],
          hiringOrganization: {
            '@type': ['Organization', 'ProfessionalService'],
            name: 'TRYGVE STUDIO PRIVATE LIMITED',
            sameAs: ['https://www.trygvestudio.com/'],
            url: 'https://www.trygvestudio.com/',
            telephone: '+91-9554440400',
            email: 'faisal.saif@trygvestudio.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Plot No. 728, Khasra No. 21, Eden Enclave, Phase 2, Kursi Road, Gudamba, BKT',
              addressLocality: 'Lucknow',
              addressRegion: 'Uttar Pradesh',
              postalCode: '226026',
              addressCountry: 'IN',
            },
          },
          validThrough: new Date(
            Date.now() + 1000 * 60 * 60 * 24 * 90
          ).toISOString(), // ~90 days
          industry: 'Architecture & Interior Design',
          jobLocationType: 'TELECOMMUTE',
          applicantLocationRequirements: {
            '@type': 'Country',
            name: 'India',
          },
          directApply: true,
          hiringOrganizationType: 'ProfessionalService',
          // Process & values (as identifiers for clarity in SERP features)
          identifier: [
            { '@type': 'PropertyValue', name: 'Hiring Process', value: 'Intro chat → Deep-dive → Practical task (paid for select roles) → Offer' },
            { '@type': 'PropertyValue', name: 'Values', value: 'Craft over noise; Ship, learn, repeat; Bias for clarity; Own the outcome' },
            { '@type': 'PropertyValue', name: 'Work Mode', value: 'Remote-first with IST core overlap' },
            { '@type': 'PropertyValue', name: 'Perks', value: 'Medical + mental wellness, premium gear, growth budget, performance bonus, flexible PTO' },
          ],
          applicantLocationRequirementsDescription:
            'Remote-first; collaborate during India Standard Time core hours.',
          // Use either a mailto or your on-page CTA anchor if present
          employmentUnit: 'Global',
          url: 'https://www.trygvestudio.com/career',
        })}
      </Script>

      <Script id="ld-breadcrumbs" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.trygvestudio.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Career',
              item: 'https://www.trygvestudio.com/career',
            },
          ],
        })}
      </Script>
    </>
           {children}
        </body>

    </html>
  );
}