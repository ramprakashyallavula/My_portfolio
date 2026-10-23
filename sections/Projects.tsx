import Link from "next/link";
import { projects } from "@/data/portfolio";
import ProjectArtwork from "@/sections/ProjectArtwork";
import Reveal from "@/sections/Reveal";
import { ScrollHighlight, ScrollScale } from "@/sections/ScrollEffects";

export default function Projects() {
    return (
        <section id="projects" className="work-section wrap">
            <Reveal><div className="section-top"><span className="eyebrow">01 / Projects</span><span className="small-note">Click any project for the details.</span></div>
            <div className="section-heading-row"><h2>Some things<br /><em>I’ve built.</em></h2><ScrollHighlight text="A mix of full-stack, backend, data and NLP work. TaskFlow AI is the one I’m spending most of my time on right now." /></div></Reveal>
            <div className="work-grid">{projects.map((project, index) => (
                <article className={`work-item${project.featured ? " work-item-featured" : " work-item-card"}`} key={project.slug}>
                    <Reveal className="work-item-inner" delay={project.featured ? 0 : ((index - 1) % 2) * 0.08}>
                    {project.featured ? (
                        <ScrollScale className="project-visual-wrap">
                            <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
                                <ProjectArtwork slug={project.slug} index={index} /><span className="project-open">View project</span>
                            </Link>
                        </ScrollScale>
                    ) : (
                        <div className="project-visual-link">
                            <ProjectArtwork slug={project.slug} index={index} />
                        </div>
                    )}
                    <div className="work-copy">
                    <div className="project-meta"><span>{project.category}</span><span>0{index + 1}</span></div>
                    <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
                    <p>{project.shortDescription}</p>
                    <ul className="tech-chips" aria-label={`${project.title} technologies`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
                    </div>
                    </Reveal>
                </article>
            ))}</div>
            <p className="work-note">I’m cleaning up and rebuilding several of these. I’ll add source code and live demos once they’re ready to share.</p>
        </section>
    );
}
