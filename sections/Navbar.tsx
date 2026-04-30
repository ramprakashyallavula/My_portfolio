export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="#" className="text-sm font-semibold tracking-wide text-white">
                    Ram Prakash Yallavula
                </a>

                <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
                    <a href="#projects" className="transition hover:text-white">Projects</a>
                    <a href="#skills" className="transition hover:text-white">Skills</a>
                    <a href="#about" className="transition hover:text-white">About</a>
                    <a href="#contact" className="transition hover:text-white">Contact</a>
                </div>
            </nav>
        </header>
    );
}