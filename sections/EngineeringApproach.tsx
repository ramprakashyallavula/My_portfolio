import { engineeringPrinciples } from "@/data/portfolio";

export default function EngineeringApproach() {
    return (
        <section id="approach" className="approach-section">
            <div className="wrap">
                <span className="eyebrow">02 / How I think</span>
                <h2>Make it useful.<br />Make it <em>make sense.</em></h2>
                <div className="principles">{engineeringPrinciples.map(item => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
                <span className="approach-asterisk" aria-hidden="true">✳</span>
            </div>
        </section>
    );
}
