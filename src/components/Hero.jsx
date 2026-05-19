import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Mail, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";
import { MagneticButton } from "./MagneticButton";
import { SignatureHeroVisual } from "./SignatureHeroVisual";
import { useTyping } from "./useTyping";

export function Hero({ onResumeClick }) {
  const typed = useTyping(profile.typingPhrases);

  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-badge"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-beam" />
            AI + Research + Engineering Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title"
          >
            {profile.name}
            <span className="block gradient-text">builds intelligent systems.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 max-w-2xl text-xl font-medium text-slate-200 sm:text-2xl"
          >
            {profile.role}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="mt-4 min-h-8 font-display text-cyan-beam"
          >
            <span className="text-slate-500">&gt; </span>
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-cyan-beam" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.7 }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            {profile.headline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <MagneticButton href="#featured-projects">
              View Projects <Sparkles size={18} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Contact Me <Mail size={18} />
            </MagneticButton>
            <MagneticButton as="button" type="button" onClick={onResumeClick} variant="secondary">
              Download Resume <Download size={18} />
            </MagneticButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-8 flex gap-3"
          >
            <a className="social-orb" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a className="social-orb" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a className="social-orb" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotateX: 14 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -inset-8 rounded-full bg-cyan-beam/10 blur-3xl" />
          <SignatureHeroVisual />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 md:block"
        aria-label="Scroll to about"
      >
        <ArrowDown />
      </a>
    </section>
  );
}
