import { Github, Linkedin, Mail, Send } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";
import { profile } from "./data.js";

function Contact() {
  return (
    <section id="contact" className="section section-band" data-section>
      <div className="container-grid grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let us connect and learn together.</h2>
          <p className="mt-5 max-w-xl text-slate-400">
            Open to collaboration, learning opportunities, and conversations around AI, machine learning, and cyber security.
          </p>
          <div className="mt-7 grid gap-3">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Mail size={18} /> {profile.email}
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> {profile.githubLabel}
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> {profile.linkedinLabel}
            </a>
          </div>
        </div>

        <form className="card grid gap-4" action="https://formspree.io/f/xblypzzg" method="POST">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field">
              <span>Name</span>
              <input name="name" type="text" required placeholder="Your name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" required placeholder="you@example.com" />
            </label>
          </div>
          <label className="field">
            <span>Message</span>
            <textarea name="message" required rows="6" placeholder="Tell me what you are building or learning." />
          </label>
          <MagneticButton as="button" type="submit" className="w-fit bg-gradient-to-r from-mint to-blue text-ink">
            <Send className="mr-2" size={18} /> Send Message
          </MagneticButton>
        </form>
      </div>
    </section>
  );
}

export default Contact;
