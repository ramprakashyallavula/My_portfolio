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

- `app/layout.tsx`: global styles, fonts, metadata, skip link, profile JSON-LD. Its data-scroll-behavior attribute lets Next manage smooth-scroll behavior during route transitions.
- `app/page.tsx`: Navbar, Hero, Projects, EngineeringApproach, Skills, Timeline, About, Now, Contact, Footer. Navigation/footer sit outside the main landmark.
- `app/globals.css`: design tokens, custom semantic CSS classes, responsive rules, focus and reduced-motion styles; retains Tailwind import.
- `app/projects/[slug]/page.tsx`: static project overviews from shared data; Promise-based route params; unknown slugs call notFound.
- `app/not-found.tsx`: branded 404.
- `app/manifest.ts`, `robots.ts`, `sitemap.ts`: site metadata and route discovery.
- `data/portfolio.ts`: project descriptions, technologies, focus, architecture summaries, skill groups and engineering principles. Legacy gradient fields are currently unused.
- `sections/`: homepage sections and shared presentation components, described below.
- `public/resume.pdf`: résumé served at /resume.pdf; starter SVG assets also remain.
- Root configs: next.config.ts, tsconfig.json, eslint.config.mjs, postcss.config.mjs, package.json/package-lock.json.
- `backups/`: local recovery copies; do not delete or deploy them accidentally.

Use the `@/*` root alias. Prefer Server Components; client boundaries currently belong to Navbar (menu state), Hero (pointer-responsive motion), Reveal (motion), and Contact (Formspree). Server-rendered sections can pass content into Reveal.

## Important components

- Hero: full-name introduction, work/résumé actions and a CSS laptop illustration. Hero.module.css owns its multicolour background and responsive layout; it fills at least the opening viewport below the header, without clipping content.
- Navbar: sticky header, desktop anchors, keyboard-accessible mobile menu. Escape closes and returns focus; selecting a link closes the menu.
- Projects: four data-driven, staggered project tiles linking to internal overviews.
- ProjectArtwork: responsive Next Image presentation for four generated conceptual PNGs in `public/projects/`. These are explicitly labelled concept visuals and are NOT product screenshots. The source mapping uses project order/index, so update it if project data is reordered.
- Reveal: reusable, once-in-view 20px/fade entrance. Content remains visible in server HTML.
- EngineeringApproach: three numbered principles on a lavender/seafoam/peach background.
- Skills: Interfaces, Backend, Cloud & delivery, Data & systems.
- Timeline: undated learning progression, not an employment history.
- About: personal narrative, project-based proof of work, decorative initials poster, résumé link.
- Now: current rebuilding/learning/job-search direction.
- Contact: labelled Formspree form, submitting/errors/success states and email link. Preserve endpoint mgodwrjl. Do not send test submissions without permission.
- Footer: year, profile links, back-to-top.
- SectionHeading: legacy unused helper from the previous design; it does not drive current headings.

## Design and styling

The owner explicitly requested a vibrant, dark editorial redesign. Preserve the CURRENT direction, not the superseded light pastel design or the older dark/cyan dashboard:

- Graphite and midnight foundations use controlled ember-orange, coral, violet and teal glows. Primary text is warm off-white, with muted lavender-gray copy. Avoid a flat black background, plain white/ivory sections, or a monochrome dark/cyan dashboard.
- Oversized tight sans headings, selective italic serif emphasis, small monospaced labels.
- Generous whitespace, asymmetric project grid, bold colour bands, restrained corners and thin rules.
- Custom class-based styling in globals.css is now the main convention. Tailwind remains installed.
- Project art uses locally stored generated concept images, with no remote image dependency. Keep the “Concept visual” label and do not represent these images as real product screenshots.
- Keep contrast, visible keyboard focus, semantic headings and accessible names. Decorative art is aria-hidden.

## Navigation and motion

Native anchor scrolling targets #projects, #approach, #skills, #journey, #about, #now and #contact. Preserve IDs, hash deep links, and back/forward behavior. Do not reset scroll unconditionally or add scroll hijacking. Header is sticky; scroll-padding-top matches `--header-height` (85px desktop, 71px mobile) so each destination starts directly below it. Project navigation uses Next Link.

