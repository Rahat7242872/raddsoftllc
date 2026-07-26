"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  ShoppingCart, 
  Wallet, 
  Car, 
  Utensils, 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  MessageSquare, 
  TrendingUp, 
  Truck, 
  MessageCircle,
  Sparkles,
  Zap
} from "lucide-react";

// ✅ Dynamic Import for Lottie with SSR Disabled & Loading Fallback
const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="w-full h-64 bg-slate-100 rounded-2xl animate-pulse" />
});

import softwareAnimation from "public/animation/sofiware_development.json";

// ✅ সফট প্যাস্টেল কালার সহ Features array
const features = [
  { 
    title: "Custom Software Solutions", 
    description: "Build software tailored to your business needs, scalable and secure.",
    cardBg: "bg-indigo-50/70 hover:bg-indigo-100/60 border-indigo-100 hover:border-indigo-300",
    badgeBg: "bg-indigo-200/60 text-indigo-700"
  },
  { 
    title: "Web & Mobile Apps", 
    description: "Cross-platform web and mobile applications for seamless user experience.",
    cardBg: "bg-sky-50/70 hover:bg-sky-100/60 border-sky-100 hover:border-sky-300",
    badgeBg: "bg-sky-200/60 text-sky-700"
  },
  { 
    title: "API Integration", 
    description: "Integrate third-party APIs to enhance your software capabilities.",
    cardBg: "bg-purple-50/70 hover:bg-purple-100/60 border-purple-100 hover:border-purple-300",
    badgeBg: "bg-purple-200/60 text-purple-700"
  },
  { 
    title: "Cloud & DevOps", 
    description: "Cloud deployment, CI/CD pipelines, and serverless architecture.",
    cardBg: "bg-emerald-50/70 hover:bg-emerald-100/60 border-emerald-100 hover:border-emerald-300",
    badgeBg: "bg-emerald-200/60 text-emerald-700"
  },
  { 
    title: "Maintenance & Support", 
    description: "Ongoing support, updates, and performance optimization.",
    cardBg: "bg-rose-50/70 hover:bg-rose-100/60 border-rose-100 hover:border-rose-300",
    badgeBg: "bg-rose-200/60 text-rose-700"
  },
  { 
    title: "Consultation & Strategy", 
    description: "Expert guidance on software architecture and technology stack.",
    cardBg: "bg-amber-50/70 hover:bg-amber-100/60 border-amber-100 hover:border-amber-300",
    badgeBg: "bg-amber-200/60 text-amber-800"
  },
];

// ✅ সফট প্যাস্টেল কালার সহ Industries array
const industries = [
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingCart,
    description: "Amazon & Daraz-like marketplaces, custom fashion stores, and hyper-local grocery apps.",
    cardBg: "bg-amber-50/70 hover:bg-amber-100/60 border-amber-100 hover:border-amber-300",
    iconBg: "bg-amber-200/60 text-amber-800",
    btnColor: "text-amber-800 hover:text-amber-950"
  },
  {
    id: "fintech",
    label: "Digital Wallet",
    icon: Wallet,
    description: "Mobile wallets, seamless money transfers, QR code payments, and utility bill systems.",
    cardBg: "bg-indigo-50/70 hover:bg-indigo-100/60 border-indigo-100 hover:border-indigo-300",
    iconBg: "bg-indigo-200/60 text-indigo-700",
    btnColor: "text-indigo-700 hover:text-indigo-900"
  },
  {
    id: "booking",
    label: "Booking & Ride",
    icon: Car,
    description: "Ride-sharing apps, taxi dispatch platforms, hotel & flight booking systems, and doctor appointment setups.",
    cardBg: "bg-sky-50/70 hover:bg-sky-100/60 border-sky-100 hover:border-sky-300",
    iconBg: "bg-sky-200/60 text-sky-700",
    btnColor: "text-sky-700 hover:text-sky-900"
  },
  {
    id: "food",
    label: "Food Delivery",
    icon: Utensils,
    description: "Complete food ecosystems featuring customer apps, driver delivery apps, and live restaurant dashboards.",
    cardBg: "bg-orange-50/70 hover:bg-orange-100/60 border-orange-100 hover:border-orange-300",
    iconBg: "bg-orange-200/60 text-orange-700",
    btnColor: "text-orange-700 hover:text-orange-900"
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    description: "Telemedicine platforms, encrypted patient portals, online pharmacy setups, and digital lab report management.",
    cardBg: "bg-rose-50/70 hover:bg-rose-100/60 border-rose-100 hover:border-rose-300",
    iconBg: "bg-rose-200/60 text-rose-700",
    btnColor: "text-rose-700 hover:text-rose-900"
  },
  {
    id: "education",
    label: "Education / EdTech",
    icon: GraduationCap,
    description: "LMS for online courses, school ERPs, digital attendance, exam portals, and live streaming classrooms.",
    cardBg: "bg-emerald-50/70 hover:bg-emerald-100/60 border-emerald-100 hover:border-emerald-300",
    iconBg: "bg-emerald-200/60 text-emerald-700",
    btnColor: "text-emerald-700 hover:text-emerald-900"
  },
  {
    id: "business",
    label: "Business SaaS",
    icon: Briefcase,
    description: "Enterprise-grade CRM systems, robust ERP software, live inventory tracking, POS systems, and HR management.",
    cardBg: "bg-blue-50/70 hover:bg-blue-100/60 border-blue-100 hover:border-blue-300",
    iconBg: "bg-blue-200/60 text-blue-700",
    btnColor: "text-blue-700 hover:text-blue-900"
  },
  {
    id: "social",
    label: "Social Networks",
    icon: MessageSquare,
    description: "Real-time chat architectures, community platforms, and high-fidelity video/voice calling apps.",
    cardBg: "bg-purple-50/70 hover:bg-purple-100/60 border-purple-100 hover:border-purple-300",
    iconBg: "bg-purple-200/60 text-purple-700",
    btnColor: "text-purple-700 hover:text-purple-900"
  },
  {
    id: "finance",
    label: "Finance & Wealth",
    icon: TrendingUp,
    description: "Digital banking solutions, loan micro-services, investment tracking, and secure crypto portfolios.",
    cardBg: "bg-teal-50/70 hover:bg-teal-100/60 border-teal-100 hover:border-teal-300",
    iconBg: "bg-teal-200/60 text-teal-700",
    btnColor: "text-teal-700 hover:text-teal-900"
  },
  {
    id: "logistics",
    label: "Logistics & Fleet",
    icon: Truck,
    description: "On-demand courier apps, live parcel tracking, custom driver networks, and automated fleet management.",
    cardBg: "bg-violet-50/70 hover:bg-violet-100/60 border-violet-100 hover:border-violet-300",
    iconBg: "bg-violet-200/60 text-violet-700",
    btnColor: "text-violet-700 hover:text-violet-900"
  },
];

