import { Send } from "lucide-react";
import { contactLinks, profile } from "../data/portfolio";
import { MagneticButton } from "./MagneticButton";
import { Reveal, Section } from "./Section";

export function Contact({ onResumeClick }) {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something intelligent together.">
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="glass-panel p-7">
            <h3 className="font-display text-2xl font-semibold text-white">Open to AI engineering opportunities</h3>
            <p className="mt-4 leading-8 text-slate-400">
              Open to internships, research collaborations, and product engineering work across AI/ML, computer vision, NLP, wireless communication, and full-stack systems.
            </p>
            <div className="mt-7 space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} className="contact-row" href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <Icon size={19} />
                    <span>
                      <strong>{link.label}</strong>
                      <small>{link.value}</small>
                    </span>
                  </a>
                );
              })}
            </div>
            <button onClick={onResumeClick} className="mt-6 w-full rounded-2xl border border-cyan-beam/25 bg-cyan-beam/10 px-5 py-4 text-left font-display text-cyan-beam transition hover:bg-cyan-beam/15">
              View or download resume
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="glass-panel p-7"
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="form-field">
                Name
                <input name="name" placeholder="Your name" />
              </label>
              <label className="form-field">
                Email
                <input name="email" type="email" placeholder="you@example.com" />
              </label>
            </div>
            <label className="form-field mt-4">
              Message
              <textarea name="message" rows="6" placeholder="Tell me what we should build..." />
            </label>
            <div className="mt-6">
              <MagneticButton as="button" type="submit">
                Send Message <Send size={18} />
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
