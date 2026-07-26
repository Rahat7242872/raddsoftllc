"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Search, 
  Share2, 
  Megaphone, 
  BarChart3, 
  Mail, 
  Target, 
  MessageCircle,
  Sparkles,
  Zap
} from "lucide-react";

// ✅ Dynamic Import for Lottie with SSR Disabled & Loading Fallback
const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="w-full h-64 bg-slate-100 rounded-2xl animate-pulse" />
});

import marketingAnimation from "public/animation/Digital Marketing.json";

// ✅ সফট প্যাস্টেল কালার সহ Services array
const services = [
  { 
    title: "SEO Optimization", 
    description: "Improve search rankings and organic traffic with our expert SEO strategies.",
    cardBg: "bg-indigo-50/70 hover:bg-indigo-100/60 border-indigo-100 hover:border-indigo-300",
    badgeBg: "bg-indigo-200/60 text-indigo-700"
  },
  { 
    title: "Social Media Marketing", 
    description: "Engage your audience on platforms like Facebook, Instagram, and LinkedIn.",
    cardBg: "bg-sky-50/70 hover:bg-sky-100/60 border-sky-100 hover:border-sky-300",
    badgeBg: "bg-sky-200/60 text-sky-700"
  },
  { 
    title: "PPC Advertising", 
    description: "Run high-ROI paid campaigns on Google Ads, Facebook Ads, and more.",
    cardBg: "bg-amber-50/70 hover:bg-amber-100/60 border-amber-100 hover:border-amber-300",
    badgeBg: "bg-amber-200/60 text-amber-800"
  },
  { 
    title: "Content Marketing", 
    description: "Create compelling content that drives traffic, leads, and conversions.",
    cardBg: "bg-purple-50/70 hover:bg-purple-100/60 border-purple-100 hover:border-purple-300",
    badgeBg: "bg-purple-200/60 text-purple-700"
  },
  { 
    title: "Email Marketing", 
    description: "Automated and targeted email campaigns to nurture leads.",
    cardBg: "bg-emerald-50/70 hover:bg-emerald-100/60 border-emerald-100 hover:border-emerald-300",
    badgeBg: "bg-emerald-200/60 text-emerald-700"
  },
  { 
    title: "Analytics & Reporting", 
    description: "Track campaign performance and optimize for maximum ROI.",
    cardBg: "bg-rose-50/70 hover:bg-rose-100/60 border-rose-100 hover:border-rose-300",
    badgeBg: "bg-rose-200/60 text-rose-700"
  },
];

// ✅ সফট প্যাস্টেল কালার সহ Strategies array
const strategies = [
  {
    title: "Search Engine Supremacy",
    category: "SEO & Content",
    icon: Search,
    description: "In-depth keyword blueprints, technical auditing, and high-authority link building designed to dominate organic search results.",
    cardBg: "bg-indigo-50/70 hover:bg-indigo-100/60 border-indigo-100 hover:border-indigo-300",
    iconBg: "bg-indigo-200/60 text-indigo-700",
    badgeBg: "bg-indigo-200/80 text-indigo-800",
    btnColor: "text-indigo-700 hover:text-indigo-900"
  },
  {
    title: "Performance Advertising",
    category: "PPC & Paid Ads",
    icon: Target,
    description: "Data-backed Google Ads, Meta Ads, and LinkedIn campaigns optimized for the lowest acquisition cost and highest conversions.",
    cardBg: "bg-amber-50/70 hover:bg-amber-100/60 border-amber-100 hover:border-amber-300",
    iconBg: "bg-amber-200/60 text-amber-800",
    badgeBg: "bg-amber-200/80 text-amber-900",
    btnColor: "text-amber-800 hover:text-amber-950"
  },
  {
    title: "Social Growth & Branding",
    category: "SMM & Engagement",
    icon: Share2,
    description: "Creative content creation, viral community management, and multi-channel strategy to boost brand awareness and visibility.",
    cardBg: "bg-sky-50/70 hover:bg-sky-100/60 border-sky-100 hover:border-sky-300",
    iconBg: "bg-sky-200/60 text-sky-700",
    badgeBg: "bg-sky-200/80 text-sky-800",
    btnColor: "text-sky-700 hover:text-sky-900"
  },
  {
    title: "Conversion Rate Optimization",
    category: "CRO & Funnels",
    icon: Megaphone,
    description: "Landing page behavioral mapping, A/B split testing, and sales funnel architectures engineered to maximize your traffic value.",
    cardBg: "bg-rose-50/70 hover:bg-rose-100/60 border-rose-100 hover:border-rose-300",
    iconBg: "bg-rose-200/60 text-rose-700",
    badgeBg: "bg-rose-200/80 text-rose-800",
    btnColor: "text-rose-700 hover:text-rose-900"
  },
  {
    title: "Retention & Email Automation",
    category: "Lifecycle Marketing",
    icon: Mail,
    description: "Smart behavioral-triggered newsletter workflows and personalized email tracks designed to build customer retention and value.",
    cardBg: "bg-emerald-50/70 hover:bg-emerald-100/60 border-emerald-100 hover:border-emerald-300",
    iconBg: "bg-emerald-200/60 text-emerald-700",
    badgeBg: "bg-emerald-200/80 text-emerald-800",
    btnColor: "text-emerald-700 hover:text-emerald-900"
  },
  {
    title: "Data Intelligence & ROI Insights",
    category: "Advanced Analytics",
    icon: BarChart3,
    description: "End-to-end custom tracking setups using Google Analytics 4, Tag Manager, and interactive attribution dashboards.",
    cardBg: "bg-purple-50/70 hover:bg-purple-100/60 border-purple-100 hover:border-purple-300",
    iconBg: "bg-purple-200/60 text-purple-700",
    badgeBg: "bg-purple-200/80 text-purple-800",
    btnColor: "text-purple-700 hover:text-purple-900"
  },
];

