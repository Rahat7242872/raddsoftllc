
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            CONTACT RADDSOFT LLC
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Let's Build Your Next
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Digital Success Story
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Business Setup, Web Development, Mobile Apps,
            Payment Gateway Integration & Digital Marketing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-10 text-white shadow-2xl">

              <h2 className="text-3xl font-bold mb-4">
                Get In Touch
              </h2>

              <p className="text-blue-100 mb-10">
                We're here to help you launch and grow your business globally.
              </p>

              <div className="space-y-8">

                <div className="flex gap-4">
                  <Mail className="h-6 w-6" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-blue-100">
                      support@raddsoftllc.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-6 w-6" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-blue-100">
                      +1 (332) 232-9769
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-blue-100">
                      1001 S Main St STE 500
                      <br />
                      Kalispell, MT 59901
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="h-6 w-6" />
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-blue-100">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Stats */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p className="text-sm text-blue-100">
                    Clients Served
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <h3 className="text-2xl font-bold">24/7</h3>
                  <p className="text-sm text-blue-100">
                    Support
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-white p-10 shadow-2xl">

              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Send Us A Message
              </h2>

              <form className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border bg-blue-50 text-black p-4 outline-none focus:border-blue-500"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border bg-blue-50 text-black p-4 outline-none focus:border-blue-500"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-xl border bg-blue-50 text-black p-4 outline-none focus:border-blue-500"
                />

                <select className="w-full rounded-xl border bg-blue-50 text-black p-4 outline-none focus:border-blue-500">
                  <option>Select Service</option>
                  <option>USA LLC Formation</option>
                  <option>EIN & ITIN Services</option>
                  <option>Business Bank Account</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Digital Marketing</option>
                  <option>Amazon Seller Setup</option>
                </select>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border bg-blue-50 text-black p-4 outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

