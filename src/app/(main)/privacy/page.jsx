import React from "react";
import { FiHome, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Trygve Studio - Understanding how we handle your data.",
};

const PrivacyPolicy = () => {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <Breadcrumbs />
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
                    Privacy Policy
                </h1>
                <p className="mt-4 text-zinc-600">
                    Last updated: January 2026
                </p>
            </div>

            <div className="prose prose-zinc max-w-none">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">1. Introduction</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        Welcome to Trygve Studio, operated by Trygve Engineering Pvt. Ltd ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">2. Information We Collect</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        We collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, such as:
                    </p>
                    <ul className="mt-4 list-disc pl-6 text-zinc-600 space-y-2">
                        <li>Name and contact data (Email address, phone number, etc.)</li>
                        <li>Business information related to architectural or engineering projects</li>
                        <li>Any other information you choose to provide via our contact forms or consultations</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">3. How We Use Your Information</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        We use personal information collected via our website for a variety of business purposes, including:
                    </p>
                    <ul className="mt-4 list-disc pl-6 text-zinc-600 space-y-2">
                        <li>To provide and deliver the services you request</li>
                        <li>To respond to user inquiries and offer support</li>
                        <li>To send administrative information to you</li>
                        <li>To improve our website and services through analytics</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">4. Sharing Your Information</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to third parties.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">5. Security of Your Information</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        We use appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-zinc-800">6. Contact Us</h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        If you have questions or comments about this policy, you may contact us at:
                    </p>
                    <div className="mt-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
                        <p className="font-semibold text-zinc-900">Trygve Studio Private Limited</p>
                        <p className="text-zinc-600">Plot No. 728, Kursi Road, Gudamba, BKT, Lucknow, UP – 226026</p>
                        <p className="text-zinc-600">Email: faisal.saif@trygvestudio.com</p>
                        <p className="text-zinc-600">Phone: +91 95544 40400</p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PrivacyPolicy;

function Breadcrumbs() {
    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-[14px] text-zinc-500">
                <li className="flex items-center">
                    <Link href="/" className="flex items-center hover:text-zinc-800 transition-colors">
                        <FiHome className="mr-1.5" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="flex items-center gap-2">
                    <FiChevronRight className="text-zinc-300" />
                    <span className="font-semibold text-zinc-800">Privacy Policy</span>
                </li>
            </ol>
        </nav>
    );
}

