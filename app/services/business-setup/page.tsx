import type { Metadata } from "next";
import BusinessSetup from "./business-setup";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, createMetadata, serviceSchema } from "../../lib/seo";

const title = "USA LLC Formation & Business Setup";
const description =
  "Start your US company from anywhere. LLC formation, EIN, registered agent, business address, bank account setup, and Amazon seller packages from $149.";
const path = "/services/business-setup";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "USA LLC formation",
    "Wyoming LLC",
    "EIN registration",
    "US company for non-residents",
    "registered agent",
    "Amazon seller account",
  ],
});

export default function Business() {
  return (
    <>
      <JsonLd data={serviceSchema(title, description, path)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Business Setup", path },
        ])}
      />
      <BusinessSetup />
    </>
  );
}
