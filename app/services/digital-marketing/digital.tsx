"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Head from "next/head";
import { ArrowUpRight, Search, Share2, Megaphone, BarChart3, Mail, Target, MessageCircle } from "lucide-react";

// ✅ Lottie dynamically imported
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import marketingAnimation from "public/animation/Digital Marketing.json";

const services = [
  { title: "SEO Optimization", description: "Improve search rankings and organic traffic with our expert SEO strategies." },
  { title: "Social Media Marketing", description: "Engage your audience on platforms like Facebook, Instagram, and LinkedIn." },
  { title: "PPC Advertising", description: "Run high-ROI paid campaigns on Google Ads, Facebook Ads, and more." },
  { title: "Content Marketing", description: "Create compelling content that drives traffic, leads, and conversions." },
  { title: "Email Marketing", description: "Automated and targeted email campaigns to nurture leads." },
  { title: "Analytics & Reporting", description: "Track campaign performance and optimize for maximum ROI." },
];

const strategies = [
  {
    title: "Search Engine Supremacy",
    category: "SEO & Content",
    icon: Search,
    description: "In-depth keyword blueprints, technical auditing, and high-authority link building designed to dominate organic search results.",
  },
  {
    title: "Performance Advertising",
    category: "PPC & Paid Ads",
    icon: Target,
    description: "Data-backed Google Ads, Meta Ads, and LinkedIn campaigns optimized for the lowest acquisition cost and highest conversions.",
  },
  {
    title: "Social Growth & Branding",
    category: "SMM & Engagement",
    icon: Share2,
    description: "Creative content creation, viral community management, and multi-channel strategy to boost brand awareness and visibility.",
  },
  {
    title: "Conversion Rate Optimization",
    category: "CRO & Funnels",
    icon: Megaphone,
    description: "Landing page behavioral mapping, A/B split testing, and sales funnel architectures engineered to maximize your traffic value.",
  },
  {
    title: "Retention & Email Automation",
    category: "Lifecycle Marketing",
    icon: Mail,
    description: "Smart behavioral-triggered newsletter workflows and personalized email tracks designed to build customer retention and value.",
  },
  {
    title: "Data Intelligence & ROI Insights",
    category: "Advanced Analytics",
    icon: BarChart3,
    description: "End-to-end custom tracking setups using Google Analytics 4, Tag Manager, and interactive attribution dashboards.",
  },
];

export default function DigitalMarketingPage() {
  // ✅ হোয়াটসঅ্যাপ নম্বর কনফিগারেশন
  const whatsappNumber = "13322329769";
  const whatsappMessage = encodeURIComponent("Hello Raddsoft LLC, I am interested in a free consultation for my Digital Marketing project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
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
                Data-Driven ROI Growth
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Accelerate Your Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  Marketing
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                We help enterprises increase high-intent leads, amplify customer acquisitions, and build immense brand authority via expert growth marketing.
              </p>

              {/* ✅ বাটনের জন্য ফ্লেক্সিবল কন্টেইনার (পাশাপাশি দেখানোর জন্য) */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-95 shadow-lg hover:shadow-indigo-200 transition-all duration-300"
                >
                  Scale Your Brand Traffic
                </a>

                {/* ✅ ঠিক করা অ্যানিমেটেড হোয়াটসঅ্যাপ বাটন */}
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/80 transition-all duration-300 cursor-pointer"
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
              <div className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px]">
                <Lottie
                  animationData={marketingAnimation}
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
                Why Partner With Our Growth Team
              </h2>
              <p className="text-slate-500">
                We bypass generic metrics to focus explicitly on user conversion pipelines, customer volume, and clear commercial revenue.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
              {services.map((service, index) => (
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
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategies / Growth Blueprint Section */}
        <section className="py-24 px-6 md:px-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
                Channels & Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Our Core Marketing Execution
              </h2>
              <p className="text-slate-500">
                Explore the tactical direct-response methodologies, advertising distribution, and acquisition stacks we deploy to grow your scale.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
              {strategies.map((strat, index) => {
                const IconComponent = strat.icon;
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
                        <IconComponent size={22} />
                      </div>
                      <span className="text-[11px] font-bold tracking-wide uppercase text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                        {strat.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">{strat.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{strat.description}</p>
                    </div>
                    <a
                      href="/contact"
                      className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200 group/link"
                    >
                      Audit This Channel
                      <ArrowUpRight size={16} className="ml-1 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}