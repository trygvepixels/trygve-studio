// /src/app/services/page.jsx
import React from 'react';

const services = [
  {
    title: 'Architecture Design',
    description:
      'Innovative, sustainable architectural solutions tailored to your vision and context. We blend creativity with precision to craft iconic spaces.',
    image: '/images/services/architecture.jpg',
  },
  {
    title: 'Interior Design',
    description:
      'Transforming interiors with a focus on functionality, elegance, and user experience. We curate inspiring atmospheres for living and working.',
    image: '/images/services/interior.jpg',
  },
  {
    title: 'Retail Experience Design',
    description:
      'Elevating retail environments with immersive, brand-driven experiences that delight customers and drive engagement.',
    image: '/images/services/retail.jpg',
  },
  {
    title: 'Exhibition Design',
    description:
      'Captivating exhibition spaces that tell stories and spark curiosity. We design memorable showcases for brands, art, and ideas.',
    image: '/images/services/exhibition.jpg',
  },
  {
    title: 'Product Design',
    description:
      'From concept to prototype, we create products that balance form, function, and desirability. Premium design for everyday impact.',
    image: '/images/services/product.jpg',
  },
  {
    title: 'Turnkey Solution',
    description:
      'Comprehensive project delivery—from ideation to execution. We handle every detail for seamless, stress-free results.',
    image: '/images/services/turnkey.jpg',
  },
];

function ServicesPage() {
  return (
    <div className="bg-[#F4F1EC] min-h-screen antialiased selection:bg-gray-900/90 selection:text-white">
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
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex flex-col gap-12 md:gap-16">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
              >
                <div className={`md:grid md:grid-cols-2 md:gap-10 items-center p-4 md:p-6 lg:p-10`}>
                  {/* Image */}
                  <figure className={`${isEven ? 'md:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full aspect-[16/10] object-cover rounded-2xl ring-1 ring-black/5 shadow-sm transform transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      {/* subtle gradient edge on hover for depth */}
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
                        className={`h-[3px] w-16 rounded-full mt-3 mb-5 bg-gradient-to-r from-[#244D7E] to-[#244D7E] ${isEven ? 'ml-auto' : ''}`}
                      />

                      <p className="text-gray-600 leading-relaxed font-">
                        {service.description}
                      </p>

                      <div className={`${isEven ? 'justify-end' : 'justify-start'} flex`}>
                        <a
                          href="#"
                          className="mt-7 inline-flex items-center gap-2 rounded-full border border-gray-900/90 px-5 py-2.5 text-gray-900 transition-all
                                     hover:bg-[#244D7E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
                        >
                          <span className="text-sm md:text-sm">Explore more</span>
                          {/* Arrow with micro-interaction */}
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;