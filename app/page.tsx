
import Services from "./features/Home/servicesSection";
import Landing from "./features/Home/Hero";
import About from "./features/Home/about";

// 👉 SEO Metadata
export const metadata = {
  title: "Raddsoft LLC | Business Setup, Web & Mobile App Development, Digital Marketing",
  description: "",
  keywords: [
    "Business Setup",
    "Payment Gateway",
    "Web Application Development",
    "Mobile App Development",
    "Digital Marketing",
    "Raddsoft LLC"
  ],
  openGraph: {
    title: "Raddsoft LLC - Business & IT Solutions",
    description: "Business Setup, Web & Mobile App Development, and Digital Marketing services by Raddsoft LLC.",
    url: "https://www.raddsoft.com",
    siteName: "Raddsoft LLC",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.raddsoft.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
     <>
     
     <Landing/>
     <Services/>
     <About/>
     </>
  );
}
