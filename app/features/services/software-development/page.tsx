"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Head from "next/head";
import { CheckCircle } from "lucide-react";

// ✅ Lottie dynamically imported
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import softwareAnimation from "public/animation/software.json";

const features = [
  { title: "Custom Software Solutions", description: "Build software tailored to your business needs, scalable and secure." },
  { title: "Web & Mobile Apps", description: "Cross-platform web and mobile applications for seamless user experience." },
  { title: "API Integration", description: "Integrate third-party APIs to enhance your software capabilities." },
  { title: "Cloud & DevOps", description: "Cloud deployment, CI/CD pipelines, and serverless architecture." },
  { title: "Maintenance & Support", description: "Ongoing support, updates, and performance optimization." },
  { title: "Consultation & Strategy", description: "Expert guidance on software architecture and technology stack." },
];

const packages = [
  {
    name: "Basic",
    price: "$999",
    features: ["Single Platform Software", "Up to 5 Modules", "1 Month Support", "Basic Security"],
  },
  {
    name: "Pro",
    price: "$1999",
    features: ["Multi-Platform Software", "Up to 10 Modules", "3 Months Support", "Advanced Security"],
  },
  {
    name: "Enterprise",
    price: "$3999",
    features: ["Custom Full-Scale Software", "Unlimited Modules", "6 Months Support", "Enterprise-Level Security"],
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Software Development Services | RADDSOFT LLC</title>
        <meta name="description" content="Custom software development, web & mobile applications, API integrations, cloud deployment, and ongoing support." />
        <meta name="keywords" content="software development, web apps, mobile apps, API integration, cloud deployment, RADDSOFT" />
      </Head>

      <main className="bg-white text-gray-900">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-24 px-6 md:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full flex justify-center"
          >
            <Lottie
              animationData={softwareAnimation}
              loop
              autoplay
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
            />
          </motion.div>
          <div className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Software Development</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              We build scalable, secure, and high-performance web & mobile applications tailored to your business goals.
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
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Software Development</h2>
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
          <h2 className="text-4xl font-bold text-center mb-12">Software Development Packages</h2>
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
                      { feature}
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
