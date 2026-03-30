import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Native EMR — The EMR Built for AI, Not Bolted On";
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
          backgroundColor: "#f7f6f2",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Vertical guide lines */}
        <div style={{ position: "absolute", left: "25%", top: 0, bottom: 0, width: 1, backgroundColor: "#e5e4de" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, backgroundColor: "#e5e4de" }} />
        <div style={{ position: "absolute", left: "75%", top: 0, bottom: 0, width: 1, backgroundColor: "#e5e4de" }} />

        {/* Label */}
        <div
          style={{
            fontSize: 14,
            fontFamily: "monospace",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#3d7068",
            marginBottom: 24,
          }}
        >
          AI Native EMR
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 300,
            color: "#1c1c1c",
            lineHeight: 0.95,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
          }}
        >
          THE EMR BUILT
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 300,
            color: "#B4B4B4",
            lineHeight: 0.95,
            textTransform: "uppercase",
            fontStyle: "italic",
            letterSpacing: "-0.02em",
          }}
        >
          FOR AI.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 60,
            paddingTop: 24,
            borderTop: "1px solid #e5e4de",
          }}
        >
          <div style={{ fontSize: 12, fontFamily: "monospace", letterSpacing: "0.2em", color: "#5a5a5a", textTransform: "uppercase" }}>
            Launching December 2026
          </div>
          <div style={{ fontSize: 12, fontFamily: "monospace", letterSpacing: "0.2em", color: "#3d7068", textTransform: "uppercase" }}>
            ainativeemr.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
