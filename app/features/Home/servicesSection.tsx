"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
// ✅ Fixed: Lottie dynamically imported
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import businessAnimation from "../../../public/animation/business.json";
import webDevAnimation from "../../../public/animation/webdev.json";
import softwareAnimation from "../../../public/animation/software.json";
import marketingAnimation from "../../../public/animation/marketing.json";

const services = [
  {
    title: "USA & UK Business Setup",
    description:
      "We help you legally set up and manage your business in the USA & UK including LLC formation, EIN, bank account setup, and more.",
    animation: businessAnimation,
    bgColor: "bg-blue-50",
    link : "features/services/business-setup/"
  },
  {
    title: "Web Design & Development",
    description:
      "Custom responsive websites built with modern technologies like React, Next.js and Tailwind CSS to grow your brand.",
    animation: webDevAnimation,
    bgColor: "bg-emerald-50",
    link : "/services/business-setup/"
  },
  {
    title: "Software Development",
    description:
      "Scalable, secure, and high-performance web & mobile applications tailored to your business goals.",
    animation: softwareAnimation,
    bgColor: "bg-yellow-50",
    link : "/services/business-setup/"
  },
  {
    title: "Digital Marketing",
    description:
      "ROI-focused SEO, Social Media, and Paid Campaign strategies to drive leads and boost your online presence.",
    animation: marketingAnimation,
    bgColor: "bg-pink-50",
    link : "/services/business-setup/"
  },
];

const ServicesSection = () => {
  return (
    <section  className="py-20 bg-white text-black">
      {/* Animated Section Title */}
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 px-4"
      >
        Our <span className="text-blue-500">Services</span>
      </motion.h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index} passHref>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${service.bgColor} text-center flex flex-col items-center justify-between`}
            >
              <div className="h-36 sm:h-40 flex items-center justify-center">
                <Lottie
                  animationData={service.animation}
                  loop
                  autoplay
                  className="w-full h-full max-w-[150px] mx-auto"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {service.description}
              </p>
            </motion.div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
