import BusinessSetup from "./business-setup";

export const metadata = {
  title:
    "USA Business Setup",

  description:
    "Start and grow your US business with LLC formation, EIN registration, virtual business address, reseller permit, DUNS number, business phone, and compliance services.",

  keywords: [
    "LLC Formation",
    "USA LLC",
    "EIN Registration",
    "Virtual Address",
    "Business Compliance",
    "Amazon Seller Account",
    "US Business Setup",
    "Raddsoft LLC",
    "Raddsoft",
  ],

  alternates: {
    canonical: "https://raddsoft.com/services/business",
  },
};

export default function Business() {
  return <BusinessSetup/>;
}