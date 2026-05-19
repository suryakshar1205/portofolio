import { motion } from "framer-motion";
import { currentlyExploring } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function CurrentlyExploring() {
  return (
    <Section
      id="exploring"
      eyebrow="Currently Exploring"
      title="The portfolio is built around where I am going next, not only what I have already finished."
    >
      <Reveal>
        <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-beam/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-52 w-52 rounded-full bg-violet-pulse/10 blur-3xl" />
          <div className="relative grid gap-4 md:grid-cols-5">
            {currentlyExploring.map((item, index) => (
              <motion.div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-center backdrop-blur"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-cyan-beam/20 bg-cyan-beam/10 font-display text-cyan-beam">
                  0{index + 1}
                </div>
                <p className="font-display text-base font-semibold text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
