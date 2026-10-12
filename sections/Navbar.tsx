"use client";

import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";

const links = [{ href: "#projects", label: "Work" }, { href: "#about", label: "About" }, { href: "#skills", label: "Toolkit" }, { href: "#contact", label: "Contact" }];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);
    return (
        <header className="site-header" onKeyDown={(event) => {
            if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
        }}>
            <nav className="nav wrap" aria-label="Main navigation">
                <a className="wordmark" href="#" onClick={() => setOpen(false)} aria-label="Ram Prakash Yallavula — home">rpy<span>.</span></a>
                <div className="desktop-links">{links.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</div>
                <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
                <button ref={toggle} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
            </nav>
            <nav id="mobile-navigation" className={`mobile-links ${open ? "is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open} inert={!open}>
                <div className="mobile-links-clip"><div className="mobile-links-inner">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</div></div>
            </nav>
        </header>
    );
}
