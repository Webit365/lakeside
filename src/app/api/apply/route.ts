import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = Record<string, string | undefined>;

function esc(s = ""): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  phone: "Phone",
  email: "Email",
  town: "Town",
  positions: "Position(s)",
  license: "Driver's license",
  availability: "Availability",
  experience: "Experience",
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  // Honeypot — bots fill hidden fields. Silently accept to waste their time.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  // Minimal validation
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name and a phone number." },
      { status: 422 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email doesn't look right." },
      { status: 422 }
    );
  }

  const positions = (data.positions || "").trim();
  const subject = `🧑‍🔧 Job application — ${name}${
    positions ? ` (${positions})` : ""
  }`;

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
      <h2 style="color:#1e4e35;margin:0 0 4px">New Job Application</h2>
      <p style="color:#666;margin:0 0 16px">Submitted via the Careers page on lakesidenny.com</p>
      <table style="border-collapse:collapse;width:100%;border:1px solid #eee;border-radius:8px">${rows}</table>
      <p style="color:#999;font-size:12px;margin-top:16px">Reply directly to this email to respond to ${esc(
        name
      )}.</p>
    </div>`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || site.email;
  const from = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";

  // If email isn't configured yet, log the application and still succeed so the
  // form works in preview/staging. Configure RESEND_API_KEY to enable email.
  if (!apiKey) {
    console.log("[apply] Email not configured. Application received:", {
      subject,
      ...data,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Lakeside Careers <${from}>`,
        to: [to],
        reply_to: email || undefined,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[apply] Resend error:", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your application. Please call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[apply] Send failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call us instead." },
      { status: 500 }
    );
  }
}
