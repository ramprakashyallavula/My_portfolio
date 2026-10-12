<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Personal Portfolio

## Project overview

This repository is Ram Prakash Yallavula's personal software engineering portfolio. It is a single-page, dark-themed portfolio intended to present professional focus, skills, selected projects, contact information, and a resume to recruiters and prospective employers.

- Project name: Personal Portfolio
- Local directory: `ram-portfolio`
- GitHub remote: `https://github.com/ramprakashyallavula/My_portfolio.git`
- Live website: `https://ramprakashyallavula.com`
- Hosting/deployment: Vercel (project context supplied by the owner)
- Domain provider: Cloudflare (project context supplied by the owner)

The GitHub remote is confirmed by the local Git configuration. The live URL, Vercel project, and Cloudflare DNS setup are not represented by configuration files in this repository, so treat those as owner-provided deployment context rather than code-level facts.

## Actual technology stack

The installed and configured stack is:

- Next.js `16.2.4` with the App Router (`app/` directory)
- React `19.2.4` and React DOM `19.2.4`
- TypeScript `5.9.3`, with strict checking enabled
- Tailwind CSS `4.2.4`, integrated through `@tailwindcss/postcss`
- Framer Motion `12.38.0`, used by `Hero` and `Projects`
- `@formspree/react` `3.0.0`, used by the contact form
- `next/font`, used to load Geist and Geist Mono in the root layout
- ESLint `9` with `eslint-config-next` `16.2.4`
- `lucide-react` `1.14.0`, used for the responsive mobile navigation icons

There is no separate UI component library, state-management library, database, API route, test framework, or environment-variable integration in the current source tree.

## Folder structure and architecture

```text
.
├── app/
│   ├── favicon.ico
│   ├── globals.css       # Tailwind import and global page behavior
│   ├── layout.tsx        # Root layout, fonts, and metadata
│   └── page.tsx          # `/` route; composes the portfolio sections
├── sections/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── public/
│   ├── resume.pdf         # Resume served at `/resume.pdf`
│   └── *.svg              # Starter/static SVG assets; use only when relevant
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
├── package.json
└── package-lock.json
```

`app/page.tsx` is the only application route. The reusable-looking page sections intentionally live in the top-level `sections/` directory rather than inside `app/`; do not move them without a specific reason. The `@/*` TypeScript path alias maps to the repository root, so page imports use paths such as `@/sections/Hero`.

There are currently no `src/`, `lib/`, `components/`, `hooks/`, `api/`, `tests/`, or `.github/workflows/` directories.

## Important components and responsibilities

- `app/layout.tsx`: Defines the root HTML structure, applies Geist font variables, imports global CSS, and sets the document metadata title and description. It is a Server Component by default.
- `app/page.tsx`: Renders the home page in this order: `Navbar`, `Hero`, `Projects`, `Skills`, `About`, `Contact`.
- `sections/Navbar.tsx`: Fixed navigation with desktop anchor links and an accessible mobile menu below the `md` breakpoint. The menu closes after selecting a section.
- `sections/Hero.tsx`: Client Component because it uses `useEffect` and Framer Motion. It renders the introduction, calls to action, resume link, GitHub profile link, and LinkedIn link. On initial load without a URL hash, it resets scroll position to the top.
- `sections/Projects.tsx`: Client Component because it uses Framer Motion. It owns the in-file `projects` data array and renders four project cards with gradient placeholders, descriptions, and technology labels.
- `sections/Skills.tsx`: Renders four skill groups: Frontend, Backend, Cloud & DevOps, and Data & Systems.
- `sections/About.tsx`: Renders the professional summary and three highlight cards for focus, strength, and current learning direction.
- `sections/Contact.tsx`: Client Component because it uses `@formspree/react`. It renders contact details and a Formspree form with validation errors and success/submitting states.

## Design system and styling conventions

- Preserve the existing minimal dark visual direction: black page backgrounds, white primary text, gray secondary text, subtle white borders, and near-black cards (`#0a0a0a`).
- Prefer Tailwind utility classes in JSX. Tailwind is loaded from `app/globals.css` with `@import "tailwindcss"` and configured through `postcss.config.mjs`; there is no Tailwind config file.
- Keep the current layout vocabulary: centered/max-width content containers, generous vertical spacing, rounded cards, thin translucent borders, and pill-shaped buttons/tags.
- The root layout loads `Geist` and `Geist_Mono` variables, and the body uses the Geist variable with Arial/Helvetica fallbacks.
- Global CSS sets `scroll-behavior: smooth` and `scroll-padding-top: 60px`. Most component styling is local Tailwind markup rather than custom CSS.
- Do not introduce arbitrary colors, gradients, motion patterns, or UI libraries without matching the existing visual language and checking responsive behavior.

## Navigation and scrolling behavior

This is a single-page layout using normal anchor navigation. The navbar and Hero use `#projects`; the navbar also links to `#skills`, `#about`, and `#contact`. Section IDs are part of the navigation contract and should not be changed casually.

The navbar is fixed at the top with a translucent black background and backdrop blur. The global `scroll-padding-top` and section-level `scroll-mt-*` classes help offset anchor targets. `Hero.tsx` sets `window.history.scrollRestoration = "manual"` and scrolls to the top only when the page loads without a hash. Preserve hash navigation and back/forward behavior when changing scroll logic.

Use Next.js routing conventions for future routes. For this current same-page navigation, plain anchors are intentional and should remain functional.

## Animation conventions

