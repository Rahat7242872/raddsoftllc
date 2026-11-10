import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { serviceLinks, siteConfig, whatsappUrl } from "../lib/site";

const linkClass = "transition-colors duration-200 hover:text-indigo-400";
const headingClass = "mb-5 text-xs font-bold uppercase tracking-wide text-slate-200";

export default function Footer() {
  const { address } = siteConfig;

  return (
    <footer className="border-t border-slate-800 bg-slate-900 px-6 py-14 text-white md:px-12 md:py-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Raddsoft{" "}
            <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">LLC</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Helping founders launch US companies and grow them with modern websites, custom software, and
            performance marketing.
          </p>
          <a
            href={whatsappUrl("Hello Raddsoft LLC, I would like to discuss a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-emerald-500"
          >
            <FaWhatsapp size={16} /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3 className={headingClass}>Services</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {serviceLinks.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className={linkClass}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Quick Links</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/about" className={linkClass}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services/web-development#projects" className={linkClass}>
                Featured Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>
                Contact Team
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Contact Us</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <IoLocationSharp size={18} className="mt-0.5 shrink-0 text-indigo-400" />
              <address className="not-italic">
                {address.street}
                <br />
                {address.city}, {address.region} {address.postalCode}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt size={15} className="shrink-0 text-indigo-400" />
              <a href={siteConfig.phoneHref} className={linkClass}>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail size={16} className="shrink-0 text-indigo-400" />
              <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-center text-sm text-slate-400 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Raddsoft LLC. All rights reserved.</p>
        <div className="flex gap-6 text-xs">
          <Link href="/privacy-policy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="transition-colors hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
