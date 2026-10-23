import { skillGroups } from "@/data/portfolio";
import Reveal from "@/sections/Reveal";

const labels = ["Interfaces", "Backend", "Cloud & delivery", "Data & systems"];

export default function Skills() {
    return (
        <section id="skills" className="skills-section wrap">
            <Reveal><span className="eyebrow">03 / Skills</span><h2>What I<br /><em>work with.</em></h2><p>The languages, frameworks and tools I’ve used across the projects above.</p><span className="tool-doodle" aria-hidden="true">{ "{ }" }</span></Reveal>
            <div className="skill-rows">{skillGroups.map((group,index) => <Reveal key={group.title} delay={index * 0.08}><div className="skill-row"><span className="skill-number">0{index+1}</span><div><h3>{labels[index]}</h3><p>{group.description}</p><ul className="tech-chips" aria-label={`${labels[index]} skills`}>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div></div></Reveal>)}</div>
        </section>
    );
}
