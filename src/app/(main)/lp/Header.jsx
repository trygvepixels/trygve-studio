"use client"
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi';
import logo from '@/assets/logo.png'
import Image from 'next/image';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
             <Image src={logo} alt="" className=' w-16' />
              <span className="text-[#2a2d35] text-xl font-semibold">TRYGVE STUDIO PRIVATE LIMITED
</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
             
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="group bg-[#FDB915] hover:bg-[#e5a711] text-black font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="text-[15px]">Get Started</span>
              <HiArrowRight className="text-[18px] group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#2a2d35] text-3xl focus:outline-none"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-200 pt-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[16px] font-medium text-gray-700 hover:text-[#FDB915] transition-colors duration-300 py-2"
                >
                  {item.name}
                </a>
              ))}
              <button className="group bg-[#FDB915] hover:bg-[#e5a711] text-black font-semibold px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg mt-4 w-full">
                <span className="text-[15px]">Get Started</span>
                <HiArrowRight className="text-[18px] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
