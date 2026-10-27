<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Personal Portfolio — project guide

## Purpose and owner context

Ram Prakash Yallavula's personal portfolio for Software Engineer and New Graduate SWE applications. Present real projects, engineering interests, skills, contact details, and a résumé. Never invent achievements, metrics, screenshots, or credentials.

- Repository: https://github.com/ramprakashyallavula/My_portfolio
- Live site: https://ramprakashyallavula.com
- Directory: `ram-portfolio`
- Vercel hosting and Cloudflare domain management are owner-provided context, not checked-in deployment configuration.
- Current redesign is local work. Do not assume it has been deployed.

## Stack

Next.js 16.2.4 App Router; React/React DOM 19.2.4; strict TypeScript; Tailwind CSS 4 via PostCSS; Framer Motion 12; lucide-react icons; @formspree/react 3. Geist and Geist Mono load through next/font/google; Georgia is the editorial serif fallback/system font. Consult package.json and package-lock.json for exact dependency versions.

No database, API routes, authentication, separate UI library, or automated test framework is implemented in this portfolio.

## Structure and architecture

- `app/layout.tsx`: global styles, fonts, metadata, skip link, profile JSON-LD, and Vercel Web Analytics (`<Analytics />` from `@vercel/analytics/next`; debug-only in development, reports page views on Vercel deployments). Its data-scroll-behavior attribute lets Next manage smooth-scroll behavior during route transitions.
- `app/page.tsx`: Navbar, Hero, Projects, EngineeringApproach, Skills, Timeline, About, Now, Contact, Footer. Navigation/footer sit outside the main landmark.
- `app/globals.css`: design tokens, custom semantic CSS classes, responsive rules, focus and reduced-motion styles; retains Tailwind import.
- `app/projects/[slug]/page.tsx`: static project overviews from shared data; Promise-based route params; unknown slugs call notFound.
- `app/not-found.tsx`: branded 404.
- `app/manifest.ts`, `robots.ts`, `sitemap.ts`: site metadata and route discovery.
- `app/opengraph-image.tsx`: generated 1200×630 social preview (next/og), inherited by project routes.
- `data/portfolio.ts`: project descriptions, technologies, focus, architecture summaries, skill groups and engineering principles. Legacy gradient fields are currently unused.
- `sections/`: homepage sections and shared presentation components, described below.
- `public/resume.pdf`: résumé served at /resume.pdf; starter SVG assets also remain.
- Root configs: next.config.ts, tsconfig.json, eslint.config.mjs, postcss.config.mjs, package.json/package-lock.json.
- `backups/`: local recovery copies; do not delete or deploy them accidentally.

Use the `@/*` root alias. Prefer Server Components; client boundaries currently belong to Navbar (menu and theme state), Hero (pointer-responsive motion), Reveal (motion), and Contact (Formspree). Server-rendered sections can pass content into Reveal.

## Important components

