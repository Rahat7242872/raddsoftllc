"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { serviceLinks } from "../lib/site";

const navLinkClass = (active: boolean) =>
  `transition-colors hover:text-indigo-600 ${active ? "text-indigo-600" : ""}`;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicesActive = pathname.startsWith("/services");
  const solid = scrolled || open;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        solid ? "bg-white/95 py-1.5 shadow-sm backdrop-blur" : "bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Raddsoft LLC home" className="flex items-center gap-1">
          <Image
            src="/logo/raddsoftllc.png"
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
          />
        
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center space-x-8 text-sm font-semibold tracking-wide text-slate-800 md:flex"
        >
          <Link href="/" className={navLinkClass(pathname === "/")}>
            Home
          </Link>

          <div
            className="relative py-2"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((value) => !value)}
              className={`flex items-center gap-1 ${navLinkClass(servicesActive)}`}
            >
              <span>Services</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full z-50 w-56 pt-1">
                <div className="animate-fade-in overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-indigo-50 hover:text-indigo-600 ${
                        pathname === service.href ? "bg-indigo-50 text-indigo-600" : "text-slate-700"
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className={navLinkClass(pathname === "/about")}>
            About
          </Link>
          <Link href="/contact" className={navLinkClass(pathname === "/contact")}>
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 md:block"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          className="p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="absolute left-0 top-full max-h-[calc(100dvh-5rem)] w-full animate-fade-in space-y-2 overflow-y-auto border-t border-slate-100 bg-white px-6 py-5 font-semibold text-slate-800 shadow-xl md:hidden"
        >
          <Link href="/" className="block border-b border-slate-100 py-3" onClick={closeMobile}>
            Home
          </Link>

          <div className="border-b border-slate-100 py-3">
            <button
              type="button"
              aria-expanded={mobileDropdownOpen}
              onClick={() => setMobileDropdownOpen((value) => !value)}
              className="flex w-full items-center justify-between font-semibold"
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`text-slate-500 transition-transform duration-200 ${
                  mobileDropdownOpen ? "rotate-180 text-indigo-600" : ""
                }`}
              />
            </button>

            {mobileDropdownOpen && (
              <div className="ml-1 mt-3 space-y-1 border-l-2 border-indigo-100 pl-4 text-sm font-medium text-slate-600">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-2 hover:text-indigo-600"
                    onClick={closeMobile}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="block border-b border-slate-100 py-3" onClick={closeMobile}>
            About
          </Link>
          <Link href="/contact" className="block border-b border-slate-100 py-3" onClick={closeMobile}>
            Contact
          </Link>

          <div className="pt-3">
            <Link
              href="/contact"
              className="block rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 text-center font-semibold text-white shadow-md"
              onClick={closeMobile}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
