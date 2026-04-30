"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">

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


                <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl">
                    I build scalable web applications with clean frontend experiences,
                    robust backend systems, and cloud-based architectures.
                </p>

                <p className="mt-4 text-gray-500 max-w-xl leading-7">
                    Focused on building production-ready systems using modern technologies
                    across the full stack.
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
        </section>
    );
}