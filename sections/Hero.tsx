"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    useEffect(() => {
        if (!window.location.hash) {
            window.history.scrollRestoration = "manual";
            window.scrollTo(0, 0);
        }
    }, []);
    return (
        <section className="flex min-h-screen items-center justify-center bg-black px-6 text-white md:px-20">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl text-center"
            >
                <p className="mb-5 text-sm uppercase tracking-[0.35em] text-gray-400">
                    Software Engineer
                </p>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Ram Prakash Yallavula
                </h1>


                <p className="<p className=mx-auto mt-6 max-w-3xl text-center text-gray-400">
                    Software Engineer focused on backend systems and scalable applications.

                    I build production-ready APIs, distributed systems, and cloud-based solutions using Java, Python, and AWS.
                </p>
                <p className="<p className= mx-auto mt-4 max-w-xl text-center text-gray-500">
                    Actively seeking Software Engineering roles.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black"
                    >
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black"
                    >
                        View Resume
                    </a>

                    <a
                        href="https://github.com/ramprakashyallavula"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ramprakash-yallavula/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white hover:text-black"
                    >
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </section >
    );
}