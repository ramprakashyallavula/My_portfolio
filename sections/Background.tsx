import { certifications, education, experience } from "@/data/portfolio";
import Reveal from "@/sections/Reveal";

export default function Background() {
    return (
        <section id="experience" className="background-section wrap" aria-labelledby="background-title">
            <Reveal>
                <span className="eyebrow">04 / Background</span>
                <h2 id="background-title">Where I’ve<br /><em>learned and worked.</em></h2>
            </Reveal>
            <div className="background-grid">
                <Reveal className="background-col">
                    <h3 className="background-label">Education</h3>
                    <ol className="background-list">
                        {education.map((item) => (
                            <li key={item.school}>
                                <span className="background-dates">{item.dates}</span>
                                <strong>{item.degree}</strong>
                                <span>{item.school} · {item.place}</span>
                            </li>
                        ))}
                    </ol>
                </Reveal>
                <Reveal className="background-col" delay={0.08}>
                    <h3 className="background-label">Experience</h3>
                    <ol className="background-list">
                        {experience.map((item) => (
                            <li key={item.role}>
                                <span className="background-dates">{item.dates}</span>
                                <strong>{item.role}</strong>
                                <span>{item.org} · {item.place}</span>
                                <ul className="background-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                            </li>
                        ))}
                    </ol>
                </Reveal>
                <Reveal className="background-col" delay={0.16}>
                    <h3 className="background-label">Certifications</h3>
                    <ul className="cert-list">{certifications.map((cert) => <li key={cert}>{cert}</li>)}</ul>
                </Reveal>
            </div>
        </section>
    );
}