- Hero: full-name introduction, work/résumé actions, GitHub/LinkedIn/Email profile pills and a CSS laptop illustration. Hero.module.css owns its multicolour background and responsive layout; it fills at least the opening viewport below the header, without clipping content. Do not restore the retired “A place for ideas to become real.” caption.
- Navbar: sticky header with `rpy.` at left and the four desktop anchors grouped at right; there is intentionally no résumé link in the header. The current section's link gets aria-current via IntersectionObserver, and the header gains a shadow once scrolled. The keyboard-accessible mobile menu contains those same four anchors. Escape closes and returns focus; selecting a link closes the menu.
- Projects: five data-driven project tiles linking to internal overviews. TaskFlow AI is the full-width lead project, shown as a framed two-column card (image left, copy right; stacked on mobile) so its image stays moderate in size; the remaining four are equal compact cards in a 2-column grid (1 column on mobile): short tinted illustration panel, then copy; the title link's ::after covers the card so each card has one link. The hero badge reads “Open to new roles” (owner wants it broader than SWE only).
- ProjectArtwork: TaskFlow AI uses a code-authored interface preview (Next Image SVG) grounded in its implemented frontend; it is not a production screenshot. The other four use theme-aware inline SVG illustrations from `sections/ProjectIllustrations.tsx` (role-based kanban, Spark pipeline, donation workflow → API → MySQL, résumé → NLP → ranked matches), coloured only through `.ill-*` classes. Each illustration acts out its project on card hover, and loops on its project page via `ProjectArtwork autoplay` (`.ill-autoplay`): a task travels To do → In progress → Done and ticks off; data packets flow, Spark executors light up in turn and hourly bars rise and fall; donation steps tick off in order while the request drops into the DB and the row status turns green; skill tags light up, NLP pulses and match bars fill best-first. The resting drawing is the static state; `ill-a-*` classes carry the CSS keyframes and reduced motion disables them. They show sample content, not real data or results. The owner rejected the old AI-generated PNGs; they were moved to `backups/retired-concept-images/`. Cards hide the overlay label; project pages keep a small “Illustration” tag and explain it in the text.
- Reveal: reusable, once-in-view fade/rise entrance (36px from 0.2 opacity; `subtle` prop for above-the-fold hero content). Wraps headings and items in every section with short staggers. Content remains visible in server HTML. Owner decision: entrance reveals play ONCE; only scroll-linked effects respond in both directions.
- ScrollEffects: ScrollProgress (top accent bar), CursorSparkles (tiny four-point clip-path sparkles in accent/sand/sage/sky that twinkle and fade in ~0.65s wherever the mouse moves, including over text and cards, EXCEPT over project images/illustrations (`.project-art`, case covers) and the contact form, per the owner; plain DOM nodes capped at 14; native cursor kept; off for touch/reduced motion; it replaced the dot-and-ring follower and, before that, a cursor spotlight, both rejected by the owner), ScrollSpin (rotates the decorative ✳ marks as their sections scroll past), ScrollScale (project images and case covers scale 0.9→1 as they enter), ScrollHighlight (Projects intro and About lead light up word by word; full text kept in aria-label), Magnetic (hero and case-page primary buttons drift toward the cursor). Performance rule (owner saw trackpad scroll lag): every scroll-linked effect, including the hero tilt/fade, is a CSS scroll-driven animation (`animation-timeline: scroll()/view()` in globals.css and Hero.module.css, gated by @supports and reduced motion). Do not reintroduce Framer `useScroll`/`useTransform` or other per-scroll JS; unsupported browsers just show the static end state. The header has no backdrop blur (near-opaque background instead), animated scroll layers carry `will-change` so browsers do not re-rasterize them on every slow trackpad step, highlight words are inline-block, hovers animate transforms rather than layout properties, and card shadows stay small.
- EngineeringApproach: three numbered principles on a lavender/seafoam/peach background.
- Skills: Interfaces, Backend, Cloud & delivery, Data & systems.
- Timeline: undated learning progression, not an employment history.
- About: personal narrative, project-based proof of work, decorative initials poster, résumé link.
- Now: current rebuilding/learning/job-search direction.
- Contact: email, LinkedIn/GitHub/résumé pills, labelled Formspree form, submitting/errors/success states and email link. Preserve endpoint mgodwrjl. Do not send test submissions without permission.
- Footer: year, profile links, back-to-top.
- BrandIcons: inline GitHub/LinkedIn SVGs (lucide-react 1.x no longer ships brand icons).
- Project overviews end with previous/next project links and a contact call to action. Technologies render as `.tech-chips` lists on project tiles, overviews and Skills.
- SectionHeading: legacy unused helper from the previous design; it does not drive current headings.

## Design and styling

The site has a light and a dark theme (owner request 2026-10-23, replacing the "Forest & clay" palette). `data-theme` on <html> selects them; an inline script at the top of <body> applies the saved choice (`localStorage.theme`) or the system preference before first paint, and the header's sun/moon toggle switches through a View Transition styled as sunrise/sunset (owner's idea): to light, the new snapshot rises from the bottom behind a soft masked horizon band; to dark, night sweeps down from the top as an exact mirror with nothing moving (0.7s, `data-theme-transition` on <html>; instant without support or with reduced motion). The toggle must respond to every click: a click mid-transition skips the running one and starts the next, and because browsers route clicks to <html> during a View Transition, Navbar catches document clicks inside the toggle's rectangle. Do not bring back per-element colour transitions; inherited colours chase each other and flicker.

