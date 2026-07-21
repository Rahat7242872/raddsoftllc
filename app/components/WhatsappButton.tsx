"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(true); // always visible (change if needed)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/13322329769"
      target="_blank"
      className={`
        fixed bottom-6 right-6 z-[999]

        flex items-center justify-center

        w-14 h-14 rounded-full
        bg-green-500 text-white

        shadow-lg

        transition-all duration-500 ease-in-out

        ${show ? "opacity-100 scale-100" : "opacity-0 scale-0"}

        animate-bounce hover:animate-none hover:scale-125
      `}
    >
      <FaWhatsapp size={30} />

      {/* glow effect */}
      <span className="absolute w-full h-full rounded-full bg-green-400 opacity-30 animate-ping"></span>
    </a>
  );
}