import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function Projects() {
  return (
    <section id="projects" className="section section-band" data-section>
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Work that connects learning with shipping.</h2>
          </div>
          <a
            className="text-sm font-bold text-cyan-400 hover:text-white"
            href="https://github.com/Uday-deshmukh1"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub <ExternalLink className="ml-1 inline" size={15} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-10 text-center"
        >
          <p className="text-xl font-bold leading-relaxed text-white">
            I'm refining my projects before making them public. Quality matters more than quantity. Stay tuned for upcoming releases.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
