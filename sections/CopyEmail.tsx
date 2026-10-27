"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export const EMAIL = "yallavularamprakash@gmail.com";

/** One-click copy of the email address, with a short "Copied" confirmation. */
export default function CopyEmail({ className = "" }: { className?: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = window.setTimeout(() => setCopied(false), 2000);
        return () => window.clearTimeout(timer);
    }, [copied]);

    async function copy() {
        try {
            await navigator.clipboard.writeText(EMAIL);
        } catch {
            // Older browsers or blocked clipboard: fall back to a temporary text selection.
            const field = document.createElement("textarea");
            field.value = EMAIL;
            field.setAttribute("readonly", "");
            field.style.position = "fixed";
            field.style.opacity = "0";
            document.body.appendChild(field);
            field.select();
            document.execCommand("copy");
            field.remove();
        }
        setCopied(true);
    }

    return (
        <button type="button" className={`copy-email${copied ? " is-copied" : ""} ${className}`} onClick={copy} aria-label={copied ? "Email copied" : "Copy email address"}>
            {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
            <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
            <span className="sr-only" role="status" aria-live="polite">{copied ? "Email address copied to clipboard" : ""}</span>
        </button>
    );
}
