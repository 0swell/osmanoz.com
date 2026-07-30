# osmanoz.com

Personal branding, professional resume presentation, project showcase, and interaction analytics.

🔗 **Live:** [osmanoz.com](https://osmanoz.com) · 📋 **Project Guide:** [CLAUDE.md](./CLAUDE.md)

> This project is built strictly against a written project guide (`CLAUDE.md`) covering architecture, design system, and development standards — prepared before a single line of code was written.

## ✨ Features

### Public
- **Scroll-stack landing page** — Hero, Projects, and CV sections stacked as sticky full-screen layers, revealed on scroll (Framer Motion)
- **Project cards** — CSS Grid layout, hover effects, expandable detail view, per-card click tracking
- **CV download** — one-click PDF download with a live "downloaded X times" badge served from the database
- **Dark/Light theme** — persisted user preference via `next-themes`
- **UX details** — scroll progress bar, active section indicator, toast feedback, copy-email button, scroll-to-top, `prefers-reduced-motion` support

### Admin (`/admin`)
- **Glassmorphism login** — NextAuth (credentials + bcrypt), protected routes via middleware
- **Content management** — edit project cards and upload a new CV (Vercel Blob) without redeploying
- **Analytics dashboard** — download & click counters as stat cards, daily/weekly trends rendered with pure Tailwind (no chart library)

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Database | Neon PostgreSQL + Prisma |
| Auth | NextAuth.js |
| File storage | Vercel Blob (CV PDF) |
| Icons | lucide-react + react-icons |
| Hosting | Vercel |

## 🏗 Architecture Highlights

- **Server Components by default** — `"use client"` only where interaction requires it, using the *client shell + server children* composition pattern
- **Atomic Design** — `atoms / molecules / organisms`; layouts handled by App Router `layout.tsx`
- **Minimal API surface** — only two endpoints (`/api/track`, `/api/auth`); admin mutations use Server Actions, dashboard reads query the DB directly
- **Design tokens** — 60-30-10 color rule, CSS-variable palette in Tailwind config, no hardcoded colors, WCAG AA contrast targets in both themes
- **SEO** — semantic HTML (`main/section/article`), single `h1`, Metadata API + Open Graph, `sitemap.ts`, `robots.ts`, lazy loading without `ssr: false`

## 📸 Screenshots

*Coming soon — will be added once the site is live.*

<!--
| Landing | Projects | Admin Dashboard |
|---|---|---|
| ![](docs/hero.png) | ![](docs/projects.png) | ![](docs/admin.png) |
-->

## 📄 License

© Osman Öz. All rights reserved.
