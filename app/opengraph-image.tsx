import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Raddsoft LLC - USA Business Setup, Web & Software Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo/raddsoftllc.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #e0e7ff 100%)",
          color: "#0f172a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img src={logoSrc} width={120} height={120} alt="" />
          <div style={{ fontSize: 44, fontWeight: 700 }}>Raddsoft LLC</div>
        </div>
        <div style={{ marginTop: 40, fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
          Build, Launch & Scale Your Business
        </div>
        <div style={{ marginTop: 32, fontSize: 34, color: "#3730a3" }}>
          USA Company Formation · Web · Software · Marketing
        </div>
      </div>
    ),
    size
  );
}
