# Pritha Karki — Portfolio

Personal portfolio built with Next.js (App Router), React, Tailwind CSS, and shadcn/ui.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where things live

| What                          | Where                       |
| ----------------------------- | --------------------------- |
| Page sections (home)          | `app/sections/`             |
| Project list (home + all)     | `lib/projects.ts`           |
| Social links and email        | `lib/socials.tsx`           |
| Tech stack list               | `app/sections/TechStack.tsx`|
| Site URL for metadata and SEO | `lib/siteConfig.ts`         |
| GitHub contributions username | `components/GithubActivity.tsx` |

Projects marked `featured: true` in `lib/projects.ts` appear on the home page;
`/projects` shows all of them.

## Scripts

```bash
pnpm dev     # start dev server
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # eslint
```
