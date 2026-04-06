"use client";

import { useState, useEffect } from "react";
import { FaTimes, FaDownload, FaCheckCircle, FaLock } from "react-icons/fa";
import Image from "next/image";

export default function LeadMagnetModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
    });

    useEffect(() => {
        const handleExitIntent = (e) => {
            if (e.clientY <= 0) {
                const hasSeenModal = localStorage.getItem("hasSeenLeadMagnet");
                if (!hasSeenModal) {
                    setIsOpen(true);
                }
            }
        };

        // Trigger after 20 seconds
        const timer = setTimeout(() => {
            const hasSeenModal = localStorage.getItem("hasSeenLeadMagnet");
            if (!hasSeenModal) {
                setIsOpen(true);
            }
        }, 20000);

        document.addEventListener("mouseleave", handleExitIntent);

        return () => {
            clearTimeout(timer);
            document.removeEventListener("mouseleave", handleExitIntent);
        };
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("hasSeenLeadMagnet", "true");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    location: "Lead Magnet",
                    projectType: "Checklist Download",
                    message: "User requested the 2026 Construction Checklist",
                    page: window.location.pathname,
                    website: formData.website,
                    submissionType: "lead-magnet",
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                localStorage.setItem("hasSeenLeadMagnet", "true");
                // In a real scenario, we would trigger the PDF download here
            }
        } catch (error) {
            console.error("Error submitting lead magnet:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose} />

            <div className="relative bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
                {/* Left Side - Visual */}
                <div className="md:w-1/2 bg-[#234D7E] md:block hidden text-white p-10 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-white rounded-full"></div>
                        <div className="absolute top-40 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                        <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                            Free Resource
                        </span>
                        <h2 className="text-4xl font-light mb-6 leading-tight">
                            The Ultimate <br />
                            <span className="font-bold">Lucknow Home Building Checklist 2026</span>
                        </h2>
                        <p className="text-lg text-white/80 font-light mb-8">
                            Avoid the top 5 mistakes that cost Lucknow homeowners over ₹15 Lakhs during construction.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "2026 Material Price Index (Saria, Cement, Bricks)",
                                "Step-by-Step LDA Approval Guide",
                                "Vastu Checklist for North/East plots",
                                "Recommended Local Vendor List"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 bg-white p-10 relative">
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        <FaTimes className="text-xl" />
                    </button>

                    {!isSubmitted ? (
                        <>
                            <h3 className="text-2xl font-semibold mb-2">Get the PDF Guide</h3>
                            <p className="text-gray-500 text-sm mb-8">
                                Enter your details below to receive the 45-page checklist instantly on your WhatsApp & Email.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input
                                    type="text"
                                    name="website"
                                    tabIndex="-1"
                                    autoComplete="off"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="hidden"
                                    aria-hidden="true"
                                />
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#234D7E] outline-none transition"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#234D7E] outline-none transition"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#234D7E] outline-none transition"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#234D7E] text-white py-4 rounded-lg font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10 active:scale-95 disabled:opacity-50"
                                >
                                    <FaDownload />
                                    {isSubmitting ? "Sending Guide..." : "Send Me The Checklist"}
                                </button>

                                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                                    <FaLock className="text-[10px]" />
                                    <span>Your privacy is safe. We don't spam.</span>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center py-10">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <FaCheckCircle className="text-4xl text-green-600" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Guide Sent!</h3>
                            <p className="text-gray-600 mb-8 max-w-[300px]">
                                Check your WhatsApp and Email inbox (and spam folder) for the 2026 Lucknow Construction Guide.
                            </p>
                            <button
                                onClick={handleClose}
                                className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-all"
                            >
                                Back to Website
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
