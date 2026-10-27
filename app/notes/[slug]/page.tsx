import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { formatNoteDate, notes, sortedNotes } from "@/data/notes";

type NotePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
    const { slug } = await params;
    const note = notes.find((item) => item.slug === slug);
    if (!note) return { title: "Note not found" };
    return {
        title: note.title,
        description: note.summary,
        alternates: { canonical: `/notes/${note.slug}` },
        openGraph: { title: `${note.title} | Ram Prakash Yallavula`, description: note.summary, url: `/notes/${note.slug}`, type: "article", publishedTime: note.date },
    };
}

export default async function NotePage({ params }: NotePageProps) {
    const { slug } = await params;
    const note = notes.find((item) => item.slug === slug);
    if (!note) notFound();
    const others = sortedNotes.filter((item) => item.slug !== note.slug).slice(0, 2);

    return (
        <main id="main-content" tabIndex={-1} className="note-page wrap">
            <Link href="/notes" className="case-back"><ArrowLeft size={16} aria-hidden="true" /> All notes</Link>
            <article className="note-article">
                <header>
                    <span className="note-meta"><time dateTime={note.date}>{formatNoteDate(note.date)}</time> · {note.readMinutes} min read</span>
                    <h1>{note.title}</h1>
                    <p className="note-summary">{note.summary}</p>
                    <ul className="tech-chips" aria-label="Topics">{note.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                </header>
                <div className="note-body">
                    {note.blocks.map((block, index) => {
                        if (block.type === "h") return <h2 key={index}>{block.text}</h2>;
                        if (block.type === "code") return <pre key={index}><code>{block.text}</code></pre>;
                        if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
                        return <p key={index}>{block.text}</p>;
                    })}
                </div>
            </article>
            {others.length > 0 && (
                <nav className="case-pager" aria-label="More notes">
                    {others.map((item, index) => (
                        <Link key={item.slug} href={`/notes/${item.slug}`}><span className="eyebrow">{index === 0 ? "Another note" : "And another"}</span>{item.title}</Link>
                    ))}
                </nav>
            )}
        </main>
    );
}
