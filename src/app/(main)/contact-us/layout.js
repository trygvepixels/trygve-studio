import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

 // app/contact-us/page.jsx
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.trygvestudio.com'),
  title: {
    default: 'Contact Us — Trygve Studio Private Limited',
    template: '%s | Trygve Studio',
  },
  description:
    'Start a project or ask a question. Call +91 95544 40400 or email faisal.saif@trygvestudio.com. Head Office in Lucknow with branches across the city; projects delivered worldwide (APAC, EMEA, North America).',
  keywords: [
    'Trygve Studio contact',
    'architect phone Lucknow',
    'architecture firm email',
    'interior design contact',
    'PMC EPC contact',
    '3D visualisation contact',
    'Trygve Studio phone',
    'Trygve Studio email',
    'architecture firm India contact',
  ],
  alternates: { canonical: '/contact-us' },
  openGraph: {
    type: 'website',
    url: 'https://www.trygvestudio.com/contact-us',
    siteName: 'Trygve Studio',
    title: 'Contact Trygve Studio',
    description:
      'Call +91 95544 40400 • faisal.saif@trygvestudio.com • WhatsApp available. Head Office + Branches in Lucknow. Global operations across APAC, EMEA & North America.',
    locale: 'en_IN',
    // images: [{ url: '/og/og-contact.jpg', width: 1200, height: 630, alt: 'Trygve Studio — Contact' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Trygve Studio',
    description:
      'Start a project or say hello: +91 95544 40400 • faisal.saif@trygvestudio.com • WhatsApp.',
    // images: ['/og/og-contact.jpg'],
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
      {/* Your Contact page UI */}

      {/* JSON-LD: ContactPage + Organization + ContactPoint + Locations */}
      <Script id="ld-contact" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Us — Trygve Studio',
          url: 'https://www.trygvestudio.com/contact-us',
          mainEntity: {
            '@type': ['Organization', 'ProfessionalService'],
            name: 'TRYGVE STUDIO PRIVATE LIMITED',
            url: 'https://www.trygvestudio.com/',
            telephone: '+91-9554440400',
            email: 'faisal.saif@trygvestudio.com',
            sameAs: [
              'https://wa.me/919554440400',
              // add real social profiles here when available
            ],
            areaServed: [
              { '@type': 'Place', name: 'APAC' },
              { '@type': 'Place', name: 'EMEA' },
              { '@type': 'Place', name: 'North America' },
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                telephone: '+91-9554440400',
                email: 'faisal.saif@trygvestudio.com',
                availableLanguage: ['en', 'hi'],
                areaServed: 'Worldwide',
                url: 'https://www.trygvestudio.com/contact-us',
              },
              {
                '@type': 'ContactPoint',
                contactType: 'WhatsApp',
                telephone: '+91-9554440400',
                url: 'https://wa.me/919554440400',
              },
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Plot No. 728, Khasra No. 21, Eden Enclave, Phase 2, Kursi Road, Gudamba, BKT',
              addressLocality: 'Lucknow',
              addressRegion: 'Uttar Pradesh',
              postalCode: '226026',
              addressCountry: 'IN',
            },
            location: [
              {
                '@type': 'Place',
                name: 'Branch Office — Vikas Nagar',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    'Honey Lite, 1st Floor, 5/72, Sector 5, Vikas Nagar',
                  addressLocality: 'Lucknow',
                  addressRegion: 'Uttar Pradesh',
                  postalCode: '226022',
                  addressCountry: 'IN',
                },
              },
              {
                '@type': 'Place',
                name:
                  'Branch Office — Kursi Road (Near Integral University Hospital Gate)',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    'UGF, Rukshan Complex, Gata No. 112, Dasauli, Kursi Road, Near Integral University Hospital Gate',
                  addressLocality: 'Lucknow',
                  addressRegion: 'Uttar Pradesh',
                  postalCode: '226021',
                  addressCountry: 'IN',
                },
              },
              {
                '@type': 'Place',
                name: 'Corporate Meeting Space — Levana Cyber Heights (Regus)',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress:
                    'Levana Cyber Heights, 10th Floor – Regus, Vibhuti Khand, Gomti Nagar',
                  addressLocality: 'Lucknow',
                  addressRegion: 'Uttar Pradesh',
                  postalCode: '226010',
                  addressCountry: 'IN',
                },
              },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Architecture & Allied Engineering Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Architecture' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Design' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Project Management Consultancy (PMC)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Engineering, Procurement & Construction (EPC)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Visualisation' } },
              ],
            },
          },
          breadcrumb: {
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
                name: 'Contact',
                item: 'https://www.trygvestudio.com/contact-us',
              },
            ],
          },
          potentialAction: [
            {
              '@type': 'CommunicateAction',
              target: 'tel:+919554440400',
              name: 'Call Trygve Studio',
            },
            {
              '@type': 'CommunicateAction',
              target: 'mailto:faisal.saif@trygvestudio.com',
              name: 'Email Trygve Studio',
            },
            {
              '@type': 'CommunicateAction',
              target: 'https://wa.me/919554440400',
              name: 'Chat on WhatsApp',
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