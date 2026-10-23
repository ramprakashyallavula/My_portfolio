"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function subscribeTheme(onChange: () => void) {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
}
const readTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

/**
 * Switches theme with a View Transition, like a sunrise or sunset: light rises from the
 * bottom of the screen, night falls from the top (CSS in globals.css). The browser swaps
 * one snapshot for another, so nothing fades element by element. Without View Transition
 * support, or with reduced motion, the switch is instant.
 */
let activeTransition: ViewTransition | null = null;
// The theme most recently asked for; the DOM only catches up once a transition captures its snapshot.
let requestedTheme: Theme | null = null;

function toggleTheme() {
    const root = document.documentElement;
    const theme: Theme = (requestedTheme ?? readTheme()) === "dark" ? "light" : "dark";
    requestedTheme = theme;
    const apply = () => {
        root.dataset.theme = theme;
        try { localStorage.setItem("theme", theme); } catch { /* storage unavailable */ }
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) { apply(); requestedTheme = null; return; }

    // A click mid-transition finishes the current one at once and starts the next.
    activeTransition?.skipTransition();
    root.dataset.themeTransition = theme === "light" ? "sunrise" : "sunset";
    const transition = document.startViewTransition(apply);
    activeTransition = transition;
    transition.finished.finally(() => {
        if (activeTransition !== transition) return;
        activeTransition = null;
        requestedTheme = null;
        delete root.dataset.themeTransition;
    });
}

const links = [{ href: "#projects", label: "Work" }, { href: "#about", label: "About" }, { href: "#skills", label: "Toolkit" }, { href: "#contact", label: "Contact" }];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);
    const themeButton = useRef<HTMLButtonElement>(null);
    const theme = useSyncExternalStore(subscribeTheme, readTheme, () => "dark" as Theme);
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        // While a View Transition runs, the browser sends every click to <html> instead of the
        // element underneath. Catch clicks that land on the toggle's area so it never feels stuck.
        const onClick = (event: MouseEvent) => {
            const button = themeButton.current;
            if (!button || button.contains(event.target as Node)) return;
            const box = button.getBoundingClientRect();
            if (event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom) toggleTheme();
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8);
            if (window.scrollY < window.innerHeight * 0.4) setActive("");
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        // Highlight the link whose section currently sits in the middle band of the viewport.
        const sections = links.map(link => document.querySelector(link.href)).filter((el): el is Element => el !== null);
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }, { rootMargin: "-45% 0px -50% 0px" });
        sections.forEach(section => observer.observe(section));

        return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
    }, []);

    return (
        <header className={`site-header${scrolled ? " is-scrolled" : ""}`} onKeyDown={(event) => {
            if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
        }}>
            <nav className="nav wrap" aria-label="Main navigation">
                <a className="wordmark" href="#" onClick={() => setOpen(false)} aria-label="Ram Prakash Yallavula — home">rpy<span>.</span></a>
                <div className="desktop-links">{links.map(link => <a href={link.href} key={link.href} aria-current={active === link.href ? "true" : undefined}>{link.label}</a>)}</div>
                <button ref={themeButton} type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${nextTheme} theme`} title={`Switch to ${nextTheme} theme`}>{theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}</button>
                <button ref={toggle} type="button" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
            </nav>
            <nav id="mobile-navigation" className={`mobile-links ${open ? "is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open} inert={!open}>
                <div className="mobile-links-clip"><div className="mobile-links-inner">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={active === link.href ? "true" : undefined}>{link.label}</a>)}</div></div>
            </nav>
        </header>
    );
}
