"use client"
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import { HiArrowRight } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import TestimonialsMarquee from './TestimonialsMarquee';
import ClientsMarquee from './ClientsMarquee';
import Header from './Header';

const TrygveStudioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Header />

      {/* ============= HERO SECTION ============= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="relative">
          <div className='max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-40'>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-7">
                <h1 className="text-[42px] lg:text-[58px] font-bold leading-[1.1] tracking-tight">
                  Transforming Spaces with Timeless Architecture
                </h1>
                <p className="text-[16px] text-gray-200 leading-relaxed max-w-[540px]">
                  We craft refined, intentional spaces that balance aesthetic excellence with 
                  functionality. From concept to completion, every detail is thoughtfully considered.
                </p>
                <button className="bg-[#f59e0b] hover:bg-[#d97706] text-gray-900 font-semibold px-8 py-4 rounded-full flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl group">
                  <span className="text-[15px]">Start Your Project</span>
                  <IoMdArrowForward className="text-[18px] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            {/* Rating Badge */}
            <div className="bg-white text-gray-900 px-6 py-5 shadow-2xl">
              <div className="text-[40px] font-bold leading-none mb-1">4.9</div>
              <div className="text-[11px] text-gray-500 font-medium mb-2">500+ Projects</div>
              <div className="flex space-x-0.5 mb-2">
                <FaStar className="text-[#f59e0b] text-[14px]" />
                <FaStar className="text-[#f59e0b] text-[14px]" />
                <FaStar className="text-[#f59e0b] text-[14px]" />
                <FaStar className="text-[#f59e0b] text-[14px]" />
                <FaStar className="text-[#f59e0b] text-[14px]" />
              </div>
              <div className="text-[13px] font-bold">Trusted Clients</div>
            </div>
          </div>
        </div>
      </section>

      <ClientsMarquee />

      {/* ============= ABOUT US SECTION ============= */}
      <section className="bg-gradient-to-br from-[#7fa368] via-[#7fa368d7] to-[#9bcc89df] m-6 rounded-[48px] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="inline-block bg-white px-4 py-4 rounded-3xl">
              <span className="bg-[#6d8f58] px-5 py-2 rounded-full text-[12px] uppercase font-semibold tracking-wider">
                About Studio
              </span>
            </div>
            <h2 className="text-[38px] lg:text-[48px] font-bold">
              A Modern Approach to Architecture
            </h2>
            <p className="text-[16px] text-white/90 max-w-[680px] mx-auto leading-relaxed">
              Trygve Studio crafts spaces that blend contemporary design with timeless elegance. 
              We believe in intentional decisions, refined aesthetics, and creating environments 
              that feel both effortless and profoundly considered.
            </p>
            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-gray-900 font-semibold px-8 py-4 rounded-full inline-flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl group mt-4">
              <span className="text-[15px]">Learn About Us</span>
              <IoMdArrowForward className="text-[18px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="mt-14 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80" 
              alt="Architecture team collaborating" 
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      <ServicesSection />

      <FeaturedProjectsSection />

      <WhyChooseUsSection />

      {/* ============= DESIGN APPROACH SECTION ============= */}
      <section className="bg-[#1f1f1f] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Badge */}
          <div className="mb-10">
            <span className="bg-[#2d2d2d] px-5 py-2 rounded-full text-[12px] uppercase font-semibold tracking-wider">
              Our Process
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-7">
              <h2 className="text-[38px] lg:text-[48px] font-bold leading-[1.2]">
                Materiality & Light Handled with Mastery
              </h2>
              <p className="text-[16px] text-gray-400 leading-relaxed">
                Every project begins with understanding your vision. We translate abstract concepts 
                into refined, timeless spaces where materiality, light, and proportion create 
                harmonious environments. Our approach balances brand consistency with local context.
              </p>

              {/* Process Options */}
              <div className="space-y-4 pt-4">
                {/* Concept & Design - Selected */}
                <div className="flex items-center justify-between bg-[#f59e0b] text-gray-900 px-6 py-4 rounded-xl cursor-pointer hover:bg-[#d97706] transition-all group">
                  <span className="font-bold text-[16px]">Concept & Design</span>
                  <IoMdArrowForward className="text-[22px] group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Execution & Delivery */}
                <div className="flex items-center justify-between bg-[#2d2d2d] px-6 py-4 rounded-xl cursor-pointer hover:bg-[#3d3d3d] transition-all">
                  <span className="font-bold text-[16px]">Execution & Delivery</span>
                  <div className="w-6 h-6 border-2 border-gray-600 rounded"></div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80" 
                alt="Architect working on designs" 
                className="w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsMarquee />

      {/* ============= NEWSLETTER SECTION ============= */}
      <section className="bg-[#7fa368] text-white py-20">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-[#6d8f58] px-5 py-2 rounded-full text-[12px] uppercase font-semibold tracking-wider">
              Stay Updated
            </span>
          </div>

          <h2 className="text-[36px] lg:text-[42px] font-bold mb-5 leading-[1.2]">
            Get the Latest in Architecture & Design
          </h2>
          <p className="text-[15px] text-white/90 mb-10 leading-relaxed">
            Subscribe to our newsletter for project updates, design insights, and architectural 
            trends. Join our community of design enthusiasts.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-[550px] mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] text-[15px]"
            />
            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-gray-900 font-semibold px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl group">
              <span className="text-[15px]">Subscribe</span>
              <IoMdArrowForward className="text-[18px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrygveStudioPage;

