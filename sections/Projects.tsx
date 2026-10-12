"use client";

import { motion, useReducedMotion } from "framer-motion";

const projects = [
    {
        title: "Project Management System",
        description:
            "Full-stack task-management platform with authentication, role-based access, and task tracking. Deployed on AWS with CI/CD pipelines.",
        tech: "Django · PostgreSQL · AWS",
        github: "#",
        live: "#",
        gradient: "from-blue-900/40 via-black to-purple-900/30",
    },
    {
        title: "NYC Taxi Data Pipeline",
        description:
            "Data pipeline for processing large-scale NYC taxi datasets with distributed Spark workloads on AWS.",
        tech: "Python · Spark · AWS",
        github: "#",
        live: "#",
        gradient: "from-green-900/40 via-black to-blue-900/30",
    },
    {
        title: "Waste Food Management System",
        description:
            "Backend system designed to organize food-donation workflows.",
        tech: "Java · Spring Boot · MySQL",
        github: "#",
        live: "#",
        gradient: "from-orange-900/40 via-black to-red-900/30",
    },
    {
        title: "Job Recommendation System",
        description:
            "NLP-based recommendation engine for matching job information with relevant opportunities.",
        tech: "Python · NLP",
        github: "#",
        live: "#",
        gradient: "from-purple-900/40 via-black to-pink-900/30",
    },
];

export default function Projects() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="projects" className="bg-black px-6 pt-2 pb-20 text-white md:px-20">
            <div className="mx-auto mb-16 max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
                <p className="mt-4 text-gray-400">
                    A few projects I’ve built, focusing on scalable systems and real-world
                    applications.
                </p>
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="group rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-all duration-300 ease-out hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
                    >
                        <div
                            className={`relative mb-6 flex h-32 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-[1.02]`}
                        >
                            <div className="absolute inset-0 opacity-20 blur-2xl bg-gradient-to-r from-white/10 to-white/5" />

                            <span className="relative z-10 text-xs text-gray-300 tracking-wide">
                                {project.title}
                            </span>
                        </div>

                        <h3 className="text-xl font-semibold tracking-tight">
                            {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-400">
                            {project.description}
                        </p>

                        <p className="mt-5 text-xs tracking-wide text-gray-500">
                            {project.tech}
                        </p>


                        {false && (<div className="mt-6 flex gap-6">
                            <a
                                href={project.github}
                                className="text-sm text-white transition hover:opacity-70"
                            >
                                GitHub →
                            </a>

                            <a
                                href={project.live}
                                className="text-sm text-gray-400 transition hover:text-white"
                            >
                                Live →
                            </a>
                        </div>)}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
