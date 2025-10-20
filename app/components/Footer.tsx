"use client";

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Overview */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Raddsoft LLC</h2>
          <p className="text-sm text-gray-300 mb-4">
            Empowering businesses through next-gen web, mobile & cloud solutions. Your trusted IT partner in the USA and beyond.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-blue-400">Web Development</a></li>
            <li><a href="#" className="hover:text-blue-400">Mobile Apps</a></li>
            <li><a href="#" className="hover:text-blue-400">Business Setup</a></li>
            <li><a href="#" className="hover:text-blue-400">Digital Marketing</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-blue-400" />
              1234 Business St, NY, USA
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              +1 (123) 456-7890
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-blue-400" />
              info@raddsoft.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Raddsoft LLC. All rights reserved.
      </div>
    </footer>
  );
}
