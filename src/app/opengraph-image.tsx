import { ImageResponse } from "next/og";

export const alt = "Osman Öz — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link paylaşımında (WhatsApp/LinkedIn/X) çıkan kapak görseli. Sitede görünmez.
export default function OgImage() {
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
          background: "linear-gradient(135deg, #0f0e0c 0%, #24211c 100%)",
          color: "#f5f2ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#fb923c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1c1310",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            OZ
          </div>
          <span style={{ fontSize: 30, color: "#fb923c", fontWeight: 600 }}>
            osmanoz.com
          </span>
        </div>

        <div style={{ marginTop: 48, fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>
          Osman Öz
        </div>
        <div style={{ marginTop: 12, fontSize: 42, color: "#a49d90" }}>
          Software Developer
        </div>
        <div style={{ marginTop: 40, fontSize: 28, color: "#a49d90" }}>
          React · Next.js · TypeScript · Python & ML
        </div>
      </div>
    ),
    { ...size }
  );
}
