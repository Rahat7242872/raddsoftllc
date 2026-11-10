import type { Metadata } from "next";
import DigitalMarketing from "./digital";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, createMetadata, serviceSchema } from "../../lib/seo";

const title = "Digital Marketing, SEO & Paid Ads";
const description =
  "Grow traffic and leads with SEO, Google Ads, Facebook Ads, social media, email marketing, and clear reporting built around your revenue goals.";
const path = "/services/digital-marketing";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "digital marketing agency",
    "SEO services",
    "Google Ads management",
    "Facebook Ads management",
    "social media marketing",
  ],
});

export default function Digital() {
  return (
    <>
      <JsonLd data={serviceSchema(title, description, path)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Digital Marketing", path },
        ])}
      />
      <DigitalMarketing />
    </>
  );
}
