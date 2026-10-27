import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import EngineeringApproach from "@/sections/EngineeringApproach";
import Timeline from "@/sections/Timeline";
import Now from "@/sections/Now";
import Footer from "@/sections/Footer";
import Background from "@/sections/Background";
import NotesTeaser from "@/sections/NotesTeaser";

export default function Home() {
    return (
        <>
            <Navbar />
        <main id="main-content" tabIndex={-1}>
            <Hero />
            <Projects />
            <EngineeringApproach />
            <Skills />
            <Background />
            <Timeline />
            <About />
            <Now />
            <NotesTeaser />
            <Contact />
        </main>
            <Footer />
        </>
    );
}
