'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Business Setup', href: '/features/services/business-setup' },
        { name: 'Web Development', href: '/features/services/web-development' },
        { name: 'Software Development', href: '/features/services/software-development' },
        { name: 'Digital Marketing', href: '/features/services/digital-marketing' },
      ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-extrabold text-blue-600 tracking-tight">RaddSoft</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2 font-semibold">
                LLC
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {!link.dropdown ? (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-md ${
                      pathname === link.href
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onMouseEnter={() => setServiceDropdown(true)}
                      onMouseLeave={() => setServiceDropdown(false)}
                      className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 flex items-center rounded-md transition-colors duration-200"
                    >
                      {link.name}
                      <svg
                        className="ml-1 w-4 h-4 mt-1 text-gray-500 group-hover:text-blue-600 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {serviceDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setServiceDropdown(true)}
                          onMouseLeave={() => setServiceDropdown(false)}
                          className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-lg py-2"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {!link.dropdown ? (
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 ${
                        pathname === link.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setServiceDropdown(!serviceDropdown)}
                        className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex justify-between items-center font-semibold transition-colors duration-200"
                      >
                        {link.name}
                        <span>{serviceDropdown ? '▲' : '▼'}</span>
                      </button>

                      {serviceDropdown &&
                        link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                    </>
                  )}
                </div>
              ))}

              <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold block text-center transition-all duration-200">
                ফ্রী কনসাল্টেশন
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
