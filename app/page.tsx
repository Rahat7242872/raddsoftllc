
'use client'; // ক্লাইন্ট সাইড ইন্টারঅ্যাক্টিভিটির জন্য
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import animationData from "../public/animation/hero.json" ;
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const element = document.getElementById('some-id');
    // বা যেকোনো window/document কাজ
  }, []);
  return (
    <motion.section initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }} className="bg-blue-50 text-black min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-blue-300">USA & UK</span> Business Solutions
                </h1>
                
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
                 <span className='text-orange-600'>Complete Business Setup</span> | <span className='text-emerald-600'>Web Application</span> | Mobile Application | <span className='text-violet-600'>Growth Marketing</span> 
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
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto max-w-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </motion.section>
  ); 
};
