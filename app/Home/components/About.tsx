'use client';

import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

const aboutPoints = [
  {
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    title: 'Innovative Thinking',
    desc: 'We combine creativity with technology to build elegant and scalable solutions.',
    bg: 'bg-indigo-500',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: 'Growth Focused',
    desc: 'Our mission is to help businesses grow fast with smart digital strategies.',
    bg: 'bg-green-500',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: 'Reliable Partnership',
    desc: 'We act as your digital partner, not just a service provider.',
    bg: 'bg-blue-500',
  },
];

export default function AboutRaddsoft() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 to-blue-50 opacity-20 -z-10"></div>

      <div className="max-w-6xl mx-auto text-center text-black">
      <motion.h2
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 px-4"
            >
              About <span className="relative inline-block ">
                <span className="relative z-10 text-black-600">Us</span>
                <span className="absolute left-0 bottom-3 w-full h-3 bg-pink-300 z-0 rounded"></span>
              </span>
            </motion.h2>
        <motion.p
          className="text-gray-600 text-lg sm:text-xl mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold text-blue-600">Raddsoft LLC</span> is a full-service digital agency helping businesses establish, grow, and dominate online. From business setup and branding to web & software development and digital marketing — we deliver results with simplicity and precision.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {aboutPoints.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon with colored circle */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.bg} mx-auto`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
