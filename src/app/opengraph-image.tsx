import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ManaCircle — Branding & websites. Made to connect.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const sans = await readFile(join(process.cwd(), "public/fonts/geist-regular.ttf"));
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "65px 80px", background: "#edf2e7", color: "#193c30", fontFamily: "Geist", borderTop: "10px solid #193c30" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 34 }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {Array.from({ length: 8 }, (_, i) => <rect key={i} x="21" y="3" width="6" height="15" rx="3" fill="#18392e" transform={`rotate(${i * 45} 24 24)`} />)}
        </svg>
        <span>manacircle.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 82, lineHeight: 1.12, letterSpacing: -4, marginTop: 65 }}><span>Branding & websites.</span><span style={{ color: "#39704e" }}>Made to connect.</span></div>
      <div style={{ display: "flex", fontSize: 24, marginTop: 42, color: "#58645b" }}>Websites. Branding. Telugu-first marketing. Worldwide.</div>
      <div style={{ display: "flex", position: "absolute", right: 70, bottom: 50, width: 80, height: 80, border: "1px solid #b7c8ae", borderRadius: 40, alignItems: "center", justifyContent: "center" }}><svg width="32" height="32" viewBox="0 0 32 32"><path d="M7 25 25 7M7 7h18v18" stroke="#39704e" strokeWidth="2" fill="none" /></svg></div>
    </div>, { ...size, fonts: [
      { name: "Geist", data: Uint8Array.from(sans).buffer, weight: 400, style: "normal" },
    ] },
  );
}
