// Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { IoMdArrowForward } from 'react-icons/io';

const Footer = ({ openModal }) => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-tight">Trygve</span>
                <span className="text-xs text-gray-400 font-medium">Studio Interiors</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming homes with stunning interior designs that blend aesthetics with functionality. Creating spaces that reflect your personality and lifestyle.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#ef4444] rounded-full flex items-center justify-center transition-colors">
                <BsFacebook className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#ef4444] rounded-full flex items-center justify-center transition-colors">
                <BsInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#ef4444] rounded-full flex items-center justify-center transition-colors">
                <BsLinkedin className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#ef4444] rounded-full flex items-center justify-center transition-colors">
                <BsYoutube className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#ef4444] rounded-full flex items-center justify-center transition-colors">
                <BsTwitter className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#designs" className="text-gray-400 hover:text-white transition-colors text-sm">Our Designs</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">Testimonials</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Living Room Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Bedroom Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Modular Kitchen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home Office</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Complete Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">3D Visualization</a></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#ef4444] text-lg mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Design Street, Bandra West, Mumbai, Maharashtra 400050</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#ef4444] text-lg flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors text-sm">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#ef4444] text-lg flex-shrink-0" />
                <a href="mailto:info@trygvestudio.com" className="text-gray-400 hover:text-white transition-colors text-sm">info@trygvestudio.com</a>
              </li>
            </ul>
            
            {/* CTA Button */}
            <button 
              onClick={openModal}
              className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-6 py-3 rounded-full transition-all w-full flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
            >
              <span className="text-sm">Get Free Quote</span>
              <IoMdArrowForward className="text-[16px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Stay Updated with Design Trends</h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for the latest interior design trends, tips, and exclusive offers.
              </p>
            </div>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#ef4444] focus:border-transparent transition-all text-sm"
              />
              <button className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2 group">
                <span className="text-sm">Subscribe</span>
                <IoMdArrowForward className="text-[16px] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Awards & Recognition</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#ef4444]">★★★★★</div>
                <div className="text-xs text-gray-400 mt-1">Google Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-400">Best Design 2024</div>
                <div className="text-xs text-gray-400 mt-1">Interior Awards</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-400">Top 10</div>
                <div className="text-xs text-gray-400 mt-1">Design Studios</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-400">ISO 9001</div>
                <div className="text-xs text-gray-400 mt-1">Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Trygve Studio. All rights reserved. | Designed with ❤️ in Mumbai
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
