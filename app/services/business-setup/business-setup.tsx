"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Globe,
  UserCheck,
  CreditCard,
  BarChart2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

// Dynamic Imports for Next.js SSR Compatibility
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import businessAnimation from "public/animation/Companyfrom.json";

export default function BusinessSetupPage() {
  const packages = [
    {
      name: "USA Basic",
      price: "$149",
      additional: "+ State Fee",
      badge: "Popular Starter",
      accentColor: "from-blue-500/10 via-sky-500/5 to-transparent",
      borderColor: "hover:border-blue-300",
      buttonBg: "bg-blue-600 hover:bg-blue-700 text-white",
      features: [
        "US Company Formation (LLC or Corp)",
        "1 Year Registered Agent & Business Address",
        "Mail Forwarding Service (10 forwards/month)",
        "Employer Identification Number (EIN)",
        "Custom Operating Agreement",
        "BOI (Beneficial Ownership Info) Filing",
        "Digital Bank Account Setup (Mercury, Relay)",
        "Basic US Tax Advisory",
        "ITIN Application Support (if needed)",
        "30-Minute Business Consultation",
      ],
    },
    {
      name: "Wyoming LLC",
      price: "$249",
      badge: "Best Value",
      accentColor: "from-indigo-500/10 via-purple-500/5 to-transparent",
      borderColor: "hover:border-indigo-300",
      buttonBg: "bg-indigo-600 hover:bg-indigo-700 text-white",
      features: [
        "US Company Formation (LLC or Corp)",
        "1 Year Registered Agent & Business Address",
        "Mail Forwarding Service (10 forwards/year)",
        "Employer Identification Number (EIN)",
        "Custom Operating Agreement",
        "BOI (Beneficial Ownership Info) Filing",
        "Digital Bank Account Setup (Mercury, Relay)",
        "Basic US Tax Advisory",
        "ITIN Application Support (if needed)",
        "30-Minute Business Consultation",
      ],
    },
    {
      name: "Texas LLC",
      price: "$399",
      badge: "High Growth",
      accentColor: "from-emerald-500/10 via-teal-500/5 to-transparent",
      borderColor: "hover:border-emerald-300",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700 text-white",
      features: [
        "US Company Formation (LLC or Corp)",
        "1 Year Registered Agent & Business Address",
        "Mail Forwarding Service (10 forwards/year)",
        "Employer Identification Number (EIN)",
        "Custom Operating Agreement",
        "BOI (Beneficial Ownership Info) Filing",
        "Digital Bank Account Setup (Mercury, Relay)",
        "Basic US Tax Advisory",
        "ITIN Application Support (if needed)",
        "30-Minute Business Consultation",
      ],
    },
  ];

  const ecommercePackage = [
    {
      name: "Texas Amazon",
      price: "$849",
      additional: "All Inclusive",
      accentBg: "bg-gradient-to-br from-amber-50/80 via-orange-50/30 to-white",
      borderColor: "hover:border-amber-300",
      badgeBg: "bg-amber-100/80 text-amber-800 border-amber-200",
      checkColor: "text-amber-500",
      features: [
        "US LLC Formation (Articles of Organization)",
        "Certificate of Formation",
        "Registered Agent Service (1 Year)",
        "Unique US Business Address",
        "EIN (Employer Identification Number)",
        "US Business Bank Account Setup",
        "Seller Permit (Sales Tax Permit)",
        "Resale Certificate",
        "US Phone Number Setup",
        "Amazon Seller Account Creation",
        "E-commerce Website Development Included",
        "Unlimited Professional Business Email Setup",
        "Basic Compliance Guidance",
        "30 Days Support",
      ],
    },
    {
      name: "Wyoming Amazon",
      price: "$649",
      additional: "All Inclusive",
      accentBg: "bg-gradient-to-br from-cyan-50/80 via-sky-50/30 to-white",
      borderColor: "hover:border-cyan-300",
      badgeBg: "bg-cyan-100/80 text-cyan-800 border-cyan-200",
      checkColor: "text-cyan-600",
      features: [
        "US LLC Formation (Articles of Organization)",
        "Certificate of Formation",
        "Registered Agent Service (1 Year)",
        "Unique US Business Address",
        "EIN (Employer Identification Number)",
        "US Business Bank Account Setup",
        "Seller Permit (Sales Tax Permit)",
        "Resale Certificate",
        "US Phone Number Setup",
        "Amazon Seller Account Creation",
        "E-commerce Website Development Included",
        "Unlimited Professional Business Email Setup",
        "Basic Compliance Guidance",
        "30 Days Support",
      ],
    },
    {
      name: "Florida Amazon",
      price: "$639",
      additional: "All Inclusive",
      accentBg: "bg-gradient-to-br from-violet-50/80 via-purple-50/30 to-white",
      borderColor: "hover:border-violet-300",
      badgeBg: "bg-violet-100/80 text-violet-800 border-violet-200",
      checkColor: "text-violet-500",
      features: [
        "US LLC Formation (Articles of Organization)",
        "Certificate of Formation",
        "Registered Agent Service (1 Year)",
        "Unique US Business Address",
        "EIN (Employer Identification Number)",
        "US Business Bank Account Setup",
        "Seller Permit (Sales Tax Permit)",
        "Resale Certificate",
        "US Phone Number Setup",
        "Amazon Seller Account Creation",
        "E-commerce Website Development Included",
        "Unlimited Professional Business Email Setup",
        "Basic Compliance Guidance",
        "30 Days Support",
      ],
    },
  ];

  // ✅ ইন্ডিভিজুয়াল সার্ভিসের রঙ এবং কার্ডের জন্য সফট ব্যাকগ্রাউন্ড কালার যুক্ত করা হলো
  const services = [
    {
      title: "EIN Registration",
      description: "Get your US tax ID for opening bank accounts & operating legally.",
      price: "$149",
      cardBg: "bg-blue-50/70 hover:bg-blue-100/60 border-blue-100 hover:border-blue-300",
      iconBg: "bg-blue-200/60 text-blue-700",
      btnBg: "bg-blue-600 hover:bg-blue-700 text-white",
      priceColor: "text-blue-700",
    },
    {
      title: "ITIN Application Support",
      description: "Support for applying ITIN to operate & pay taxes as a non-resident.",
      price: "$249",
      cardBg: "bg-indigo-50/70 hover:bg-indigo-100/60 border-indigo-100 hover:border-indigo-300",
      iconBg: "bg-indigo-200/60 text-indigo-700",
      btnBg: "bg-indigo-600 hover:bg-indigo-700 text-white",
      priceColor: "text-indigo-700",
    },
    {
      title: "US Registered Agent",
      description: "Official registered agent address in USA for your LLC.",
      price: "$99",
      cardBg: "bg-sky-50/70 hover:bg-sky-100/60 border-sky-100 hover:border-sky-300",
      iconBg: "bg-sky-200/60 text-sky-700",
      btnBg: "bg-sky-600 hover:bg-sky-700 text-white",
      priceColor: "text-sky-700",
    },
    {
      title: "BOI Filing",
      description: "Beneficial Ownership filing submission with FinCEN.",
      price: "$49",
      cardBg: "bg-teal-50/70 hover:bg-teal-100/60 border-teal-100 hover:border-teal-300",
      iconBg: "bg-teal-200/60 text-teal-700",
      btnBg: "bg-teal-600 hover:bg-teal-700 text-white",
      priceColor: "text-teal-700",
    },
    {
      title: "Business Bank Opening",
      description: "Digital business bank account (Mercury / Relay / Airwallex).",
      price: "$69",
      cardBg: "bg-emerald-50/70 hover:bg-emerald-100/60 border-emerald-100 hover:border-emerald-300",
      iconBg: "bg-emerald-200/60 text-emerald-700",
      btnBg: "bg-emerald-600 hover:bg-emerald-700 text-white",
      priceColor: "text-emerald-700",
    },
    {
      title: "Stripe / PayPal Setup",
      description: "Access global payment gateways through US entity setup.",
      price: "$79",
      cardBg: "bg-purple-50/70 hover:bg-purple-100/60 border-purple-100 hover:border-purple-300",
      iconBg: "bg-purple-200/60 text-purple-700",
      btnBg: "bg-purple-600 hover:bg-purple-700 text-white",
      priceColor: "text-purple-700",
    },
    {
      title: "Amazon Seller Account",
      description: "US or UK marketplace account creation and activation.",
      price: "$99",
      cardBg: "bg-amber-50/70 hover:bg-amber-100/60 border-amber-100 hover:border-amber-300",
      iconBg: "bg-amber-200/60 text-amber-800",
      btnBg: "bg-amber-600 hover:bg-amber-700 text-white",
      priceColor: "text-amber-800",
    },
    {
      title: "Sales Tax Permit",
      description: "State sales tax registration for collecting and remitting sales tax legally.",
      price: "$49",
      cardBg: "bg-rose-50/70 hover:bg-rose-100/60 border-rose-100 hover:border-rose-300",
      iconBg: "bg-rose-200/60 text-rose-700",
      btnBg: "bg-rose-600 hover:bg-rose-700 text-white",
      priceColor: "text-rose-700",
    },
    {
      title: "Resale Certificate",
      description: "Tax-exempt certificate for purchasing inventory wholesale without tax.",
      price: "$59",
      cardBg: "bg-pink-50/70 hover:bg-pink-100/60 border-pink-100 hover:border-pink-300",
      iconBg: "bg-pink-200/60 text-pink-700",
      btnBg: "bg-pink-600 hover:bg-pink-700 text-white",
      priceColor: "text-pink-700",
    },
    {
      title: "Sales Tax + Resale Cert",
      description: "Complete setup including state tax registration and resale certificate.",
      price: "$89",
      cardBg: "bg-fuchsia-50/70 hover:bg-fuchsia-100/60 border-fuchsia-100 hover:border-fuchsia-300",
      iconBg: "bg-fuchsia-200/60 text-fuchsia-700",
      btnBg: "bg-fuchsia-600 hover:bg-fuchsia-700 text-white",
      priceColor: "text-fuchsia-700",
    },
    {
      title: "Virtual Lease Agreement",
      description: "Legal address lease agreement for US business requirements.",
      price: "$69",
      cardBg: "bg-cyan-50/70 hover:bg-cyan-100/60 border-cyan-100 hover:border-cyan-300",
      iconBg: "bg-cyan-200/60 text-cyan-700",
      btnBg: "bg-cyan-600 hover:bg-cyan-700 text-white",
      priceColor: "text-cyan-700",
    },
    {
      title: "D-U-N-S Number",
      description: "DUNS registration for business credit profile in the USA.",
      price: "$50",
      cardBg: "bg-violet-50/70 hover:bg-violet-100/60 border-violet-100 hover:border-violet-300",
      iconBg: "bg-violet-200/60 text-violet-700",
      btnBg: "bg-violet-600 hover:bg-violet-700 text-white",
      priceColor: "text-violet-700",
    },
  ];

  const features = [
    { icon: <Globe size={22} className="text-blue-600" />, title: "Global Expansion", description: "Helping startups operate across borders effortlessly." },
    { icon: <UserCheck size={22} className="text-teal-600" />, title: "Expert Guidance", description: "Personalized consultation from experienced business advisors." },
    { icon: <CreditCard size={22} className="text-indigo-600" />, title: "Transparent Pricing", description: "Clear pricing and honest service policies for every client." },
    { icon: <BarChart2 size={22} className="text-purple-600" />, title: "Innovative Solutions", description: "Cutting-edge tools and automation to streamline processes." },
  ];

  const whatsappNumber = "13322329769";
  const whatsappMessage = encodeURIComponent("Hello Raddsoft LLC, I am interested in a free consultation for my Business Setup project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-b from-blue-50/80 via-slate-50/50 to-[#f8fafc] text-slate-900 py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20">
        <div className="absolute top-10 left-10 w-72 md:w-96 h-72 md:h-96 bg-blue-200/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-5 right-10 w-72 md:w-96 h-72 md:h-96 bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100/60 border border-blue-200/80 text-blue-700 font-semibold text-xs tracking-wide mb-6 shadow-sm">
              <Sparkles size={14} className="text-blue-600" /> Global Business Partner
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.2] sm:leading-[1.15]">
              Launch Your Company <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-transparent bg-clip-text">
                in the United States
              </span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-lg leading-relaxed">
              <span className="font-semibold text-slate-800">Raddsoft LLC</span> empowers global entrepreneurs to start, manage, and scale their businesses seamlessly in the USA.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-md shadow-blue-500/20 hover:opacity-95 active:scale-[0.98] transition-all">
                Start Business Now <ArrowRight size={16} />
              </button>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 12px rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/70 active:scale-[0.98] transition-all"
              >
                <MessageCircle size={18} className="fill-emerald-600 text-emerald-600 animate-pulse" />
                <span>Free Consultation</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center mt-6 lg:mt-0"
          >
            <div className="w-full max-w-sm sm:max-w-md bg-white/60 p-4 rounded-3xl border border-white/80 shadow-xl shadow-slate-200/50 backdrop-blur-md">
              <Lottie animationData={businessAnimation} loop autoplay className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BUSINESS LAUNCH PACKAGES --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-3">
            Global Business Launch Packages
          </h2>
          <p className="text-slate-500 mt-2 text-xs sm:text-sm">
            Simple corporate setups with premium features and soft-pastel styling.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`relative bg-gradient-to-b ${pkg.accentColor} bg-white rounded-3xl border border-slate-200/70 shadow-sm hover:shadow-xl p-6 sm:p-7 flex flex-col justify-between ${pkg.borderColor} transition-all duration-300`}
            >
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-800">{pkg.name}</h3>
                  {pkg.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                  {pkg.additional && <span className="text-xs text-slate-400 font-medium">{pkg.additional}</span>}
                </div>
                
                <ul className="space-y-3 mt-6 border-t border-slate-100/80 pt-5">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle className="text-blue-500 shrink-0 mt-0.5" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/13322329769?text=${encodeURIComponent(
                  `Hello, I'm interested in this service.\nService: ${pkg.name}\nPrice: ${pkg.price}\nPlease provide more details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm active:opacity-90 ${pkg.buttonBg}`}
              >
                Select Package
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- AMAZON PACKAGES --- */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-100/60 via-slate-50 to-white border-y border-slate-200/60 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              E-Commerce Tier
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-3">
              Amazon Specialist Packages
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 items-stretch">
            {ecommercePackage.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`${pkg.accentBg} backdrop-blur-md rounded-3xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl ${pkg.borderColor} transition-all duration-300`}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-800">{pkg.name}</h3>
                    <span className={`text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full border ${pkg.badgeBg}`}>
                      {pkg.additional}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                  </div>

                  <ul className="space-y-3 mt-6 border-t border-slate-200/40 pt-5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle className={`${pkg.checkColor} shrink-0 mt-0.5`} size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/13322329769?text=${encodeURIComponent(
                    `Hello, I'm interested in this service.\nService: ${pkg.name}\nPrice: ${pkg.price}\nPlease provide more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full text-center bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- A LA CARTE SERVICES (With Soft Pastel Card BG Colors) --- */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              <Zap size={13} /> Ala-Carte Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-3">
              Individual Services
            </h2>
            <p className="mt-2 text-slate-500 text-xs sm:text-sm">
              Pick and choose exact services tailored to your needs.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`group rounded-2xl border ${service.cardBg} backdrop-blur-sm p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 font-bold text-sm shadow-sm`}>
                    📄
                  </div>

                  <h3 className="font-bold text-slate-800 text-base">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600/90 mt-2.5 leading-relaxed sm:min-h-[55px]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-200/60 pt-4">
                  <span className={`text-xl font-bold ${service.priceColor}`}>
                    {service.price}
                  </span>

                  <a
                    href={`https://wa.me/13322329769?text=${encodeURIComponent(
                      `Hello, I'm interested in this service.\n\nService: ${service.title}\nPrice: ${service.price}\nPlease provide more details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-xl ${service.btnBg} px-4 py-2 text-xs font-semibold transition-all duration-200 shadow-sm active:scale-95`}
                  >
                    Buy Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION SECTION --- */}
      <section className="bg-gradient-to-b from-slate-100/50 to-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
              Empowering Startups, Accelerating Growth
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed">
              At <span className="font-semibold text-slate-700">RaddSoft Technology</span>, we simplify global compliance frameworks so you can focus strictly on core product scaling.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-3.5">{feature.icon}</div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{feature.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}