import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatNoteDate, sortedNotes } from "@/data/notes";
import Reveal from "@/sections/Reveal";

export const metadata: Metadata = {
    title: "Notes",
    description: "Short engineering notes from Ram Prakash Yallavula on things I built, broke and fixed.",
    alternates: { canonical: "/notes" },
};

export default function NotesPage() {
    return (
        <main id="main-content" tabIndex={-1} className="notes-page wrap">
            <Link href="/" className="case-back"><ArrowLeft size={16} aria-hidden="true" /> Back home</Link>
            <Reveal className="notes-heading">
                <span className="eyebrow">Notes</span>
                <h1>Things I built,<br /><em>broke and fixed.</em></h1>
                <p>Short write-ups about problems I ran into while building, and what I learned from them.</p>
            </Reveal>
            <ol className="notes-list">
                {sortedNotes.map((note, index) => (
                    <Reveal key={note.slug} delay={index * 0.06}>
                        <li className="note-card">
                            <span className="note-meta">{formatNoteDate(note.date)} · {note.readMinutes} min read</span>
                            <h2><Link href={`/notes/${note.slug}`}>{note.title}</Link></h2>
                            <p>{note.summary}</p>
                            <ul className="tech-chips" aria-label="Topics">{note.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                        </li>
                    </Reveal>
                ))}
            </ol>
        </main>
    );
}
