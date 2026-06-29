import { motion } from "framer-motion";
import { skillCategories } from "./data";

function getIcon(name) {
  return name.slice(0, 2).toUpperCase();
}

function MarqueeRow({ items }) {
  const repeatCount = items.length < 4 ? 4 : 2;
  const duplicated = Array.from({ length: repeatCount }, () => items).flat();

  return (
    <div className="marquee-container relative overflow-hidden py-2">
      <motion.div
        className="marquee-content flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((item, i) => (
          <div key={`${item}-${i}`} className="tech-badge group cursor-default">
            <span className="skill-icon shrink-0">{getIcon(item)}</span>
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="space-y-6">
      {skillCategories.map((cat) => (
        <div key={cat.name}>
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-purple-400">
            {cat.name}
          </p>
          <MarqueeRow items={cat.items} />
        </div>
      ))}
    </div>
  );
}
