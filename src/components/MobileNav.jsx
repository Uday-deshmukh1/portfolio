import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Award, BookOpen, FolderCode, MessageSquare } from "lucide-react";

const tabs = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "Certifications", icon: Award, href: "#certificates" },
  { label: "Book", icon: BookOpen, href: "#book" },
  { label: "Projects", icon: FolderCode, href: "#projects" },
  { label: "Contact", icon: MessageSquare, href: "#contact" },
];

export default function MobileNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = tabs.map((t) => t.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= window.scrollY + 200) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bottom-nav md:hidden"
    >
      {tabs.map(({ label, icon: Icon, href }) => {
        const isActive = active === href.slice(1);
        return (
          <a
            key={label}
            href={href}
            className={`bottom-nav-item ${isActive ? "active" : ""}`}
            onClick={() => setActive(href.slice(1))}
          >
            <Icon size={18} />
            <span>{label}</span>
          </a>
        );
      })}
    </motion.nav>
  );
}
