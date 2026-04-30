const skills = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    },
    {
        title: "Backend",
        items: ["Java", "Spring Boot", "Python", "Django", "REST APIs"],
    },
    {
        title: "Cloud & DevOps",
        items: ["AWS", "Docker", "GitHub Actions", "Linux", "Kubernetes"],
    },
    {
        title: "Data & Systems",
        items: ["SQL", "PostgreSQL", "MySQL", "Spark", "NLP"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="scroll-mt-0 bg-black px-6 pt-4 pb-56 text-white md:px-20"
        >
            <div className="mb-14 max-w-4xl">
                <h2 className="text-4xl font-bold md:text-5xl">Skills</h2>
                <p className="mt-4 text-gray-400">
                    Technologies I use to build full-stack applications, backend systems,
                    and cloud-based solutions.
                </p>
            </div>

            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {skills.map((group) => (
                        <div
                            key={group.title}
                            className="min-h-[155px] rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 transition hover:border-white/20"
                        >
                            <h3 className="mb-5 text-2xl font-semibold">{group.title}</h3>

                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-gray-400"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}