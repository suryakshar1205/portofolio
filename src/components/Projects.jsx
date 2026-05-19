import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { featuredProjects, projects } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <Section id="featured-projects" eyebrow="Featured Projects" title="Cinematic project systems built across AI, NLP, full-stack, and applied product thinking.">
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="featured-card group cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") setActiveProject(project);
                  }}
                >
                  <ProjectVisual variant={project.visual} />
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-beam/10 text-cyan-beam">
                          <Icon />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-cyan-beam">{project.type}</p>
                          <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                        </div>
                      </div>
                      <a
                        className="project-link"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                    </div>
                    <p className="leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-5 rounded-2xl border border-cyan-beam/15 bg-cyan-beam/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-beam">System Flow</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.pipeline.slice(0, 3).map((step, stepIndex) => (
                          <span
                            key={step}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                          >
                            {stepIndex + 1}. {step}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span className="tech-pill" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="mini-button" type="button" onClick={() => setActiveProject(project)}>
                        View Architecture <ArrowUpRight size={16} />
                      </button>
                      <a
                        className="mini-button"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                      >
                        GitHub <ArrowUpRight size={16} />
                      </a>
                      {project.demo && (
                        <a
                          className="mini-button"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Live Site <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <ProjectArchitectureModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}

export function AllProjects() {
  return (
    <Section id="projects" eyebrow="Project Library" title="A complete public project map from GitHub, from ML notebooks to embedded ECE builds.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="glass-card group flex h-full flex-col p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.22em] text-cyan-beam">Repository</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                  <Github size={18} />
                </a>
              </div>
              <p className="flex-1 leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectArchitectureModal({ project, onClose }) {
  if (!project) return null;
  const Icon = project.icon;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[130] flex items-center justify-center bg-void/85 px-4 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} architecture`}
      >
        <motion.div
          className="relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/[0.12] bg-slate-950/95 shadow-glow"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 160, damping: 22 }}
        >
          <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-slate-950/90 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-beam/10 text-cyan-beam">
                <Icon />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-beam">{project.type}</p>
                <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
              </div>
            </div>
            <button className="icon-action !px-3" onClick={onClose} aria-label="Close architecture modal">
              <X size={18} />
            </button>
          </div>

          <div className="grid gap-6 p-5 lg:grid-cols-[1fr_.9fr]">
            <div className="space-y-5">
              <ProjectVisual variant={project.visual} />
              <div className="grid gap-4 sm:grid-cols-2">
                <ModalPanel title="Problem" text={project.problem} />
                <ModalPanel title="Result / Value" text={project.outcome} />
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-cyan-beam">Technical Decisions</p>
                <div className="mt-4 space-y-3">
                  {project.decisions.map((decision) => (
                    <p key={decision} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm leading-6 text-slate-300">
                      {decision}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-cyan-beam/20 bg-cyan-beam/[0.045] p-5">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-cyan-beam">Architecture Flow</p>
                <div className="mt-5 space-y-3">
                  {project.pipeline.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cyan-beam/30 bg-cyan-beam/10 font-display text-sm text-cyan-beam">
                        {index + 1}
                      </span>
                      <span className="flex-1 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-cyan-beam">Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span className="tech-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a className="mini-button" href={project.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={16} />
                </a>
                {project.demo && (
                  <a className="mini-button" href={project.demo} target="_blank" rel="noreferrer">
                    Live Site <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ModalPanel({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
      <p className="font-display text-xs uppercase tracking-[0.22em] text-cyan-beam">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function ProjectVisual({ variant }) {
  const labels = {
    notice: ["admin", "notice", "chatbot"],
    vision: ["leaf scan", "cnn", "diagnosis"],
    nlp: ["tokenize", "vectorize", "classify"],
    ai: ["prompt", "reason", "ship"],
    embedded: ["sense", "decide", "switch"]
  };

  return (
    <div className="relative h-64 overflow-hidden border-b border-white/10 bg-slate-950">
      <div className="absolute inset-0 bg-radial-field opacity-70" />
      <div className="absolute inset-x-8 top-8 rounded-[2rem] border border-cyan-beam/20 bg-white/[0.04] p-4 backdrop-blur-xl">
        <div className="mb-5 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-beam" />
          <span className="h-2.5 w-2.5 rounded-full bg-plasma" />
          <span className="h-2.5 w-2.5 rounded-full bg-violet-pulse" />
        </div>
        <div className="space-y-3">
          {(labels[variant] || labels.ai).map((label, index) => (
            <motion.div
              key={label}
              className="flex items-center gap-3"
              animate={{ x: [0, index % 2 ? -8 : 8, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-2 w-2 rounded-full bg-cyan-beam" />
              <span className="h-8 flex-1 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-300">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-8 right-8 h-20 rounded-full bg-cyan-beam/15 blur-2xl" />
    </div>
  );
}
