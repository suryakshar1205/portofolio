import { experience } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internships, engineering practice, hackathons, and applied momentum.">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-beam via-plasma to-violet-pulse" />
        <div className="space-y-7">
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={`${item.role}-${item.company}`} delay={index * 0.08}>
                <article className="relative pl-14">
                  <div className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-full border border-cyan-beam/40 bg-void text-cyan-beam shadow-glow">
                    <Icon size={18} />
                  </div>
                  <div className="glass-panel p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-white">{item.role}</h3>
                        <p className="mt-1 text-cyan-beam">{item.company}</p>
                      </div>
                      <span className="rounded-full border border-white/10 px-4 py-1 text-sm text-slate-400">{item.date}</span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <p key={point} className="leading-7 text-slate-400">
                          {point}
                        </p>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
