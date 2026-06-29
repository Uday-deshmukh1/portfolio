import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "./data";
import { getCurrentImage, subscribe } from "../data/profileImages";
import QRDrawer from "./QRDrawer.jsx";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Certifications", "certificates"],
  ["Book", "book"],
  ["Contact", "contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileImg, setProfileImg] = useState(getCurrentImage);
  const [drawer, setDrawer] = useState({ open: false });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => subscribe(setProfileImg), []);

  const emailImgSrc = `${import.meta.env.BASE_URL}icons/mail.png`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b px-4 transition md:px-8 ${
        scrolled ? "border-white/[0.08] bg-ink/90 shadow-lg shadow-black/20 backdrop-blur-xl" : "border-transparent bg-ink/60 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4">
        <a
          href="#home"
          className="block h-10 w-10 overflow-hidden rounded-xl border border-white/[0.1]"
          aria-label="Uday Deshmukh home"
        >
          {profileImg ? (
            <img src={profileImg} alt="Uday Deshmukh" className="h-full w-full object-cover" loading="lazy" />
          ) : (
            <span className="grid h-full w-full place-items-center bg-white/[0.04] font-mono text-sm font-black text-cyan-400">
              UD
            </span>
          )}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="badge-pulse">
              <span className="badge-dot" />
              Open To Opportunities
            </div>
            <a className="icon-button icon-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={`${import.meta.env.BASE_URL}icons/linkedin.png`} alt="LinkedIn" className="h-full w-full rounded-[7px] object-cover" />
            </a>
            <a className="icon-button icon-instagram" href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src={`${import.meta.env.BASE_URL}icons/instagram.png`} alt="Instagram" className="h-full w-full rounded-[7px] object-cover" />
            </a>
            <a className="icon-button icon-github" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={`${import.meta.env.BASE_URL}icons/github.png`} alt="GitHub" className="h-full w-full rounded-[7px] object-cover" />
            </a>
            <button className="icon-button icon-email" onClick={() => setDrawer({ open: true })} aria-label="Email Uday" type="button">
              <img src={`${import.meta.env.BASE_URL}icons/mail.png`} alt="Email" className="h-full w-full rounded-[7px] object-cover" />
            </button>
          </div>

        <button className="icon-button lg:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-auto max-w-7xl overflow-hidden lg:hidden"
          >
            <div className="grid gap-1 pb-4">
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
          </motion.div>
        )}
      </AnimatePresence>

      <QRDrawer
        isOpen={drawer.open}
        onClose={() => setDrawer({ open: false })}
        platform="Email"
        imgSrc={emailImgSrc}
        link={`mailto:${profile.email}`}
        type="email"
      />
    </header>
  );
}

export default Navbar;
