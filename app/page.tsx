import Hero from "./Home/components/Hero";
import ServicesSection from "./Home/components/ServicesSection";
import ServiceBanners from "./Home/components/Servicebanner";
import Process from "./Home/components/Process";
import About from "./Home/components/About";
import CtaBanner from "./Home/components/CtaBanner";
import type { Metadata } from "next";
import { createMetadata } from "./lib/seo";

export const metadata: Metadata = createMetadata({
  title: "USA LLC Formation, Web & Software Development | Raddsoft LLC",
  absoluteTitle: true,
  description:
    "Form your US LLC, get your EIN, and grow with custom websites, software, and digital marketing. Raddsoft LLC helps founders worldwide launch and scale.",
  path: "/",
  keywords: [
    "USA LLC formation",
    "EIN registration",
    "US company for non-residents",
    "web development company",
    "software development",
    "digital marketing agency",
    "Raddsoft LLC",
  ],
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <ServiceBanners />
      <Process />
      <About />
      <CtaBanner />
    </main>
  );
}
