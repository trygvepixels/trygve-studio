"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FiHome, FiChevronRight } from "react-icons/fi";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC] from-red-50 via-white to-purple-50 flex flex-col items-center justify-center px-4 py-12">
      <Breadcrumbs />
      <div className="bg-white rounded-3xl shadow-xl max-w-lg w-full p-10 flex flex-col items-center">
        <CheckCircle size={64} className="text-green-600 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We’ve received your enquiry.
        </p>
        <p className="text-md text-gray-600 mb-8 text-center">
          Our team will review your information and connect with you soon. If you’d like to explore more, check out our design gallery or call us directly.
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg"
        >
          <ArrowRight size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-lg w-full mb-6">
      <ol className="flex items-center space-x-2 text-[14px] text-gray-500">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-red-600 transition-colors">
            <FiHome className="mr-1.5" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-gray-400" />
          <span className="font-semibold text-red-600">Thank You</span>
        </li>
      </ol>
    </nav>
  );
}
