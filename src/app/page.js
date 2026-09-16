import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Timeline />
      <Projects />
      <Skills />
      <Certifications />
      <Footer />
    </main>
  );
}