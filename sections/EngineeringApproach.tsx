import { engineeringPrinciples } from "@/data/portfolio";
import Reveal from "@/sections/Reveal";
import { ScrollSpin } from "@/sections/ScrollEffects";

export default function EngineeringApproach() {
    return (
        <section id="approach" className="approach-section">
            <div className="wrap">
                <Reveal><span className="eyebrow">02 / How I work</span>
                <h2>A few habits<br />I <em>try to keep.</em></h2></Reveal>
                <div className="principles">{engineeringPrinciples.map((item, index) => <Reveal key={item.number} delay={index * 0.1}><article><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article></Reveal>)}</div>
                <ScrollSpin className="approach-asterisk" turns={0.6}>✳</ScrollSpin>
            </div>
        </section>
    );
}
