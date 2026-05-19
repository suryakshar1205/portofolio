import { motion } from "framer-motion";
import { research } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function Research() {
  return (
    <Section id="research" eyebrow="Research & Engineering" title="Wireless communication and signal-processing work with a research-lab interface.">
      <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
        <Reveal>
          <div className="research-console">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <span className="font-display text-sm uppercase tracking-[0.25em] text-cyan-beam">MATLAB Signal Lab</span>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">running</span>
            </div>
            <div className="p-6">
              <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
                <div className="absolute inset-0 bg-grid-lines bg-[size:32px_32px] opacity-30" />
                <AnimatedGraph />
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                  {["SNR", "DOA", "BER"].map((label, index) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                      <p className="mt-1 font-display text-lg text-white">{index === 0 ? "28dB" : index === 1 ? "42deg" : "1e-4"}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-3xl border border-cyan-beam/15 bg-cyan-beam/[0.04] p-5 font-mono text-sm leading-7 text-slate-300">
                <p><span className="text-cyan-beam">&gt;</span> estimate_doa(array, snapshots)</p>
                <p><span className="text-cyan-beam">&gt;</span> apply_mvdr(weights, interference)</p>
                <p><span className="text-cyan-beam">&gt;</span> plot_ber(ofdm_channel)</p>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {research.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-pulse/[0.12] text-cyan-beam">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-cyan-beam">{item.label}</p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.metrics.map((metric) => (
                          <span key={metric} className="tech-pill">
                            {metric}
                          </span>
                        ))}
                      </div>
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

function AnimatedGraph() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 320" preserveAspectRatio="none">
      {[0, 1, 2].map((line) => (
        <motion.path
          key={line}
          d={`M0 ${170 + line * 26} C 90 ${70 + line * 38}, 150 ${250 - line * 30}, 250 ${145 + line * 16} S 430 ${70 + line * 28}, 600 ${150 + line * 18}`}
          fill="none"
          stroke={line === 0 ? "#22d3ee" : line === 1 ? "#60a5fa" : "#8b5cf6"}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: line * 0.2 }}
        />
      ))}
    </svg>
  );
}
