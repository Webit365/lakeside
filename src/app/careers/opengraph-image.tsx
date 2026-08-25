import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { site } from "@/lib/site";

// Static generation at build time — this route has no dynamic params.
export const alt =
  "Now Hiring at Lakeside Outdoor Services — winter snow removal jobs in Watertown, NY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a TrueType weight of the site's display font (Bricolage Grotesque)
// from Google Fonts so the card matches the brand. Returns null on failure so
// the card still renders with the default font.
async function loadFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text());
    const url = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/
    )?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

// Read a public image file as a data URI at build time.
function loadImage(relPath: string, mime: string): string | null {
  try {
    const buf = readFileSync(join(process.cwd(), relPath));
    return `data:${mime};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const [bold, semi] = await Promise.all([loadFont(800), loadFont(600)]);
  const logo = loadImage("public/brand/lakeside-mark.png", "image/png");
  const bg = loadImage("public/photos/snow-plow-night.jpg", "image/jpeg");

  const fonts = [
    ...(bold ? [{ name: "Bricolage", data: bold, weight: 800 as const }] : []),
    ...(semi ? [{ name: "Bricolage", data: semi, weight: 600 as const }] : []),
  ];
  const display = fonts.length ? "Bricolage" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0b2340",
          fontFamily: display,
        }}
      >
        {/* Background photo — fills the whole card, edge to edge */}
        {bg ? (
          <img
            src={bg}
            alt=""
            width={1200}
            height={630}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : null}
        {/* Base dim — knocks the photo back ~32% so it isn't too bright */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundColor: "rgba(4,10,20,0.34)",
          }}
        />
        {/* Left scrim — darkens the headline side but never fully hides the photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(100deg, rgba(6,15,27,0.74) 0%, rgba(8,20,38,0.40) 40%, rgba(10,26,48,0.08) 70%, rgba(10,26,48,0) 100%)",
          }}
        />
        {/* Bottom scrim — a soft gradient that fades into the photo (no hard edge) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(0deg, rgba(5,12,24,0.78) 0%, rgba(5,12,24,0.52) 20%, rgba(6,15,28,0.22) 40%, rgba(6,15,28,0) 60%)",
          }}
        />

        {/* Decorative snowflake, top-right */}
        <svg
          width="300"
          height="300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f9bd24"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: "absolute", top: -40, right: -30, opacity: 0.14 }}
        >
          <path d="M12 2v20M4.5 5.5 12 12l7.5-6.5M4.5 18.5 12 12l7.5 6.5M2 12h20M5 8l2 4-2 4M19 8l-2 4 2 4" />
        </svg>

        {/* Content layer — padded, laid over the full-bleed photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 64px",
            color: "white",
          }}
        >
        {/* Top row: logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {logo ? (
            <img src={logo} height={66} width={66} alt="" />
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 3,
              color: "#bcd7ee",
            }}
          >
            LAKESIDE OUTDOOR SERVICES
          </div>
        </div>

        {/* Middle: headline block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              backgroundColor: "#f9bd24",
              color: "#0b2340",
              padding: "8px 20px",
              borderRadius: 999,
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            NOW HIRING
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 22,
              fontWeight: 800,
              fontSize: 84,
              lineHeight: 1.02,
              textShadow: "0 2px 14px rgba(0,0,0,0.5)",
            }}
          >
            <div style={{ display: "flex" }}>Join our team</div>
            <div style={{ display: "flex", color: "#f9bd24" }}>this winter</div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 30,
              fontWeight: 600,
              color: "#ffffff",
              textShadow: "0 1px 6px rgba(0,0,0,1)",
            }}
          >
            Loader Operators&nbsp;&nbsp;·&nbsp;&nbsp;Small Equipment
            Operators&nbsp;&nbsp;·&nbsp;&nbsp;Shovelers
          </div>
        </div>

        {/* Bottom row — supporting line (the phone sits in its own corner card) */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            color: "#e6f0fa",
            textShadow: "0 1px 6px rgba(0,0,0,1)",
          }}
        >
          Great pay · Steady work · Watertown, NY
        </div>
        </div>

        {/* Apply Today card — bottom-right corner, on its own panel for legibility */}
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: 34,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "12px 22px 14px",
            borderRadius: 18,
            backgroundColor: "rgba(7,15,28,0.74)",
            border: "1px solid rgba(255,255,255,0.16)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 2,
              color: "#ffcf4d",
            }}
          >
            APPLY TODAY
          </div>
          <div style={{ display: "flex", fontSize: 46, fontWeight: 800, color: "white" }}>
            {site.phone.display}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 10,
            display: "flex",
            backgroundColor: "#f9bd24",
          }}
        />
      </div>
    ),
    { ...size, fonts }
  );
}
