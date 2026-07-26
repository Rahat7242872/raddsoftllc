"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import businessAnimation from "../../../public/animation/business.json";
import webDevAnimation from "../../../public/animation/webdev.json";
import softwareAnimation from "../../../public/animation/software.json";
import marketingAnimation from "../../../public/animation/marketing.json";
import arrowAnimation from "../../../public/animation/arrow.json"; // new arrow lottie

const services = [
  {
    title: "USA Business Setup",
    description:
      "We help you legally set up and manage your business in the USA including LLC formation, EIN, bank account setup, and more.",
    animation: businessAnimation,
    bgColor: "bg-blue-50",
    link: "/services/business-setup/",
  },
  {
    title: "Web Design & Development",
    description:
      "Custom responsive websites built with modern technologies like React, Next.js and Tailwind CSS to grow your brand.",
    animation: webDevAnimation,
    bgColor: "bg-red-60",
    link: "/services/web-development/",
  },
  {
    title: "Software Development",
    description:
      "Scalable, secure, and high-performance web & mobile applications tailored to your business goals.",
    animation: softwareAnimation,
    bgColor: "bg-yellow-50",
    link: "/services/software-development/",
  },
  {
    title: "Digital Marketing",
    description:
      "ROI-focused SEO, Social Media, and Paid Campaign strategies to drive leads and boost your online presence.",
    animation: marketingAnimation,
    bgColor: "bg-pink-50",
    link: "/services/digital-marketing/",
  },
];
export const metadata = {
  title: "Services|RaddsoftLLC",

  description:
    "Explore our professional services including USA business formation, custom web development, software solutions, mobile app development, SEO, and digital marketing.",

  alternates: {
    canonical: "https://raddsoft.com/services",
  },
};
const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white text-black">
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 px-4"
      >
        Our <span className="relative inline-block">
          <span className="relative z-10 text-black-600">Services</span>
          <span className="absolute left-0 bottom-3 w-full h-3 bg-pink-300 z-0 rounded"></span>
        </span>
      </motion.h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className={`p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${service.bgColor} flex flex-col items-center justify-between text-center`}
            >
              {/* Lottie Animation */}
              <div className="h-36 sm:h-40 flex items-center justify-center mb-4">
                <Lottie
                  animationData={service.animation}
                  loop
                  autoplay
                  className="w-full h-full max-w-[150px]"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">{service.description}</p>

              {/* Get Started Button with Arrow */}
              <Link href={service.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto px-4 sm:px-6 py-2 sm:py-3  text-black font-semibold rounded-full flex items-center justify-center gap-2"
                >
                  Get Started
                  <div className="w-12 h-12">
                    <Lottie animationData={arrowAnimation} loop autoplay />
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
