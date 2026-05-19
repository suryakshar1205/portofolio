import { Brain, CircuitBoard, Cpu, Layers3 } from "lucide-react";
import { profile, storyChapters } from "../data/portfolio";
import { Reveal, Section } from "./Section";

const pillars = [
  {
    title: "AI Systems",
    icon: Brain,
    text: "Computer vision, NLP, predictive modeling, and deployment-aware ML workflows."
  },
  {
    title: "ECE Depth",
    icon: CircuitBoard,
    text: "Wireless communication, DSP, MATLAB simulations, and embedded systems thinking."
  },
  {
    title: "Product Engineering",
    icon: Layers3,
    text: "Full-stack apps with clean architecture, fast interfaces, and practical polish."
  },
  {
    title: "Research Mindset",
    icon: Cpu,
    text: "Experiment-driven work across algorithms, signals, models, and interfaces."
  }
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A builder at the intersection of AI, ECE, and product engineering.">
      <div className="grid gap-8 lg:grid-cols-[1fr_.85fr]">
        <Reveal>
          <div className="glass-panel p-7 sm:p-9">
            <p className="text-lg leading-9 text-slate-300">{profile.summary}</p>
            <div className="mt-8 space-y-4">
              {storyChapters.map((chapter, index) => (
                <div key={chapter.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="font-display text-sm uppercase tracking-[0.24em] text-cyan-beam">
                    Chapter {index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{chapter.title}</h3>
                  <p className="mt-2 leading-7 text-slate-400">{chapter.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <p className="gradient-text font-display text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.07}>
                <div className="glass-card group p-5">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-beam/10 text-cyan-beam transition group-hover:scale-110">
                    <Icon />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{pillar.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
