"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart, Wallet, Car, Utensils, HeartPulse, GraduationCap, Briefcase, MessageSquare, TrendingUp, Truck } from "lucide-react";

// ✅ Lottie dynamically imported to prevent SSR errors
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import softwareAnimation from "public/animation/sofiware_development.json";

const features = [
  { title: "Custom Software Solutions", description: "Build software tailored to your business needs, scalable and secure." },
  { title: "Web & Mobile Apps", description: "Cross-platform web and mobile applications for seamless user experience." },
  { title: "API Integration", description: "Integrate third-party APIs to enhance your software capabilities." },
  { title: "Cloud & DevOps", description: "Cloud deployment, CI/CD pipelines, and serverless architecture." },
  { title: "Maintenance & Support", description: "Ongoing support, updates, and performance optimization." },
  { title: "Consultation & Strategy", description: "Expert guidance on software architecture and technology stack." },
];

const industries = [
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingCart,
    description: "Amazon & Daraz-like marketplaces, custom fashion stores, and hyper-local grocery apps.",
  },
  {
    id: "fintech",
    label: "Digital Wallet",
    icon: Wallet,
    description: "Mobile wallets, seamless money transfers, QR code payments, and utility bill systems.",
  },
  {
    id: "booking",
    label: "Booking & Ride",
    icon: Car,
    description: "Ride-sharing apps, taxi dispatch platforms, hotel & flight booking systems, and doctor appointment setups.",
  },
  {
    id: "food",
    label: "Food Delivery",
    icon: Utensils,
    description: "Complete food ecosystems featuring customer apps, driver delivery apps, and live restaurant dashboards.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    description: "Telemedicine platforms, encrypted patient portals, online pharmacy setups, and digital lab report management.",
  },
  {
    id: "education",
    label: "Education / EdTech",
    icon: GraduationCap,
    description: "LMS for online courses, school ERPs, digital attendance, exam portals, and live streaming classrooms.",
  },
  {
    id: "business",
    label: "Business SaaS",
    icon: Briefcase,
    description: "Enterprise-grade CRM systems, robust ERP software, live inventory tracking, POS systems, and HR management.",
  },
  {
    id: "social",
    label: "Social Networks",
    icon: MessageSquare,
    description: "Real-time chat architectures, community platforms, and high-fidelity video/voice calling apps.",
  },
  {
    id: "finance",
    label: "Finance & Wealth",
    icon: TrendingUp,
    description: "Digital banking solutions, loan micro-services, investment tracking, and secure crypto portfolios.",
  },
  {
    id: "logistics",
    label: "Logistics & Fleet",
    icon: Truck,
    description: "On-demand courier apps, live parcel tracking, custom driver networks, and automated fleet management.",
  },
];

export default function SoftwareDevelopmentClient() {
    // ✅ আপনার হোয়াটসঅ্যাপ নম্বরটি এখানে দিন (Country code সহ, যেমন: 8801xxxxxxxxx)
    const whatsappNumber = "13322329769"; 
    const whatsappMessage = encodeURIComponent("Hello Raddsoft LLC, I am interested in a free consultation for my software development project.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    const [activeCategory, setActiveCategory] = useState("all");

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
              Custom Systems Engineering
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Next-Gen Software <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Development
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              From high-scale FinTech and E-commerce marketplaces to automated Enterprise ERPs and AI platforms—we engineer digital ecosystems that scale.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-95 shadow-lg hover:shadow-indigo-200 transition-all duration-300"
              >
                Let's Discuss Your System
              </a>
            </div>
          </motion.div>

          {/* Right Column: Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px]">
              <Lottie
                animationData={softwareAnimation}
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
              Why Choose Our Software Development
            </h2>
            <p className="text-slate-500">
              We combine industry best practices with robust modern infrastructure to build future-proof products.
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

      {/* Industry Capabilities Section */}
      <section className="py-24 px-6 md:px-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
              Industries & Ecosystems
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Core Development Expertise
            </h2>
            <p className="text-slate-500">
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
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{ind.label}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{ind.description}</p>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200 group/link"
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