"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside (Desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo/raddsoftllc.png"
            alt="Logo"
            width={60}
            height={45}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-slate-800 font-semibold text-sm tracking-wide">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>

          {/* Custom Dropdown (Desktop) */}
          <div 
            className="relative py-2" 
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:text-indigo-600 flex items-center gap-1 transition-colors">
              <span>Services</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden z-50 py-2">
                <Link href="/services/business-setup" className="block px-4 py-2.5 text-slate-700 text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Business Setup</Link>
                <Link href="/services/web-development" className="block px-4 py-2.5 text-slate-700 text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Web Development</Link>
                <Link href="/services/software-development" className="block px-4 py-2.5 text-slate-700 text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Software Development</Link>
                <Link href="/services/digital-marketing" className="block px-4 py-2.5 text-slate-700 text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Digital Marketing</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
        </nav>

        {/* Desktop Button */}
        <Link
          href="/contact"
          className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300"
        >
          Get a Quote
        </Link>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-slate-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl px-6 py-6 space-y-4 font-semibold text-slate-800 animate-fadeIn">
          <Link 
            href="/" 
            className="block py-2 border-b border-slate-50 hover:text-indigo-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="border-b border-slate-50 py-2">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              className="w-full flex justify-between items-center text-slate-900 font-bold"
            >
              <span>Services</span>
              <ChevronDown size={18} className={`transition-transform duration-200 text-slate-500 ${dropdownOpen ? "rotate-180 text-indigo-600" : ""}`} />
            </button>
            
            {dropdownOpen && (
              <div className="mt-3 ml-4 pl-3 border-l-2 border-indigo-100 space-y-3 text-slate-600 font-medium text-sm">
                <Link href="/services/business-setup" className="block hover:text-indigo-600 py-1 transition-colors" onClick={() => setOpen(false)}>Business Setup</Link>
                <Link href="/services/web-development" className="block hover:text-indigo-600 py-1 transition-colors" onClick={() => setOpen(false)}>Web Development</Link>
                <Link href="/services/software-development" className="block hover:text-indigo-600 py-1 transition-colors" onClick={() => setOpen(false)}>Software Development</Link>
                <Link href="/services/digital-marketing" className="block hover:text-indigo-600 py-1 transition-colors" onClick={() => setOpen(false)}>Digital Marketing</Link>
              </div>
            )}
          </div>

          <Link 
            href="/about" 
            className="block py-2 border-b border-slate-50 hover:text-indigo-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="block py-2 border-b border-slate-50 hover:text-indigo-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-2">
            <Link
              href="/contact"
              className="block bg-indigo-600 text-white text-center py-3 rounded-xl font-semibold shadow-md shadow-indigo-50 hover:bg-indigo-700 transition"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}