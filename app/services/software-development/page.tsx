import type { Metadata } from "next";
import SoftwareDevelopmentPage from "./software";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, createMetadata, serviceSchema } from "../../lib/seo";

const title = "Custom Software & App Development";
const description =
  "Custom CRM, ERP, SaaS, AI, web, and mobile app development for startups and growing companies, with cloud deployment and long-term support.";
const path = "/services/software-development";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "custom software development",
    "mobile app development",
    "CRM development",
    "ERP software",
    "SaaS development",
  ],
});

export default function Software() {
  return (
    <>
      <JsonLd data={serviceSchema(title, description, path)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Software Development", path },
        ])}
      />
      <SoftwareDevelopmentPage />
    </>
  );
}
