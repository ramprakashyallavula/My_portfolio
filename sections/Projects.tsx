import Link from "next/link";
import { projects } from "@/data/portfolio";
import ProjectArtwork from "@/sections/ProjectArtwork";
import Reveal from "@/sections/Reveal";

export default function Projects() {
    return (
        <section id="projects" className="work-section wrap">
            <div className="section-top"><span className="eyebrow">01 / Selected work</span><span className="small-note">A few things I’ve put my mind to.</span></div>
            <div className="section-heading-row"><h2>Different problems.<br /><em>Same curiosity.</em></h2><p>From organizing everyday work to making sense of a city’s data. Here’s what I’ve been building.</p></div>
            <div className="work-grid">{projects.map((project, index) => (
                <article className="work-item" key={project.slug}>
                    <Reveal delay={(index % 2) * 0.08}>
                    <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
                        <ProjectArtwork index={index} /><span className="project-open">View project</span>
                    </Link>
                    <div className="project-meta"><span>{project.category}</span><span>0{index + 1}</span></div>
                    <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
                    <p>{project.shortDescription}</p>
                    <div className="project-technologies">{project.tech.join(" / ")}</div>
                    </Reveal>
                </article>
            ))}</div>
            <p className="work-note">Projects are being rebuilt. Explore the overviews; demos and source links will follow.</p>
        </section>
    );
}
