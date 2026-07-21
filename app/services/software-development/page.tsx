import SoftwareDevelopmentPage from "./software";

export const metadata = {
  title: "Software Development | RADDSOFT LLC",
  description:
    "Professional custom software development services including CRM, ERP, SaaS, AI, Web Applications and Mobile Apps.",
  keywords: [
    "Software Development",
    "CRM",
    "ERP",
    "SaaS",
    "AI Development",
    "React Native",
    "Next.js",
    "RADDSOFT LLC",
  ],
  alternates: {
    canonical:
      "https://raddsoftllc.com/services/software-development",
  },
};

export default function software() {
  return <SoftwareDevelopmentPage />;
}