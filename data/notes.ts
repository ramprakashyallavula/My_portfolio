/*
 * Short engineering notes. Each one describes real work on this portfolio. Blocks keep the
 * content in plain data so the pages stay simple server components with no markdown parser.
 */

export type NoteBlock =
    | { type: "p"; text: string }
    | { type: "h"; text: string }
    | { type: "code"; text: string }
    | { type: "list"; items: string[] };

export type Note = {
    slug: string;
    title: string;
    summary: string;
    date: string; // ISO date
    readMinutes: number;
    tags: string[];
    blocks: NoteBlock[];
};

export const notes: Note[] = [
    {
        slug: "trackpad-scroll-lag",
        title: "Why my portfolio stuttered on a trackpad",
        summary: "Scrolling was smooth with a mouse wheel and choppy on a trackpad. The fix was moving every scroll effect from JavaScript into CSS.",
        date: "2026-10-23",
        readMinutes: 4,
        tags: ["Performance", "CSS"],
        blocks: [
            { type: "p", text: "After adding scroll animations to this site, I noticed something odd. With an external mouse, scrolling felt fine. With my MacBook trackpad, it felt stuck, especially when I scrolled slowly." },
            { type: "h", text: "What was going on" },
            { type: "p", text: "A mouse wheel scrolls in steps. A trackpad sends a steady stream of tiny scroll updates. Every effect on the page, like the hero laptop tilting, project images scaling and words lighting up, was driven by JavaScript that ran on each of those updates and measured where elements were. With a trackpad that is a lot of work on the main thread, and the browser couldn't keep up." },
            { type: "h", text: "The fix: let the browser do it" },
            { type: "p", text: "CSS now has scroll-driven animations. Instead of listening for scroll events, you tie a normal CSS animation to the scroll position, and the browser runs it off the main thread." },
            { type: "code", text: ".scroll-scale {\n  animation: scale-in linear both;\n  animation-timeline: view();\n  animation-range: entry 0% cover 45%;\n}\n\n@keyframes scale-in {\n  from { transform: scale(.9); opacity: .55; }\n  to   { transform: none; opacity: 1; }\n}" },
            { type: "p", text: "I rewrote every scroll effect this way, including the progress bar and the hero tilt, and wrapped them in @supports so older browsers just show the finished state." },
            { type: "h", text: "The smaller things that helped" },
            { type: "list", items: [
                "Removed the blur behind the sticky header. A backdrop blur has to be redrawn on every scroll step.",
                "Added will-change to the animated layers so the browser keeps them ready on the GPU instead of redrawing them at every size.",
                "Changed a hover effect that animated padding to animate transform instead, so it no longer triggers layout.",
            ] },
            { type: "h", text: "One more lesson" },
            { type: "p", text: "Part of the remaining choppiness turned out to be my setup, not the code. My external monitor is a 1080p panel, and at that setting the page moves in whole, fairly large pixels, so slow scrolls look steppy. On the laptop screen it was smooth. It was a good reminder to test on more than one display before blaming the code." },
        ],
    },
    {
        slug: "sunrise-sunset-theme-switch",
        title: "A sunrise and sunset theme switch",
        summary: "Light rises from the bottom, night comes down from the top. How I built it with the View Transitions API, and the three bugs I hit on the way.",
        date: "2026-10-25",
        readMinutes: 4,
        tags: ["CSS", "View Transitions", "UX"],
        blocks: [
            { type: "p", text: "This site has a light and a dark theme. I wanted switching between them to feel intentional, so the toggle plays a little sunrise or sunset: the light theme rises up from the bottom of the screen, and dark mode comes down from the top." },
            { type: "h", text: "Attempt one: fade every colour" },
            { type: "p", text: "My first version added a short colour transition to every element while the theme changed. It flickered. Text inherits its colour from its parent, so a child was animating toward its parent's in-between colours, which were themselves still changing. My name in the hero visibly jumped through two colours." },
            { type: "h", text: "Attempt two: View Transitions" },
            { type: "p", text: "document.startViewTransition() takes a snapshot of the page, lets you change the DOM, then animates from the old snapshot to the new one. Nothing fades element by element, so there's nothing to flicker. I mask the new snapshot with a soft gradient and move the mask up for sunrise or down for sunset." },
            { type: "code", text: "root.dataset.themeTransition = theme === \"light\" ? \"sunrise\" : \"sunset\";\nconst transition = document.startViewTransition(() => {\n  root.dataset.theme = theme;\n});" },
            { type: "h", text: "Bugs worth knowing about" },
            { type: "list", items: [
                "Clicks didn't register mid-transition. While a view transition runs, the browser sends clicks to the root element, not to the button under your cursor. I catch document clicks inside the toggle's rectangle so the button always responds.",
                "Rapid clicks had to wait. A new click now calls skipTransition() on the running one and starts the next straight away.",
                "Skipping a transition rejects its ready promise, which showed up as a console error. That rejection is expected, so it is handled quietly.",
            ] },
            { type: "p", text: "With reduced motion turned on, or in a browser without View Transitions, the theme simply switches instantly." },
        ],
    },
    {
        slug: "illustrations-in-code",
        title: "Drawing project illustrations in code",
        summary: "I replaced generated images with small SVG illustrations that use the site's colour tokens and act out each project on hover.",
        date: "2026-10-26",
        readMinutes: 3,
        tags: ["SVG", "Design"],
        blocks: [
            { type: "p", text: "My project cards used to have AI-generated concept images. They were big, noisy, and didn't say anything about what the projects actually do. I replaced them with small diagrams drawn in SVG." },
            { type: "h", text: "Why SVG in code" },
            { type: "list", items: [
                "They follow the theme. Every fill comes from CSS classes that read the same colour tokens as the rest of the site, so they switch with light and dark mode.",
                "They stay sharp at any size and weigh almost nothing compared with large PNGs.",
                "They show the idea of each project: a role-based task board, a Spark pipeline, a donation workflow, a résumé being matched to jobs.",
            ] },
            { type: "h", text: "Making them move" },
            { type: "p", text: "The resting drawing is the default. On hover, CSS keyframes act out the project: a task card travels across the board and gets ticked off, Spark workers light up in turn, donation steps tick off in order, match bars fill from best to weakest. On each project's own page the animation loops, so people on phones see it too." },
            { type: "code", text: ".work-item-card:hover .ill-a-move {\n  animation: ill-move 4.2s cubic-bezier(.65, 0, .35, 1) infinite;\n}" },
            { type: "p", text: "Everything is gated behind prefers-reduced-motion, and the drawings are marked decorative, so screen readers skip them and get the project text instead." },
        ],
    },
];

export const sortedNotes = [...notes].sort((a, b) => b.date.localeCompare(a.date));

export function formatNoteDate(iso: string) {
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}
