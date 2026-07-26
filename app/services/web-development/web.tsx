"use client";

import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Layers, 
  ShoppingCart, 
  Building2, 
  HeartPulse, 
  Truck, 
  UserCheck,
  MessageCircle,
  Zap,
  Sparkles
} from 'lucide-react';

// ✅ Dynamic Import for Lottie with SSR Disabled & Loading Fallback
const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="w-full h-64 bg-slate-100 rounded-2xl animate-pulse" />
});

import webDevAnimation from "public/animation/Web_Development.json";

// ✅ সফট প্যাস্টেল কালার সহ Features array
const features = [
  { 
    title: "Custom Websites", 
    description: "Responsive, modern websites tailored to your business goals.",
    cardBg: "bg-indigo-50/70 hover:bg-indigo-100/60 border-indigo-100 hover:border-indigo-300",
    badgeBg: "bg-indigo-200/60 text-indigo-700",
    numColor: "text-indigo-700"
  },
  { 
    title: "E-commerce Solutions", 
    description: "Secure and scalable online stores using latest technologies.",
    cardBg: "bg-amber-50/70 hover:bg-amber-100/60 border-amber-100 hover:border-amber-300",
    badgeBg: "bg-amber-200/60 text-amber-800",
    numColor: "text-amber-800"
  },
  { 
    title: "SEO Optimized", 
    description: "Websites optimized for search engines to drive organic traffic.",
    cardBg: "bg-emerald-50/70 hover:bg-emerald-100/60 border-emerald-100 hover:border-emerald-300",
    badgeBg: "bg-emerald-200/60 text-emerald-700",
    numColor: "text-emerald-700"
  },
  { 
    title: "Fast & Lightweight", 
    description: "Optimized performance for quick loading and smooth UX.",
    cardBg: "bg-sky-50/70 hover:bg-sky-100/60 border-sky-100 hover:border-sky-300",
    badgeBg: "bg-sky-200/60 text-sky-700",
    numColor: "text-sky-700"
  },
  { 
    title: "Mobile First Design", 
    description: "Beautiful responsive designs for mobile, tablet, and desktop.",
    cardBg: "bg-purple-50/70 hover:bg-purple-100/60 border-purple-100 hover:border-purple-300",
    badgeBg: "bg-purple-200/60 text-purple-700",
    numColor: "text-purple-700"
  },
  { 
    title: "Maintenance & Support", 
    description: "Continuous updates, monitoring and dedicated technical support.",
    cardBg: "bg-rose-50/70 hover:bg-rose-100/60 border-rose-100 hover:border-rose-300",
    badgeBg: "bg-rose-200/60 text-rose-700",
    numColor: "text-rose-700"
  },
];

// ✅ সফট প্যাস্টেল কালার সহ Website Types array
const websiteTypes = [
  {
    title: "Custom Web Applications",
    description: "Tailor-made front-end and back-end architectures engineered precisely around your unique workflows.",
    icon: Layers,
    cardBg: "bg-blue-50/70 hover:bg-blue-100/60 border-blue-100 hover:border-blue-300",
    iconBg: "bg-blue-200/60 text-blue-700",
    btnColor: "text-blue-700 hover:text-blue-900"
  },
  {
    title: "E-commerce Solutions",
    description: "High-converting online store ecosystems, multi-vendor marketplaces, and dynamic checkout experiences.",
    icon: ShoppingCart,
    cardBg: "bg-amber-50/70 hover:bg-amber-100/60 border-amber-100 hover:border-amber-300",
    iconBg: "bg-amber-200/60 text-amber-800",
    btnColor: "text-amber-800 hover:text-amber-950"
  },
  {
    title: "Real Estate Portals",
    description: "Advanced mapping integration, smart property filtering, and continuous multi-listing calendar matrices.",
    icon: Building2,
    cardBg: "bg-teal-50/70 hover:bg-teal-100/60 border-teal-100 hover:border-teal-300",
    iconBg: "bg-teal-200/60 text-teal-700",
    btnColor: "text-teal-700 hover:text-teal-900"
  },
  {
    title: "Healthcare Platforms",
    description: "HIPAA-compliant custom medical engines, clinical portal hubs, and encrypted laboratory report tracking.",
    icon: HeartPulse,
    cardBg: "bg-rose-50/70 hover:bg-rose-100/60 border-rose-100 hover:border-rose-300",
    iconBg: "bg-rose-200/60 text-rose-700",
    btnColor: "text-rose-700 hover:text-rose-900"
  },
  {
    title: "Logistics & Fleet Systems",
    description: "On-demand dispatch panels, algorithmic route automation dashboards, and live commercial parcel maps.",
    icon: Truck,
    cardBg: "bg-indigo-50/70 hover:bg-indigo-100/60 border-indigo-100 hover:border-indigo-300",
    iconBg: "bg-indigo-200/60 text-indigo-700",
    btnColor: "text-indigo-700 hover:text-indigo-900"
  },
  {
    title: "Service Provider Hubs",
    description: "Robust service marketplace tools featuring automated client onboarding and scheduling infrastructure.",
    icon: UserCheck,
    cardBg: "bg-violet-50/70 hover:bg-violet-100/60 border-violet-100 hover:border-violet-300",
    iconBg: "bg-violet-200/60 text-violet-700",
    btnColor: "text-violet-700 hover:text-violet-900"
  },
];

