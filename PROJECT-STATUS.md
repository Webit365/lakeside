# Project Status — Lakeside Outdoor Services website

_Last updated at desktop→laptop handoff._

## Where things stand
- **Repo:** https://github.com/Webit365/lakeside (private, `main` is current)
- **Live site:** https://lakeside-roan.vercel.app
- **Vercel project:** `lakeside` (GitHub-connected → every push to `main` auto-deploys)
- Working tree is clean; all work is committed and pushed.

## Done
- Next.js 15 + TypeScript + Tailwind site (App Router).
- Homepage, commercial & residential landing pages, 9 SEO service pages,
  services index, service-areas, about, contact.
- Lead capture forms (residential + commercial) → `/api/quote`.
- Technical SEO: metadata, JSON-LD schema, sitemap, robots, OG images.
- **Branding applied:** real Lakeside logo (`public/brand/lakeside-logo.png`),
  brand colors green `#52B74A` (`pine` scale) + blue `#1281C4` (`frost` scale),
  primary CTA buttons = brand blue.
- **Real photos** across all pages (`public/photos/`), served via next/image.
- Real Google rating (4.4★ / 63 reviews) + GBP/Facebook `sameAs` in schema.

## Pending / next steps
1. **Custom domain** — add `lakesidenny.com` in Vercel → Settings → Domains.
2. **Quote-form email** — set `RESEND_API_KEY` (+ `LEAD_TO_EMAIL`,
   `LEAD_FROM_EMAIL`) in Vercel env vars so submissions email Dave. See README.
3. **Reviews** — two cards in `src/components/sections.tsx` are labeled
   "sample slot"; replace with real Google reviews.
4. Optional: feature the labeled truck graphics (in Dropbox
   `webit365/lakesidenny/`) if desired.

## Continuing on another machine
```bash
git clone https://github.com/Webit365/lakeside.git
cd lakeside
npm install
npm run dev        # http://localhost:3000
```
Requires Node 18.18+ . To deploy from the new machine you'll re-auth GitHub
(`gh auth login`) and Vercel (`vercel login`) once — both use quick
device-code / browser logins. Pushing to `main` also auto-deploys via Vercel.
