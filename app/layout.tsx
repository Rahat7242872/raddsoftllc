import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsappButton";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Raddsoft LLC - Business & IT Solutions",
  description: "Raddsoft LLC is a US-based IT company specializing in web and mobile application development, business setup consultancy, and digital transformation services. We empower startups and entrepreneurs to build scalable solutions and expand globally.",
  keywords: ["Raddsoft","Raddsoft LLC","raddsoft llc","Raddsoft USA company","Raddsoft business setup", "Business Setup USA", "Web Development", "Mobile Apps", "Marketing","Raddsoft IT agency","Raddsoft LLC", "Raddsoft USA company", "Raddsoft IT agency", "Raddsoft business setup", "Raddsoft website development",
"USA business setup service", "UK company formation service", "LLC registration USA", "EIN for non residents", "Open USA bank account remotely", "Start a US company from abroad", "Stripe account for foreign business", "Business setup consultant", "Global business formation", "USA virtual address service",
"Next.js web development agency", "React developer company USA", "Flutter app development service", "Custom web app developer", "Mobile app development for startups", "Web design and branding agency", "Full stack developer for hire", "Tailwind CSS website design", "SaaS product development company",
"SEO service for startups", "Digital marketing agency USA", "Facebook ads management", "Social media marketing service", "Google Ads agency", "ROI based marketing solution", "YouTube ad campaign manager",
"ইউএসএ কোম্পানি রেজিস্ট্রেশন", "এলএলসি খোলার পদ্ধতি", "ওয়েবসাইট বানানোর কোম্পানি", "মোবাইল অ্যাপ বানানোর সার্ভিস", "মার্কেটিং করার এজেন্সি", "ব্যবসা শুরু করার উপায় ইউএসএ", "বিদেশ থেকে ইউএস কোম্পানি খোলা", "অনলাইন বিজনেস খোলার পরামর্শ", "ফেসবুকে প্রোমোশন করার সার্ভিস",
"IT company in USA", "Business formation service USA", "Web developer Erbil", "Mobile app company Middle East", "Start LLC from Iraq", "Start LLC from Bangladesh"
],
  robots: "index, follow",
  openGraph: {
    title: "Raddsoft LLC",
    description: "Your trusted partner for business and tech solutions.",
    url: "https://raddsoftllc.com",
    siteName: "Raddsoft LLC",
    images: [
      {
        url: "/public/images/Raddsoftllc.webp",
        width: 1200,
        height: 630,
        alt: "Raddsoft OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <Header/>
        {children}
        <Footer/>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
