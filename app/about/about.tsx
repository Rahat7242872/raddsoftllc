"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Code2, Rocket, ShieldCheck, Users2 } from "lucide-react";

const stats = [
  { value: "99%", label: "Client Satisfaction" },
  { value: "50+", label: "Projects Delivered" },
  { value: "24/7", label: "Dedicated Support" },
  { value: "2+", label: "Core Industries Served" },
];

const pillars = [
  {
    title: "Technical Excellence",
    description: "We don't just write code; we craft optimized, high-performance web solutions and scalable infrastructures using modern frameworks.",
    icon: Code2,
  },
  {
    title: "Data-Driven Strategy",
    description: "Every campaign and design architecture we construct is backed by dynamic attribution, consumer metrics, and growth pipelines.",
    icon: Rocket,
  },
  {
    title: "Uncompromising Quality",
    description: "From premium typography layouts to enterprise-grade cloud systems, precision and security anchor every single deploy.",
    icon: ShieldCheck,
  },
];

export default function AboutClient() {
  // ✅ হোয়াটসঅ্যাপ কনফিগারেশন
  const whatsappNumber = "13322329769";
  const whatsappMessage = encodeURIComponent("Hello Raddsoft LLC, I would like to know more about your company and core capabilities.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="bg-slate-50 text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 lg:py-32 px-6 md:px-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full inline-block"
          >
            Who We Are
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Engineering High-Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Digital Solutions
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            At Raddsoft LLC, we fuse scalable technical architecture with advanced growth marketing strategy. We construct fluid web ecosystems, intelligent software platforms, and direct-response systems designed explicitly to elevate brand value.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="/services/web-development"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-95 shadow-lg hover:shadow-indigo-200 transition-all duration-300"
            >
              Explore Capabilities
            </a>

            {/* WhatsApp Integration */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 12px rgba(34, 197, 94, 0)"]
              }}
              transition={{
                boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/80 transition-all duration-300 cursor-pointer"
            >
              <MessageCircle size={18} className="fill-emerald-600 text-emerald-600 animate-pulse" />
              <span>Free Consultation</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="text-3xl md:text-5xl font-extrabold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Architectural Pillars Section */}
      <section className="py-24 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
              Our Core Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              The Principles That Drive Our Work
            </h2>
            <p className="text-slate-500">
              We eliminate traditional agency overhead to build fast, metrics-driven software components and deployment layouts.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-1">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{pillar.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-900 to-violet-950 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Form a Digital Architecture?
            </h2>
            <p className="text-indigo-200 text-sm md:text-base leading-relaxed">
              Let's map out your functional scope. Connect directly with our operations team via WhatsApp or initialize an interactive audit request today.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-indigo-950 font-bold hover:bg-slate-50 shadow-md transition-all duration-200 group"
              >
                Initialize Project Audit
                <ArrowUpRight size={16} className="ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white transition-colors duration-200"
              >
                <MessageCircle size={18} className="fill-white" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}