import { GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import { profile } from "./data.js";

function About() {
  return (
    <section id="about" className="section" data-section>
      <div className="container-grid grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title">Curious about AI, serious about security.</h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I am an AI & ML student with a strong interest in cyber security, ethical hacking, and the fundamentals behind reliable digital systems.
          </p>
          <p>
            My current focus is consistent learning: understanding vulnerabilities, practicing programming basics, improving problem-solving, and building projects that sharpen both technical depth and discipline.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <Info icon={<GraduationCap size={20} />} label="College" value={profile.college} />
            <Info icon={<ShieldCheck size={20} />} label="Focus" value="AI, ML, Cyber Security" />
            <Info icon={<MapPin size={20} />} label="Location" value="India" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-lg border border-line bg-white/[0.035] p-4">
      <div className="text-mint">{icon}</div>
      <p className="mt-3 text-xs font-bold uppercase text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
    </div>
  );
}

export default About;
