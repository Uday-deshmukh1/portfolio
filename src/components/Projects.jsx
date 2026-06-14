import { Code2, ExternalLink } from "lucide-react";
import { projects } from "./data.js";

function Projects() {
  return (
    <section id="projects" className="section" data-section>
      <div className="container-grid">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Work that connects learning with shipping.</h2>
          </div>
          <a className="text-sm font-bold text-mint hover:text-white" href="https://github.com/Uday-deshmukh1" target="_blank" rel="noreferrer">
            View GitHub <ExternalLink className="ml-1 inline" size={15} />
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card group min-h-72">
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-mint/10 text-mint">
                  <Code2 size={21} />
                </div>
                <span className="rounded-full border border-line px-3 py-1 text-xs font-bold text-slate-400">{project.type}</span>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/[0.055] px-3 py-1 text-xs font-bold text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
