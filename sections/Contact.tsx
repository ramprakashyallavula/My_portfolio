"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("mgodwrjl");
    return (
        <section id="contact" className="contact-section">
            <div className="wrap contact-grid">
                <div className="contact-copy"><span className="eyebrow">05 / Your turn</span><h2>Good things<br />start with<br /><em>a hello.</em><span className="contact-star" aria-hidden="true">✳</span></h2><p>Have a role in mind, a project to discuss, or just want to connect? I’d love to hear from you.</p><a className="contact-email" href="mailto:yallavularamprakash@gmail.com">yallavularamprakash@gmail.com</a><p className="response-note">I typically respond within 24 hours.</p></div>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="name-fields"><div><label htmlFor="firstName">First name</label><input id="firstName" name="firstName" autoComplete="given-name" required placeholder="Jane" /></div><div><label htmlFor="lastName">Last name</label><input id="lastName" name="lastName" autoComplete="family-name" required placeholder="Smith" /></div></div>
                    <label htmlFor="email">Your email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="jane@company.com" /><ValidationError field="email" errors={state.errors} />
                    <label htmlFor="subject">What’s on your mind?</label><input id="subject" name="subject" required placeholder="An opportunity, an idea, a hello..." />
                    <label htmlFor="message">A little more detail</label><textarea id="message" name="message" required rows={3} placeholder="Tell me about it." /><ValidationError field="message" errors={state.errors} />
                    <ValidationError errors={state.errors} />
                    <button className="button button-lime" type="submit" disabled={state.submitting}>{state.submitting ? "Sending…" : "Send your message"}</button>
                    <div role="status" aria-live="polite">{state.succeeded && <p className="form-success">Thanks for reaching out! Your message is on its way.</p>}</div>
                </form>
            </div>
        </section>
    );
}
