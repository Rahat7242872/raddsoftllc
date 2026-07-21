"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Shield, Zap, Sparkles, MessageSquare } from "lucide-react";

export default function PromoOffers() {
  const whatsappNumber = "13322329769";

  const offers = [
    {
      id: "llc",
      tag: "Popular",
      title: "US LLC Setup & Business Formation",
      description: "Complete corporate structure setup in the US with EIN, Bank Account opening assistance, and legal address.",
      originalPrice: "$499",
      promoPrice: "$299",
      features: ["EIN & State Filing Included", "Registered Agent for 1 Year", "US Bank Account Setup Help", "Tax Consultation"],
      gradient: "from-slate-900 via-indigo-950 to-slate-950",
      isDark: true,
    },
    {
      id: "ecom",
      tag: "High ROI",
      title: "Premium E-Commerce Marketplace",
      description: "Lighting fast Next.js & Tailwind multi-vendor or single-vendor e-commerce store with secure payment gateways.",
      originalPrice: "$1599",
      promoPrice: "$999",
      features: ["Next.js & Tailwind CSS", "Advanced Admin Dashboard", "Automated Invoice & SMS", "SEO Optimized Architecture"],
      gradient: "from-white to-slate-50/50",
      isDark: false,
    },
    {
      id: "food",
      tag: "Trending",
      title: "Food Delivery Complete Ecosystem",
      description: "Cross-platform mobile apps for Customer, Rider, and Restaurant along with a robust central admin panel.",
      originalPrice: "$1999",
      promoPrice: "$1299",
      features: ["React Native iOS & Android Apps", "Real-time Live GPS Tracking", "Restaurant Order Manager", "Multi-payment Gateway"],
      gradient: "from-indigo-600 via-violet-600 to-indigo-700",
      isDark: true,
    },
    {
      id: "digital",
      tag: "Best Value",
      title: "Hyper-Growth Digital Marketing",
      description: "Complete organic SEO takeover, structured PPC campaigns, and high-converting Meta/Google ad setups.",
      originalPrice: "$1,200",
      promoPrice: "$499",
      features: ["Advanced Keyword Research", "High-ROI Ad Campaign Setup", "GA4 & Pixel Integration", "Weekly Performance Reports"],
      gradient: "from-white to-slate-50/50",
      isDark: false,
    },
  ];

  const getWhatsappLink = (title: string, price: string) => {
    const text = encodeURIComponent(
      `Hello Raddsoft LLC, I am interested in your Limited Time Offer: "${title}" at the promo price of ${price}. Let's discuss details.`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-white border-t border-slate-100 overflow-hidden relative">
      {/* Background Subtle Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-indigo-500/5 to-violet-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase">
            <Sparkles size={12} className="animate-pulse" /> Limited Time Deals
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Exclusive Packages to <br className="hidden sm:block" /> Scale Your Venture
          </h2>
          <p className="text-slate-500 text-base md:text-lg">
            Unlock premium corporate infrastructure, software systems, and marketing funnels at specialized campaign rates.
          </p>
        </div>

        {/* Offers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden transition-shadow duration-300 ${
                offer.isDark 
                  ? `bg-gradient-to-br ${offer.gradient} text-white shadow-xl shadow-indigo-950/10` 
                  : `bg-gradient-to-br ${offer.gradient} text-slate-900 border border-slate-100 shadow-lg shadow-slate-100/40`
              }`}
            >
              {/* Card Upper Section */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    offer.isDark ? "bg-white/10 text-indigo-200" : "bg-indigo-50 text-indigo-600"
                  }`}>
                    {offer.tag}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-sm line-through ${offer.isDark ? "text-slate-400" : "text-slate-400"}`}>
                      {offer.originalPrice}
                    </span>
                    <span className={`text-2xl font-black ${offer.isDark ? "text-emerald-400" : "text-emerald-600"}`}>
                      {offer.promoPrice}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight mb-3 leading-snug">
                  {offer.title}
                </h3>
                <p className={`text-sm mb-8 leading-relaxed ${offer.isDark ? "text-indigo-100/70" : "text-slate-600"}`}>
                  {offer.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${offer.isDark ? "text-emerald-400" : "text-emerald-500"}`} />
                      <span className={offer.isDark ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className={`pt-6 border-t flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 ${
                offer.isDark ? "border-white/10" : "border-slate-100"
              }`}>
                <div className="flex items-center gap-2">
                  <Shield size={14} className={offer.isDark ? "text-indigo-400" : "text-indigo-500"} />
                  <span className={`text-xs font-medium ${offer.isDark ? "text-slate-400" : "text-slate-500"}`}>
                    100% Secure Contract
                  </span>
                </div>
                
                <a
                  href={getWhatsappLink(offer.title, offer.promoPrice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 transform ${
                    offer.isDark
                      ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20"
                      : "bg-slate-900 hover:bg-indigo-600 text-white shadow-md shadow-slate-950/10"
                  }`}
                >
                  <MessageSquare size={16} /> Claim Offer
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Urgency Footer */}
        <div className="mt-16 text-center border border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50/50 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-indigo-600">
            <Zap size={18} className="fill-indigo-600/10 animate-bounce" />
            <span className="text-sm font-bold text-slate-800">Need a custom bundle or custom enterprise stack?</span>
          </div>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-0.5 group">
            Let's build a deal <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}