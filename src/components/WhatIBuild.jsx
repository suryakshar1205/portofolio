import { motion } from "framer-motion";
import { whatIBuild } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function WhatIBuild() {
  return (
    <Section
      id="what-i-build"
      eyebrow="What I Build"
      title="Systems first, tools second. The work is about turning ideas into functioning pipelines."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {whatIBuild.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <article className="build-card">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <SignalDiagram index={index} />
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                  <p className="mt-4 rounded-2xl border border-cyan-beam/15 bg-cyan-beam/[0.05] px-4 py-3 font-mono text-xs text-cyan-beam">
                    {item.signal}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function SignalDiagram({ index }) {
  return (
    <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 sm:w-44">
      <div className="absolute inset-0 bg-grid-lines bg-[size:22px_22px] opacity-20" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 180 110" preserveAspectRatio="none">
        <motion.path
          d={`M0 ${55 + index * 2} C 35 ${20 + index * 3}, 58 ${95 - index * 4}, 92 ${54} S 145 ${20 + index * 5}, 180 ${56}`}
          fill="none"
          stroke={index % 2 ? "#8b5cf6" : "#22d3ee"}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.1 }}
        />
      </svg>
      <div className="absolute bottom-4 left-4 right-4 h-8 rounded-full bg-cyan-beam/10 blur-xl" />
    </div>
  );
}
