import type { Metadata } from "next";
import AboutClient from "./about";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema, createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Meet Raddsoft LLC, a digital agency helping founders worldwide set up US companies and grow with web, software, and data-driven marketing.",
  path: "/about",
  keywords: ["about Raddsoft LLC", "digital agency", "software development agency", "business setup partner"],
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutClient />
    </>
  );
}
