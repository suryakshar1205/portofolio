import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const bootLines = [
  "Initializing AI portfolio",
  "Calibrating signal engine",
  "Loading project systems",
  "Ready"
];

export function BootSequence() {
  return (
    <motion.div
      className="fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-void"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="absolute inset-0 bg-radial-field opacity-70" />
      <div className="absolute inset-0 bg-grid-lines bg-[size:44px_44px] opacity-20" />
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 18 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative w-[min(92vw,520px)] rounded-[2rem] border border-cyan-beam/20 bg-slate-950/75 p-6 shadow-glow backdrop-blur-2xl"
      >
        <div className="mb-6 flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-[1.4rem] border border-cyan-beam/30 bg-cyan-beam/10 font-display text-xl font-bold text-cyan-beam">
            {profile.initials}
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.34em] text-cyan-beam">system boot</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-white">AI + ECE interface</h2>
          </div>
        </div>
        <div className="space-y-3">
          {bootLines.map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.16, duration: 0.45 }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 font-mono text-sm text-slate-300"
            >
              <span>
                <span className="text-cyan-beam">&gt;</span> {line}
              </span>
              <span className={index === bootLines.length - 1 ? "text-emerald-300" : "text-cyan-beam"}>
                {index === bootLines.length - 1 ? "online" : "ok"}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
