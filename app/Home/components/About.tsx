"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, ShieldCheck } from "lucide-react";

const aboutPoints = [
  {
    icon: Lightbulb,
    title: "Innovative Thinking",
    desc: "We combine creativity with technology to build elegant and scalable solutions.",
    bg: "from-indigo-500 to-violet-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    desc: "Our mission is to help businesses grow fast with smart digital strategies.",
    bg: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Partnership",
    desc: "We act as your digital partner, not just a service provider.",
    bg: "from-blue-500 to-indigo-500",
  },
];

export default function AboutRaddsoft() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl text-center text-slate-900">
        <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600">
          Why Raddsoft
        </span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">About Us</h2>
        <p className="mx-auto mb-12 mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:mb-16 sm:text-xl">
          <span className="font-semibold text-indigo-700">Raddsoft LLC</span> is a full-service digital agency
          helping businesses establish, grow, and succeed online. From company setup and branding to software
          and marketing, we deliver results with simplicity and precision.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {aboutPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${item.bg}`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-600 sm:text-base">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
