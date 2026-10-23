"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { Fragment, useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/*
 * Scroll-linked effects below are plain elements animated by CSS scroll timelines
 * (animation-timeline in globals.css). The browser runs them off the main thread, so
 * trackpad scrolling stays smooth; browsers without support simply show the end state.
 */

/** Thin accent bar along the top edge showing how far down the page you are. */
export function ScrollProgress() {
    return <div className="scroll-progress" aria-hidden="true" />;
}

// Sparkles appear everywhere except over project images and the contact form (owner's call).
const content = [".project-art", ".project-visual-link", ".case-cover", ".contact-form", "input", "textarea", "select"].join(", ");
const tones = ["var(--accent)", "var(--sand)", "var(--sage)", "var(--sky)"];
const maxSparkles = 14;

/**
 * Tiny four-point sparkles that twinkle where the mouse moves, except over project images and the form.
 * Plain DOM nodes (no React re-renders), capped in number and spaced by distance.
 * The native cursor stays. Skipped for touch and reduced motion.
 */
export function CursorSparkles() {
    const layer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
        const host = layer.current;
        if (!host) return;
        let lastX = 0, lastY = 0, last = 0;

        const move = (event: PointerEvent) => {
            if (!media.matches || event.pointerType !== "mouse") return;
            const now = performance.now();
            const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
            if (distance < 26 || now - last < 40 || host.childElementCount >= maxSparkles) return;
            // Check every layer under the pointer: card-wide link overlays sit on top of the images.
            if (document.elementsFromPoint(event.clientX, event.clientY).some((el) => el.matches(content))) return;
            lastX = event.clientX; lastY = event.clientY; last = now;

            const sparkle = document.createElement("span");
            const size = 7 + Math.random() * 9;
            sparkle.className = "cursor-sparkle";
            sparkle.style.cssText = `left:${event.clientX + (Math.random() - 0.5) * 18}px;top:${event.clientY + (Math.random() - 0.5) * 18}px;width:${size}px;height:${size}px;background:${tones[Math.floor(Math.random() * tones.length)]};--spin:${(Math.random() - 0.5) * 120}deg;--drift:${-8 - Math.random() * 14}px`;
            sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
            host.appendChild(sparkle);
        };

        window.addEventListener("pointermove", move, { passive: true });
        return () => { window.removeEventListener("pointermove", move); host.replaceChildren(); };
    }, []);

    return <div ref={layer} className="cursor-sparkles" aria-hidden="true" />;
}

/** Scales a block up into place as it scrolls into view, and back down as it leaves. */
export function ScrollScale({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={`scroll-scale${className ? ` ${className}` : ""}`}>{children}</div>;
}

/** Lights text up word by word as it scrolls through the viewport. */
export function ScrollHighlight({ text, className }: { text: string; className?: string }) {
    const words = text.split(" ");
    return (
        <p className={`scroll-highlight${className ? ` ${className}` : ""}`} aria-label={text}>
            <span aria-hidden="true">{words.map((word, index) => (
                <Fragment key={index}><span className="hl-word" style={{ "--p": index / words.length } as CSSProperties}>{word}</span>{" "}</Fragment>
            ))}</span>
        </p>
    );
}

/** Pulls its child slightly toward a mouse cursor hovering over it. */
export function Magnetic({ children, strength = 10 }: { children: ReactNode; strength?: number }) {
    const reduced = useReducedMotion();
    const x = useSpring(0, { stiffness: 180, damping: 15, mass: 0.4 });
    const y = useSpring(0, { stiffness: 180, damping: 15, mass: 0.4 });
    return (
        <motion.span
            className="magnetic"
            style={reduced ? undefined : { x, y }}
            onPointerMove={(event) => {
                if (reduced || event.pointerType !== "mouse") return;
                const bounds = event.currentTarget.getBoundingClientRect();
                x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * strength * 2);
                y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * strength * 2);
            }}
            onPointerLeave={() => { x.set(0); y.set(0); }}
        >
            {children}
        </motion.span>
    );
}

/** Rotates decorative marks as their section scrolls past. */
export function ScrollSpin({ children, className, turns = 0.5 }: { children: ReactNode; className?: string; turns?: number }) {
    return <span className={`scroll-spin${className ? ` ${className}` : ""}`} style={{ "--turns": turns } as CSSProperties} aria-hidden="true">{children}</span>;
}
