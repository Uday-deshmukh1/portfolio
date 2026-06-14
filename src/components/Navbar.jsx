import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { profile } from "./data.js";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Certificates", "certificates"],
  ["Hackathons", "hackathons"],
  ["Contact", "contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b px-4 transition md:px-8 ${
        scrolled ? "border-line bg-ink/90 shadow-lg shadow-black/20 backdrop-blur-xl" : "border-transparent bg-ink/60 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4">
        <a
          href="#home"
          className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white/[0.04] font-mono text-sm font-black text-mint"
          aria-label="Uday Deshmukh home"
        >
          UD
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email Uday">
            <Mail size={18} />
          </a>
          <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>

        <button className="icon-button lg:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto grid max-w-7xl gap-1 pb-4 lg:hidden">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.06]"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
