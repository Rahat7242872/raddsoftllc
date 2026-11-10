import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { createMetadata } from "../lib/seo";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Raddsoft LLC collects, uses, and protects the information you share when you contact us or use our business and technology services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 10, 2026">
      <p>
        This policy explains how {siteConfig.name} handles information when you visit this website or contact us
        about our services.
      </p>

      <h2>Information we collect</h2>
      <p>We collect information you choose to give us, which may include:</p>
      <ul>
        <li>Your name, email address, phone number, and company name</li>
        <li>Details about your project or the service you need</li>
        <li>Documents and identity details required to deliver a service, such as a company formation</li>
      </ul>
      <p className="mt-3">
        Our contact form does not store your details on this website. When you submit it, your message opens in
        WhatsApp so you can send it to us. Our hosting provider may keep standard technical logs, such as IP address
        and browser type.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your inquiry and prepare a quote</li>
        <li>To deliver the services you request</li>
        <li>To meet legal, tax, and compliance obligations</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We share it only as needed to deliver a service, for example with
        government agencies, registered agents, banks, and payment providers, or when the law requires it. WhatsApp
        and other communication tools handle messages under their own privacy policies.
      </p>

      <h2>Retention and security</h2>
      <p>
        We keep information only as long as needed for the purposes above or as the law requires, and we take
        reasonable steps to protect it. No online transmission or storage is completely secure.
      </p>

      <h2>Your choices</h2>
      <p>You can ask us to access, correct, or delete your personal information, subject to legal requirements.</p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
