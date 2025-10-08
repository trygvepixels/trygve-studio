"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  const params = useSearchParams();
  const price = params.get("price");

  return (
    <div className="min-h-screen bg-[#F4F1EC] from-red-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl max-w-lg w-full p-10 flex flex-col items-center">
        <CheckCircle size={64} className="text-green-600 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          We’ve received your enquiry{price ? ` for an estimated budget of` : ""} 
          {price && (
            <span className="bg-green-100 font-bold px-3 py-1 rounded-lg ml-2 text-green-700 text-xl">
              ₹{Number(price).toLocaleString("en-IN")}
            </span>
          )}
          .
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