const categories = ["All", "SaaS & FinTech", "Retail Tech", "Artificial Intelligence", "Enterprise ERP", "Web Portal"];

// ✅ প্রজেক্ট কার্ডেও সফট কালার একসেন্ট যুক্ত করা হয়েছে
const projects = [
  {
    title: "Business Formation Platform",
    category: "SaaS & FinTech",
    description: "Automated legal and corporate registration systems with secure documentation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    liveLink: "https://example.com/business-formation",
    cardBg: "bg-blue-50/60 border-blue-100",
    badgeBg: "bg-blue-100 text-blue-700",
  },
  {
    title: "E-commerce Ecosystems",
    category: "Retail Tech",
    description: "High-converting online stores with multi-vendor support and dynamic checkout.",
    image: "/logo/fazuhaproject.png",
    liveLink: "https://www.fazuhaeclat.com/",
    cardBg: "bg-amber-50/60 border-amber-100",
    badgeBg: "bg-amber-100 text-amber-800",
  },
  {
    title: "AI Chatbot & Automation",
    category: "Artificial Intelligence",
    description: "Intelligent NLP-driven chatbots for automated support and internal workflows.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600",
    liveLink: "https://example.com/ai-chatbot",
    cardBg: "bg-purple-50/60 border-purple-100",
    badgeBg: "bg-purple-100 text-purple-700",
  },
  {
    title: "Enterprise ERP Systems",
    category: "Enterprise ERP",
    description: "Robust management software with custom role permissions and live tracking.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600",
    liveLink: "https://example.com/erp",
    cardBg: "bg-emerald-50/60 border-emerald-100",
    badgeBg: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "CRM & Data Dashboards",
    category: "SaaS & FinTech",
    description: "Interactive data visualization panels tracking revenue analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
    liveLink: "https://example.com/crm",
    cardBg: "bg-cyan-50/60 border-cyan-100",
    badgeBg: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Real Estate & Booking Hubs",
    category: "Web Portal",
    description: "Advanced mapping interfaces and dynamic calendars for travel networks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    liveLink: "https://example.com/real-estate",
    cardBg: "bg-teal-50/60 border-teal-100",
    badgeBg: "bg-teal-100 text-teal-700",
  },
];

export default function WebDevelopmentClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const whatsappNumber = "13322329769"; 
  const whatsappMessage = encodeURIComponent("Hello RADDSOFT, I am interested in a free consultation for my web development project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
              <Sparkles size={14} className="text-indigo-600" /> Enterprise & AI Web Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Professional Web <br/>
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 text-transparent bg-clip-text">
                Development
              </span> Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              We craft enterprise-grade web applications, dynamic booking portals, and AI-driven platforms using React, Next.js, and Tailwind CSS.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-95 shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-all duration-300"
              >
                Let&apos;s Build Your Project
              </a>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 12px rgba(34, 197, 94, 0)"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/70 active:scale-[0.98] transition-all duration-300"
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
                animationData={webDevAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section (With Soft Pastel Colors) */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
              <Zap size={13} /> Our Core Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Why Choose Our Web Development
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              We combine industry best practices with modern frameworks to deliver scalable, high-performance web solutions.
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

      {/* Core Industry Platforms Section (With Soft Pastel Card BG Colors) */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-slate-100/50 via-slate-50 to-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Core Industry Platforms
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Web Ecosystems We Excel In
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              From robust corporate automation nodes to fluid consumer applications—we engineer diverse, high-fidelity environments.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
            {websiteTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex flex-col justify-between rounded-2xl border ${type.cardBg} backdrop-blur-sm p-7 shadow-sm hover:shadow-xl transition-all duration-300 text-left`}
                >
                  <div>
                    <div className={`h-12 w-12 rounded-xl ${type.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2.5">{type.title}</h3>
                    <p className="text-slate-600/90 text-sm leading-relaxed mb-6">{type.description}</p>
                  </div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center text-sm font-semibold ${type.btnColor} transition-colors duration-200 group/link`}
                  >
                    Discuss This System
                    <ArrowUpRight size={16} className="ml-1 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section with Filtering & Soft Accents */}
      <section className="py-20 px-6 md:px-20 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Capabilities & Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Our Recent Expertise
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              A showcase of the complex web ecosystems, automation systems, and SaaS platforms we build. Click to view live platforms.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Grid Layout */}
          <motion.div layout className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  className={`flex flex-col justify-between rounded-2xl border ${project.cardBg} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left group`}
                >
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative block aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200/60"
                  >
                    <Image
                      src={project.image} 
                      alt={project.title} 
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <span className="bg-white/90 backdrop-blur-sm text-indigo-700 text-xs font-bold px-4 py-2 rounded-xl shadow-lg flex items-center gap-1">
                        View Live App <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </a>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md ${project.badgeBg}`}>
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.description}</p>
                    </div>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-indigo-700 hover:text-indigo-900 transition-colors duration-200 group/link"
                    >
                      Launch Project Website
                      <ArrowUpRight size={16} className="ml-1 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}