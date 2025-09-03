import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
 
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.trygvestudio.com'),
  title: {
    default: 'Projects Gallery — Architecture, Interiors, EPC | Trygve Studio',
    template: '%s | Trygve Studio',
  },
  description:
    'Explore our Projects Gallery across Residential, Commercial, Workplace, Hospitality & Leisure, and Concept & Experimental categories — including ongoing and completed works. Architecture, Interior Design, PMC, EPC & 3D visualisation delivered worldwide from Lucknow, India.',
  keywords: [
    'Trygve Studio projects',
    'architecture projects Lucknow',
    'residential architecture India',
    'commercial interiors',
    'workplace design',
    'hospitality design',
    'concept architecture',
    'ongoing projects',
    'completed projects',
    'EPC portfolio',
    'PMC case studies',
    '3D visualisation portfolio',
  ],
  alternates: { canonical: '/projects' },
  openGraph: {
    type: 'website',
    url: 'https://www.trygvestudio.com/projects',
    siteName: 'Trygve Studio',
    title: 'Projects Gallery — Architecture, Interiors, EPC',
    description:
      'Browse Residential, Commercial, Workplace, Hospitality & Leisure, and Concept & Experimental projects — ongoing + completed.',
    locale: 'en_IN',
    // images: [{ url: '/og/og-projects.jpg', width: 1200, height: 630, alt: 'Trygve Studio — Projects Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Gallery — Trygve Studio',
    description:
      'Architecture, Interiors, PMC, EPC & 3D visualisation — explore our projects across multiple sectors.',
    // images: ['/og/og-projects.jpg'],
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
      {/* Your Projects UI grid/list goes here */}

      {/* JSON-LD: CollectionPage of project categories + Breadcrumbs */}
      <Script id="ld-projects" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Projects Gallery — Trygve Studio',
          url: 'https://www.trygvestudio.com/projects',
          about: [
            'Architecture Projects',
            'Interior Design Projects',
            'PMC',
            'EPC',
            '3D Visualisation',
          ],
          hasPart: [
            {
              '@type': 'Collection',
              name: 'Residential Spaces',
              url: 'https://www.trygvestudio.com/projects#residential',
            },
            {
              '@type': 'Collection',
              name: 'Commercial Spaces',
              url: 'https://www.trygvestudio.com/projects#commercial',
            },
            {
              '@type': 'Collection',
              name: 'Workplace Design',
              url: 'https://www.trygvestudio.com/projects#workplace',
            },
            {
              '@type': 'Collection',
              name: 'Hospitality & Leisure',
              url: 'https://www.trygvestudio.com/projects#hospitality',
            },
            {
              '@type': 'Collection',
              name: 'Concept & Experimental',
              url: 'https://www.trygvestudio.com/projects#concept',
            },
            {
              '@type': 'Collection',
              name: 'Ongoing Projects',
              url: 'https://www.trygvestudio.com/projects#ongoing',
            },
            {
              '@type': 'Collection',
              name: 'Completed Projects',
              url: 'https://www.trygvestudio.com/projects#completed',
            },
          ],
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
                name: 'Projects',
                item: 'https://www.trygvestudio.com/projects',
              },
            ],
          },
          publisher: {
            '@type': ['Organization', 'ProfessionalService'],
            name: 'TRYGVE STUDIO PRIVATE LIMITED',
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
            areaServed: [
              { '@type': 'Place', name: 'APAC' },
              { '@type': 'Place', name: 'EMEA' },
              { '@type': 'Place', name: 'North America' },
            ],
          },
        })}
      </Script>
    </>
           {children}
        </body>

    </html>
  );
}