"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent } from "react";
import Reveal from "@/sections/Reveal";
import styles from "./Hero.module.css";

const spring = { stiffness: 82, damping: 18, mass: 0.72 };

export default function Hero() {
    const reducedMotion = useReducedMotion();
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);
    const rotateX = useSpring(0, spring);
    const rotateY = useSpring(0, spring);

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
        x.set(horizontal * 34);
        y.set(vertical * 24);
        rotateX.set(vertical * -10);
        rotateY.set(horizontal * 15);
    }

    return (
        <section className={styles.hero} aria-labelledby="intro-title" onPointerMove={moveScene} onPointerLeave={resetMotion} onPointerCancel={resetMotion}>
            <motion.div className={styles.light} aria-hidden="true" style={reducedMotion ? undefined : { x, y }} />
            <div className={`wrap ${styles.inner}`}>
                <div className={styles.topline}>
                    <span className="eyebrow">Software engineer</span>
                    <span className={styles.availability}><i /> Open to opportunities</span>
                </div>
                <div className={styles.composition}>
                    <Reveal className={styles.copy}>
                        <p className={styles.hello}>Hello, I’m</p>
                        <h1 id="intro-title">Ram Prakash<br /><em>Yallavula.</em></h1>
                        <p className={styles.statement}>Thoughtful code.<br />Useful things.</p>
                        <p className={styles.description}>I build backend systems, data pipelines, and web applications. Curious about the details. Focused on making the pieces work together.</p>
                        <div className={styles.actions}>
                            <a href="#projects" className="button button-dark">Explore my work</a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-link">View résumé</a>
                        </div>
                    </Reveal>
                    <Reveal className={styles.visual} delay={0.12}>
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
                                            <div className={styles.editorFooter}><span>TypeScript</span><span>Ideas in progress</span></div>
                                        </div>
                                    </div>
                                    <div className={styles.base}><div className={styles.notch} /></div>
                                </div>
                            </motion.div>
                        </div>
                    </Reveal>
                </div>
                <div className={styles.bottom}><span>Backend · Data · Web</span><a href="#projects">Scroll to discover<span className={styles.scrollMark} aria-hidden="true" /></a></div>
            </div>
        </section>
    );
}
