import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { certificates } from "./data";

function CertificateCard({ cert, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="cert-card group"
    >
      <div className="cert-card-shine" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] font-mono text-[0.7rem] font-bold text-slate-500">
            #{cert.rank}
          </span>
          <div
            className="grid h-10 w-10 place-items-center rounded-xl text-xs font-black"
            style={{
              background: `${cert.color}14`,
              border: `1px solid ${cert.color}36`,
              color: cert.color,
            }}
          >
            {cert.logo}
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[0.6rem] font-bold uppercase text-slate-500 transition group-hover:border-white/20 group-hover:text-slate-300">
          {cert.date}
        </span>
      </div>

      {cert.image && (
        <div className="cert-preview mt-4">
          <img src={cert.image} alt={`${cert.title} preview`} loading="lazy" />
        </div>
      )}

      <h3 className="mt-4 text-base font-bold leading-snug text-white transition-colors group-hover:text-cyan-300">
        {cert.title}
      </h3>
      <p className="mt-1.5 text-sm text-slate-400">{cert.issuer}</p>

      {cert.tags && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {cert.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[0.6rem] font-semibold text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-2">
        <a
          href={cert.href}
          target="_blank"
          rel="noreferrer"
          className="cert-action cert-action-primary"
        >
          View Certificate
          <ExternalLink size={12} />
        </a>
        <a
          href={cert.href}
          download
          className="cert-action cert-action-secondary"
        >
          Download
          <Download size={12} />
        </a>
      </div>
    </motion.article>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section" data-section>
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow text-center">Certifications</p>
          <h2 className="section-title mx-auto text-center">
            Learning proof and milestone tracking.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.rank} cert={cert} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;
