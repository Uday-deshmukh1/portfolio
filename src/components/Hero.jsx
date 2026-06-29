import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, BookOpen, MapPin } from "lucide-react";
import { profile } from "./data";
import { getCurrentImage, subscribe } from "../data/profileImages";
import Counters from "./Counters";
import QRDrawer from "./QRDrawer.jsx";

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

const fadeGroup = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Hero() {
  const [profileImg, setProfileImg] = useState(getCurrentImage);
  const [drawer, setDrawer] = useState({ open: false });

  useEffect(() => subscribe(setProfileImg), []);

  const emailImgSrc = `${import.meta.env.BASE_URL}icons/mail.png`;

  return (
    <section id="home" className="section min-h-screen pt-28">
      <div className="container-grid">
        <motion.div
          variants={fadeGroup}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]"
        >
          <div>
            <motion.div variants={fadeItem}>
              <span className="hero-tag">
                Think Different. Be Unique. Stay Anonymous.
              </span>
            </motion.div>

            <motion.h1
              variants={fadeItem}
              className="mt-6 text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            >
              I Can Bring Your{" "}
              <span className="premium-gradient-text">
                Imagination
              </span>{" "}
              Into{" "}
              <span className="premium-gradient-text">
                Reality
              </span>
              .
            </motion.h1>

            <motion.p variants={fadeItem} className="mt-4 text-2xl font-bold text-white">
              {profile.name}
            </motion.p>

            <motion.p variants={fadeItem} className="mt-3 text-lg font-semibold text-slate-300">
              AI & Machine Learning Student,
              <br />
              Cybersecurity Enthusiast,
              <br />
              Published Author, and Lifelong Learner.
            </motion.p>

            <motion.p variants={fadeItem} className="mt-4 max-w-xl text-base leading-7 text-slate-400">
              {profile.shortBio}
            </motion.p>

            <motion.div variants={fadeItem} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight size={18} />
              </a>
              <a href={resumeUrl} className="btn-secondary" target="_blank" rel="noreferrer">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#book" className="btn-outline">
                <BookOpen size={18} />
                Read My Book
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeItem}
            className="profile-card mx-auto w-full max-w-sm"
          >
            <div className="flex flex-col items-center text-center">
              <div className="h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-[3px] shadow-lg shadow-cyan-500/20">
                {profileImg ? (
                  <img src={profileImg} alt="Uday Deshmukh" className="h-full w-full rounded-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-4xl font-black text-white">
                    UD
                  </div>
                )}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{profile.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{profile.title}</p>
              <p className="mt-2 max-w-xs text-sm leading-5 text-slate-500">
                {profile.college}
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={14} className="text-cyan-400" />
                {profile.location}
              </div>
              <div className="mt-6 flex gap-2">
                <a className="icon-button icon-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <img src={`${import.meta.env.BASE_URL}icons/linkedin.png`} alt="LinkedIn" className="h-full w-full rounded-[7px] object-cover" />
                </a>
                <a className="icon-button icon-instagram" href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <img src={`${import.meta.env.BASE_URL}icons/instagram.png`} alt="Instagram" className="h-full w-full rounded-[7px] object-cover" />
                </a>
                <a className="icon-button icon-github" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <img src={`${import.meta.env.BASE_URL}icons/github.png`} alt="GitHub" className="h-full w-full rounded-[7px] object-cover" />
                </a>
                <button className="icon-button icon-email" onClick={() => setDrawer({ open: true })} aria-label="Email" type="button">
                  <img src={`${import.meta.env.BASE_URL}icons/mail.png`} alt="Email" className="h-full w-full rounded-[7px] object-cover" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-16">
          <Counters />
        </div>
      </div>

      <QRDrawer
        isOpen={drawer.open}
        onClose={() => setDrawer({ open: false })}
        platform="Email"
        imgSrc={emailImgSrc}
        link={`mailto:${profile.email}`}
        type="email"
      />
    </section>
  );
}

export default Hero;
