import Reveal from "@/sections/Reveal";

export default function Now() {
    return (
        <section id="now" className="now-section wrap">
            <span className="now-badge">NOW</span>
            <Reveal><span className="eyebrow">Right now</span><h2>Rebuilding projects<br />and <em>job hunting.</em></h2></Reveal>
            <Reveal className="now-copy" delay={0.1}><p>I’m rebuilding a few of my older projects, learning more about cloud and data tools, and applying for software engineering roles. If your team is hiring, I’d love to hear about it.</p><a className="text-link" href="#contact">Get in touch</a></Reveal>
        </section>
    );
}
