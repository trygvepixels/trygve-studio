"use client";

export default function ContactButton() {
    const handleClick = () => {
        window.dispatchEvent(new CustomEvent("openContactPopup"));
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 left-6 z-[999] flex items-center gap-2 rounded-full bg-[#234D7E] text-white px-5 py-3 shadow-lg hover:bg-[#1a3a5f] hover:scale-105 active:scale-95 transition-all duration-300 group"
            aria-label="Contact Us"
        >
            <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm font-medium tracking-wide">
                Contact Us
            </span>
        </button>
    );
}
