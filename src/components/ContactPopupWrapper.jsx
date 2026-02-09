"use client";

import { useState, useEffect } from "react";
import ContactPopup from "@/components/ContactPopup";

export default function ContactPopupWrapper() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("openContactPopup", handleOpen);
        return () => window.removeEventListener("openContactPopup", handleOpen);
    }, []);

    return <ContactPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
