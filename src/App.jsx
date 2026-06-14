import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import Hackathons from "./components/Hackathons.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.9,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-section]").forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
