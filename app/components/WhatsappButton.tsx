import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Raddsoft LLC on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-600/30 transition-transform duration-300 hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <span aria-hidden="true" className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-30" />
      <FaWhatsapp size={30} className="relative" />
    </a>
  );
}
