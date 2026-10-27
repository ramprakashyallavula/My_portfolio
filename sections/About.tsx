import Reveal from "@/sections/Reveal";
import { ScrollHighlight } from "@/sections/ScrollEffects";

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="wrap about-grid">
                <Reveal><div className="about-poster" aria-hidden="true"><span>RAM PRAKASH<br />YALLAVULA</span><div className="poster-monogram">R<span>P</span>Y<span className="poster-star">✳</span></div><p>Software<br />engineer.</p></div></Reveal>
                <Reveal className="about-copy" delay={0.12}><span className="eyebrow">05 / About</span><h2>A bit more<br /><em>about me.</em></h2><ScrollHighlight className="about-lead" text="My favorite part of a project is when a messy problem finally starts to make sense." /><p>That’s a big reason I like backend systems, APIs and data work. I like figuring out how the pieces fit together, and then putting a clean interface on top so people can actually use it.</p><p>So far I’ve built a task manager, a backend for food donations, a Spark pipeline for NYC taxi data and a job matching tool. These days I’m going back through those projects to clean them up, and getting better at frontend while I’m at it.</p><a className="text-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Read my résumé</a></Reveal>
            </div>
        </section>
    );
}
