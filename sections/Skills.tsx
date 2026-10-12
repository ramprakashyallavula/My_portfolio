import { skillGroups } from "@/data/portfolio";

const labels = ["Interfaces", "Backend", "Cloud & delivery", "Data & systems"];

export default function Skills() {
    return (
        <section id="skills" className="skills-section wrap">
            <div><span className="eyebrow">03 / The toolkit</span><h2>Tools change.<br /><em>Curiosity stays.</em></h2><p>A mix of languages, frameworks, and infrastructure I use across my projects.</p><span className="tool-doodle" aria-hidden="true">{ "{ }" }</span></div>
            <div className="skill-rows">{skillGroups.map((group,index) => <div className="skill-row" key={group.title}><span className="skill-number">0{index+1}</span><div><h3>{labels[index]}</h3><p>{group.items.join(" · ")}</p></div></div>)}</div>
        </section>
    );
}
