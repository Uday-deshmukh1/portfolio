import { motion } from "framer-motion";
import TechMarquee from "./TechMarquee";

function Skills() {
  return (
    <section id="skills" className="section" data-section>
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow text-center">Skills</p>
          <h2 className="section-title mx-auto text-center">Technologies I work with.</h2>
        </motion.div>

        <div className="mt-10">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}

export default Skills;
