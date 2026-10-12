export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="wrap about-grid">
                <div className="about-poster" aria-hidden="true"><span>THE PERSON<br />BEHIND THE CODE</span><div className="poster-monogram">R<span>P</span>Y<span className="poster-star">✳</span></div><p>Still learning.<br />Still making things.</p></div>
                <div className="about-copy"><span className="eyebrow">04 / A bit about me</span><h2>Hi again.<br />I’m <em>Ram Prakash.</em></h2><p className="about-lead">I like the moment when a complicated problem starts to make sense.</p><p>That’s what draws me to backend systems, APIs, and data. I enjoy figuring out how the pieces connect — then building an interface that makes them useful.</p><p>My projects span task management, food donation, taxi data, and job matching. Right now, I’m revisiting that work and strengthening my frontend skills along the way.</p><a className="text-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">The longer version? My résumé</a></div>
            </div>
        </section>
    );
}
