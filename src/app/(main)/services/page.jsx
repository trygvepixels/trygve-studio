"use client";
import Script from 'next/script';
import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { FiHome, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    title: 'Architecture Design',
    description:
      'Innovative, sustainable architectural solutions tailored to your vision and context. We blend creativity with precision to craft iconic spaces.',
    image: 'https://images.unsplash.com/photo-1694787590597-ba49c7cdc2cc?q=80&w=947&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Interior Design',
    description:
      'Transforming interiors with a focus on functionality, elegance, and user experience. We curate inspiring atmospheres for living and working.',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Retail Experience Design',
    description:
      'Elevating retail environments with immersive, brand-driven experiences that delight customers and drive engagement.',
    image: 'https://images.unsplash.com/photo-1745065725435-564fb0f98b5b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Exhibition Design',
    description:
      'Captivating exhibition spaces that tell stories and spark curiosity. We design memorable showcases for brands, art, and ideas.',
    image: 'https://images.unsplash.com/photo-1735605918310-73ad27a5dd6b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // {
  //   title: 'Product Design',
  //   description:
  //     'From concept to prototype, we create products that balance form, function, and desirability. Premium design for everyday impact.',
  //   image: '/images/services/product.jpg',
  // },
  // {
  //   title: 'Turnkey Solution',
  //   description:
  //     'Comprehensive project delivery—from ideation to execution. We handle every detail for seamless, stress-free results.',
  //   image: '/images/services/turnkey.jpg',
  // },
];

/**
 * OPTIONAL: Map service titles to gallery images.
 * Replace paths with your actual assets. If a title is missing here,
 * the modal will fall back to using the service's main image only.
 */
