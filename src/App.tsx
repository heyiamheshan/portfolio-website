import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import TerminalComponent from './components/Terminal';

function App() {
  return (
    <>
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

      <TerminalComponent />
    </>
  );
}

export default App;
