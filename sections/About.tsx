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
        <section id="about" className="bg-black px-6 py-20 pb-50 text-white md:px-20">
            <div className="grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr]">
                <div>
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
                        About
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        I build software with structure, clarity, and purpose.
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