- Keep Framer Motion client boundaries limited to components that actually need browser APIs or motion behavior.
- Hero entrance: `opacity: 0`/`y: 28` to visible at `y: 0`, with a `0.8s` transition.
- Project cards: animate once when entering the viewport from `y: 20` with `0.65s` duration and the existing easing curve.
- CSS hover transitions provide card lift, border, shadow, gradient scale, button inversion, and text-opacity changes.
- Preserve `viewport={{ once: true }}` behavior unless there is a deliberate accessibility/performance reason to change it.
- Respect reduced-motion preferences when adding new motion, and avoid adding animation to every section by default.

## Responsive design requirements

The page is mobile-first and uses Tailwind `sm`/`md` breakpoints. Preserve usable layouts at narrow widths:

- Hero actions stack on small screens and become a row at `sm`.
- Navbar links are available through the desktop navigation and an accessible menu on small screens.
- Projects use one column on small screens and two columns from `md` upward.
- Skills use one column on small screens and two columns from `md` upward.
- About and Contact switch from stacked content to grid layouts at `md`.
- Keep text readable, buttons reachable, anchor targets visible below the fixed navbar, and long project/contact content free of horizontal overflow.

## Resume integration

The only resume integration currently implemented is `public/resume.pdf`, a two-page PDF served as `/resume.pdf`. The Hero's `View Resume` anchor opens it in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

There is no separate Resume section, route, download handler, or resume component. If a dedicated Resume section is added later, preserve the existing PDF path unless the owner explicitly approves a change and verify the production link.

## Projects section

`sections/Projects.tsx` currently contains four in-file project records:

1. Project Management System — Django, PostgreSQL, AWS
2. NYC Taxi Data Pipeline — Python, Spark, AWS
3. Waste Food Management System — Java, Spring Boot, MySQL
4. Job Recommendation System — Python, NLP

Each record contains a title, description, technology string, `github` and `live` placeholders set to `"#"`, and a background gradient class. The project cards render the title, description, tech label, and gradient placeholder.

The GitHub and Live Demo controls are intentionally disabled with `{false && (...)}`. Never enable, replace, or expose these links without explicit owner permission. Do not invent project achievements, metrics, links, or claims while improving descriptions.

## Deployment and Git workflow

The owner identifies Vercel as the deployment platform and Cloudflare as the domain provider. The repository contains no Vercel configuration, Cloudflare configuration, GitHub Actions workflow, or documented deployment script. Do not infer details such as the Vercel project name, build settings, DNS records, preview/production branch, or environment variables.

The expected workflow is:

1. Make a focused local change.
2. Run the relevant checks locally.
3. Review the diff and confirm only intended files changed.
4. Commit and push only after the owner explicitly asks for it.
5. Let the connected Vercel/GitHub integration deploy if that external connection is configured.
6. Verify the production URL and any affected external links after deployment.

Never commit or push automatically. Do not change Cloudflare or Vercel settings as part of a code-only request.

## Development and testing commands

Install dependencies with the lockfile:

```bash
npm install
```

Available scripts from `package.json`:

```bash
npm run dev       # Start the Next.js development server
npm run build     # Create a production build
npm run start     # Serve the production build locally
npm run lint      # Run ESLint
```

There is no `test` script and no test framework configured. For a normal change, run at least `npm run lint`; for changes affecting rendering, routing, or production behavior, also run `npm run build`. Use `npm run start` only after a successful build when production-mode verification is needed.

## Coding standards and best practices

- Preserve the existing design and behavior; do not rebuild the portfolio from scratch.
- Modify only the files needed for the requested change. Keep unrelated user changes intact.
- Use strict, maintainable TypeScript and existing React/Next.js conventions.
- Keep Server Components as the default. Add or retain `"use client"` only where hooks, browser APIs, Formspree state, or Framer Motion require it.
- Prefer data-driven rendering for repeated project, skill, or highlight items, as the current components do.
- Use the existing `@/*` alias for root-relative imports where it improves clarity.
- Preserve semantic headings, labels, form requirements, external-link security attributes, and keyboard-accessible controls.
- Do not add claims, achievements, performance numbers, technologies, or project links unless they are supplied by the owner or present in verified project source.
- Keep the website responsive and check narrow and wide layouts after UI changes.
- Explain significant changes in beginner-friendly language.
- Do not commit or push unless explicitly authorized.

## Known limitations and source-of-truth discrepancies

- The requested “Resume” item is not a page section; it is currently a Hero link to `/resume.pdf`.
- The Projects GitHub/Live Demo controls are intentionally disabled, and their data URLs are only `"#"` placeholders.
- No automated tests are configured. Form behavior depends on the external Formspree endpoint ID in `Contact.tsx`.
- The repository has no checked-in deployment workflow or hosting configuration for Vercel/Cloudflare.
- The contact form displays an owner-provided “within 24 hours” response-time statement; do not alter it without permission.

## Planned future improvements

Completed in the current working tree:

1. Improved project descriptions for recruiter readability without adding metrics or unsupported claims.
2. Added a truthful proof-of-work statement to About.
3. Improved mobile navigation, spacing, and reduced-motion behavior.

Still planned:

4. Rebuild the existing software engineering projects.
5. Add verified GitHub and Live Demo links after projects are completed and permission is given.
6. Continue improving the portfolio for Software Engineer and New Graduate SWE applications.

Before implementing any plan, inspect the current files again, make the smallest focused change, run the relevant checks, and report any behavior or content discrepancy.