// ============= SERVICES SECTION =============
const ServicesSection = () => {
  const services = [
    { 
      name: 'Residential Spaces', 
      icon: '🏠',
      description: 'Apartments | Villas | Bungalows',
      isHighlighted: true 
    },
    { 
      name: 'Commercial Spaces', 
      icon: '🏢',
      description: 'Hotels | Cafes | Salons',
      isHighlighted: false 
    },
    { 
      name: 'Office Design', 
      icon: '💼',
      description: 'Corporate | Co-working | Studios',
      isHighlighted: false 
    },
    { 
      name: 'Hospitality & Leisure', 
      icon: '🏨',
      description: 'Hotels | Resorts | Restaurants',
      isHighlighted: false 
    },
    { 
      name: 'Concept & Experimental', 
      icon: '✨',
      description: 'Innovative Design Solutions',
      isHighlighted: false 
    }
  ];

  return (
    <section className="bg-[#2a2d35] py-20 lg:py-28 rounded-[48px] my-8 mx-4 lg:mx-6">
      <div className="max-w-[1500px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-10">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-[#f59e0b] text-gray-900 px-8 py-3 rounded-full text-[15px] font-semibold">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[48px] lg:text-[56px] font-bold leading-[1.15] tracking-tight">
              We Serve Across Industries
            </h2>

            {/* Description */}
            <p className="text-[17px] text-gray-300 leading-relaxed max-w-[560px]">
              From residential villas to commercial hospitality spaces, we've served brands, 
              startups, and enterprises across diverse sectors. Each project is crafted with 
              exceptional attention to detail.
            </p>

            {/* Services List */}
            <div className="space-y-6 pt-4">
              {services.map((service, index) => (
                <div key={index} className="relative flex items-start gap-4">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[24px]">{service.icon}</span>
                  </div>

                  {/* Service Info */}
                  <div className="relative flex-1">
                    <span className={`text-[22px] font-medium block ${
                      service.isHighlighted ? 'text-white' : 'text-gray-400'
                    }`}>
                      {service.name}
                    </span>
                    <span className="text-[14px] text-gray-500 mt-1 block">
                      {service.description}
                    </span>
                    
                    {/* Brush Stroke Effect */}
                    {service.isHighlighted && (
                      <div className="absolute -inset-x-4 top-0 -z-10 h-10">
                        <svg 
                          viewBox="0 0 300 50" 
                          className="w-full h-full"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M5 25 Q 50 15, 100 20 T 200 25 Q 250 30, 295 22"
                            stroke="#f59e0b"
                            strokeWidth="35"
                            fill="none"
                            strokeLinecap="round"
                            opacity="0.6"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group bg-[#f59e0b] hover:bg-[#d97706] text-gray-900 font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-lg mt-8">
              <span className="text-[16px]">View All Services</span>
              <HiArrowRight className="text-[20px] group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white p-4 rounded-[40px] shadow-2xl">
              <div className="rounded-[32px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80" 
                  alt="Modern architectural interior" 
                  className="w-full h-[680px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============= FEATURED PROJECTS SECTION =============
const FeaturedProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Residential Spaces',
    'Commercial Spaces',
    'Workplace Design',
    'Hospitality & Leisure',
    'Completed Projects'
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Residence',
      category: 'Residential Spaces',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      year: '2024',
      tags: ['Residential Spaces', 'Completed Projects']
    },
    {
      id: 2,
      title: 'Boutique Hotel Design',
      category: 'Hospitality & Leisure',
      location: 'Goa, India',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
      year: '2024',
      tags: ['Hospitality & Leisure', 'Completed Projects']
    },
    {
      id: 3,
      title: 'Corporate Headquarters',
      category: 'Workplace Design',
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      year: '2024',
      tags: ['Workplace Design', 'Completed Projects']
    },
    {
      id: 4,
      title: 'Modern Cafe Interior',
      category: 'Commercial Spaces',
      location: 'Delhi, India',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80',
      year: '2025',
      tags: ['Commercial Spaces', 'Completed Projects']
    },
    {
      id: 5,
      title: 'Penthouse Transformation',
      category: 'Residential Spaces',
      location: 'Mumbai, India',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      year: '2024',
      tags: ['Residential Spaces', 'Completed Projects']
    },
    {
      id: 6,
      title: 'Co-working Hub',
      category: 'Workplace Design',
      location: 'Pune, India',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
      year: '2025',
      tags: ['Workplace Design', 'Completed Projects']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section className="bg-gradient-to-br from-[#FBBE23] to-[#f59f0b8e] m-6 py-20 rounded-[48px] lg:py-28">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-16 space-y-8">
          <div className="inline-block">
            <span className="bg-[#2a2d35] text-white px-8 py-3 rounded-full text-[14px] font-semibold uppercase tracking-wider">
              Projects
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="space-y-4 max-w-[700px]">
              <h2 className="text-[48px] lg:text-[56px] font-bold text-[#2a2d35] leading-[1.1]">
                A Selection of Recent Work
              </h2>
              <p className="text-[17px] text-gray-700 leading-relaxed">
                Crafted with care. Each project reflects our commitment to exceptional 
                design, timeless aesthetics, and meticulous attention to detail.
              </p>
            </div>

            <button className="group bg-[#2a2d35] hover:bg-[#1e2129] text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-lg self-start lg:self-auto">
              <span className="text-[15px]">View All Projects</span>
              <HiArrowRight className="text-[20px] group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-gray-400">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-[15px] font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#2a2d35] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3] bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block bg-[#f59e0b] text-gray-900 px-4 py-2 rounded-full text-[13px] font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-[22px] font-bold text-[#2a2d35] group-hover:text-[#f59e0b] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-[14px] text-gray-600 font-medium">{project.year}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <IoLocationOutline className="text-[18px]" />
                  <span className="text-[15px]">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-[#2a2d35] font-semibold text-[16px] hover:text-[#f59e0b] transition-colors duration-300 inline-flex items-center gap-2 border-b-2 border-[#2a2d35] hover:border-[#f59e0b] pb-1">
            <span>Load More Projects</span>
            <HiArrowRight className="text-[20px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

// ============= WHY CHOOSE US SECTION =============
const WhyChooseUsSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#A2C991] to-[#F59E0B1f] py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-6">
          <h2 className="text-[48px] lg:text-[64px] font-bold text-[#2a2d35] leading-[1.1]">
            Why Trygve Studio?
          </h2>
          <p className="text-[16px] text-gray-700 max-w-[550px] leading-relaxed">
            We deliver timeless spaces with refined aesthetics, intentional decisions, 
            and exceptional craftsmanship. Every project timeline is met with precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Small Image */}
          <div className="lg:col-span-3">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-[280px] group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
                alt="Modern architecture"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-[24px] font-bold mb-1">
                    Refined Design
                  </h3>
                  <p className="text-white/80 text-[14px]">
                    Timeless architectural solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Stacked Images */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg bg-[#e8dfd5] p-8 min-h-[280px] flex items-center justify-center group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
                alt="Interior design"
                className="w-full h-auto object-contain max-h-[240px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6">
                <h3 className="text-[#2a2d35] text-[26px] font-bold mb-1">
                  Premium Interiors
                </h3>
                <p className="text-gray-600 text-[14px]">
                  Masterful materiality & light
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg bg-[#e8e4df] p-8 min-h-[280px] flex items-center justify-center group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80"
                alt="Office space"
                className="w-full h-auto object-contain max-h-[240px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6">
                <h3 className="text-[#2a2d35] text-[26px] font-bold mb-1">
                  Workplace Excellence
                </h3>
                <p className="text-gray-600 text-[14px]">
                  Functional & inspiring spaces
                </p>
              </div>
            </div>
          </div>

          {/* Large Feature Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-full min-h-[580px] group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1000&q=80"
                alt="Architectural excellence"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                <div className="absolute top-8 left-8 right-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white text-[32px] font-bold">
                      Effortlessly Considered
                    </h3>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <FaStar className="text-[#f59e0b] text-[18px]" />
                      <span className="text-white font-bold text-[18px]">4.9</span>
                    </div>
                  </div>
                  <p className="text-white/90 text-[16px] leading-relaxed max-w-[480px]">
                    Every space we create feels profoundly considered yet effortless. 
                    We balance brand consistency with local constraints beautifully, 
                    delivering warm, modern experiences across continents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
