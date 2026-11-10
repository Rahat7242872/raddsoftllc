"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LottiePlayer from "../../components/LottiePlayer";

const services = [
  {
    title: "USA Business Setup",
    description:
      "LLC formation, EIN, registered agent, and bank account support to set up your US company properly.",
    animation: "/animation/business.json",
    bgColor: "bg-blue-50 hover:border-blue-300",
    link: "/services/business-setup",
  },
  {
    title: "Web Design & Development",
    description:
      "Fast, responsive websites built with React, Next.js, and Tailwind CSS to grow your brand.",
    animation: "/animation/webdev.json",
    bgColor: "bg-rose-50 hover:border-rose-300",
    link: "/services/web-development",
  },
  {
    title: "Software Development",
    description:
      "Scalable, secure web and mobile applications tailored to your business goals.",
    animation: "/animation/software.json",
    bgColor: "bg-amber-50 hover:border-amber-300",
    link: "/services/software-development",
  },
  {
    title: "Digital Marketing",
    description:
      "ROI-focused SEO, social media, and paid campaigns that drive leads and revenue.",
    animation: "/animation/marketing.json",
    bgColor: "bg-violet-50 hover:border-violet-300",
    link: "/services/digital-marketing",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white px-4 py-16 text-slate-900 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600">
            What We Do
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-slate-600 sm:text-lg">
            One team for setting up your company, building your product, and bringing in customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Link
                href={service.link}
                className={`group flex h-full flex-col items-center rounded-3xl border border-transparent p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-8 ${service.bgColor}`}
              >
                <div className="mb-4 w-36 sm:w-40">
                  <LottiePlayer src={service.animation} />
                </div>
                <h3 className="mb-2 text-lg font-bold sm:text-xl">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-700 sm:text-base">{service.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 font-semibold text-indigo-700">
                  Get Started
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
