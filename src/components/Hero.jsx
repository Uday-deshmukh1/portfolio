import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton.jsx";
import { profile } from "./data.js";

function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="home" className="section min-h-screen pt-28">
      <div className="container-grid grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="eyebrow">India based AI learner</p>
          <h1 className="mt-4 text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">{profile.name}</h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold text-slate-200 lg:text-2xl">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Building a strong foundation in intelligent systems, security concepts, computer fundamentals, and disciplined problem-solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#contact" className="bg-gradient-to-r from-mint to-blue text-ink shadow-lg shadow-mint/15">
              <Mail className="mr-2" size={18} /> Contact Me
            </MagneticButton>
            <MagneticButton href={resumeUrl} className="border border-line bg-white/[0.04] text-white hover:border-blue/70" target="_blank">
              <Download className="mr-2" size={18} /> Resume
            </MagneticButton>
            <MagneticButton href="#projects" className="border border-line bg-white/[0.04] text-white hover:border-mint/70">
              <ArrowDown className="mr-2" size={18} /> Explore Work
            </MagneticButton>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.75 }}
          className="rounded-lg border border-line bg-panel/80 p-6 shadow-glow backdrop-blur"
        >
          <div className="grid h-36 w-36 place-items-center rounded-full border border-mint/30 bg-gradient-to-br from-mint/20 to-blue/10">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-mint to-blue font-mono text-3xl font-black text-ink">
              UD
            </div>
          </div>
          <h2 className="mt-8 text-2xl font-bold text-white">AI, security, and steady growth.</h2>
          <p className="mt-4 text-slate-400">Focused on learning how systems work, where they break, and how to protect them responsibly.</p>
          <div className="mt-6 flex gap-2">
            <a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
            <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export default Hero;
