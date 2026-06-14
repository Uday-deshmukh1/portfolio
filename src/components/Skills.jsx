import { motion } from "framer-motion";
import { skills } from "./data.js";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.055 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  return (
    <section id="skills" className="section section-band" data-section>
      <div className="container-grid">
        <p className="eyebrow text-center">Skills</p>
        <h2 className="section-title mx-auto text-center">Practical skills I am building through steady repetition.</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div key={skill} variants={item} className="card flex min-h-24 items-center justify-between gap-4">
              <span className="text-base font-bold text-white">{skill}</span>
              <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_20px_rgba(0,209,178,0.9)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
