function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-ink/90">
      <div className="container-grid flex flex-col justify-between gap-3 py-6 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Uday Deshmukh. Built for learning, discipline, and growth.</p>
        <p>React + Vite + Three.js + GSAP</p>
      </div>
    </footer>
  );
}

export default Footer;
