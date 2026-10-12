"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a
                    href="#"
                    onClick={closeMenu}
                    className="text-sm font-semibold tracking-wide text-white"
                >
                    Ram Prakash Yallavula
                </a>

                <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="rounded-md p-2 text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {isMenuOpen && (
                <div id="mobile-navigation" className="border-t border-white/10 px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4 text-sm text-gray-300">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="transition hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
