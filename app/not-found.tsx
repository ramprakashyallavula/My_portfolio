import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main id="main-content" tabIndex={-1} className="not-found wrap">
            <span className="eyebrow">404 / A small detour</span>
            <h1>Nothing here.<br /><em>Plenty over there.</em></h1>
            <p>This page may have moved, or the project may not exist yet.</p>
            <Link href="/" className="button button-dark"><ArrowLeft size={18} aria-hidden="true" /> Back to the portfolio</Link>
        </main>
    );
}
