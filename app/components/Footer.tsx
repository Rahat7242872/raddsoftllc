"use client";

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 md:px-12 lg:px-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Overview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Raddsoft <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">LLC</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Empowering businesses through next-gen web applications, custom enterprise systems, and high-ROI digital marketing solutions.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" className="h-9 w-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"><FaFacebookF size={16} /></a>
            <a href="#" className="h-9 w-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"><FaTwitter size={16} /></a>
            <a href="#" className="h-9 w-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"><FaLinkedinIn size={16} /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-slate-200 mb-5 tracking-wide uppercase text-xs">Services</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Business Setup</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Software Development</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Web Development</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Digital Marketing</a></li>
           
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-slate-200 mb-5 tracking-wide uppercase text-xs">Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="/about" className="hover:text-indigo-400 transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Featured Projects</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Careers</a></li>
            <li><a href="/contact" className="hover:text-indigo-400 transition-colors duration-200">Contact Team</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-slate-200 mb-5 tracking-wide uppercase text-xs">Contact Us</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <div className="mt-0.5 text-indigo-400">
                <IoLocationSharp size={18} />
              </div>
              <span>Wyoming, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-indigo-400">
                <FaPhoneAlt size={15} />
              </div>
              <a href="tel:+13322329769" className="hover:text-indigo-400 transition-colors">+1 (332) 232-9769</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="text-indigo-400">
                <MdEmail size={16} />
              </div>
              <a href="mailto:info@raddsoftllc.com" className="hover:text-indigo-400 transition-colors">info@raddsoftllc.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto text-center text-sm text-slate-500 mt-16 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          &copy; 2026 Raddsoft LLC. All rights reserved.
        </div>
        <div className="flex gap-6 text-xs text-slate-500">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}