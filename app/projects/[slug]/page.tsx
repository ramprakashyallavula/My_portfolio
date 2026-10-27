import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { projects } from "@/data/portfolio";
import ProjectArtwork from "@/sections/ProjectArtwork";
import Reveal from "@/sections/Reveal";
import { Magnetic, ScrollScale } from "@/sections/ScrollEffects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);
    if (!project) return { title: "Project not found" };
    return {
        title: project.title,
        description: project.shortDescription,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            title: `${project.title} | Ram Prakash Yallavula`,
            description: project.shortDescription,
            url: `/projects/${project.slug}`,
            type: "article",
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const index = projects.findIndex((item) => item.slug === slug);
    const project = projects[index];
    if (!project) notFound();
    const previous = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];

    return (
        <main id="main-content" tabIndex={-1} className="case-page wrap">
            <Link href="/#projects" className="case-back" transitionTypes={["nav-back"]}><ArrowLeft size={16} aria-hidden="true" /> Back to projects</Link>
            <Reveal className="case-heading">
                <span className="eyebrow">{project.category}</span>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <ul className="tech-chips" aria-label="Technologies">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
            </Reveal>
            <ScrollScale className="case-cover"><ViewTransition name={`project-art-${project.slug}`} share="morph" default="none"><ProjectArtwork slug={project.slug} index={index} autoplay /></ViewTransition></ScrollScale>
            <div className="case-columns">
                <section><h2>What it does</h2><ul>{project.focus.map(item => <li key={item}>{item}</li>)}</ul></section>
                <section><h2>Where it stands</h2><p>{project.progressDescription ?? "I’m rebuilding this one right now. I’ll add the source code and a live demo once it’s in good shape."}</p><p>{project.visualDescription ?? "The illustration above is drawn in code to show how the project works. It isn’t a screenshot of the actual app."}</p></section>
            </div>
            {project.caseStudy && (
                <article className="case-study" aria-label="Case study">
                    <Reveal className="case-study-problem">
                        <span className="eyebrow">The problem</span>
                        <p>{project.caseStudy.problem}</p>
                    </Reveal>
                    {project.caseStudy.numbers && (
                        <Reveal>
                            <span className="eyebrow">By the numbers</span>
                            <dl className="case-numbers">{project.caseStudy.numbers.map((item) => (
                                <div key={item.label}><dt>{item.value}</dt><dd>{item.label}</dd></div>
                            ))}</dl>
                        </Reveal>
                    )}
                    <Reveal>
                        <span className="eyebrow">How I built it</span>
                        <ol className="case-approach">{project.caseStudy.approach.map((step) => <li key={step}>{step}</li>)}</ol>
                    </Reveal>
                    <Reveal>
                        <span className="eyebrow">Decisions worth explaining</span>
                        <div className="case-decisions">{project.caseStudy.decisions.map((item) => (
                            <div key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></div>
                        ))}</div>
                    </Reveal>
                    {project.caseStudy.screenshots && (
                        <Reveal>
                            <span className="eyebrow">Screenshots</span>
                            <div className="case-shots">{project.caseStudy.screenshots.map((shot) => (
                                <figure key={shot.src}>
                                    <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="(max-width: 760px) 100vw, 560px" />
                                    <figcaption>{shot.caption}</figcaption>
                                </figure>
                            ))}</div>
                        </Reveal>
                    )}
                    <Reveal className="case-next">
                        <span className="eyebrow">What’s next</span>
                        <p>{project.caseStudy.next}</p>
                        <small>{project.caseStudy.sources}</small>
                    </Reveal>
                </article>
            )}
            <section className="case-system"><span className="eyebrow">Architecture</span><h2>How it’s built</h2><div className="case-layers">{project.architecture.map((layer, position) => <div key={layer}><span>0{position + 1}</span><p>{layer}</p></div>)}</div></section>
            <nav className="case-pager" aria-label="More projects">
                <Link href={`/projects/${previous.slug}`}><span className="eyebrow">Previous project</span>{previous.title}</Link>
                <Link href={`/projects/${next.slug}`}><span className="eyebrow">Next project</span>{next.title}</Link>
            </nav>
            <div className="case-cta"><p>Have questions about this project?</p><Magnetic><Link href="/#contact" className="button button-dark">Get in touch</Link></Magnetic></div>
        </main>
    );
}