- Dark: lifted navy-slate `--background` #1e2633 (never pure black), bands `--surface` / `--surface-slate`, coral `--accent`, sand, sage and sky accents. Light: sea-glass blue-teal that echoes the navy dark theme (owner rejected near-white, warm sand and plain blue-gray): base #d6e6e6, deeper bands #c5dadb (approach, contact, footer), lighter about band #e2eeee, cards #ecf4f4, ink-blue text, and darkened accents that pass WCAG AA on every band (button text 6:1).
- All colours go through tokens in globals.css (`--ink`, `--ink-soft`, `--muted`, `--placeholder`, `--error`, `--on-accent`, `--shadow`, `--featured-from/to`); translucent tints use `color-mix(in srgb, var(--token) N%, transparent)`. Do not add hard-coded theme colours. Intentional fixed colours: the laptop illustration, poster details, and the dark "Concept visual"/"View project" pills over images.
- Oversized tight sans headings, selective italic serif emphasis, small monospaced labels.
- Generous whitespace, asymmetric project grid, bold colour bands, restrained corners and thin rules.
- Custom class-based styling in globals.css is now the main convention. Tailwind remains installed.
- Project art is local and code-drawn (no remote images, no AI-generated photos). Never present illustrations or previews as real product screenshots.
- Keep contrast, visible keyboard focus, semantic headings and accessible names. Decorative art is aria-hidden.

## Navigation and motion

Native anchor scrolling targets #projects, #approach, #skills, #journey, #about, #now and #contact. Preserve IDs, hash deep links, and back/forward behavior. Do not reset scroll unconditionally or add scroll hijacking. Header is sticky; scroll-padding-top matches `--header-height` (85px desktop, 71px mobile) so each destination starts directly below it. Project navigation uses Next Link.

Motion is purposeful, not continuous:
- Reveal uses Framer Motion, 0.75-second ease-out, once in view, short stagger on project pairs.
- Project artwork gently scales and buttons lift. Hero laptop tilt and translation respond to fine mouse movement with damped springs at a middle sensitivity the owner approved (±22px/±15px, ±7°/±10°). On load the hero plays one entrance sequence: headline lines slide up from masks, other items rise in turn, and the laptop rises and scales in. As the hero scrolls away the laptop tilts back, shrinks and drifts up, and the copy lifts and fades, reset on pointer leave/cancel, and are disabled for touch/reduced motion. No continuous animation loop.
- Mobile menu uses CSS grid-row/opacity transitions, with inert and aria-hidden while closed.
- Reduced-motion preferences disable CSS transitions/animations and Reveal transforms/opacity changes, and restore instant scrolling.
- Keep the native cursor and scrolling. Avoid heavy parallax, perpetual decorative loops or extra animation dependencies. Decorative arrows have been removed; use text labels for actions.

## Responsive requirements

Custom CSS breakpoints are 1100px and 760px, not Tailwind defaults. Narrow screens use one-column hero/projects/skills/about/contact; project stagger is removed; menu replaces desktop links. Keep buttons at comfortable touch sizes, long text wrapping, and no horizontal page overflow. Verify approximately 320–390px, tablet and desktop widths, including project routes.

## Résumé and projects

Résumé links in Hero and About open /resume.pdf in a new tab with noopener/noreferrer. There is intentionally no résumé link in the navigation and no separate Résumé route or section. Preserve the PDF.

Projects:
1. TaskFlow AI — React, TypeScript, FastAPI, PostgreSQL; lead project in active development. Its claims were checked against the separately maintained `ramprakashyallavula/taskflow.ai` source repository. The portfolio visual uses representative interface content and must not be called a production screenshot.
2. Project Management System — Django, PostgreSQL, AWS, CI/CD.
3. NYC Taxi Data Pipeline — Python, Spark, AWS.
4. Waste Food Management System — Java, Spring Boot, MySQL.
5. Job Recommendation System — Python, NLP.

Project GitHub and Live Demo links are intentionally unavailable while rebuilding. Do not enable them without verified URLs AND explicit owner permission. Footer profile links are separate and remain available. Overviews and architecture summaries reflect portfolio data, not an audit of those projects' repositories.

## Development and verification

