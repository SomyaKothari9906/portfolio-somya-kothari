# Somya Kothari — AI & ML Engineer Portfolio 🚀

![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

> **Live Deployment:** [https://portfolio-somya-kothari.vercel.app](https://portfolio-somya-kothari.vercel.app)

A production-quality, premium personal portfolio designed for AI/ML engineers. Built with cutting-edge web technologies, featuring highly interactive UI, smooth micro-animations, and a recruiter-focused design system inspired by Vercel and Linear.

## ✨ Key Features
- **Dynamic Content Architecture:** 100% JSON-driven data layer (No hardcoded content)
- **Fluid Animations:** Custom hooks and Framer Motion integration for staggered reveals and typing effects
- **Modern UI Components:** Custom gradients, glassmorphism, glowing borders, and skeleton states
- **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop displays
- **Developer Experience:** Strict TypeScript, Tailwind v4, and ESLint integration

## 🛠 Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To run this project locally:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Content Management

All content lives in the `content/` directory. You can update your portfolio instantly by just editing JSON files — **no code changes needed!**

| File | What it controls |
|---|---|
| `content/profile.json` | Name, bio, email, phone, CGPA, and resume download toggle |
| `content/projects.json` | Portfolio projects, external links, and tech stack badges |
| `content/skills.json` | Categorized tech skills (Languages, ML Frameworks, Tools) |
| `content/education.json` | Education timeline & university details |
| `content/achievements.json` | Special awards and accomplishments |
| `content/certificates.json` | Online courses & certifications |
| `content/socials.json` | Coding profiles (LeetCode, GitHub) & social links |

## 🖼 Adding Assets

To update images, simply drop the files into the `public/` folder matching the exact paths:

| Asset | Path |
|---|---|
| Profile photo | `public/profile/profile.jpg` |
| Project screenshots | `public/projects/[project-id].jpg` |
| Certificates | `public/certificates/[name].jpg` |
| Resume PDF | `public/resume/resume.pdf` (Requires `resumeAvailable: true` in `profile.json`) |

## 🌐 Deployment

This project is optimized for [Vercel](https://vercel.com).
Simply push the repository to GitHub, import the project in your Vercel dashboard, and it will deploy with zero configuration.