export default function DigitalMarketingPage() {
  const whatsappNumber = "13322329769";
  const whatsappMessage = encodeURIComponent("Hello Raddsoft LLC, I am interested in a free consultation for my Digital Marketing project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="bg-[#f8fafc] text-slate-800 font-sans antialiased overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50/80 via-slate-50/50 to-[#f8fafc] py-20 lg:py-32 px-6 md:px-20">
        <div className="absolute top-10 left-10 w-72 md:w-96 h-72 md:h-96 bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-5 right-10 w-72 md:w-96 h-72 md:h-96 bg-blue-200/30 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-100/60 border border-indigo-200/80 text-indigo-700 font-semibold text-xs tracking-wide mb-2 shadow-sm">
              <Sparkles size={14} className="text-indigo-600" /> Data-Driven ROI Growth
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Accelerate Your Digital <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-600 text-transparent bg-clip-text">
                Marketing
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              We help enterprises increase high-intent leads, amplify customer acquisitions, and build immense brand authority via expert growth marketing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-95 shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-all duration-300"
              >
                Scale Your Brand Traffic
              </a>

              {/* WhatsApp Button with Pulsing Glow */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 12px rgba(34, 197, 94, 0)"
                  ]
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

          {/* Right Column: Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[500px] lg:max-w-[550px] bg-white/60 p-4 rounded-3xl border border-white/80 shadow-xl shadow-slate-200/50 backdrop-blur-md">
              <Lottie
                animationData={marketingAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section (With Soft Pastel Colors) */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
              <Zap size={13} /> Performance Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Why Partner With Our Growth Team
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              We bypass generic metrics to focus explicitly on user conversion pipelines, customer volume, and clear commercial revenue.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group rounded-2xl border ${service.cardBg} backdrop-blur-sm p-7 shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between`}
              >
                <div>
                  <div className={`h-10 w-10 rounded-xl ${service.badgeBg} flex items-center justify-center font-bold text-sm mb-5 shadow-sm`}>
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2.5">{service.title}</h3>
                  <p className="text-slate-600/90 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strategies Section (With Soft Pastel Colors) */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-slate-100/50 via-slate-50 to-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Channels & Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Our Core Marketing Execution
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Explore the tactical direct-response methodologies, advertising distribution, and acquisition stacks we deploy to grow your scale.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
            {strategies.map((strat, index) => {
              const IconComponent = strat.icon;
              return (
                <motion.div
                  key={strat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex flex-col justify-between rounded-2xl border ${strat.cardBg} backdrop-blur-sm p-7 shadow-sm hover:shadow-xl transition-all duration-300 text-left`}
                >
                  <div>
                    <div className={`h-12 w-12 rounded-xl ${strat.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                      <IconComponent size={24} />
                    </div>
                    <span className={`text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md ${strat.badgeBg}`}>
                      {strat.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2.5">{strat.title}</h3>
                    <p className="text-slate-600/90 text-sm leading-relaxed mb-6">{strat.description}</p>
                  </div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center text-sm font-semibold ${strat.btnColor} transition-colors duration-200 group/link`}
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
  );
}