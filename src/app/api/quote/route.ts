import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/mailer";

export const runtime = "nodejs";

type Payload = Record<string, string | undefined>;

function esc(s = ""): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const FIELD_LABELS: Record<string, string> = {
  type: "Request type",
  name: "Name",
  email: "Email",
  phone: "Phone",
  propertyType: "Property type",
  company: "Company",
  address: "Property address",
  services: "Services needed",
  propertySize: "Property size / # of lots",
  timeline: "Timeline",
  message: "Details",
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields. Silently accept to waste their time.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  // Time-trap — a real visitor takes several seconds to fill the form; bots
  // submit near-instantly. `elapsed` is ms since the form mounted. Silently
  // accept (like the honeypot) so we don't tip off the bot.
  const elapsed = Number(data.elapsed);
  if (Number.isFinite(elapsed) && elapsed < 3000) {
    return NextResponse.json({ ok: true });
  }

  // Minimal validation
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  if (!name || (!email && !phone)) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name and a phone or email." },
      { status: 422 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email doesn't look right." },
      { status: 422 }
    );
  }

  const isCommercial = data.type === "commercial";
  const subject = `${isCommercial ? "🏢 Commercial" : "🏡 Residential"} quote request — ${name}`;

  const rows = Object.entries(FIELD_LABELS)
    .filter(([k]) => data[k])
    .map(
      ([k, label]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#555;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#111">${esc(
          data[k]
        )}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:600px">
      <h2 style="color:#1e4e35;margin:0 0 4px">New ${isCommercial ? "Commercial" : "Residential"} Quote Request</h2>
      <p style="color:#666;margin:0 0 16px">Submitted via lakesidenny.com</p>
      <table style="border-collapse:collapse;width:100%;border:1px solid #eee;border-radius:8px">${rows}</table>
      <p style="color:#999;font-size:12px;margin-top:16px">Reply directly to this email to respond to ${esc(name)}.</p>
    </div>`;

  const text =
    `New ${isCommercial ? "commercial" : "residential"} quote request — submitted via lakesidenny.com\n\n` +
    Object.entries(FIELD_LABELS)
      .filter(([k]) => data[k])
      .map(([k, label]) => `${label}: ${data[k]}`)
      .join("\n");

  // Quote requests go to the owner + manager. Override via LEAD_TO_EMAIL
  // (comma-separated) in the environment if the recipient list changes.
  const to = (process.env.LEAD_TO_EMAIL || "dave@lakesidenny.com, aerial1002@gmail.com")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const result = await sendLeadEmail({
    to,
    subject,
    html,
    text,
    replyTo: email || undefined,
  });

  // Not configured yet (no SES env vars) — log and still succeed so the form
  // works in preview/staging. Configure SES in Vercel to enable delivery.
  if (result.status === "skipped") {
    console.log("[quote] Email not configured. Lead received:", {
      subject,
      ...data,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  if (result.status === "failed") {
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request. Please call us." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
