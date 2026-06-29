import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, MapPin } from "lucide-react";
import { profile } from "./data";

function About() {
  return (
    <section id="about" className="section" data-section>
      <div className="container-grid grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title">Building the future with AI, securing it with cybersecurity.</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-lg leading-8 text-slate-300"
        >
          <p>
            I am a CSE AI and ML student with a Minor in Electronics and Telecommunication Engineering
            specializing in Internet of Things at PR Pote Patil College of Engineering and Management, Amravati.
            My work spans three domains that I believe define the next era of technology, which are building
            intelligent systems through artificial intelligence and machine learning, connecting the physical
            and digital world through IoT, and securing everything through ethical hacking and cybersecurity
            practices. As a published author, I believe that knowledge only grows when it is shared, and I
            carry that principle into everything I build and write.
          </p>
          <p>
            Off the screen, I am a chess player, an archery practitioner, a football enthusiast, and someone
            endlessly curious about space, planets, and the mysteries of the universe. I draw my drive from
            visionaries like Pavel Durov who built a communication empire on principles, Ritesh Agarwal who
            proved age is never a barrier to ambition, and Elon Musk who showed the world that audacious goals
            are the only goals worth setting. I am not just here to learn technology, I am here to push it forward.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <Info icon={<GraduationCap size={20} />} label="Education" value={profile.college} />
            <Info icon={<ShieldCheck size={20} />} label="Focus" value="AI, ML, Cybersecurity, IoT" />
            <Info icon={<MapPin size={20} />} label="Location" value={profile.location} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:border-cyan-500/20 hover:bg-cyan-500/5">
      <div className="text-cyan-400">{icon}</div>
      <p className="mt-3 text-xs font-bold uppercase text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
    </div>
  );
}

export default About;
