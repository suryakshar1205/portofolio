import { motion } from "framer-motion";
import { Radar } from "lucide-react";
import { profile } from "../data/portfolio";

const nodes = [
  { x: 21, y: 28, label: "NLP" },
  { x: 52, y: 18, label: "CV" },
  { x: 79, y: 32, label: "ECE" },
  { x: 31, y: 63, label: "DSP" },
  { x: 66, y: 70, label: "WEB" }
];

const links = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [2, 4],
  [1, 4]
];

export function SignatureHeroVisual() {
  return (
    <div className="hero-console">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </div>
        <span className="font-display text-xs uppercase tracking-[0.28em] text-slate-500">signal-intel.sk</span>
      </div>
      <div className="p-6">
        <div className="relative mb-6 h-[360px] overflow-hidden rounded-3xl border border-cyan-beam/20 bg-cyan-beam/[0.035]">
          <div className="absolute inset-0 bg-grid-lines bg-[size:34px_34px] opacity-20" />
          <div className="absolute inset-0 bg-radial-field opacity-70" />
          <RadarSweep />
          <NeuralGraph />
          <Spectrum />
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 backdrop-blur">
            <div className="flex items-center gap-2 text-cyan-beam">
              <Radar size={13} className="animate-spin-slow" />
              <span className="font-display text-[10px] uppercase tracking-[0.22em]">AI signal</span>
            </div>
          </div>
          <div className="absolute bottom-5 right-5 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur">
            <p className="font-display text-xs uppercase tracking-[0.22em] text-slate-500">current focus</p>
            <p className="mt-1 text-sm text-cyan-beam">AI + ECE systems</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="metric-tile">
              <p className="gradient-text font-display text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NeuralGraph() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {links.map(([from, to], index) => (
        <motion.line
          key={`${from}-${to}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="rgba(34, 211, 238, 0.34)"
          strokeWidth="0.45"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.25, 0.85, 0.35] }}
          transition={{ duration: 2.4, delay: index * 0.12, repeat: Infinity, repeatType: "mirror" }}
        />
      ))}
      {nodes.map((node, index) => (
        <g key={node.label}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="3.2"
            fill="rgba(34, 211, 238, 0.18)"
            stroke="#22d3ee"
            strokeWidth="0.5"
            animate={{ r: [3.2, 4.2, 3.2] }}
            transition={{ duration: 2.2, delay: index * 0.2, repeat: Infinity }}
          />
          <text x={node.x + 4} y={node.y + 1} fill="#cbd5e1" fontSize="3.2" className="font-display">
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function RadarSweep() {
  return (
    <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-beam/20">
      <div className="absolute inset-8 rounded-full border border-cyan-beam/15" />
      <div className="absolute inset-16 rounded-full border border-cyan-beam/10" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-28 origin-left bg-gradient-to-r from-cyan-beam to-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 rounded-full bg-cyan-beam/5 blur-2xl" />
    </div>
  );
}

function Spectrum() {
  return (
    <div className="absolute bottom-6 left-6 flex h-20 w-52 items-end gap-1.5">
      {Array.from({ length: 28 }).map((_, index) => (
        <motion.span
          key={index}
          className="w-full rounded-full bg-gradient-to-t from-violet-pulse to-cyan-beam"
          animate={{
            height: [
              `${18 + ((index * 11) % 58)}%`,
              `${34 + ((index * 19) % 60)}%`,
              `${18 + ((index * 11) % 58)}%`
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.035, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
