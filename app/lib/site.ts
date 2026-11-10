export const siteConfig = {
  name: "Raddsoft LLC",
  url: "https://raddsoftllc.com",
  tagline: "USA Business Setup, Web & Software Development",
  description:
    "Raddsoft LLC helps founders form a US company and grow it with LLC formation, EIN support, web and software development, and digital marketing.",
  email: "support@raddsoftllc.com",
  phoneDisplay: "+1 (332) 232-9769",
  phoneHref: "tel:+13322329769",
  whatsappNumber: "13322329769",
  address: {
    street: "1001 S Main St STE 500",
    city: "Kalispell",
    region: "MT",
    postalCode: "59901",
    country: "US",
  },
  hours: "Monday - Friday, 9:00 AM - 6:00 PM",
  stats: {
    projects: "50+",
    clients: "50+",
    satisfaction: "99%",
    support: "24/7",
  },
} as const;

export const serviceLinks = [
  { title: "Business Setup", href: "/services/business-setup" },
  { title: "Web Development", href: "/services/web-development" },
  { title: "Software Development", href: "/services/software-development" },
  { title: "Digital Marketing", href: "/services/digital-marketing" },
] as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
