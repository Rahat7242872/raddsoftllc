"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Head from "next/head";
import { CheckCircle } from 'lucide-react';

// ✅ Lottie dynamically imported
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import webDevAnimation from "public/animation/web_development.json";

const features = [
  { title: "Custom Websites", description: "Responsive, modern websites tailored to your business goals." },
  { title: "E-commerce Solutions", description: "Secure and scalable online stores using latest technologies." },
  { title: "SEO Optimized", description: "Websites optimized for search engines to drive traffic." },
  { title: "Fast & Lightweight", description: "Optimized performance for quick loading and smooth UX." },
  { title: "Mobile First Design", description: "Beautiful designs for mobile, tablet, and desktop." },
  { title: "Maintenance & Support", description: "Continuous updates, monitoring and technical support." },
];

const packages = [
  {
    name: "Basic",
    price: "$499",
    features: [
      "1-3 Pages Website",
      "Responsive Design",
      "Basic SEO",
      "1 Month Support",
    ],
  },
  {
    name: "Pro",
    price: "$899",
    features: [
      "Up to 10 Pages",
      "Responsive & Modern Design",
      "SEO Optimization",
      "3 Months Support",
    ],
  },
  {
    name: "Enterprise",
    price: "$1499",
    features: [
      "Unlimited Pages",
      "Custom Design & Features",
      "Advanced SEO",
      "6 Months Support",
    ],
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Web Development Services | RADDSOFT LLC</title>
        <meta name="description" content="Custom web design & development using React, Next.js, Tailwind CSS for responsive, modern, and SEO-optimized websites." />
        <meta name="keywords" content="web development, web design, responsive website, SEO, React, Next.js, Tailwind CSS, RADDSOFT" />
      </Head>

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-24 px-6 md:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full flex justify-center"
          >
            <Lottie
              animationData={webDevAnimation}
              loop
              autoplay
              className="w-full max-w-[800px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
            />
          </motion.div>
          <div className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Web Development Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Build fast, responsive, and SEO-friendly websites tailored for your business. We use modern technologies like React, Next.js, and Tailwind CSS.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 md:px-20 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Web Development</h2>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Web Development Packages</h2>
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
