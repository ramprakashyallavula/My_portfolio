"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/sections/BrandIcons";
import Reveal from "@/sections/Reveal";
import { ScrollSpin } from "@/sections/ScrollEffects";

export default function Contact() {
    const [state, handleSubmit] = useForm("mgodwrjl");
    return (
        <section id="contact" className="contact-section">
            <div className="wrap contact-grid">
                <Reveal className="contact-copy"><span className="eyebrow">05 / Contact</span><h2>Let’s<br /><em>talk.</em><ScrollSpin className="contact-star" turns={0.5}>✳</ScrollSpin></h2><p>Hiring for a role, curious about one of my projects, or just want to connect? Send me a message here or email me directly.</p><a className="contact-email" href="mailto:yallavularamprakash@gmail.com"><Mail size={18} aria-hidden="true" />yallavularamprakash@gmail.com</a><p className="response-note">I usually reply within 24 hours.</p><ul className="contact-profiles" aria-label="Profiles"><li><a href="https://www.linkedin.com/in/ramprakash-yallavula/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true" />LinkedIn</a></li><li><a href="https://github.com/ramprakashyallavula" target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" />GitHub</a></li><li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé (PDF)</a></li></ul></Reveal>
                <Reveal delay={0.12}><form onSubmit={handleSubmit} className="contact-form">
                    <div className="name-fields"><div><label htmlFor="firstName">First name</label><input id="firstName" name="firstName" autoComplete="given-name" required placeholder="Jane" /></div><div><label htmlFor="lastName">Last name</label><input id="lastName" name="lastName" autoComplete="family-name" required placeholder="Smith" /></div></div>
                    <label htmlFor="email">Your email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="jane@company.com" /><ValidationError className="form-error" field="email" errors={state.errors} />
                    <label htmlFor="subject">Subject</label><input id="subject" name="subject" required placeholder="e.g. Software engineer role at your company" />
                    <label htmlFor="message">Message</label><textarea id="message" name="message" required rows={4} placeholder="What would you like to talk about?" /><ValidationError className="form-error" field="message" errors={state.errors} />
                    <ValidationError className="form-error" errors={state.errors} />
                    <button className="button button-lime" type="submit" disabled={state.submitting}>{state.submitting ? "Sending…" : "Send message"}</button>
                    <div role="status" aria-live="polite">{state.succeeded && <p className="form-success">Thanks, your message went through. I’ll get back to you soon.</p>}</div>
                </form></Reveal>
            </div>
        </section>
    );
}
