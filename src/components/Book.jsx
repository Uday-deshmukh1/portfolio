import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { books } from "./data";

const showList = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardEnter = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BookSection() {
  return (
    <section id="book" className="section section-band" data-section>
      <div className="container-grid">
        <div className="text-center">
          <p className="eyebrow">Published Works</p>
          <h2 className="section-title mx-auto text-center">Books crafted with purpose.</h2>
          <p className="section-subtitle mx-auto mt-4 text-center">
            Exploring mythology, emotion, and the human experience through storytelling.
          </p>
        </div>

        <motion.div
          variants={showList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          {books.map((book) => (
            <motion.a
              key={book.title}
              href={book.url}
              target="_blank"
              rel="noreferrer"
              variants={cardEnter}
              className="book-card group block"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`flex h-24 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${book.coverColor} text-3xl shadow-2xl shadow-purple-500/20`}
                >
                  {book.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    by {book.author}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400 line-clamp-3">
                    {book.summary}
                  </p>
                  <span className="btn-primary mt-4 inline-flex text-sm">
                    <BookOpen size={16} />
                    Read on Google Play
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
