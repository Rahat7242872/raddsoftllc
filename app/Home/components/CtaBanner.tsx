import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "../../lib/site";

export default function CtaBanner() {
  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-r from-blue-700 via-indigo-700 to-indigo-900 px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-20">
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Start Your Business?
          </h2>
          <p className="mt-4 text-indigo-100 sm:text-lg">
            Get a free consultation and a clear plan for your company, product, or marketing.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-indigo-900 shadow-md transition-colors hover:bg-indigo-50"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <a
              href={whatsappUrl("Hello Raddsoft LLC, I would like a free consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white transition-colors hover:bg-emerald-400"
            >
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
