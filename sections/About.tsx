const highlights = [
    {
        label: "Focus",
        value: "Full-Stack Software Engineering",
    },
    {
        label: "Strength",
        value: "Backend systems, APIs, cloud, and data-driven applications",
    },
    {
        label: "Currently",
        value: "Building stronger frontend skills through real projects",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="scroll-mt-20 bg-black px-6 pt-16 pb-72 text-white md:px-20"
        >
            <div className="grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr]">
                <div>
                    <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        About
                    </h3>

                    <h2 className="mb-4 text-2xl uppercase tracking-[0.3em] text-white-500">
                        I build scalable backend systems and APIs with a focus on reliability, performance, and clean architecture.
                    </h2>
                </div>

                <div>
                    <p className="text-lg leading-8 text-gray-300">
                        I’m Ram Prakash, a full-stack software engineer focused on building
                        scalable web applications. I enjoy working across the stack, from
                        clean user interfaces to backend systems, APIs, cloud deployment,
                        and data-driven features.
                    </p>

                    <div className="mt-8 grid gap-4">
                        {highlights.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-5"
                            >
                                <p className="text-sm text-gray-500">{item.label}</p>
                                <p className="mt-2 text-white">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}