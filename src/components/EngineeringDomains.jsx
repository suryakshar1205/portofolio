import { engineeringDomains } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function EngineeringDomains() {
  return (
    <Section
      id="skills"
      eyebrow="Engineering Capabilities"
      title="Capability domains that connect AI, software, and ECE systems."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {engineeringDomains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <Reveal key={domain.title} delay={index * 0.05}>
              <article className="domain-card group">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-beam/10 text-cyan-beam">
                    <Icon />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                    domain
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">{domain.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{domain.description}</p>
                <div className="mt-5">
                  <p className="font-display text-xs uppercase tracking-[0.22em] text-cyan-beam">Related work</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {domain.projects.map((project) => (
                      <span key={project} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-slate-300">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {domain.tools.map((tool) => (
                    <span key={tool} className="tech-pill">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
