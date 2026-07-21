import React from 'react'
import Home from './Home/page';
export const metadata = {
  title:
    "Raddsoft LLC| Business & IT Solutions",

  description:
    "Raddsoft LLC helps entrepreneurs and businesses with USA LLC formation, EIN registration, business compliance, custom web development, software development, mobile apps, and digital marketing services.",

  keywords: [
    "USA Business Setup",
    "LLC Formation",
    "EIN Registration",
    "Web Development Company",
    "Software Development",
    "Next.js Development",
    "React Development",
    "Digital Marketing Agency",
    "SEO Services",
    "Business Solutions USA",
  ],

  alternates: {
    canonical: "https://raddsoft.com",
  },

  openGraph: {
    title: "RADDSOFT LLC",
    description:
      "Professional USA business setup, web development, software solutions, and digital marketing services.",
    url: "https://raddsoft.com",
    siteName: "RADDSOFT LLC",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "RADDSOFT LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RADDSOFT LLC",
    description:
      "USA Business Setup, Web Development, Software Development & Digital Marketing.",
    images: ["/images/og-home.jpg"],
  },
};
function page() {
  return (
    <div>
       <Home/>
    </div>
  )
}

export default page
