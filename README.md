# Lakeside Outdoor Services — Website

A fast, SEO-optimized lead-generation website for **Lakeside Outdoor Services**
(Lakeside NNY) — commercial & residential landscaping and snow management in
Watertown & Northern New York.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.
Designed to score 100 on Lighthouse SEO & Performance and to convert
high-value commercial contracts and quality residential clients.

---

## 🚀 Quick start (local)

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

> This project uses a locally-installed Node.js at
> `~/.local/node/node-v22.14.0-darwin-arm64/bin` (added to `~/.zshrc`).
> Any Node 18.18+ works.

---

## 📁 Where to edit things

| What | File |
| --- | --- |
| Business name, phone, email, address (NAP), hours, rating | `src/lib/site.ts` |
| Navigation menu | `src/lib/site.ts` → `nav` |
| Service areas (towns) | `src/lib/site.ts` → `serviceAreas` |
| **Service page content & SEO copy** | `src/lib/services.ts` |
| Homepage sections | `src/app/page.tsx` |
| Commercial landing page | `src/app/commercial-landscaping-watertown-ny/page.tsx` |
| Residential landing page | `src/app/residential-landscaping-watertown-ny/page.tsx` |
| Reviews (swap in real ones) | `src/components/sections.tsx` → `reviews` |
| Colors / fonts | `tailwind.config.ts`, `src/app/globals.css` |
| SEO schema (LocalBusiness etc.) | `src/lib/seo.ts` |

---

## 📸 Swapping in real photos

Every image on the site is currently a branded gradient **placeholder**
(`<PhotoSlot>` in `src/components/Media.tsx`). They render instantly with zero
network requests, which keeps the page-speed score perfect.

To replace one with a real photo:

1. Drop the optimized image (JPG/WebP, ~1600px wide) into `public/photos/`.
2. Replace the `<PhotoSlot ... />` with:

   ```tsx
   import Image from "next/image";

   <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
     <Image
       src="/photos/your-photo.jpg"
       alt="Descriptive alt text with a keyword, e.g. Snow plowing a Watertown parking lot"
       fill
       className="object-cover"
       sizes="(max-width: 768px) 100vw, 50vw"
     />
   </div>
   ```

`next/image` automatically serves AVIF/WebP and correct sizes — no page-speed
penalty. Always write descriptive, keyword-aware `alt` text (good for SEO).

---

## ✉️ Turning on the quote-form email (Resend)

The quote form (`/contact`) posts to `/api/quote`. Until an email key is set,
submissions are validated and logged but not emailed (the form still works).

To deliver leads to **dave@lakesidenny.com**:

1. Create a free account at [resend.com](https://resend.com).
2. Verify the `lakesidenny.com` domain in Resend (add the DNS records they give you).
3. In Vercel → Project → Settings → **Environment Variables**, add:

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | `re_...` (from Resend) |
   | `LEAD_TO_EMAIL` | `dave@lakesidenny.com` |
   | `LEAD_FROM_EMAIL` | `quotes@lakesidenny.com` (must be on your verified domain) |

4. Redeploy. Leads now email Dave, with the customer's email as the reply-to.

---

## ▲ Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
   Vercel auto-detects Next.js — no configuration needed.
3. Add the environment variables above.
4. Deploy. Add your custom domain `lakesidenny.com` in
   Project → Settings → **Domains**.

**Before launch:** update `url` in `src/lib/site.ts` if the domain differs, and
add your Google Search Console verification token in `src/app/layout.tsx`
(`metadata.verification.google`).

---

## 🔍 SEO checklist (post-launch)

- [ ] Set `RESEND_API_KEY` so leads email through.
- [ ] Swap `<PhotoSlot>` placeholders for real photos with keyword alt text.
- [ ] Replace placeholder reviews in `src/components/sections.tsx` with real
      Google reviews; update `site.rating` with your true count/score.
- [ ] Add your Google Business Profile + social URLs in `site.social`.
- [ ] Verify the domain in **Google Search Console** and submit
      `https://lakesidenny.com/sitemap.xml`.
- [ ] Confirm the exact business coordinates in `site.address.lat/lng`.
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) against the live URL.

---

## 🗺️ Pages

- `/` — Homepage (conversion-focused, targets "commercial landscaping Watertown NY")
- `/commercial-landscaping-watertown-ny` — Commercial hub (primary money page)
- `/residential-landscaping-watertown-ny` — Residential hub
- `/services` — Services index
- `/services/[slug]` — 9 individual SEO service pages
- `/service-areas`, `/about`, `/contact`
- Auto-generated: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`,
  OpenGraph image, favicons
