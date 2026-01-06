"use client"
import React, { useState } from 'react';
import { FaStar, FaTimes, FaCheck, FaPlay } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import { HiArrowRight } from 'react-icons/hi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';
import whatsapp from "@/assets/whatsapp.png";
import ClientsMarquee from './ClientsMarquee';
import Image from 'next/image';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const TrygveStudioLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

// In your Next.js component
const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;
  setIsSubmitting(true);
  try {
    // Your Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5RwDk7kaoK2H8kGc77y-Gk6TI8LJn7kgn3nJme9tHktlusXMfQMJ_vJX2iHR0ig/exec';
    
    const formPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      source: 'Interior Design Landing Page',
    };

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formPayload),
    });

    // Success handling
    alert('Thank you! We will contact you soon.');
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '' });
  } catch (error) {
    console.error('Submission error:', error);
    alert('Something went wrong. Please try again or call us directly.');
  } finally {
    setIsSubmitting(false);
  }
};


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full overflow-x-hidden bg-[#F4F1EC]">
       <a
              href="https://wa.me/919554440400"
              className="fixed bottom-1/3 right-0 bg-white p-3  text-green-500 shadow-2xl rounded-2xl text-4xl z-50 "
            >
              <Image src={whatsapp} width={50} height={50} alt="WhatsApp chat" />
            </a>
      {/* Floating CTA Button - Bottom Right */}
      <button
        onClick={openModal}
        className="fixed bottom-8 right-8 z-50 bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2 group animate-bounce hover:animate-none"
      >
        <span className="text-[15px]">Get Free Design</span>
        <IoMdArrowForward className="text-[18px] group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#F4F1EC] rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="mb-6">
              <h3 className="text-3xl font-bold text-[#2a2d35] mb-2">
                Let's Design Together
              </h3>
              <p className="text-gray-600 text-[15px]">
                Share your details and we'll create your dream interior within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ef4444] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ef4444] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ef4444] focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ef4444] hover:bg-[#dc2626]'
                } text-white font-semibold px-6 py-4 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group mt-6`}
              >
                <span className="text-[15px]">
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </span>
                {!isSubmitting && (
                  <IoMdArrowForward className="text-[18px] group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      <Header openModal={openModal} />
      <Breadcrumbs />
      {/* ============= HERO SECTION ============= */}
      <section className="relative flex flex-col items-center justify-center bg-cover bg-center h-[600px]" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80')"
      }}>

        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 pb-10 h-full flex flex-col justify-end items-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bring home stunning interiors that fit your budget
            </h1>
            <Link 
            href="/price-calculator"
               className="bg-[#ef4444] hover:bg-[#dc2626] uppercase  text-white font-semibold px-10 py-5 rounded-full transition-all shadow-lg hover:shadow-xl text-lg mt-4"
            >
              Get Instant Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* ============= DESIGN YOU CRAVE ============= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The interior design you crave
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            When you give clients the flexibility to work with leading interior designers, and build beautiful spaces to personalize, the design possibilities are endless.
          </p>
          <button 
            onClick={openModal}
            className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
          >
            Explore Designs
          </button>
        </div>
      </section>

      {/* ============= STATS SECTION ============= */}
      <section className="bg-[#5fa587] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10000+</div>
              <div className="text-sm opacity-90">Homes Designed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3500+</div>
              <div className="text-sm opacity-90">Happy Homeowners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-sm opacity-90">Design Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-sm opacity-90">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= INTERIORS FOR EVERY STYLE ============= */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Interiors for every style
            </h2>
            <button 
              onClick={openModal}
              className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-6 py-3 rounded-full transition-all hidden md:block"
            >
              Get Free Quote
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern Living Room',
                subtitle: 'Contemporary & minimalist design',
                price: 'Starting ₹8L',
                image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
              },
              {
                title: 'Luxury Bedroom Suite',
                subtitle: 'Elegant & comfortable spaces',
                price: 'Starting ₹12L',
                image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'
              },
              {
                title: 'Modular Kitchen',
                subtitle: 'Functional & stylish cooking space',
                price: 'Starting ₹6L',
                image: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&q=80'
              }
            ].map((project, index) => (
              <div key={index} className="bg-[#F4F1EC] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.subtitle}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#ef4444] font-bold">{project.price}</span>
                    <button onClick={openModal} className="text-[#ef4444] font-semibold text-sm hover:underline">
                      Know more →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= TESTIMONIAL WITH VIDEO ============= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Happy clients" 
                className="rounded-2xl w-full"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#F4F1EC] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <FaPlay className="text-[#ef4444] text-2xl ml-1" />
                </div>
              </button>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6 leading-relaxed">
                "Trygve Studio transformed our home beyond imagination. They translated our vision into a warm, modern interior that feels both luxurious and comfortable."
              </p>
              <p className="text-gray-600 font-medium">Rajesh & Priya Sharma</p>
              <p className="text-gray-500 text-sm">3BHK Apartment, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= INTERIOR PRICE ESTIMATOR ============= */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Interior Design Price Estimator
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Get an instant estimate for your dream interior. Our transparent pricing helps you plan better.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Essential',
                price: '₹5L - ₹8L',
                features: ['Basic modular furniture', 'Standard finishes', '45-60 days', 'Limited customization', '1-year warranty']
              },
              {
                title: 'Premium',
                price: '₹8L - ₹15L',
                features: ['Custom modular solutions', 'Premium finishes', '30-45 days', 'Full customization', '5-year warranty'],
                popular: true
              },
              {
                title: 'Luxury',
                price: '₹15L+',
                features: ['Bespoke furniture', 'Luxury materials', 'Priority execution', 'Designer consultation', '10-year warranty']
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-[#F4F1EC] rounded-2xl p-8 ${plan.popular ? 'border-2 border-[#ef4444] shadow-xl' : 'border border-gray-200 shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#ef4444] text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                <div className="text-3xl font-bold text-[#ef4444] mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <BsCheckCircleFill className="text-[#5fa587] text-lg mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/price-calculator"
                  className="w-full px-5 bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold py-3 rounded-full transition-all"
                >
                  Calculate 
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= WHAT WE OFFER ============= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl  mx-auto px-6">
          <div className="text-center flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What we offer
            </h2>
            <button 
              onClick={openModal}
              className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-6 py-3 rounded-full transition-all"
            >
              Get Free Quote
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Full-service Interior',
                items: ['Space Planning', 'Modular Furniture', 'False Ceiling', 'Lighting Design', 'Painting & Wallpaper', 'Flooring Solutions']
              },
              {
                icon: '✨',
                title: 'Quality Warranties',
                items: ['10-year warranty on furniture', '1-year on installation', 'Lifetime design support', 'Quality materials', 'Post-project service']
              },
              {
                icon: '🎯',
                title: 'Technology & Process',
                items: ['3D Design previews', 'Real-time project tracking', '370+ quality checks', 'Smart storage solutions', 'On-time delivery']
              }
            ].map((service, index) => (
              <div key={index} className="bg-[#F4F1EC] rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <BsCheckCircleFill className="text-[#5fa587] text-sm mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= TRUSTED PARTNERS ============= */}
      <section className="py-16 bg-[#F4F1EC]">
        <ClientsMarquee />
      </section>

      {/* ============= DOWNLOAD DESIGN BOOK ============= */}
      <section className="py-20 bg-[#f5e6d3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" 
                alt="Interior design book" 
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Download interior design guide
              </h2>
              <p className="text-gray-600 mb-8">
                Get our comprehensive guide on planning your dream interior. Includes space planning tips, material selection, budgeting tools, and design inspiration for every room.
              </p>
              <button 
                onClick={openModal}
                className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
              >
                Download Free Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============= TESTED TO BE THE BEST ============= */}
      <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Tested to be the best
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Drawer Cycle Test', 'Shutter Hinge Test', 'Load & Stress Test', 'Water Resistance'].map((test, index) => (
              <button key={index} className="px-6 py-2 border-2 border-gray-300 rounded-full hover:border-[#ef4444] hover:text-[#ef4444] transition-all">
                {test}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&q=80" 
                alt="Quality testing" 
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Drawer Cycle Test
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every modular unit undergoes 50,000 drawer cycle tests. We ensure your furniture withstands daily use for decades. Our commitment to quality means your investment stands the test of time with premium materials and German hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= HOW IT WORKS ============= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">
            How it works
          </h2>

          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {[
              { icon: '📋', title: 'Meet designer' },
              { icon: '🎨', title: 'Get 3D design' },
              { icon: '💰', title: 'Fixed price quote' },
              { icon: '🏗️', title: '45-day installation' },
              { icon: '✅', title: 'Move in happy' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#F4F1EC] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <p className="text-sm font-semibold text-gray-700">{step.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={openModal}
              className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>


      <section className="bg-[#F4F1EC] py-16">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Connect with us
        </h2>
        <p className="text-gray-600 mb-8">
          Reach out on WhatsApp or give us a call for the best home design experience.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="tel:+919554440400"
            className="flex items-center gap-2 bg-[#2f466d] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#243654] transition-all"
          >
            <FaPhoneAlt className="text-white" />
            <span className="text-sm uppercase tracking-wide">Call Now</span>
          </a>
          <a
            href="https://wa.me/919554440400"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2f466d] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#243654] transition-all"
          >
            <FaWhatsapp className="text-green-400" />
            <span className="text-sm uppercase tracking-wide">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>

      {/* ============= VIDEO TESTIMONIALS ============= */}
      {/* <section className="py-20 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              We'll let our clients do the talking
            </h2>
            <button 
              onClick={openModal}
              className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-6 py-3 rounded-full transition-all hidden md:block"
            >
              Get Free Quote Stories
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sharma Family', location: '3BHK, Mumbai' },
              { name: 'Kapoor Residence', location: '4BHK, Delhi' },
              { name: 'Mehta Home', location: '2BHK, Bangalore' }
            ].map((item, index) => (
              <div key={index}>
                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1600607687644 + index * 100}?w=600&q=80`} 
                    alt="Client testimonial" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#F4F1EC] rounded-full flex items-center justify-center shadow-xl">
                      <FaPlay className="text-[#ef4444] text-xl ml-1" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 font-semibold text-gray-900">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ============= IN THE NEWS ============= */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            In the news
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { outlet: 'Times of India', title: 'Top Interior Design Firms 2025' },
              { outlet: 'Elle Decor', title: 'Best Modular Solutions' },
              { outlet: 'Architectural Digest', title: 'Designer Homes Spotlight' },
              { outlet: 'Forbes India', title: 'Home Decor Innovation' }
            ].map((news, index) => (
              <div key={index} className="bg-[#F4F1EC] p-6 rounded-xl shadow-lg text-center">
                <div className="text-[#ef4444] font-bold text-lg mb-2">{news.outlet}</div>
                <p className="text-gray-600 text-sm">{news.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ============= FINAL CTA ============= */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your dream interior is just a click away
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free consultation with our design experts today
          </p>
          <button 
            onClick={openModal}
            className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-10 py-5 rounded-full transition-all shadow-2xl text-lg"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

            {/* <Footer openModal={openModal} /> */}
    </div>
  );
};

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-24 -mb-20 relative z-10">
      <ol className="flex items-center space-x-2 text-[14px] text-gray-500">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-[#ef4444] transition-colors">
            <FiHome className="mr-1.5 text-white" />
            <span className="text-white">Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-gray-300" />
          <span className="font-semibold text-white">Interior Designer</span>
        </li>
      </ol>
    </nav>
  );
}

export default TrygveStudioLanding;

