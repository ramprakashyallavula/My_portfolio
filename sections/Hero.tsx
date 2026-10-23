"use client";

import { MotionConfig, motion, useReducedMotion, useSpring } from "framer-motion";
import { Mail } from "lucide-react";
import type { PointerEvent } from "react";
import { Github, Linkedin } from "@/sections/BrandIcons";
import { Magnetic } from "@/sections/ScrollEffects";
import styles from "./Hero.module.css";

// Damped spring: the laptop follows the cursor noticeably but settles smoothly.
const spring = { stiffness: 60, damping: 20, mass: 0.9 };
const ease = [0.22, 1, 0.36, 1] as const;

/** Page-load entrance: each hero item rises in, one after another. */
function Rise({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
    return (
        <motion.div className={className} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay, ease }}>
            {children}
        </motion.div>
    );
}

/** Headline line that slides up from behind a mask. */
function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
    return (
        <span className={styles.lineMask}>
            <motion.span className={styles.line} initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay, ease }}>{children}</motion.span>
        </span>
    );
}

export default function Hero() {
    const reducedMotion = useReducedMotion();
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);
    const rotateX = useSpring(0, spring);
    const rotateY = useSpring(0, spring);
    // Scrolling away tilts the laptop back and fades the copy; that is a CSS scroll timeline in Hero.module.css.

    function resetMotion() {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    }

    function moveScene(event: PointerEvent<HTMLElement>) {
        if (reducedMotion || event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const horizontal = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
        const vertical = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
        x.set(horizontal * 22);
        y.set(vertical * 15);
        rotateX.set(vertical * -7);
        rotateY.set(horizontal * 10);
    }

    return (
        <MotionConfig reducedMotion="user">
        <section className={styles.hero} aria-labelledby="intro-title" onPointerMove={moveScene} onPointerLeave={resetMotion} onPointerCancel={resetMotion}>
            <motion.div className={styles.light} aria-hidden="true" style={reducedMotion ? undefined : { x, y }} />
            <div className={`wrap ${styles.inner}`}>
                <Rise className={styles.topline} delay={0}>
                    <span className="eyebrow">Software engineer</span>
                    <span className={styles.availability}><i /> Open to new roles</span>
                </Rise>
                <div className={styles.composition}>
                    <div className={styles.copy}>
                        <Rise delay={0.1}><p className={styles.hello}>Hi, I’m</p></Rise>
                        <h1 id="intro-title"><Line delay={0.2}>Ram Prakash</Line><Line delay={0.32}><em>Yallavula.</em></Line></h1>
                        <Rise delay={0.55}><p className={styles.statement}>I build web apps and<br />the systems behind them.</p></Rise>
                        <Rise delay={0.68}><p className={styles.description}>Mostly React and TypeScript on the frontend, Python and Java on the backend, and AWS to run it all. Right now I’m building TaskFlow AI, a task planner with a FastAPI backend.</p></Rise>
                        <Rise delay={0.8} className={styles.actions}>
                            <Magnetic><a href="#projects" className="button button-dark">See my projects</a></Magnetic>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-link">View résumé<span className="sr-only"> (PDF, opens in a new tab)</span></a>
                        </Rise>
                        <Rise delay={0.92}><ul className={styles.profiles} aria-label="Profiles">
                            <li><a href="https://github.com/ramprakashyallavula" target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" />GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/ramprakash-yallavula/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true" />LinkedIn</a></li>
                            <li><a href="mailto:yallavularamprakash@gmail.com"><Mail size={16} aria-hidden="true" />Email</a></li>
                        </ul></Rise>
                    </div>
                    <motion.div className={styles.visual} initial={{ opacity: 0, y: 60, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.2, delay: 0.35, ease }}>
                        <div className={styles.scene} aria-hidden="true">
                            <div className={styles.halo} />
                            <motion.div className={styles.laptopMotion} style={reducedMotion ? undefined : { x, y, rotateX, rotateY }}>
                                <div className={styles.laptop}>
                                    <div className={styles.screen}>
                                        <div className={styles.camera} />
                                        <div className={styles.editor}>
                                            <div className={styles.toolbar}><div><i /><i /><i /></div><span>hello-world.ts</span></div>
                                            <div className={styles.editorBody}>
                                                <div className={styles.lineNumbers}>01<br />02<br />03<br />04<br />05<br />06<br />07</div>
                                                <div className={styles.code}>
                                                    <span className={styles.comment}>{"// a little about me"}</span><br />
                                                    <span className={styles.purple}>const</span> engineer = {"{"}<br />
                                                    {"  "}name: <span className={styles.green}>&quot;Ram Prakash&quot;</span>,<br />
                                                    {"  "}focus: [<br />
                                                    {"    "}<span className={styles.green}>&quot;systems&quot;</span>, <span className={styles.green}>&quot;data&quot;</span><br />
                                                    {"  "}]<br />
                                                    {"}"};<span className={styles.caret} />
                                                </div>
                                            </div>
                                            <div className={styles.editorFooter}><span>TypeScript</span><span>main</span></div>
                                        </div>
                                    </div>
                                    <div className={styles.base}><div className={styles.notch} /></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <Rise className={styles.bottom} delay={1.05}><span>Backend · Data · Web</span><a href="#projects">Projects below<span className={styles.scrollMark} aria-hidden="true" /></a></Rise>
            </div>
        </section>
        </MotionConfig>
    );
}
