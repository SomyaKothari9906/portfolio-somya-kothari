# Somya Kothari — AI & ML Portfolio

A production-quality personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations & scroll reveal
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Management

All content lives in `content/` — **no code changes needed** to update:

| File | What it controls |
|---|---|
| `content/profile.json` | Name, bio, email, phone, CGPA, resume toggle |
| `content/projects.json` | Projects, links, tech stack |
| `content/skills.json` | Skills by category |
| `content/education.json` | Education timeline |
| `content/achievements.json` | Achievements |
| `content/certificates.json` | Certificates (empty = shows placeholder) |
| `content/socials.json` | Coding profiles & social links |

## Adding Assets

| Asset | Path |
|---|---|
| Profile photo | `public/profile/profile.jpg` |
| Project screenshots | `public/projects/[id].jpg` |
| Certificates | `public/certificates/[name].jpg` |
| Resume | `public/resume/resume.pdf` (set `resumeAvailable: true` in profile.json) |

## Deploy

Push to GitHub → Import in [Vercel](https://vercel.com) → Deploy. Zero configuration needed.
