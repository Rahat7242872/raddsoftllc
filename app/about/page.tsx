import AboutClient from "./about";

export const metadata = {
  title: "About Us | RADDSOFT LLC",
  description: "Learn more about RADDSOFT LLC. We engineer premium web ecosystems, mobile applications, and data-driven digital marketing solutions.",
  keywords: "RADDSOFT, about us, software development agency, digital marketing experts, Next.js developer, enterprise solutions",
  alternates: {
    canonical: "https://raddsoftllc.com/about",
  },
  openGraph: {
    title: "About Us | RADDSOFT LLC",
    description: "Learn more about RADDSOFT LLC. We engineer premium web ecosystems, mobile applications, and data-driven digital marketing solutions.",
    url: "https://raddsoftllc.com/about",
    siteName: "RADDSOFT LLC",
    type: "website",
  },
};

export default function Page() {
  return <AboutClient />;
}