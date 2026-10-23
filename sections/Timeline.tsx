import Reveal from "@/sections/Reveal";

export default function Timeline() {
    return (
        <section id="journey" className="journey-section wrap">
            <Reveal><span className="eyebrow">How most of my projects go</span>
            <div className="journey-line"><Reveal delay={0.05}><p>Read the docs.</p></Reveal><span aria-hidden="true">·</span><Reveal delay={0.2}><p>Build a rough version.</p></Reveal><span aria-hidden="true">·</span><Reveal delay={0.35}><p><em>Keep making it better.</em></p></Reveal></div></Reveal>
        </section>
    );
}
