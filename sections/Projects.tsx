"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Project Management System",
        description:
            "Full-stack platform with authentication, role-based access, and task tracking, deployed on AWS with CI/CD pipelines.",
        tech: "Django · PostgreSQL · AWS",
        github: "#",
        live: "#",
        gradient: "from-blue-900/40 via-black to-purple-900/30",
    },
    {
        title: "NYC Taxi Data Pipeline",
        description:
            "Distributed data processing system built using Spark and AWS to handle large-scale taxi datasets.",
        tech: "Python · Spark · AWS",
        github: "#",
        live: "#",
        gradient: "from-green-900/40 via-black to-blue-900/30",
    },
    {
        title: "Waste Food Management System",
        description:
            "Backend system to manage food donation workflows.",
        tech: "Java · Spring Boot · MySQL",
        github: "#",
        live: "#",
        gradient: "from-orange-900/40 via-black to-red-900/30",
    },
    {
        title: "Job Recommendation System",
        description:
            "NLP-based recommendation engine for job matching.",
        tech: "Python · NLP",
        github: "#",
        live: "#",
        gradient: "from-purple-900/40 via-black to-pink-900/30",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="px-6 md:px-20 pt-2 pb-20 bg-black text-white">
            <div className="max-w-4xl mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
                <p className="mt-4 text-gray-400">
                    A few projects I’ve built, focusing on scalable systems and real-world
                    applications.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="group rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-all duration-300 ease-out hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
                    >
                        <div
                            className={`mb-6 h-30 w-full rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}
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