- `npm ci`: reproducible dependency installation.
- `npm run dev -- --hostname 127.0.0.1`: local preview.
- `npm run lint`: ESLint.
- `npx tsc --noEmit`: strict type check.
- `npm run build`: production verification (Google font download needs network access).
- `npm run start`: serve an already-built production bundle.
- In this environment the dev server does not reliably pick up file edits (no hot reload). After changing files, restart the dev server (stop, delete `.next`, start) before checking or asking the owner to review.
- Do not run `npm run build` while the dev server is running: it overwrites `.next` and the dev server then serves stale CSS. Stop the dev server, build, delete `.next`, then restart dev.

No test script/framework exists. For UI changes run lint, type check and build, then verify desktop/mobile, menu keyboard behavior, hash navigation, internal project links, résumé response and form labels. Test reduced-motion behavior when browser tooling supports it. Do not claim external form delivery tested without actually doing so.

## Git, deployment and recovery

Never commit, push or deploy without explicit permission. Current user preference is local review before deployment. No checked-in Vercel/Cloudflare settings or GitHub Actions workflow exists; confirm actual integration/branch settings before a release. Do not modify DNS.

Preserve existing user changes. Before major edits, keep a recoverable source copy. The pre-laptop-hero snapshot is `backups/before-laptop-hero.bdkBEi/source.tar.gz`. The pre-colour-redesign snapshot is `backups/before-color-redesign.NQV0cD/source.tar.gz`. The snapshot immediately before the unified light palette, stronger laptop motion, and realistic concept visuals is `backups/before-unified-theme.tVks0L/source.tar.gz`. The snapshot immediately before the cursor sparkles is `backups/before-sparkles.ihzdLF/source.tar.gz`. The snapshot immediately before the illustration animations is `backups/before-illustration-motion.Wh9FcV/source.tar.gz`. The snapshot immediately before the code-drawn project illustrations and compact cards is `backups/before-project-illustrations.gDgJMs/source.tar.gz`. The snapshot immediately before the sea-glass light palette is `backups/before-sea-glass.fpnAT3/source.tar.gz`. The snapshot immediately before the blue-gray light palette is `backups/before-blue-light.WHMgf7/source.tar.gz`. The snapshot immediately before the view-transition theme switch and sand light palette is `backups/before-theme-transition.FtRwVs/source.tar.gz`. The snapshot immediately before the scroll-performance rewrite is `backups/before-scroll-perf.lT1E8Q/source.tar.gz`. The snapshot immediately before the light/dark themes and cursor follower is `backups/before-themes.b9RT7B/source.tar.gz`. The snapshot immediately before the Forest & clay palette and Apple-style motion pass is `backups/before-forest-clay.wk4j2Q/source.tar.gz`. The snapshot immediately before the copy rewrite, calmer palette and scroll interactions is `backups/before-copy-rewrite.PA08Wi/source.tar.gz`. The snapshot immediately before the recruiter-polish pass (chips, profile links, OG image, type scale) is `backups/before-recruiter-polish.Eum3pR/source.tar.gz`. The snapshot immediately before the dark vibrant editorial palette is `backups/before-dark-vibrant.Vp3Bhx/source.tar.gz`; older backups also exist. Archives exclude generated dependencies/build files. To restore, first extract into a separate folder, inspect it and obtain approval before overwriting the working project. Reinstall dependencies from the included lockfile as necessary.

## Limitations and future work

- New styling and routes may not match the public deployment until approved deployment occurs.
- TaskFlow AI now has repository-backed implementation details and a representative interface preview, but no production screenshot or approved public source/demo link. The other projects still lack real screenshots, verified demos, repository evidence, measured outcomes and full technical case studies.
- No automated interaction tests or measured performance audit.
- Formspree delivery depends on its external service. Preserve the owner-provided 24-hour response statement unless asked to change it.
- Font downloads require build-time network access.
- Local source backups are not independent/off-device backups.

Planned, not completed: rebuild the software projects; add real evidence/screenshots/trade-offs; add verified GitHub/demo URLs with permission; improve recruiter-focused descriptions and truthful proof of work as evidence becomes available; continue accessible, responsive, performant refinement for SWE applications.

Copy voice: plain, first-person, specific and conversational. Avoid slogan-style parallel taglines (“X. Y.” pairs), buzzwords and grand claims; never invent facts beyond the project data.

Keep changes scoped and explain significant changes in beginner-friendly language. Do not rebuild the underlying application or replace its integrations unnecessarily.
