import { motion } from "framer-motion";
import { Award, FolderOpen } from "lucide-react";
import { certificates } from "./data.js";

function Certificates() {
  const certificatesUrl = `${import.meta.env.BASE_URL}certificates/`;

  return (
    <section id="certificates" className="section section-band" data-section>
      <div className="container-grid">
        <p className="eyebrow text-center">Certificates</p>
        <h2 className="section-title mx-auto text-center">Learning proof and milestone tracking.</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {certificates.map((certificate) => (
            <motion.article
              key={certificate.title}
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
              className="card"
            >
              <Award className="text-amber" size={28} />
              <h3 className="mt-6 text-xl font-bold text-white">{certificate.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{certificate.issuer}</p>
              <p className="mt-5 font-mono text-xs font-bold uppercase text-mint">{certificate.status}</p>
            </motion.article>
          ))}
        </motion.div>
        <a
          href={certificatesUrl}
          className="mx-auto mt-8 flex w-fit items-center rounded-lg border border-line bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200 hover:border-mint/70"
        >
          <FolderOpen className="mr-2" size={17} /> Certificates Folder
        </a>
      </div>
    </section>
  );
}

export default Certificates;
