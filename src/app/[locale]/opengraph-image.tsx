import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Native EHR — EHR, Rebuilt from Scratch. For AI and Patients.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          backgroundColor: "#000000",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Emerald glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(52,211,153,0.15), transparent 70%)",
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#34D399",
            marginBottom: 24,
          }}
        >
          AI Native EHR
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.05em",
          }}
        >
          EHR, Rebuilt
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#34D399",
            lineHeight: 1.05,
            letterSpacing: "-0.05em",
          }}
        >
          from Scratch.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
            Launching December 2026
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#34D399", textTransform: "uppercase" }}>
            ainativeehr.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
