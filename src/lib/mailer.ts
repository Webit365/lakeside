import "server-only";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

/**
 * Send a lead/notification email through Amazon SES (the shared Webit365 SES
 * account, verified for webit365.com). Recipients are internal (the site
 * owner), so no per-recipient verification is needed once the account has
 * production access.
 *
 * Required env (set in Vercel — copy from another Webit365 project):
 *   AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION (us-east-1),
 *   SES_FROM  e.g.  Lakeside Outdoor Services <no-reply@webit365.com>
 *
 * Returns "sent" | "skipped" (not configured) | "failed".
 */
export type MailResult = {
  status: "sent" | "skipped" | "failed";
  error?: string;
};

export async function sendLeadEmail(opts: {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}): Promise<MailResult> {
  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, SES_FROM } =
    process.env;

  const toAddresses = (Array.isArray(opts.to) ? opts.to : [opts.to])
    .map((a) => a.trim())
    .filter(Boolean);

  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !SES_FROM) {
    console.warn("[mailer] SES not configured — skipping email to", toAddresses);
    return { status: "skipped" };
  }

  try {
    const client = new SESv2Client({
      region: AWS_REGION || "us-east-1",
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });

    await client.send(
      new SendEmailCommand({
        FromEmailAddress: SES_FROM,
        Destination: { ToAddresses: toAddresses },
        ...(opts.replyTo ? { ReplyToAddresses: [opts.replyTo] } : {}),
        Content: {
          Simple: {
            Subject: { Data: opts.subject },
            Body: {
              Html: { Data: opts.html },
              Text: { Data: opts.text },
            },
          },
        },
      })
    );

    return { status: "sent" };
  } catch (e) {
    console.error("[mailer] SES send failed:", e);
    return { status: "failed", error: (e as Error).message };
  }
}
