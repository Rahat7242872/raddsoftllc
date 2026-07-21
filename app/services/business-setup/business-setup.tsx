"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CheckCircle, Globe, UserCheck, CreditCard, BarChart2, ArrowRight, MessageCircle } from "lucide-react";

// Dynamic Imports for Next.js SSR Compatibility
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import businessAnimation from "public/animation/Companyfrom.json";

export default function BusinessSetupPage() {
  // --- Package data for USA & UK business launch ---
  const packages = [
    {
      name: "USA Basic",
      price: "$149",
      additional: "+ State Fee",
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

  const services = [
    { title: "EIN Registration", description: "Get your US tax ID for opening bank accounts & operating legally.", price: "$149" },
    { title: "ITIN Application Support", description: "Support for applying ITIN to operate & pay taxes as a non-resident.", price: "$249" },
    { title: "US Registered Agent", description: "Official registered agent address in USA for your LLC.", price: "$99" },
    { title: "BOI Filing", description: "Beneficial Ownership filing submission with FinCEN.", price: "$49" },
    { title: "Business Bank Opening", description: "Digital business bank account (Mercury / Relay / Airwallex).", price: "$69" },
    { title: "Stripe / PayPal Setup", description: "Access global payment gateways through US entity setup.", price: "$79" },
    { title: "Amazon Seller Account", description: "US or UK marketplace account creation and activation.", price: "$99" },
    {
      title: "Sales Tax Permit",
      description: "State sales tax registration for collecting and remitting sales tax legally in the USA.",
      price: "$49"
    },
    {
      title: "Resale Certificate",
      description: "Tax-exempt certificate for purchasing inventory wholesale without paying sales tax.",
      price: "$59"
    },
    {
      title: "Sales Tax Permit + Resale Certificate",
      description: "Complete setup including state tax registration and resale certificate for wholesale purchasing.",
      price: "$89"
    },
    { title: "Virtual Lease Agreement", description: "Legal address lease agreement for US business requirements.", price: "$69" },
    { title: "D-U-N-S Number", description: "DUNS registration for business credit profile in the USA.", price: "$50" },
  ];

  const features = [
    { icon: <Globe size={24} className="text-blue-500" />, title: "Global Expansion", description: "Helping startups operate across borders effortlessly." },
    { icon: <UserCheck size={24} className="text-teal-500" />, title: "Expert Guidance", description: "Personalized consultation from experienced business & tax advisors." },
    { icon: <CreditCard size={24} className="text-indigo-500" />, title: "Transparent & Fair", description: "Clear pricing and honest service policies for every client." },
    { icon: <BarChart2 size={24} className="text-purple-500" />, title: "Innovative Solutions", description: "Cutting-edge tools and automation to streamline your business processes." },
  ];
  // ✅ আপনার হোয়াটসঅ্যাপ নম্বরটি এখানে দিন (Country code সহ, যেমন: 8801xxxxxxxxx)
  const whatsappNumber = "13322329769";
  const whatsappMessage = encodeURIComponent("Hello Raddsoft LLC, I am interested in a free consultation for my Business Setup project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return (
    <main className="min-h-screen bg-[#fafbfc] text-slate-800 font-sans antialiased overflow-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-b from-blue-50/60 via-indigo-50/40 to-[#fafbfc] text-slate-900 py-24 px-6 md:px-20">
        {/* Soft Background Blur Effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/40 blur-[100px] rounded-full" />
        <div className="absolute bottom-5 right-10 w-96 h-96 bg-indigo-200/30 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-xs tracking-wide mb-6 shadow-sm">
              🚀 Global Business Partner
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Launch Your Company <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-600 text-transparent bg-clip-text">
                in the United States
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-slate-600 max-w-lg leading-relaxed">
              <span className="font-semibold text-slate-800">RaddSoft LLC</span> empowers global entrepreneurs to start, manage, and scale their businesses seamlessly in the USA and UK.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 font-medium text-white shadow-sm shadow-blue-600/10 hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.99] transition-all">
                Start Business Now <ArrowRight size={16} />
              </button>
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

          {/* Hero Right Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md bg-white/60 p-4 rounded-3xl border border-slate-100/80 shadow-md shadow-slate-100/50 backdrop-blur-md">
              <Lottie animationData={businessAnimation} loop autoplay className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BUSINESS LAUNCH PACKAGES --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Global Business Launch Packages
          </h2>
          <p className="text-slate-500 mt-2 text-sm">Simple corporate setups with premium features and transparent pricing tiers.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 flex flex-col justify-between hover:border-blue-200 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800">{pkg.name}</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-slate-900">{pkg.price}</span>
                  <span className="text-xs text-slate-400 font-medium">{pkg.additional}</span>
                </div>
                <ul className="space-y-3 mt-6 border-t border-slate-50 pt-5">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle className="text-blue-500 shrink-0 mt-0.5" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 w-full bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-700 py-3 rounded-xl text-sm font-semibold transition-all duration-200">
                <a
                  href={`https://wa.me/13322329769?text=${encodeURIComponent(
                    `Hello, I'm interested in this service.
                   Service: ${pkg.name}
                   Price: ${pkg.price}
                   Please provide more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >Select Package</a>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- AMAZON PACKAGES --- */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-medium tracking-wide text-xs bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/60">E-Commerce Expert Tier</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mt-3">
              Amazon Specialist Packages
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {ecommercePackage.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-slate-100 rounded-2xl p-7 flex flex-col justify-between hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-blue-600">{pkg.price}</span>
                    <span className="text-xs text-slate-400 font-medium">{pkg.additional}</span>
                  </div>
                  <ul className="space-y-3 mt-6 border-t border-slate-50 pt-5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle className="text-indigo-500 shrink-0 mt-0.5" size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 w-full bg-indigo-50/60 hover:bg-blue-600 hover:text-white text-indigo-700 py-3 rounded-xl text-sm font-semibold transition-all">
                  <a
                    href={`https://wa.me/13322329769?text=${encodeURIComponent(
                      `Hello, I'm interested in this service.
                   Service: ${pkg.name}
                   Price: ${pkg.price}
                   Please provide more details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >Buy</a>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- A LA CARTE SERVICES --- */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-600 mb-4">
              Premium Services
            </span>
            <p className="mt-4 text-slate-500 text-base">
              Choose only the services you need. Fast delivery, affordable pricing,
              and professional support.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-lg p-6 shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                    <span className="text-xl">📄</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-3 leading-6 min-h-[70px]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t pt-5">
                  <span className="text-xl font-bold text-blue-600">
                    {service.price}
                  </span>

                  <a
                    href={`https://wa.me/13322329769?text=${encodeURIComponent(
                      `Hello, I'm interested in this service.

                   Service: ${service.title}
                   Price: ${service.price}
                   Please provide more details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-5 py-2.5 text-sm font-semibold transition-all duration-300"
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
      <section className="bg-gradient-to-b from-slate-50/60 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Empowering Startups, Accelerating Growth
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed">
              At <span className="font-semibold text-slate-700">RaddSoft Technology</span>, we simplify global compliance frameworks so you can focus strictly on core product scaling.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-50 p-6 flex flex-col items-center text-center shadow-sm"
              >
                <div className="p-3 rounded-xl bg-slate-50/80 mb-4">{feature.icon}</div>
                <h3 className="text-base font-bold text-slate-800 mb-1.5">{feature.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