export default function SoftwareDevelopmentClient() {
  const whatsappNumber = "13322329769"; 
  const whatsappMessage = encodeURIComponent("Hello Raddsoft LLC, I am interested in a free consultation for my software development project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="bg-[#f8fafc] text-slate-800 font-sans antialiased overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50/80 via-slate-50/50 to-[#f8fafc] py-20 lg:py-32 px-6 md:px-20">
        <div className="absolute top-10 left-10 w-72 md:w-96 h-72 md:h-96 bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-5 right-10 w-72 md:w-96 h-72 md:h-96 bg-blue-200/30 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-100/60 border border-indigo-200/80 text-indigo-700 font-semibold text-xs tracking-wide mb-2 shadow-sm">
              <Sparkles size={14} className="text-indigo-600" /> Custom Systems Engineering
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Next-Gen Software <br/>
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 text-transparent bg-clip-text">
                Development
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              From high-scale FinTech and E-commerce marketplaces to automated Enterprise ERPs and AI platforms—we engineer digital ecosystems that scale.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-95 shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-all duration-300"
              >
                Let&apos;s discuss your system
              </a>

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
                  boxShadow: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/70 active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <MessageCircle size={18} className="fill-emerald-600 text-emerald-600 animate-pulse" />
                <span>Free Consultation</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[500px] lg:max-w-[550px] bg-white/60 p-4 rounded-3xl border border-white/80 shadow-xl shadow-slate-200/50 backdrop-blur-md">
              <Lottie
                animationData={softwareAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
              <Zap size={13} /> High Reliability
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Why Choose Our Software Development
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              We combine industry best practices with robust modern infrastructure to build future-proof products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group rounded-2xl border ${feature.cardBg} backdrop-blur-sm p-7 shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between`}
              >
                <div>
                  <div className={`h-10 w-10 rounded-xl ${feature.badgeBg} flex items-center justify-center font-bold text-sm mb-5 shadow-sm`}>
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2.5">{feature.title}</h3>
                  <p className="text-slate-600/90 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Capabilities Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-slate-100/50 via-slate-50 to-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Industries & Ecosystems
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Our Core Development Expertise
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A showcase of the complex consumer applications, enterprise infrastructure, and multi-platform digital frameworks we engineer.
            </p>
          </div>

          {/* Dynamic Grid Layout */}
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
            {industries.map((ind, index) => {
              const IconComponent = ind.icon;
              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex flex-col justify-between rounded-2xl border ${ind.cardBg} backdrop-blur-sm p-7 shadow-sm hover:shadow-xl transition-all duration-300 text-left`}
                >
                  <div>
                    <div className={`h-12 w-12 rounded-xl ${ind.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2.5">{ind.label}</h3>
                    <p className="text-slate-600/90 text-sm leading-relaxed mb-6">{ind.description}</p>
                  </div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center text-sm font-semibold ${ind.btnColor} transition-colors duration-200 group/link`}
                  >
                    Discuss This Platform
                    <ArrowUpRight size={16} className="ml-1 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}