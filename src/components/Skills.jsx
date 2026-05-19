import { skills } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skill System"
      title="Not a scoreboard. A map of the tools I use to build intelligent engineering systems."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((category, index) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delay={index * 0.04}>
              <article className="skill-card flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-beam/10 text-cyan-beam">
                    <Icon />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    {category.items.length} skills
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{category.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{category.story}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
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
