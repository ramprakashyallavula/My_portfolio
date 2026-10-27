"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const shortcuts = [
    { key: "T", label: "Switch light / dark theme" },
    { key: "P", label: "Jump to projects" },
    { key: "E", label: "Jump to experience" },
    { key: "C", label: "Jump to contact" },
    { key: "N", label: "Open notes" },
    { key: "H", label: "Back to the top" },
    { key: "?", label: "Show these shortcuts" },
];

const sections: Record<string, string> = { p: "projects", e: "experience", c: "contact" };

/** Single-key shortcuts. Ignored while typing, with modifier keys, or when a dialog is open. */
export default function KeyboardShortcuts() {
    const router = useRouter();
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.metaKey || event.ctrlKey || event.altKey || event.defaultPrevented) return;
            const target = event.target;
            if (target instanceof Element && target.closest("input, textarea, select, [contenteditable='true']")) return;
            if (dialog.current?.open && event.key !== "?") return;

            const key = event.key.toLowerCase();
            const go = (id: string) => {
                const el = document.getElementById(id);
                if (el) { history.pushState(null, "", `#${id}`); el.scrollIntoView(); el.focus?.({ preventScroll: true }); }
                else router.push(`/#${id}`);
            };

            if (event.key === "?") { event.preventDefault(); if (dialog.current?.open) dialog.current.close(); else dialog.current?.showModal(); }
            else if (key === "t") (document.querySelector(".theme-toggle") as HTMLButtonElement | null)?.click();
            else if (sections[key]) { event.preventDefault(); go(sections[key]); }
            else if (key === "n") router.push("/notes");
            else if (key === "h") { if (location.pathname === "/") window.scrollTo({ top: 0 }); else router.push("/"); }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [router]);

    return (
        <dialog ref={dialog} className="shortcuts-dialog" aria-labelledby="shortcuts-title" onClick={(event) => { if (event.target === dialog.current) dialog.current?.close(); }}>
            <div className="shortcuts-panel">
                <h2 id="shortcuts-title">Keyboard shortcuts</h2>
                <dl>{shortcuts.map((item) => <div key={item.key}><dt><kbd>{item.key}</kbd></dt><dd>{item.label}</dd></div>)}</dl>
                <button type="button" className="button button-dark" onClick={() => dialog.current?.close()}>Close</button>
            </div>
        </dialog>
    );
}
