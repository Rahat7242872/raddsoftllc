"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "../lib/site";

const serviceOptions = [
  "USA LLC Formation",
  "EIN & ITIN Services",
  "Business Bank Account",
  "Web Development",
  "Software Development",
  "Mobile App Development",
  "Digital Marketing",
  "Amazon Seller Setup",
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white";
const labelClass = "mb-1.5 block text-sm font-semibold text-slate-700";

export default function ContactClient() {
  const [sent, setSent] = useState(false);
  const { address } = siteConfig;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) ?? "").trim();

    const message = [
      "Hello Raddsoft LLC, I would like to discuss a project.",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      value("company") && `Company: ${value("company")}`,
      `Service: ${value("service")}`,
      "",
      value("message"),
    ]
      .filter((line) => line !== "")
      .join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      content: (
        <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-white">
          {siteConfig.email}
        </a>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <a href={siteConfig.phoneHref} className="hover:text-white">
          {siteConfig.phoneDisplay}
        </a>
      ),
    },
    {
      icon: MapPin,
      title: "Address",
      content: (
        <address className="not-italic">
          {address.street}
          <br />
          {address.city}, {address.region} {address.postalCode}
        </address>
      ),
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: (
        <>
          Monday - Friday
          <br />
          9:00 AM - 6:00 PM
        </>
      ),
    },
  ];

  return (
    <main className="relative overflow-hidden bg-slate-50 px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36">
      <div aria-hidden="true" className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl animate-fade-up text-center sm:mb-16">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold text-indigo-700 sm:text-sm">
            CONTACT RADDSOFT LLC
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Let&apos;s Build Your Next
            <span className="block bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text pb-1 text-transparent">
              Digital Success Story
            </span>
          </h1>
          <p className="mt-5 text-base text-slate-600 sm:text-lg">
            Business setup, web development, mobile apps, payment gateway integration, and digital marketing.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-2xl sm:p-10">
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Get In Touch</h2>
              <p className="mb-8 text-blue-100 sm:mb-10">
                We&apos;re here to help you launch and grow your business globally.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      <div className="min-w-0">
                        <h3 className="font-semibold">{item.title}</h3>
                        <div className="text-blue-100">{item.content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
                  <p className="text-2xl font-bold">{siteConfig.stats.clients}</p>
                  <p className="text-sm text-blue-100">Clients Served</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur sm:p-5">
                  <p className="text-2xl font-bold">{siteConfig.stats.support}</p>
                  <p className="text-sm text-blue-100">WhatsApp Support</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="h-full rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
              <h2 className="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl">Send Us A Message</h2>
              <p className="mb-7 text-sm text-slate-600">
                Your message opens in WhatsApp, ready to send to our team.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name</label>
                    <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>Company Name (optional)</label>
                  <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>Service</label>
                  <select id="service" name="service" required defaultValue="" className={inputClass}>
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 sm:w-auto"
                >
                  Send via WhatsApp
                  <ArrowRight size={18} aria-hidden="true" />
                </button>

                <div aria-live="polite">
                  {sent && (
                    <p className="flex items-start gap-2 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        WhatsApp should now be open with your message. Press send there to reach us. No WhatsApp?
                        Email us at{" "}
                        <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
                          {siteConfig.email}
                        </a>
                        .
                      </span>
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
