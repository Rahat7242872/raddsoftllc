import type { Metadata } from "next";
import ContactClient from "./contact";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema, createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Talk to Raddsoft LLC about US company formation, web and software development, or digital marketing. Message us on WhatsApp, call, or email today.",
  path: "/contact",
  keywords: ["contact Raddsoft LLC", "free business consultation", "USA LLC help", "get a website quote"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactClient />
    </>
  );
}