Motion is purposeful, not continuous:
- Reveal uses Framer Motion, 0.75-second ease-out, once in view, short stagger on project pairs.
- Project artwork gently scales and buttons lift. Hero laptop tilt and translation respond to fine mouse movement with damped springs, reset on pointer leave/cancel, and are disabled for touch/reduced motion. No continuous animation loop.
- Mobile menu uses CSS grid-row/opacity transitions, with inert and aria-hidden while closed.
- Reduced-motion preferences disable CSS transitions/animations and Reveal transforms/opacity changes, and restore instant scrolling.
- Keep the native cursor and scrolling. Avoid heavy parallax, perpetual decorative loops or extra animation dependencies. Decorative arrows have been removed; use text labels for actions.

## Responsive requirements

Custom CSS breakpoints are 1100px and 760px, not Tailwind defaults. Narrow screens use one-column hero/projects/skills/about/contact; project stagger is removed; menu replaces desktop links. Keep buttons at comfortable touch sizes, long text wrapping, and no horizontal page overflow. Verify approximately 320–390px, tablet and desktop widths, including project routes.

## Résumé and projects

Résumé links in navigation, Hero and About open /resume.pdf in a new tab with noopener/noreferrer. There is no separate Résumé route or section. Preserve the PDF.

Projects:
1. Project Management System — Django, PostgreSQL, AWS, CI/CD.
2. NYC Taxi Data Pipeline — Python, Spark, AWS.
3. Waste Food Management System — Java, Spring Boot, MySQL.
4. Job Recommendation System — Python, NLP.

Project GitHub and Live Demo links are intentionally unavailable while rebuilding. Do not enable them without verified URLs AND explicit owner permission. Footer profile links are separate and remain available. Overviews and architecture summaries reflect portfolio data, not an audit of those projects' repositories.

## Development and verification

- `npm ci`: reproducible dependency installation.
- `npm run dev -- --hostname 127.0.0.1`: local preview.
- `npm run lint`: ESLint.
- `npx tsc --noEmit`: strict type check.
- `npm run build`: production verification (Google font download needs network access).
- `npm run start`: serve an already-built production bundle.

No test script/framework exists. For UI changes run lint, type check and build, then verify desktop/mobile, menu keyboard behavior, hash navigation, internal project links, résumé response and form labels. Test reduced-motion behavior when browser tooling supports it. Do not claim external form delivery tested without actually doing so.

## Git, deployment and recovery

Never commit, push or deploy without explicit permission. Current user preference is local review before deployment. No checked-in Vercel/Cloudflare settings or GitHub Actions workflow exists; confirm actual integration/branch settings before a release. Do not modify DNS.

Preserve existing user changes. Before major edits, keep a recoverable source copy. The pre-laptop-hero snapshot is `backups/before-laptop-hero.bdkBEi/source.tar.gz`. The pre-colour-redesign snapshot is `backups/before-color-redesign.NQV0cD/source.tar.gz`. The snapshot immediately before the unified light palette, stronger laptop motion, and realistic concept visuals is `backups/before-unified-theme.tVks0L/source.tar.gz`. The snapshot immediately before the dark vibrant editorial palette is `backups/before-dark-vibrant.Vp3Bhx/source.tar.gz`; older backups also exist. Archives exclude generated dependencies/build files. To restore, first extract into a separate folder, inspect it and obtain approval before overwriting the working project. Reinstall dependencies from the included lockfile as necessary.

## Limitations and future work

- New styling and routes may not match the public deployment until approved deployment occurs.
- No real project screenshots, verified demos, repository evidence, measured outcomes or full technical case studies yet.
- No automated interaction tests or measured performance audit.
- Formspree delivery depends on its external service. Preserve the owner-provided 24-hour response statement unless asked to change it.
- Font downloads require build-time network access.
- Local source backups are not independent/off-device backups.

Planned, not completed: rebuild the software projects; add real evidence/screenshots/trade-offs; add verified GitHub/demo URLs with permission; improve recruiter-focused descriptions and truthful proof of work as evidence becomes available; continue accessible, responsive, performant refinement for SWE applications.

Keep changes scoped and explain significant changes in beginner-friendly language. Do not rebuild the underlying application or replace its integrations unnecessarily.
