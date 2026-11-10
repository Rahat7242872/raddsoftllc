import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import LottiePlayer from "../../components/LottiePlayer";
import { siteConfig } from "../../lib/site";

const chips = [
  { label: "USA Company Formation", className: "bg-blue-100 text-blue-700" },
  { label: "Web Development", className: "bg-emerald-100 text-emerald-700" },
  { label: "Mobile Apps", className: "bg-violet-100 text-violet-700" },
  { label: "Growth Marketing", className: "bg-orange-100 text-orange-700" },
];

const stats = [
  { value: siteConfig.stats.projects, label: "Projects Delivered" },
  { value: siteConfig.stats.clients, label: "Global Clients" },
  { value: siteConfig.stats.satisfaction, label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div aria-hidden="true" className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl sm:left-10" />
      <div aria-hidden="true" className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl sm:right-10" />

      <div className="container relative z-10 mx-auto px-5 pb-16 pt-28 sm:px-6 lg:px-10 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/70 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur sm:text-sm">
              <Sparkles size={15} /> Trusted Digital Partner for Global Businesses
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Build, Launch &amp;
              <span className="block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text pb-1 text-transparent">
                Scale Your Business
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl lg:mx-0">
              We help entrepreneurs and companies establish businesses in the USA, build powerful web and
              mobile applications, and accelerate growth with modern digital marketing.
            </p>

            <ul className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {chips.map((chip) => (
                <li key={chip.label} className={`rounded-full px-3.5 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm ${chip.className}`}>
                  {chip.label}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40"
              >
                Start Your Project
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-indigo-600 px-8 py-4 font-semibold text-indigo-700 transition-colors hover:bg-indigo-50"
              >
                Explore Services
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 text-center sm:gap-6 lg:text-left">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-2xl font-bold text-indigo-600 sm:text-3xl">{stat.value}</dd>
                  <dt className="mt-1 text-xs text-slate-600 sm:text-sm">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-2xl">
            <LottiePlayer src="/animation/hero.json" />
          </div>
        </div>
      </div>
    </section>
  );
}
