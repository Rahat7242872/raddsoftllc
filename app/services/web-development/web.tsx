"use client";

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
  MessageCircle
} from 'lucide-react';

// ✅ Lottie dynamically imported
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import webDevAnimation from "public/animation/Web_Development.json";

const features = [
  { title: "Custom Websites", description: "Responsive, modern websites tailored to your business goals." },
  { title: "E-commerce Solutions", description: "Secure and scalable online stores using latest technologies." },
  { title: "SEO Optimized", description: "Websites optimized for search engines to drive traffic." },
  { title: "Fast & Lightweight", description: "Optimized performance for quick loading and smooth UX." },
  { title: "Mobile First Design", description: "Beautiful designs for mobile, tablet, and desktop." },
  { title: "Maintenance & Support", description: "Continuous updates, monitoring and technical support." },
];

const websiteTypes = [
  {
    title: "Custom Web Applications",
    description: "Tailor-made front-end and back-end architectures engineered precisely around your unique workflows.",
    icon: Layers,
  },
  {
    title: "E-commerce Solutions",
    description: "High-converting online store ecosystems, multi-vendor marketplaces, and dynamic checkout experiences.",
    icon: ShoppingCart,
  },
  {
    title: "Real Estate Portals",
    description: "Advanced mapping integration, smart property filtering, and continuous multi-listing calendar matrices.",
    icon: Building2,
  },
  {
    title: "Healthcare Platforms",
    description: "HIPAA-compliant custom medical engines, clinical portal hubs, and encrypted laboratory report tracking.",
    icon: HeartPulse,
  },
  {
    title: "Logistics & Fleet Systems",
    description: "On-demand dispatch panels, algorithmic route automation dashboards, and live commercial parcel maps.",
    icon: Truck,
  },
  {
    title: "Service Provider Hubs",
    description: "Robust service marketplace tools featuring automated client onboarding and scheduling infrastructure.",
    icon: UserCheck,
  },
];

const categories = ["All", "SaaS & FinTech", "Retail Tech", "Artificial Intelligence", "Enterprise ERP", "Web Portal"];

const projects = [
  {
    title: "Business Formation Platform",
    category: "SaaS & FinTech",
    description: "Automated legal and corporate registration systems with secure documentation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    liveLink: "https://example.com/business-formation",
  },
  {
    title: "E-commerce Ecosystems",
    category: "Retail Tech",
    description: "High-converting online stores with multi-vendor support and dynamic checkout.",
    image: "/logo/fazuhaproject.png",
    liveLink: "https://www.fazuhaeclat.com/",
  },
  {
    title: "AI Chatbot & Automation",
    category: "Artificial Intelligence",
    description: "Intelligent NLP-driven chatbots for automated support and internal workflows.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600",
    liveLink: "https://example.com/ai-chatbot",
  },
  {
    title: "Enterprise ERP Systems",
    category: "Enterprise ERP",
    description: "Robust management software with custom role permissions and live tracking.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600",
    liveLink: "https://example.com/erp",
  },
  {
    title: "CRM & Data Dashboards",
    category: "SaaS & FinTech",
    description: "Interactive data visualization panels tracking revenue analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
    liveLink: "https://example.com/crm",
  },
  {
    title: "Real Estate & Booking Hubs",
    category: "Web Portal",
    description: "Advanced mapping interfaces and dynamic calendars for travel networks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    liveLink: "https://example.com/real-estate",
  },
];

export default function WebDevelopmentClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ আপনার হোয়াটসঅ্যাপ নম্বরটি এখানে দিন (Country code সহ, যেমন: 8801xxxxxxxxx)
  const whatsappNumber = "13322329769"; 
  const whatsappMessage = encodeURIComponent("Hello RADDSOFT, I am interested in a free consultation for my web development project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="bg-slate-50 text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20 lg:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
              Enterprise & AI Web Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Professional Web <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Development
              </span> Services
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              We craft enterprise-grade web applications, dynamic booking portals, and AI-driven platforms using React, Next.js, and Tailwind CSS.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-95 shadow-lg hover:shadow-indigo-200 transition-all duration-300"
              >
                Let's Build Your Project
              </a>

              {/* ✅ Animated WhatsApp Free Consultation Button */}
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
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/80 transition-all duration-300"
              >
                <MessageCircle size={18} className="fill-emerald-600 text-emerald-600 animate-pulse" />
                <span>Free Consultation</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[500px] lg:max-w-[550px]">
              <Lottie
                animationData={webDevAnimation}
                loop
                autoplay
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Why Choose Our Web Development
            </h2>
            <p className="text-slate-500">
              We combine industry best practices with modern frameworks to deliver scalable, high-performance web solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 text-left"
              >
                <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Industry Platforms Section */}
      <section className="py-24 px-6 md:px-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
              Core Industry Platforms
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Web Ecosystems We Excel In
            </h2>
            <p className="text-slate-500">
              From robust corporate automation nodes to fluid consumer applications—we engineer diverse, high-fidelity environments.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
            {websiteTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col justify-between bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 text-left"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{type.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{type.description}</p>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200 group/link"
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

      {/* Projects / Recent Work Section with Category Filtering */}
      <section className="py-24 px-6 md:px-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
              Capabilities & Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Recent Expertise
            </h2>
            <p className="text-slate-500">
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
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60"
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
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  className="flex flex-col justify-between bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 text-left group"
                >
                  {/* Project Image - Clickable for Live Preview */}
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative block aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-100"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-sm text-indigo-600 text-xs font-bold px-4 py-2 rounded-xl shadow-lg flex items-center gap-1">
                        View Live App <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </a>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold tracking-wide uppercase text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
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
                      className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200 group/link"
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