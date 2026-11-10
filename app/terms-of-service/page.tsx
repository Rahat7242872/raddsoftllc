import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { createMetadata } from "../lib/seo";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use the Raddsoft LLC website and purchase our business formation, development, or digital marketing services.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" updated="November 10, 2026">
      <p>By using this website or purchasing our services, you agree to these terms.</p>

      <h2>Our services</h2>
      <p>
        {siteConfig.name} provides business setup assistance, web and software development, and digital marketing.
        The scope, price, and timeline of each project are confirmed with you before work begins.
      </p>

      <h2>Not legal or tax advice</h2>
      <p>
        {siteConfig.name} is not a law firm or accounting firm. Information on this website and any guidance we give
        is general and is not legal, tax, or financial advice. Please consult a licensed professional for your
        situation.
      </p>

      <h2>Pricing and government fees</h2>
      <p>
        Prices may change without notice until a project is confirmed. State fees and other third-party charges may
        apply in addition to our service fee unless a package states otherwise.
      </p>

      <h2>Third-party decisions</h2>
      <p>
        Banks, payment processors, marketplaces, and government agencies make their own decisions. We cannot
        guarantee that an application, account, or filing will be approved, or the time an outside party will take.
      </p>

      <h2>Your responsibilities</h2>
      <p>
        You agree to give accurate information and to use our services lawfully. You remain responsible for your
        company&apos;s ongoing compliance, including annual reports and tax filings, unless we agree otherwise in
        writing.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, {siteConfig.name} is not liable for indirect or consequential losses, and our
        total liability for a service is limited to the amount you paid for it.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalPage>
  );
}
