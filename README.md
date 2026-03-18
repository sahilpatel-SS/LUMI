# LUMI Skill Passport

A React implementation of the LUMI Skill Passport — a credential and skill-sharing profile page that displays assessed skills, session progress, evidence, certificates, and innovations for a learner.

---

## Features

- **Passport Overview** — category score gauges with drill-down navigation
- **Skill Detail View** — per-skill session progress chart, feedback cards, and evidence carousel
- **Certificates & Awards** — image gallery with full-screen modal viewer and download support
- **Innovations** — project showcase with metadata
- **Responsive design** — mobile-first layout, adapts from 320px to widescreen
- **Session switcher** — switch between multiple test sessions from the header

---

## Tech Stack

| Layer         | Library / Tool                                     |
| ------------- | -------------------------------------------------- |
| UI Framework  | React 19 + TypeScript 5.9                          |
| Build Tool    | Vite 8                                             |
| Styling       | Tailwind CSS v4 (CSS-based config)                 |
| Charts        | Recharts 3                                         |
| Icons         | Lucide React                                       |
| Routing       | React Router DOM v7                                |
| UI Primitives | Radix UI (Dialog, Tabs, Progress, Avatar, Tooltip) |
| Linting       | ESLint 9 (flat config) + typescript-eslint         |
| Formatting    | Prettier 3                                         |
| Git Hooks     | Husky v9 + lint-staged                             |

---

## Prerequisites

- Node.js 18+
- npm 9+

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Available Scripts

| Script                 | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start Vite dev server with HMR       |
| `npm run build`        | Type-check and build for production  |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Run ESLint                           |
| `npm run lint:fix`     | Run ESLint with auto-fix             |
| `npm run format`       | Format all files with Prettier       |
| `npm run format:check` | Check formatting without writing     |

---

## Project Structure

```
src/
├── components/
│   ├── passport/          # Feature components
│   │   ├── Header.tsx
│   │   ├── SessionDropdown.tsx
│   │   ├── OverviewView.tsx
│   │   ├── CategoryView.tsx
│   │   ├── SkillDetailView.tsx
│   │   ├── SkillChart.tsx
│   │   ├── EvidenceCarousel.tsx
│   │   ├── FeedbackCard.tsx
│   │   ├── ScoreModal.tsx
│   │   └── BackButton.tsx
│   └── ui/                # Reusable primitives
│       ├── CircularGauge.tsx
│       ├── ImageModal.tsx
│       └── Modal.tsx
├── pages/
│   ├── PassportPage.tsx
│   └── NotFoundPage.tsx
├── data/
│   └── passportData.ts    # Static mock data
├── types/
│   └── passport.ts        # TypeScript types
├── utils/
│   └── cn.ts              # Tailwind class merge helper
└── hooks/                 # Custom React hooks
```

---

## Pre-commit Hooks

On every `git commit`, the following run automatically:

1. **Prettier** — formats staged files
2. **ESLint** — lints and auto-fixes staged `.ts` / `.tsx` files (fails on warnings)
3. **TypeScript** — full project type-check via `tsc --noEmit`
