import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";
import { createMetadata } from "../../lib/seo";

// The Radd Scanner app opens this exact URL: /radd-scanner/privacy
// Company name and email are kept as they appear inside the app.
const app = {
  name: "Radd Scanner",
  company: "Raddsodt LLC",
  email: "support@raddsodtllc.com",
  updated: "13 November 2026",
} as const;

export const metadata: Metadata = createMetadata({
  title: `${app.name} – Privacy Policy`,
  description: `${app.name} does not collect, store or sell your personal data. Your scans, PDFs and files stay on your device.`,
  path: "/radd-scanner/privacy",
});

export default function RaddScannerPrivacyPage() {
  return (
    <LegalPage title={`${app.name} Privacy Policy`} updated={app.updated}>
      <p className="text-sm text-slate-500">{app.company}</p>

      <h2>Summary</h2>
      <p>
        {app.name} is a free document scanner and PDF tool. It has no ads and no sign-in. {app.name} does not collect,
        store or sell your personal data. Your scans, PDFs and other files are saved only on your device.
      </p>

      <h2>Data that stays on your device</h2>
      <ul>
        <li>
          <strong>Camera:</strong> used only while you scan documents, QR codes or barcodes. Pictures are processed on
          your device.
        </li>
        <li>
          <strong>Photos and files you choose:</strong> when you pick a photo, a PDF or a Word file, the app opens only
          that item through the system picker. It cannot see your other photos or files.
        </li>
        <li>
          <strong>Your documents:</strong> scans, PDFs, signatures and text you create are stored in the app&apos;s
          private storage on your device. Other apps cannot read them. They are removed when you delete them or
          uninstall the app.
        </li>
        <li>
          <strong>PDF and Word tools:</strong> merging, splitting, compressing and editing PDFs, and converting Word
          (.docx) files to PDF, all happen on your device. Your files are never uploaded. To show PDF pages, the app
          loads a public PDF viewer library (PDF.js) from cdnjs.cloudflare.com. This download does not include your
          files.
        </li>
        <li>
          <strong>Text recognition (OCR):</strong> text is read from images on your device. For some languages the app
          downloads a language pack once from a public server (cdn.jsdelivr.net and tessdata.projectnaptha.com). These
          downloads do not include your images or text.
        </li>
      </ul>

      <h2>Data we collect</h2>
      <p>
        None. {app.name} has no account, analytics, advertising or tracking. We do not receive your documents, images,
        text or contacts.
      </p>

      <h2>Sharing</h2>
      <p>
        Files leave your device only when you choose to share or save them, for example with the share button or by
        saving to a folder. You decide where they go, and that app&apos;s or service&apos;s own privacy policy applies.
      </p>

      <h2>Backups</h2>
      <p>
        If Android backup is turned on for your Google account, Android may include the app&apos;s files in your own
        encrypted device backup. You control this in your phone&apos;s settings.
      </p>

      <h2>Children</h2>
      <p>
        {app.name} is not directed at children under 13 and does not knowingly collect information from anyone.
      </p>

      <h2>Changes</h2>
      <p>
        If a future version adds features such as ads or in-app purchases, we will update this policy and the date
        above before that version is released.
      </p>

      <h2>Contact</h2>
      <p>
        {app.company}
        <br />
        Email: <a href={`mailto:${app.email}`}>{app.email}</a>
      </p>
    </LegalPage>
  );
}
