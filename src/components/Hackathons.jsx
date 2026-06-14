import { Trophy } from "lucide-react";
import { hackathons } from "./data.js";

function Hackathons() {
  return (
    <section id="hackathons" className="section" data-section>
      <div className="container-grid grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Hackathons</p>
          <h2 className="section-title">Preparing to build in public, under pressure.</h2>
          <p className="mt-5 text-slate-400">
            Hackathons are a natural next step for turning AI and security learning into working demos, team decisions, and rapid iteration.
          </p>
        </div>
        <div className="grid gap-4">
          {hackathons.map((event) => (
            <article key={event.title} className="card flex flex-col gap-5 sm:flex-row">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-blue/10 text-blue">
                <Trophy size={22} />
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase text-mint">{event.year}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{event.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hackathons;
