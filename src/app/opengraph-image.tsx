import { ImageResponse } from "next/og";

export const alt =
  "Lakeside Outdoor Services — Commercial & Residential Landscaping and Snow Plowing in Watertown, NY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #103a5f 0%, #155681 55%, #17486b 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#081a2b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
            }}
          >
            🌲
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#fff", fontSize: 34, fontWeight: 700 }}>
              Lakeside Outdoor Services
            </span>
            <span
              style={{
                color: "#93cdfd",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Watertown, NY · Since 2010
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#fff",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Commercial Landscaping &amp; Snow Plowing
          </span>
          <span style={{ color: "#dcecdf", fontSize: 30, marginTop: 16 }}>
            Trusted grounds care &amp; snow management across Northern New York
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#f39c0b",
              color: "#0c1a13",
              fontSize: 30,
              fontWeight: 800,
              padding: "16px 32px",
              borderRadius: 999,
            }}
          >
            (315) 777-1809
          </div>
          <span style={{ color: "#bbd9c3", fontSize: 24 }}>
            Fully Insured · Free Estimates
          </span>
        </div>
      </div>
    ),
    size
  );
}
