import type { Metadata } from "next";
import WebDevelopment from "./web";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, createMetadata, serviceSchema } from "../../lib/seo";

const title = "Web Design & Development Services";
const description =
  "Custom business websites, ecommerce stores, and web applications built with React, Next.js, and Tailwind CSS. Fast, responsive, and SEO-ready.";
const path = "/services/web-development";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "web development company",
    "Next.js developer",
    "React developer",
    "ecommerce website",
    "custom web application",
  ],
});

export default function Web() {
  return (
    <>
      <JsonLd data={serviceSchema(title, description, path)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Web Development", path },
        ])}
      />
      <WebDevelopment />
    </>
  );
}
