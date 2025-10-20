"use client" ;
import React from 'react'; // কাস্টম বাটন কম্পোনেন্ট (Tailwind/Shadcn)
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import { Heading6 } from 'lucide-react';

// এইভাবে dynamic import করো
const LottieAnimation = dynamic(() => import('../../components/lottieAnimation'), {
  ssr: false, // <- This is the fix
});

const HeroSection = () => {
  return (
    <motion.section initial={{opacity:0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.9 }} className="bg-blue-50 text-black min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <h6 className="text-4xl font-bold text-gray-900 leading-snug">
               Empowering Your Business with <span className="text-blue-600">IT & Digital Growth</span>
            </h6>

            <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10,
              delay: 0.5,
            }
          }}
          whileHover={{
            y: -10,
            transition: { type: "spring", stiffness: 500 }
          }} className="text-xl md:text-2xl text-black">
              <span className="text-2xl bg-blue-100 font-bold text-blue-800 px-1 py-1 rounded ml-1">Raddsoft LLC </span> 
                <span className='ml-2'>provides Business Setup, Web & Mobile App Development, Payment Gateway Integration,
      and Digital Marketing solutions to help your business grow worldwide. </span>
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button whileHover={{ 
        scale: 1.05,
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
      }}
      whileTap={{ 
        scale: 0.98,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-lg transition duration-300 shadow-lg">
                Get Started
              </motion.button>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-lg transition duration-300 shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Lottie Animation - Right Side */}
          <div className="lg:w-1/2">
            <LottieAnimation/>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection; 