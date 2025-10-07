import React from 'react'
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';

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
                Lux<span className="text-[#f59e0b]">×</span>home
              </div>
              <p className="text-gray-400 text-[14px] leading-relaxed max-w-[300px]">
                You will find an array of stunning pieces that will take your home décor 
                to the next level.
              </p>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-bold mb-5 text-[15px]">Company</h3>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Affiliate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Registered Wood</a></li>
              </ul>
            </div>

            {/* Material Column */}
            <div>
              <h3 className="font-bold mb-5 text-[15px]">Material</h3>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wood</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Plum Board</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Veneer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Steel</a></li>
              </ul>
            </div>

            {/* Other Info Column */}
            <div>
              <h3 className="font-bold mb-5 text-[15px]">Other info</h3>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
              <h3 className="font-bold mt-8 mb-5 text-[15px]">FAQ</h3>
              <ul className="space-y-3 text-[14px]">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Payments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund & Return</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px]">
            <div className="text-gray-400">
              <p>Copyright © 2022 Code, <span className="text-white font-medium">Persquare.dev</span></p>
            </div>
            <div className="flex items-center space-x-5 text-gray-400">
              <span className="text-[13px]">Persquare.dev</span>
              <BsTwitter className="cursor-pointer hover:text-white transition-colors text-[18px]" />
              <BsInstagram className="cursor-pointer hover:text-white transition-colors text-[18px]" />
              <BsFacebook className="cursor-pointer hover:text-white transition-colors text-[18px]" />
              <BsYoutube className="cursor-pointer hover:text-white transition-colors text-[18px]" />
            </div>
          </div>
        </div>
      </footer></div>
  )
}

export default footer