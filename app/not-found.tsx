import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** Little map: a dot follows the route, takes a wrong turn and ends at a "?" pin. Decorative. */
function LostMap() {
    return (
        <svg className="lost-map" viewBox="0 0 420 260" aria-hidden="true">
            <g className="lost-grid">
                {Array.from({ length: 8 }, (_, i) => <line key={`v${i}`} x1={20 + i * 55} y1="0" x2={i * 55 - 10} y2="260" />)}
                {Array.from({ length: 5 }, (_, i) => <line key={`h${i}`} x1="0" y1={30 + i * 52} x2="420" y2={i * 52 + 18} />)}
            </g>
            <path className="lost-route" d="M40 210 C 100 210, 110 140, 170 140 S 250 70, 300 90" />
            <path className="lost-wrong" d="M300 90 C 330 100, 340 150, 360 175" />
            <circle className="lost-start" cx="40" cy="210" r="7" />
            <g className="lost-pin">
                <path d="M360 128c-14 0-24 10-24 23 0 17 24 36 24 36s24-19 24-36c0-13-10-23-24-23Z" />
                <text x="360" y="159" textAnchor="middle">?</text>
            </g>
            <circle className="lost-dot" r="6">
                <animateMotion dur="3.6s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.75;1" calcMode="spline" keySplines=".65 0 .35 1;0 0 1 1" path="M40 210 C 100 210, 110 140, 170 140 S 250 70, 300 90 C 330 100, 340 150, 360 175" />
            </circle>
        </svg>
    );
}

export default function NotFound() {
    return (
        <main id="main-content" tabIndex={-1} className="not-found wrap">
            <div className="not-found-copy">
                <span className="eyebrow">404 / Page not found</span>
                <h1><span className="lost-digits" aria-hidden="true"><span>4</span><span>0</span><span>4</span></span>This page<br /><em>doesn’t exist.</em></h1>
                <p>Looks like a wrong turn. It may have moved, or the link might be wrong.</p>
                <div className="not-found-actions">
                    <Link href="/" className="button button-dark"><ArrowLeft size={18} aria-hidden="true" /> Back to home</Link>
                    <Link href="/#projects" className="text-link">See my projects</Link>
                    <Link href="/notes" className="text-link">Read my notes</Link>
                </div>
            </div>
            <LostMap />
        </main>
    );
}
