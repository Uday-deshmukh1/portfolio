import { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Handshake,
  Rocket,
  Globe,
  QrCode,
} from "lucide-react";
import QRDrawer from "./QRDrawer.jsx";

const contactPlatforms = [
  {
    name: "LinkedIn",
    description: "Let's connect professionally",
    imgSrc: `${import.meta.env.BASE_URL}icons/linkedin.png`,
    link: "https://www.linkedin.com/in/uday-deshmukh-b8170a397?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    gradient: "from-blue-600/20 to-blue-400/10",
    borderHover: "hover:border-blue-500/40",
    glow: "shadow-blue-500/10",
  },
  {
    name: "Instagram",
    description: "Follow my creative journey",
    imgSrc: `${import.meta.env.BASE_URL}icons/instagram.png`,
    link: "https://www.instagram.com/uday_deshmukh.i?igsh=MXg1OW1qamhzbDgwOQ==",
    gradient: "from-pink-600/20 to-purple-400/10",
    borderHover: "hover:border-pink-500/40",
    glow: "shadow-pink-500/10",
  },
  {
    name: "Email",
    description: "Send me a direct message",
    imgSrc: `${import.meta.env.BASE_URL}icons/mail.png`,
    type: "email",
    link: `mailto:udaydeshmukh266@gmail.com?subject=Let's%20Connect%20-%20[Your%20Name]&body=Hi%20Uday%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%0A%0ABest%2C%0A[Your%20Name]`,
    gradient: "from-cyan-600/20 to-cyan-400/10",
    borderHover: "hover:border-cyan-500/40",
    glow: "shadow-cyan-500/10",
  },
  {
    name: "GitHub",
    description: "Check out my open source work",
    imgSrc: `${import.meta.env.BASE_URL}icons/github.png`,
    link: "https://github.com/Uday-deshmukh1",
    gradient: "from-purple-600/20 to-violet-400/10",
    borderHover: "hover:border-purple-500/40",
    glow: "shadow-purple-500/10",
  },
];

const features = [
  {
    icon: Zap,
    title: "Fast & Reliable Communication",
    desc: "Usually replies within 24 hours.",
  },
  {
    icon: Handshake,
    title: "Open for Collaboration",
    desc: "Always interested in impactful projects and innovative teams.",
  },
  {
    icon: Rocket,
    title: "Career & Startup Opportunities",
    desc: "Available for internships, freelance work, research, hackathons, and startup collaborations.",
  },
  {
    icon: Globe,
    title: "Building Long-Term Connections",
    desc: "Great careers begin with meaningful conversations.",
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [drawer, setDrawer] = useState({ open: false, platform: "", imgSrc: "", link: "", type: "" });

  const openDrawer = (platform, imgSrc, link, type) => {
    setDrawer({ open: true, platform, imgSrc, link, type });
  };

  return (
    <section id="contact" className="section section-band" data-section>
      <div className="container-grid grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-3">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-300 bg-clip-text text-transparent">
              Extraordinary
            </span>{" "}
            Together.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            I'm always open to discussing innovative ideas, AI projects, startup
            opportunities, cybersecurity, hackathons, internships, collaborations,
            and meaningful professional connections.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 grid gap-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardUp}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-all hover:border-cyan-500/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                    <feature.icon className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {feature.title}
                    </h4>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4"
        >
          {contactPlatforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={cardUp}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ${platform.borderHover} hover:-translate-y-1.5 hover:shadow-xl ${platform.glow}`}
            >
              {platform.type === "email" ? (
                <div className="flex items-center gap-4 p-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${platform.gradient} transition-all duration-300 group-hover:scale-110`}
                  >
                    <img src={platform.imgSrc} alt={platform.name} className="h-full w-full rounded-[11px] object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-bold text-white transition-colors group-hover:text-cyan-400">
                      {platform.name}
                    </h4>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {platform.description}
                    </p>
                  </div>
                </div>
              ) : (
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${platform.gradient} transition-all duration-300 group-hover:scale-110`}
                  >
                    <img src={platform.imgSrc} alt={platform.name} className="h-full w-full rounded-[11px] object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-bold text-white transition-colors group-hover:text-cyan-400">
                      {platform.name}
                    </h4>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {platform.description}
                    </p>
                  </div>
                </a>
              )}

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openDrawer(platform.name, platform.imgSrc, platform.link, platform.type || "");
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-slate-400 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400 active:scale-95"
              >
                <QrCode size={14} />
                Click Me
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <QRDrawer
        isOpen={drawer.open}
        onClose={() => setDrawer({ ...drawer, open: false })}
        platform={drawer.platform}
        imgSrc={drawer.imgSrc}
        link={drawer.link}
        type={drawer.type}
      />
    </section>
  );
}
