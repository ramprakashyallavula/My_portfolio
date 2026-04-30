"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("mgodwrjl");

    return (
        <section
            id="contact"
            className="scroll-mt-0 min-h-screen bg-black px-6 pt-2 pb-24 text-white md:px-20"
        >
            <div className="grid max-w-7xl items-start gap-16 md:grid-cols-[0.85fr_1.35fr]">
                <div>
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-gray-400">
                        Contact
                    </p>

                    <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                        Let’s build something impactful.
                    </h2>

                    <p className="mt-6 max-w-xl leading-7 text-gray-400">
                        I’m actively looking for software engineering opportunities where I
                        can contribute to real-world products, grow as a developer, and work
                        with teams that care about building reliable software.
                    </p>

                    <p className="mt-4 text-gray-400">
                        Response time: <span className="text-white">within 24 hours</span>
                    </p>

                    <div className="mt-8 space-y-4">
                        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="mt-2 text-white">
                                yallavularamprakash@gmail.com
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
                            <p className="text-sm text-gray-500">LinkedIn</p>
                            <a
                                href="https://www.linkedin.com/in/ramprakash-yallavula/"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-block text-white transition hover:opacity-70"
                            >
                                Connect with me →
                            </a>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-8">
                    <div className="grid gap-4 md:grid-cols-2">
                        <input
                            name="firstName"
                            required
                            placeholder="First name"
                            className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                        />

                        <input
                            name="lastName"
                            required
                            placeholder="Last name"
                            className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                        />
                    </div>

                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                    />
                    <ValidationError field="email" errors={state.errors} />

                    <input
                        name="subject"
                        required
                        placeholder="Subject"
                        className="w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                    />

                    <textarea
                        name="message"
                        required
                        rows={10}
                        placeholder="Message"
                        className="w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0a] px-5 py-4 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                    />
                    <ValidationError field="message" errors={state.errors} />

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="mt-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:opacity-50"
                    >
                        {state.submitting ? "Sending..." : "Send Message"}
                    </button>

                    {state.succeeded && (
                        <p className="text-sm text-gray-400">
                            Message sent successfully. I’ll get back to you within 24 hours.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}