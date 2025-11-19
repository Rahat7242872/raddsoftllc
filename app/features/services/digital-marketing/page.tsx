"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Head from "next/head";
import { CheckCircle } from "lucide-react";

// ✅ Lottie dynamically imported
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import marketingAnimation from "public/animation/marketing.json";

const services = [
  { title: "SEO Optimization", description: "Improve search rankings and organic traffic with our expert SEO strategies." },
  { title: "Social Media Marketing", description: "Engage your audience on platforms like Facebook, Instagram, and LinkedIn." },
  { title: "PPC Advertising", description: "Run high-ROI paid campaigns on Google Ads, Facebook Ads, and more." },
  { title: "Content Marketing", description: "Create compelling content that drives traffic, leads, and conversions." },
  { title: "Email Marketing", description: "Automated and targeted email campaigns to nurture leads." },
  { title: "Analytics & Reporting", description: "Track campaign performance and optimize for maximum ROI." },
];

const packages = [
  {
    name: "Starter",
    price: "$399",
    features: ["SEO Basics", "Social Media Setup", "1 Campaign Management", "Monthly Reporting"],
  },
  {
    name: "Professional",
    price: "$799",
    features: ["SEO Optimization", "Social Media Management", "3 Campaigns", "Analytics & Reporting"],
  },
  {
    name: "Enterprise",
    price: "$1499",
    features: ["Full Digital Marketing Strategy", "Unlimited Campaigns", "Content & Email Marketing", "Advanced Analytics"],
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <Head>
        <title>Digital Marketing Services | RADDSOFT LLC</title>
        <meta name="description" content="Expert digital marketing services including SEO, social media, PPC, content marketing, and email campaigns to grow your business." />
        <meta name="keywords" content="digital marketing, SEO, social media marketing, PPC, content marketing, email marketing, RADDSOFT" />
      </Head>

      <main className="bg-white text-gray-900">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-24 px-6 md:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full flex justify-center"
          >
            <Lottie
              animationData={marketingAnimation}
              loop
              autoplay
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
            />
          </motion.div>
          <div className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow Your Business with Digital Marketing</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              We help businesses increase leads, sales, and brand visibility through expert digital marketing strategies.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 md:px-20 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-12">Our Digital Marketing Services</h2>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-12">Digital Marketing Packages</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition text-center"
              >
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold mb-4">{pkg.price}</p>
                <ul className="text-gray-700 text-sm space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-green-500 mt-1 mr-2" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition"
                >
                  Buy Now
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
