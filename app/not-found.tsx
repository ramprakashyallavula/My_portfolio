import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main id="main-content" tabIndex={-1} className="not-found wrap">
            <span className="eyebrow">404 / Page not found</span>
            <h1>This page<br /><em>doesn’t exist.</em></h1>
            <p>It may have moved, or the link might be wrong.</p>
            <Link href="/" className="button button-dark"><ArrowLeft size={18} aria-hidden="true" /> Back to home</Link>
        </main>
    );
}
