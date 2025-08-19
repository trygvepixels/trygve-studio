

"use client";

import Link from "next/link";
import {
  FiCheckCircle,
  FiHome,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";

export default function ThankYouPage() {
  return (
    <main className="  -my-20 min-h-[100vh]    flex items-center justify-center w-full   px-4 bg-[#E7E5DF]">
      <div className="mx-auto max-w-5xl">
        {/* Outer card wrapper (same vibe as other pages) */}
        <div className="rounded-3xl ">
          {/* Hero */}
          <header className="rounded-2xl bg-gradient-to-r from-indigo-50 to-sky-50 p-6 ring-1 ring-inset ring-slate-200/60">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <FiCheckCircle className="h-6 w-6 text-slate-800" />
              </span>
              <h1 className="text-2xl font-semibold text-slate-900">Thank you for contacting Trygve Studio</h1>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">
                We’ve received your message. Our team will get back to you shortly to understand your requirements and next steps.
              </p>
            </div>
          </header>

        
        </div>

        {/* Small footer note */}
      
      </div>
    </main>
  );
}