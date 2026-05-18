import { useEffect } from 'react';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.08 }
        );
        document.querySelectorAll('.section-container').forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <ScrollProgress />
            <ThreeBackground />
            <Navbar />

            <main style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Timeline />
                <Contact />
            </main>

            <BackToTop />
        </>
    );
}

export default App;
