"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import heroAnimation from "public/animation/hero.json"
// SSR disable for Lottie (Next.js safe)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center">
      
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-10 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              🚀 Trusted Digital Partner for Global Businesses
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Build, Launch &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Scale Your Business
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              Helping entrepreneurs, startups, and enterprises establish
              businesses in the USA, develop powerful web and mobile
              applications, and accelerate growth through modern digital
              marketing strategies.
            </p>

            {/* Services */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                USA Company Formation
              </span>

              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                Web Development
              </span>

              <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium">
                Mobile Apps
              </span>

              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                Growth Marketing
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl"
              >
                Start Your Project
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold"
              >
                Explore Services
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 text-center lg:text-left">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-600 text-sm">Projects Delivered</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                <p className="text-gray-600 text-sm">Global Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">99%</h3>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-2xl">
              <Lottie
                animationData={heroAnimation}
                loop
                autoplay
                className="w-full h-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;