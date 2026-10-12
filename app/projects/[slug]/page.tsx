import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import ProjectArtwork from "@/sections/ProjectArtwork";
import Reveal from "@/sections/Reveal";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);
    if (!project) return { title: "Project not found | Ram Prakash Yallavula" };
    return {
        title: `${project.title} | Ram Prakash Yallavula`,
        description: project.description,
        alternates: { canonical: `/projects/${project.slug}` },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const index = projects.findIndex((item) => item.slug === slug);
    const project = projects[index];
    if (!project) notFound();

    return (
        <main id="main-content" tabIndex={-1} className="case-page wrap">
            <Link href="/#projects" className="case-back"><ArrowLeft size={16} aria-hidden="true" /> Back to selected work</Link>
            <Reveal className="case-heading">
                <span className="eyebrow">{project.category} / Project overview</span>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="project-technologies">{project.tech.join(" / ")}</div>
            </Reveal>
            <div className="case-cover"><ProjectArtwork index={index} /></div>
            <div className="case-columns">
                <section><h2>Engineering focus.</h2><ul>{project.focus.map(item => <li key={item}>{item}</li>)}</ul></section>
                <section><h2>Work in progress.</h2><p>I’m rebuilding this project. Source code and a live demo will be shared once the project is ready and the links are verified.</p><p>The illustration above is conceptual artwork, not a product screenshot.</p></section>
            </div>
            <section className="case-system"><span className="eyebrow">The building blocks</span><h2>A look under the hood.</h2><div className="case-layers">{project.architecture.map((layer, position) => <div key={layer}><span>0{position + 1}</span><p>{layer}</p></div>)}</div></section>
        </main>
    );
}
