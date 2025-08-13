import { FiInstagram, FiMail } from "react-icons/fi";

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-4 py-10">
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-pink-500 transition-colors"
        aria-label="Instagram"
      >
        <FiInstagram size={24} />
      </a>
      <a
        href="mailto:your@email.com"
        className="text-black hover:text-blue-500 transition-colors"
        aria-label="Email"
      >
        <FiMail size={24} />
      </a>
    </div>
  );
}