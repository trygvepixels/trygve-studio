import React from 'react'
import { FaInstagram, FaLinkedin, FaBehance, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const footer = () => {
  return (
    <div>  {/* ============= FOOTER ============= */}
      <footer className="bg-[#1f1f1f] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <div className="text-[26px] font-bold mb-4 tracking-tight">
                Trygve Studio
              </div>
              <p className="text-gray-400 text-[14px] leading-relaxed max-w-[300px]">
                Full-fledged Architectural & allied Engineering firm based in
                Lucknow, India — executing projects worldwide.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="https://www.instagram.com/trygvestudio/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="https://in.linkedin.com/company/trygvestudio" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.behance.net/trygvestudio" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaBehance size={20} />
                </a>
                <a href="https://wa.me/919554440400" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>

            {/* Explore Column */}
            <div>
              <h3 className="font-bold mb-5 text-[15px]">Explore</h3>
              <ul className="space-y-3 text-[14px]">
                <li><Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/blogs" className="text-gray-400 hover:text-white transition-colors">Blogs</Link></li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-bold mb-5 text-[15px]">Support</h3>
              <ul className="space-y-3 text-[14px]">
                <li><Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/career" className="text-gray-400 hover:text-white transition-colors">Career</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-bold mb-5 text-[15px]">Legal</h3>
              <ul className="space-y-3 text-[14px]">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px]">
            <div className="text-gray-400">
              <p>Copyright © {new Date().getFullYear()} <span className="text-white font-medium">Trygve Studio Private Limited</span></p>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>
                Designed & Developed by{" "}
                <a
                  href="https://genforgestudio.com/"
                  className="text-[#f59e0b] font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GenForge Studio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer