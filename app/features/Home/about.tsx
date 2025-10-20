'use client';

import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

const aboutPoints = [
  {
    icon: <Lightbulb className="w-6 h-6 text-indigo-500" />,
    title: 'Innovative Thinking',
    desc: 'We combine creativity with technology to build elegant and scalable solutions.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    title: 'Growth Focused',
    desc: 'Our mission is to help businesses grow fast with smart digital strategies.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: 'Reliable Partnership',
    desc: 'We act as your digital partner, not just a service provider.',
  },
];

export default function AboutRaddsoft() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h4
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-3xl sm:text-4xl md:text-5xl text-blue-600 font-bold text-center mb-12 px-4"
              >
               --Who Are--
              </motion.h4>

        <motion.p
          className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
           <span className="text-blue-600">Raddsoft LLC</span>  is a full-service digital agency helping businesses establish, grow, and dominate in the online space. From business setup and branding to web development, software solutions, and digital marketing — we deliver results with simplicity and precision.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {aboutPoints.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 items-center">{item.icon}</div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
