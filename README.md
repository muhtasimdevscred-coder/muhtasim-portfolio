# Muhtasim Ahmed — Portfolio

A Next.js 14 + Tailwind CSS conversion of the Stitch-generated portfolio design.
TypeScript, App Router, Server Actions for the contact form.

## Stack

- **Next.js 14** (App Router, Server Components by default)
- **TypeScript**
- **Tailwind CSS** — design tokens from the Stitch `DESIGN.md` are wired
  into `tailwind.config.ts` so utility classes like `bg-primary`,
  `text-headline-md`, `text-on-surface-variant` work everywhere.
- **Inter** + **Material Symbols Outlined** via Google Fonts
- **next/image** for optimized images (remote pattern allows
  `lh3.googleusercontent.com` for now — swap with your own assets when ready)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx            Composes all sections
  globals.css         Tailwind directives and a few small utilities
  actions.ts          Server Action for contact form submission
components/
  Header.tsx          Sticky glass nav with theme toggle + mobile menu
  Hero.tsx            Intro section with photo
  Experience.tsx      Vertical timeline (data-driven)
  Skills.tsx          Pill badges (data-driven)
  Portfolio.tsx       Filterable project cards (data-driven)
  Education.tsx       Two-card education grid
  Contact.tsx         Contact info + working form via Server Action
  Footer.tsx
tailwind.config.ts    All design tokens from DESIGN.md
```

## Hooking up the contact form to a real email service

`app/actions.ts` currently logs submissions and returns success. To send
real emails, the easiest path is **Resend**:

```bash
npm install resend
```

Add `RESEND_API_KEY` to `.env.local`, then uncomment the Resend block in
`app/actions.ts`. Alternatives: SendGrid, Mailgun, Nodemailer with SMTP.

## Deployment

- **Vercel** (recommended for Next.js — zero config): push to GitHub,
  import the repo at vercel.com, done.
- **Netlify**, **Railway**, **Fly.io**, or any Node host also work — run
  `npm run build` then `npm start`.

## Things to do before going live

1. Replace the placeholder portrait and project images (currently from
   the Stitch-generated URLs) with real assets in `public/`.
2. Drop a real CV file at `public/cv.pdf` so the "Download CV" button
   serves it.
3. Add real LinkedIn and GitHub URLs in `components/Footer.tsx`.
4. Wire up the contact form to an email service (see above).
5. Update `app/layout.tsx` metadata with the production URL.
