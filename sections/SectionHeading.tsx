type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeadingProps) {
    return (
        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                {eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
