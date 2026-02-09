"use client";

import { useState } from "react";
import { FaTimes, FaEnvelope, FaPhone, FaUser, FaComment, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

export default function ContactPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        projectType: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    page: window.location.pathname,
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ fullName: "", email: "", phone: "", location: "", projectType: "", message: "" });
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                }, 2000);
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-[#234D7E] text-white p-6 rounded-t-lg">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">Get In Touch</h2>
                        <button
                            onClick={onClose}
                            className="text-white/80 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <FaTimes className="text-xl" />
                        </button>
                    </div>
                    <p className="text-white/90 text-sm mt-2">
                        We'll get back to you within 24 hours
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Name */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                            <FaUser className="text-gray-400" />
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#234D7E] focus:border-transparent outline-none transition"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                            <FaEnvelope className="text-gray-400" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#234D7E] focus:border-transparent outline-none transition"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                            <FaPhone className="text-gray-400" />
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#234D7E] focus:border-transparent outline-none transition"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                            <FaMapMarkerAlt className="text-gray-400" />
                            Location (City, Country)
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#234D7E] focus:border-transparent outline-none transition"
                            placeholder="Lucknow, India"
                        />
                    </div>

                    {/* Project Type */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                            <FaBriefcase className="text-gray-400" />
                            Project Type
                        </label>
                        <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#234D7E] focus:border-transparent outline-none transition"
                        >
                            <option value="">Select project type</option>
                            <option value="Residential Architecture">Residential Architecture</option>
                            <option value="Commercial Architecture">Commercial Architecture</option>
                            <option value="Interior Design">Interior Design</option>
                            <option value="Renovation">Renovation</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                            <FaComment className="text-gray-400" />
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#234D7E] focus:border-transparent outline-none transition resize-none"
                            placeholder="Tell us about your project..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#234D7E] text-white py-3 rounded-lg font-medium hover:bg-[#1a3a5f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                        <div className="text-center text-green-600 text-sm">
                            ✓ Message sent successfully!
                        </div>
                    )}
                    {submitStatus === "error" && (
                        <div className="text-center text-red-600 text-sm">
                            ✗ Failed to send message. Please try again.
                        </div>
                    )}
                </form>

                {/* Quick Contact Info */}
                <div className="bg-gray-50 p-6 rounded-b-lg border-t">
                    <p className="text-sm text-gray-600 text-center mb-3">Or reach us directly:</p>
                    <div className="space-y-2 text-sm">
                        <a
                            href="tel:+919876543210"
                            className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#234D7E] transition"
                        >
                            <FaPhone className="text-xs" />
                            <span>+91 98765 43210</span>
                        </a>
                        <a
                            href="mailto:info@trygvestudio.com"
                            className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#234D7E] transition"
                        >
                            <FaEnvelope className="text-xs" />
                            <span>info@trygvestudio.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
