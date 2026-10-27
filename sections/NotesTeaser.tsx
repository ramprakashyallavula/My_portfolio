import Link from "next/link";
import { formatNoteDate, sortedNotes } from "@/data/notes";
import Reveal from "@/sections/Reveal";

export default function NotesTeaser() {
    return (
        <section id="notes" className="notes-teaser wrap" aria-labelledby="notes-teaser-title">
            <Reveal className="notes-teaser-head">
                <span className="eyebrow">Notes</span>
                <h2 id="notes-teaser-title">Things I built,<br /><em>broke and fixed.</em></h2>
                <Link className="text-link" href="/notes">Read all notes</Link>
            </Reveal>
            <ol className="notes-teaser-list">
                {sortedNotes.slice(0, 3).map((note, index) => (
                    <Reveal key={note.slug} delay={index * 0.08}>
                        <li>
                            <span className="note-meta">{formatNoteDate(note.date)} · {note.readMinutes} min</span>
                            <h3><Link href={`/notes/${note.slug}`}>{note.title}</Link></h3>
                            <p>{note.summary}</p>
                        </li>
                    </Reveal>
                ))}
            </ol>
        </section>
    );
}
