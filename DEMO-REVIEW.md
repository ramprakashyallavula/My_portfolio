# Demo review: feature pack

Branch: `demo/feature-pack` (local only, not pushed, not deployed). The live site still runs `main`.

## How to view it

The demo is being served at **http://127.0.0.1:3000**. If that page doesn't load (for example after a restart), run this in the project folder:

```bash
git switch demo/feature-pack && npm run build && npm run start -- --hostname 127.0.0.1
```

## What to check

1. **Summary line**: under "I build web apps and the systems behind them" in the hero.
2. **Background section** (`#experience`): education, AICTE internship and certifications, all taken from `public/resume.pdf`.
3. **Case studies**: open any project. Each page now has The problem, By the numbers, How I built it, Decisions worth explaining and What's next.
4. **TaskFlow AI screenshots**: on its project page. They are real screenshots of the app running locally with sample data (user "Alex Rivera", made-up tasks).
5. **jobs.rp**: the Job Recommendation System is updated to the rebuilt version (Spring Boot API + Python matcher + Next.js), using its README and evaluation report. "JobLens" appears nowhere.
6. **Copy email**: the "Copy" button next to your email in Contact.
7. **Notes**: a new section on the homepage plus `/notes` with three posts about real work on this site. Please read them; they are written in your voice.
8. **Keyboard shortcuts**: press `?` on any page. `T` theme, `P` projects, `E` experience, `C` contact, `N` notes, `H` top.
9. **Project page transition**: click a project card. Its image morphs into the big image on the project page.
10. **404 page**: visit http://127.0.0.1:3000/anything.
11. **Next.js 16.4.3**: upgraded from 16.2.4; `npm audit` reports 0 vulnerabilities.

## Things that need your input

- **Check the facts.** Everything comes from your résumé and your project repos, but please confirm the dates, the AICTE internship text and the certifications are how you want them shown.
- **jobs.rp screenshots**: the screenshots in that repo still show the old JobLens branding, so I left them out. If you have screenshots with the jobs.rp name, I can add them.
- **CitiBike Demand Forecasting**: it's on your résumé (3 ML pipelines, live Streamlit dashboard) but not on the site. Want it added as a project?
- **Live links**: jobs.rp's README mentions deploying to Vercel and Render. If it's live and you want it linked, send me the URL.
- **Numbers for the other projects**: the Project Management System, the taxi pipeline and the Waste Food Management System have no measured results yet. Real figures (data size, run time, users, tests) would make those case studies much stronger.
- **Notes**: edit or remove any post you don't feel matches your voice.

## To ship it

Tell me "deploy the demo" and I'll merge `demo/feature-pack` into `main` and push, which publishes it through Vercel.
