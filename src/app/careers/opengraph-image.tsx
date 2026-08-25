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
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          padding: "60px 64px",
          color: "white",
          backgroundColor: "#0b2340",
          fontFamily: display,
        }}
      >
        {/* Background photo */}
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
        {/* Dark overlay for legibility — heaviest on the left where the text sits */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(100deg, rgba(6,16,28,0.94) 0%, rgba(9,24,44,0.86) 40%, rgba(14,34,62,0.60) 72%, rgba(14,34,62,0.48) 100%)",
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
              color: "#cfe0f0",
            }}
          >
            Loader Operators&nbsp;&nbsp;·&nbsp;&nbsp;Small Equipment
            Operators&nbsp;&nbsp;·&nbsp;&nbsp;Shovelers
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              color: "#9fc4e6",
            }}
          >
            Great pay · Steady work · Watertown, NY
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 2,
                color: "#f9bd24",
              }}
            >
              APPLY TODAY
            </div>
            <div style={{ display: "flex", fontSize: 44, fontWeight: 800 }}>
              {site.phone.display}
            </div>
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