const galleries = {
  'Architecture Design': [
    'https://images.unsplash.com/photo-1717497932377-7758b8d5b45e?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1619070284836-e850273d69ac?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1611895491442-65c7e5dde8e8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'Interior Design': [
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1606744888344-493238951221?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'Retail Experience Design': [
    'https://images.unsplash.com/photo-1580554430120-94cfcb3adf25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1576354998198-99dc1d2c3d36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1705858246894-791a4ac0bef6?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'Exhibition Design': [
    'https://images.unsplash.com/photo-1735605917441-a055e9465441?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1735605918526-747d15c6363e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1735605918319-4ff9a29e4614?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
  'Product Design': [
    '/images/services/product.jpg',
    '/images/services/product-2.jpg',
  ],
  'Turnkey Solution': [
    '/images/services/turnkey.jpg',
    '/images/services/turnkey-2.jpg',
  ],
};

function ServicesPage() {
  const [open, setOpen] = useState(false);
  const [activeService, setActiveService] = useState(null); // stores the full service object
  const [idx, setIdx] = useState(0); // current slide index

  const activeImages = useMemo(() => {
    if (!activeService) return [];
    const list = galleries[activeService.title];
    // Fallback to the card image if no gallery configured
    return Array.isArray(list) && list.length > 0 ? list : [activeService.image];
  }, [activeService]);

  const total = activeImages.length;

  const openModal = useCallback((service) => {
    setActiveService(service);
    setIdx(0);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    // small delay to avoid flicker if immediately reopening
    setTimeout(() => setActiveService(null), 200);
  }, []);

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % Math.max(total, 1));
  }, [total]);

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + Math.max(total, 1)) % Math.max(total, 1));
  }, [total]);

  // Keyboard controls: ESC to close, arrows to navigate
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, next, prev, closeModal]);

  return (
    <div className="bg-[#F4F1EC] min-h-screen antialiased selection:bg-gray-900/90 selection:text-white">
      <Breadcrumbs />

      <>
        {/* Your Services page layout and content (sections for each service) */}

        {/* JSON-LD: Services offered + Breadcrumbs */}
        <Script id="ld-services" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Architecture, Interiors, PMC, EPC & 3D Visualisation Services',
            description:
              'Trygve Studio provides Architecture, Interior Design, Project Management Consultancy (PMC), Engineering-Procurement-Construction (EPC), and 3D Visualisation services.',
            provider: {
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
            },
            serviceType:
              'Architecture | Interior Design | Project Management Consultancy (PMC) | Engineering-Procurement-Construction (EPC) | 3D Visualisation',
            areaServed: [{ '@type': 'Place', name: 'Worldwide' }],
            audience: {
              '@type': 'Audience',
              name: 'Clients seeking architecture, interiors, PMC, EPC or 3D visualisation',
            },
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
                name: 'Services',
                item: 'https://www.trygvestudio.com/services',
              },
            ],
          })}
        </Script>
      </>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-10 text-center">
        <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-gray-500">
          What we do
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mt-3 inline-block">
          Our Services
          {/* gradient underline */}
          <span className="block h-[3px] w-24 md:w-28 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#244D7E]   to-gray-400" />
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-600 font- leading-relaxed max-w-3xl mx-auto">
          Elevate your vision with our comprehensive suite of design and delivery services—crafted for impact, innovation, and beauty.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="flex flex-col gap-12 md:gap-16">
          {services.map((service, i) => {
            const isEven = i % 2 === 1;
            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
              >
                <div className="md:grid md:grid-cols-2 md:gap-10 items-center p-4 md:p-6 lg:p-10">
                  {/* Image */}
                  <figure className={`${isEven ? 'md:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full aspect-[16/10] object-cover rounded-2xl ring-1 ring-black/5 shadow-sm transform transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl" />
                    </div>
                  </figure>

                  {/* Text */}
                  <div
                    className={`mt-6 md:mt-0 ${isEven ? 'md:pr-2 text-right md:pl-8' : 'md:pl-2 text-left md:pr-8'}`}
                  >
                    <div className={`${isEven ? 'md:ml-auto' : ''} max-w-xl`}>
                      <div className="flex items-center gap-3 justify-start md:justify-between">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
                          {service.title}
                        </h2>
                      </div>

                      <div
                        className={`h-[3px] w-16 rounded-full mt-3 mb-5 bg-gradient-to-r from-[#244D7E] to-[#244D7E] ${isEven ? '' : ''}`}
                      />

                      <p className="text-gray-600 text-start leading-relaxed font-">
                        {service.description}
                      </p>

                      <div className={`${isEven ? 'justify-start' : 'justify-start'} flex`}>
                        <button
                          type="button"
                          onClick={() => openModal(service)}
                          className="mt-7 inline-flex items-center gap-2 rounded-full border border-gray-900/90 px-5 py-2.5 text-gray-900 transition-all
                                     hover:bg-[#244D7E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
                        >
                          <span className="text-sm md:text-sm">Explore more</span>
                          <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Modal + Carousel */}
      {open && activeService && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          aria-modal="true"
          role="dialog"
          aria-labelledby="service-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Dialog */}
          <div className="relative mx-4 w-full max-w-5xl">
            <div className="relative rounded-3xl bg-white shadow-xl ring-1 ring-black/10 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 md:px-6 md:py-5 border-b border-gray-200">
                <h3
                  id="service-modal-title"
                  className="text-lg md:text-xl font-semibold text-gray-900"
                >
                  {activeService.title}
                </h3>

                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
                  aria-label="Close"
                  title="Close"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Carousel */}
              <div className="relative">
                <div className="relative aspect-[16/10] w-full bg-gray-100">
                  <img
                    key={activeImages[idx]} // force image refresh for transition if needed
                    src={activeImages[idx]}
                    alt={`${activeService.title} - slide ${idx + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Prev / Next */}
                {total > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/90 p-2 shadow ring-1 ring-black/10 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
                      aria-label="Previous image"
                      title="Previous"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/90 p-2 shadow ring-1 ring-black/10 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
                      aria-label="Next image"
                      title="Next"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Dots */}
                {total > 1 && (
                  <div className="flex items-center justify-center gap-2 py-4">
                    {activeImages.map((_, i) => (
                      <button
                        key={i}
                        className={`h-2.5 w-2.5 rounded-full transition-all ring-1 ring-black/10 ${idx === i ? 'bg-gray-900 w-6' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        onClick={() => setIdx(i)}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Footer (optional description) */}
              <div className="px-5 py-4 md:px-6 md:py-5 border-t border-gray-200">
                <p className="text-sm md:text-base text-gray-600">
                  {activeService.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesPage;

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 pt-8 -mb-4 relative z-20">
      <ol className="flex items-center space-x-2 text-[14px] text-neutral-500">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-[#244D7E] transition-colors">
            <FiHome className="mr-1.5" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-neutral-300" />
          <span className="font-semibold text-[#244D7E]">Services</span>
        </li>
      </ol>
    </nav>
  );
}