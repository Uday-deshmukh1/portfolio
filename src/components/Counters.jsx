import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "./data";

function AnimatedCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="counter-value">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-400">{label}</p>
    </div>
  );
}

export default function Counters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 gap-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:grid-cols-5"
    >
      {stats.map((stat) => (
        <AnimatedCounter key={stat.label} {...stat} />
      ))}
    </motion.div>
  );
}
