"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { IoMdArrowForward } from 'react-icons/io';
import logo from "@/assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ openModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Designs', href: '#designs' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4   ">
          {/* Logo */}
          <Link
            href="/"
            className="relative    "
          >
            <Image
              src={logo}
              alt="TRYGVE STUDIO logo"
              width={90}
              height={90}
              priority
              className="w-[70px] h-[70px] md:w-[70px] md:h-[70px]"
            />
          </Link>

          {/* Company name */}
          {/* <Link
            href="/"
            className="
              m-0 font-medium text-ink tracking-[0.02em]
              text-center md:text-left
              leading-[1.1]
              text-[clamp(20px,6vw,18px)]
              mt-2 md:mt-0
            "
          >
            TRYGVE STUDIO PRIVATE
            {' '}
            LIMITED
          </Link> */}
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-gray-700 hover:text-[#ef4444] transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ef4444] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))} */}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className=" lg:flex items-center space-x-4">
            {/* <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-700 hover:text-[#ef4444] transition-colors">
              <FaPhone className="text-[#ef4444]" />
              <span className="text-sm font-semibold">+91  95544 40400</span>
            </a> */}
            <button 
              onClick={openModal}
              className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-xl group"
            >
              <span className="text-[14px]">Get Free Quote</span>
              <IoMdArrowForward className="text-[16px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-200 pt-6 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {/* {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-medium text-gray-700 hover:text-[#ef4444] transition-colors duration-300 py-2"
                >
                  {item.name}
                </a>
              ))} */}
              <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-700 hover:text-[#ef4444] transition-colors py-2">
                <FaPhone className="text-[#ef4444]" />
                <span className="text-sm font-semibold">+91 95544 40400</span>
              </a>
              <button 
                onClick={() => {
                  openModal();
                  setMobileMenuOpen(false);
                }}
                className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-lg mt-4 w-full"
              >
                <span className="text-[15px]">Get Free Quote</span>
                <IoMdArrowForward className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
