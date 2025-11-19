// Raddsoft LLC - Business Setup Page with Popular Services
"use client";
import { CheckCircle,Globe, UserCheck, CreditCard, BarChart2 } from 'lucide-react';
import React from "react";
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
// ✅ Lottie dynamically imported
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import businessAnimation from "public/animation/CompanyForm.json";
import bubble from "public/animation/Bubble.json";
import { Player } from '@lottiefiles/react-lottie-player'

export default function BusinessSetupPage() {
  // --- Package data for USA & UK business launch ---
  const packages = [
    {
      name: 'USA Basic',
      price: '$199',
      additional: '+ State Fee',
      features: [
        'US Company Formation (LLC or Corp)',
        '1 Year Registered Agent & Business Address',
        'Mail Forwarding Service (10 forwards/month)',
        'Employer Identification Number (EIN)',
        'Custom Operating Agreement',
        'BOI (Beneficial Ownership Info) Filing',
        'Digital Bank Account Setup (Mercury, Relay, Airwallex)',
        'Basic US Tax Advisory',
        'ITIN Application Support (if needed)',
        '30-Minute Business Consultation',
      ],
    },
    {
      name: 'UK Basic',
      price: '$209',
      additional: '+ Wise Activation Fee $60',
      features: [
        'UK Company Incorporation',
        'Registered Office Address for 1 Year',
        'Directors Service Address for 1 Year',
        'Annual Compliance with Companies House',
        'PSC Register Submission',
        'Digital Certificate of Incorporation',
        'Web Authentication Code Access',
        'UTR Number Application',
        'UK Wise Business Account Setup',
        'Basic Tax Consultation',
      ],
    },
  ];

  // --- Popular services data ---
  const services = [
    { title: 'EIN (Employer Identification Number)', description: 'Get your US tax ID for opening bank accounts & operating legally.', price: '$99' },
    { title: 'ITIN Application Support', description: 'Support for applying ITIN to operate & pay taxes as a non-resident.', price: '$149' },
    { title: 'US Registered Agent (1 Year)', description: 'Official registered agent address in USA for your LLC.', price: '$79' },
    { title: 'UK Registered Office Address (1 Year)', description: 'Professional UK office address for company incorporation.', price: '$89' },
    { title: 'BOI Filing', description: 'Beneficial Ownership filing submission with FinCEN.', price: '$49' },
    { title: 'Business Bank Account Opening', description: 'Digital business bank account (Mercury / Relay / Airwallex).', price: '$69' },
    { title: 'Stripe / PayPal Setup', description: 'Access global payment gateways through US entity setup.', price: '$79' },
    { title: 'Amazon Seller Account', description: 'US or UK marketplace account creation and activation.', price: '$99' },
    { title: 'Shopify/Walmart Seller Account', description: 'Seller account setup for Shopify & Walmart platforms.', price: '$99' },
    { title: 'US Resale Certificate', description: 'Apply for resale certificate to buy products tax-free.', price: '$149' },
    { title: 'Virtual Lease Agreement', description: 'Legal address lease agreement for US business requirements.', price: '$79' },
    { title: 'D-U-N-S Number', description: 'DUNS registration for business credit profile in the USA.', price: '$129' },
  ];
const features = [
    {
      icon: <Globe size={28} className="text-indigo-600" />,
      title: "Global Expansion",
      description: "Helping startups operate across borders effortlessly.",
    },
    {
      icon: <UserCheck size={28} className="text-indigo-600" />,
      title: "Expert Guidance",
      description: "Personalized consultation from experienced business & tax advisors.",
    },
    {
      icon: <CreditCard size={28} className="text-indigo-600" />,
      title: "Transparent & Fair",
      description: "Clear pricing and honest service policies for every client.",
    },
    {
      icon: <BarChart2 size={28} className="text-indigo-600" />,
      title: "Innovative Solutions",
      description: "Cutting-edge tools and automation to streamline your business processes.",
    },
  ];
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* --- Hero Section --- */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-40 text-black py-24 px-6 md:px-20 text-center">
        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex-1 flex items-center justify-center"
        >
          <Lottie
            animationData={businessAnimation}
            loop
            autoplay
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </motion.div>
        <div className="mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Launch Your Company in the US and UK
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            <span className="text-2xl font-bold text-blue-600">RaddSoft LLC </span>
            <span>Your Trusted Partner for Global Business Expansion</span>
          </p>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We empower entrepreneurs to launch, manage, and scale their businesses seamlessly in the USA and UK — regardless of residency status.
          </p>
        </div>
      </section>

      {/* --- Business Launch Packages Section --- */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Global Business Launch Packages
          </h2>

          {/* Grid of package cards */}
          <div className="grid gap-8 md:grid-cols-2 justify-center font-bold">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white w-full max-w-sm mx-auto rounded-xl shadow-md p-6 hover:shadow-2xl hover:bg-indigo-50 transition text-center"
              >
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-gray-800 mb-1">{pkg.price}</p>
                <p className="text-sm text-gray-600 mb-1">{pkg.additional}</p>

                {/* Features List */}
                <ul className="space-y-2 text-sm text-gray-700 text-left inline-block mx-auto mt-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-2" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Buy Button */}
                <button className="mt-6 w-32 bg-indigo-600 text-white py-2 text-sm rounded-md font-medium hover:bg-indigo-700 transition">
                  Buy Now
                </button>
                
              </motion.div>
            ))}
          </div>
        </div>
        
      </section>
        {/* --- Popular Services Section --- */}
          <section className="bg-white py-20 px-6 md:px-16 mt-16">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Services</h2>

            {/* Grid of service cards */}
            <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:bg-indigo-50 transition text-center"
                >
                  <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-700 mb-4">{service.description}</p>
                  <p className="text-lg font-bold text-gray-900 mb-4">{service.price}</p>
                  <button className="mt-2 px-6 py-2 bg-indigo-600 text-white rounded-md font-medium text-sm hover:bg-indigo-700 transition">
                    Order Now
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-24 px-6 md:px-20">
      {/* Hero Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-xl md:text-5xl font-bold mb-4 text-gray-900">
          Empowering Startups, Accelerating Growth
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          At RaddSoft Technology, we simplify business operations for entrepreneurs worldwide. Leveraging innovative technology, expert consultation, and seamless digital solutions, we help startups scale faster, maximize profits, and navigate complex global markets with confidence.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:bg-indigo-50 transition text-center flex flex-col items-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h3>
            <p className="text-gray-700 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </main>
  );
}
