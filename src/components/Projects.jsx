import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  ArrowUpRight, Github, X, User, Cpu, Database, 
  Shield, Lock, Server, Activity, FileText, 
  Lightbulb, Eye, Tv, CheckCircle, RefreshCw, 
  Brain, Wrench, ShieldAlert, Compass
} from "lucide-react";
import { featuredProjects, projects } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <Section id="featured-projects" eyebrow="Featured Projects" title="Selected systems with real architecture behind them.">
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
    <Section id="projects" eyebrow="Project Library" title="Public builds across ML, analytics, prototypes, and embedded systems.">
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

          <div className="grid gap-6 p-5 lg:grid-cols-[1.1fr_.9fr]">
            <div className="space-y-5">
              {project.image && (
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-3 shadow-inner">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-beam/70 font-mono mb-2 px-1 flex justify-between items-center">
                    <span>System Architecture Blueprint</span>
                    <span className="text-[9px] bg-cyan-beam/10 border border-cyan-beam/20 px-2 py-0.5 rounded-full text-cyan-beam">3D Render</span>
                  </div>
                  <img 
                    src={project.image} 
                    alt={`${project.title} Blueprint`} 
                    className="w-full h-auto rounded-2xl border border-white/5"
                  />
                  <p className="text-sm leading-7 text-slate-300 mt-4 border-t border-white/5 pt-3 px-1">{project.description}</p>
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <ModalPanel title="Problem" text={project.problem} />
                <ModalPanel title="Result / Value" text={project.outcome} />
              </div>
            </div>

            <div className="space-y-5">
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
                <a className="mini-button flex-1 justify-center" href={project.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={16} />
                </a>
                {project.demo && (
                  <a className="mini-button flex-1 justify-center" href={project.demo} target="_blank" rel="noreferrer">
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
    embedded: ["sense", "decide", "switch"],
    observability: ["signals", "model", "insights"],
    agent: ["retrieve", "evaluate", "refine"],
    jailbreak: ["crescendo", "override", "bypass"]
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

function DiagramNode({ icon: Icon, title, description, stepNumber, type = "default" }) {
  const colorMap = {
    default: "border-white/10 bg-white/[0.02] hover:border-cyan-beam/30 transition-colors",
    accent: "border-plasma/25 bg-plasma/[0.01] hover:border-plasma/50 transition-colors",
    highlight: "border-violet-pulse/25 bg-violet-pulse/[0.01] hover:border-violet-pulse/50 transition-colors"
  };

  return (
    <div className={`relative rounded-2xl border p-4 flex gap-3 items-start backdrop-blur-md shadow-sm ${colorMap[type] || colorMap.default}`}>
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-cyan-beam">
        <Icon size={20} />
      </div>
      <div>
        <div className="flex items-center gap-2">
          {stepNumber && (
            <span className="text-[10px] uppercase tracking-wider bg-white/10 px-1.5 py-0.5 rounded font-mono text-slate-300">
              {stepNumber}
            </span>
          )}
          <h4 className="text-sm font-semibold text-white">{title}</h4>
        </div>
        <p className="text-xs text-slate-400 mt-1 leading-5">{description}</p>
      </div>
    </div>
  );
}

function DiagramConnector({ label }) {
  return (
    <div className="flex flex-col items-center my-1">
      {/* Vertical dotted line */}
      <div className="h-4 w-[2px] bg-gradient-to-b from-white/10 to-cyan-beam/30 border-l border-dashed border-white/20" />
      {/* Glowing connector label */}
      {label && (
        <span className="text-[9px] uppercase tracking-widest font-mono text-cyan-beam bg-cyan-beam/10 border border-cyan-beam/20 px-2.5 py-0.5 rounded-full my-1 shadow-glow-sm">
          {label}
        </span>
      )}
      <div className="h-4 w-[2px] bg-gradient-to-b from-cyan-beam/30 to-white/10 border-l border-dashed border-white/20" />
      {/* Down arrow */}
      <div className="text-[10px] text-cyan-beam -mt-1 select-none">▼</div>
    </div>
  );
}

function ProjectArchitectureDiagram({ projectTitle }) {
  const gridStyle = {
    backgroundSize: "24px 24px",
    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)"
  };

  switch (projectTitle) {
    case "ReplyIQ":
      return (
        <div style={gridStyle} className="relative rounded-3xl border border-cyan-beam/10 bg-slate-950/80 p-6 font-sans">
          <div className="relative flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-beam/80 font-mono">System Schema</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-plasma font-mono font-bold">REPLYIQ DATA FLOW</span>
            </div>
            
            <div className="flex flex-col">
              <DiagramNode 
                icon={User} 
                title="User Query Input" 
                description="Client submits support query via the interactive Streamlit frontend." 
                stepNumber="01"
              />
              
              <DiagramConnector label="Semantic Context Search" />
              
              <DiagramNode 
                icon={Database} 
                title="FAISS Vector Database" 
                description="Performs semantic vector matching against company knowledge base & policy embeddings." 
                stepNumber="02"
                type="highlight"
              />
              
              <DiagramConnector label="Context-Enriched Prompt" />
              
              <DiagramNode 
                icon={Cpu} 
                title="Response Synthesis Agent" 
                description="Gemini API processes user query combined with retrieved context snippets." 
                stepNumber="03"
              />
              
              <DiagramConnector label="Evaluation Audit" />
              
              <DiagramNode 
                icon={Shield} 
                title="LLM-as-a-Judge Audit Node" 
                description="Autonomously scores the response across 8 quality dimensions (hallucinations, tone, safety)." 
                stepNumber="04"
                type="accent"
              />
            </div>

            <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-plasma/20 bg-plasma/[0.03] p-4 text-xs">
              <div className="flex items-start gap-3 text-plasma">
                <RefreshCw size={16} className="animate-spin-slow shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold uppercase tracking-wider text-[10px]">Closed-Loop Refinement Agent</p>
                  <p className="text-slate-400 mt-1 leading-5">If LLM Audit score is &lt; 9.0/10, the draft is recursively fed back to Step 3 with precise audit feedback until policy requirements are fully satisfied.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "Crescendo Jailbreak Defense":
      return (
        <div style={gridStyle} className="relative rounded-3xl border border-plasma/10 bg-slate-950/80 p-6 font-sans">
          <div className="relative flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-plasma font-mono">System Schema</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-beam font-mono font-bold">SAFETY PIPELINE</span>
            </div>

            <div className="flex flex-col">
              <DiagramNode 
                icon={ShieldAlert} 
                title="Input Prompt" 
                description="User turns enter the system (potential multi-turn Crescendo jailbreak attempt)." 
                stepNumber="01"
                type="accent"
              />
              
              <DiagramConnector label="Similarity Drift Tracking" />
              
              <DiagramNode 
                icon={Activity} 
                title="Semantic Drift Detector" 
                description="Tracks local and global vector shift vs benign conversation baseline (MiniLM embeddings)." 
                stepNumber="02"
              />
              
              <DiagramConnector label="Rule Density Scoring" />
              
              <DiagramNode 
                icon={Wrench} 
                title="Behavioral Rules Engine" 
                description="Fuses semantic drift scores with keyword refusal & actionability signals." 
                stepNumber="03"
              />
              
              <DiagramConnector label="Exponential Memory Decay" />
              
              <DiagramNode 
                icon={Brain} 
                title="Contextual Memory Engine" 
                description="Applies decay factor (λ=0.80) to aggregate conversation turn risks over time." 
                stepNumber="04"
                type="highlight"
              />
              
              <DiagramConnector label="Mitigate / Pass Gate" />
              
              <DiagramNode 
                icon={Shield} 
                title="Adaptive Mitigation Gate" 
                description="Either blocks/soft-refuses prompt or securely forwards clean prompt to Llama-3.2-3B-Instruct." 
                stepNumber="05"
              />
            </div>
          </div>
        </div>
      );

    case "Hidden Opportunity Finder":
      return (
        <div style={gridStyle} className="relative rounded-3xl border border-cyan-beam/10 bg-slate-950/80 p-6 font-sans">
          <div className="relative flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-beam font-mono">System Schema</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-plasma font-mono font-bold">OPPORTUNITY FINDER FLOW</span>
            </div>

            <div className="flex flex-col">
              <DiagramNode 
                icon={FileText} 
                title="Resume profile scanner" 
                description="Extracts skill arrays and career profile data from candidate CV input." 
                stepNumber="01"
              />
              
              <DiagramConnector label="Sanitize Injections & PII" />
              
              <DiagramNode 
                icon={Lock} 
                title="Security Checkpoint" 
                description="Scrubs sensitive phone numbers, emails, and flags malicious prompt injections." 
                stepNumber="02"
                type="accent"
              />
              
              <DiagramConnector label="Multi-Agent Task Delegation" />
              
              <DiagramNode 
                icon={Cpu} 
                title="Career Advisor Orchestrator" 
                description="Coordinates sub-agents (Scout & Mentor) built on Google ADK 2.0 AgentTool." 
                stepNumber="03"
              />
              
              <DiagramConnector label="Stdio Stethos Database Query" />
              
              <DiagramNode 
                icon={Server} 
                title="Local FastMCP Server" 
                description="Queries unlisted opportunity database & maps targeted skill-gap roadmaps." 
                stepNumber="04"
                type="highlight"
              />
              
              <DiagramConnector label="Human-in-the-Loop Approval" />
              
              <DiagramNode 
                icon={User} 
                title="Consent Rerun Checkpoint" 
                description="Pauses flow graph for cover letter validation, resuming cleanly using rerun-on-resume nodes." 
                stepNumber="05"
              />
            </div>
          </div>
        </div>
      );

    case "Plant Disease Detection":
      return (
        <div style={gridStyle} className="relative rounded-3xl border border-cyan-beam/10 bg-slate-950/80 p-6 font-sans">
          <div className="relative flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-beam font-mono">System Schema</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-plasma font-mono font-bold">COMPUTER VISION PATHOLOGY</span>
            </div>

            <div className="flex flex-col">
              <DiagramNode 
                icon={FileText} 
                title="Crop Leaf Image Input" 
                description="User uploads image of damaged crop leaf to interface." 
                stepNumber="01"
              />
              
              <DiagramConnector label="Normalization & Resize" />
              
              <DiagramNode 
                icon={Wrench} 
                title="Image Preprocessing Layer" 
                description="Resizes image to model input shape, applies color corrections & standardizes pixel arrays." 
                stepNumber="02"
                type="highlight"
              />
              
              <DiagramConnector label="Convolve & MaxPool Layers" />
              
              <DiagramNode 
                icon={Cpu} 
                title="CNN Feature Extractor" 
                description="Learns structural textures, edges, and spatial plant pathology markers." 
                stepNumber="03"
              />
              
              <DiagramConnector label="Disease Confidence Distribution" />
              
              <DiagramNode 
                icon={CheckCircle} 
                title="Softmax Classifier Output" 
                description="Outputs probability distributions across distinct target plant disease classes." 
                stepNumber="04"
                type="accent"
              />
            </div>
          </div>
        </div>
      );

    case "High Beam Assist":
      return (
        <div style={gridStyle} className="relative rounded-3xl border border-cyan-beam/10 bg-slate-950/80 p-6 font-sans">
          <div className="relative flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-beam font-mono">System Schema</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-plasma font-mono font-bold">EMBEDDED AI PIPELINE</span>
            </div>

            <div className="flex flex-col">
              <DiagramNode 
                icon={Eye} 
                title="LDR Light Sensors" 
                description="Measures ambient brightness and incoming opposite-vehicle high-beam lux." 
                stepNumber="01"
              />
              
              <DiagramConnector label="Analog Signal Reading" />
              
              <DiagramNode 
                icon={Cpu} 
                title="ESP32 Processing Unit" 
                description="Compares voltage levels against predefined thresholds via embedded C++ logic." 
                stepNumber="02"
                type="highlight"
              />
              
              <DiagramConnector label="GPIO State Trigger" />
              
              <DiagramNode 
                icon={Activity} 
                title="Relay Control Circuit" 
                description="Acts as a physical switch, modifying headlight power routing." 
                stepNumber="03"
                type="accent"
              />
              
              <DiagramConnector label="Output Control Action" />
              
              <DiagramNode 
                icon={Lightbulb} 
                title="Automotive Headlight" 
                description="Switches beam between high and low dynamically to prevent glare." 
                stepNumber="04"
              />
            </div>
          </div>
        </div>
      );

    case "Digital Notice Board":
      return (
        <div style={gridStyle} className="relative rounded-3xl border border-cyan-beam/10 bg-slate-950/80 p-6 font-sans">
          <div className="relative flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-beam font-mono">System Schema</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-plasma font-mono font-bold">ACADEMIC WEB APP FLOW</span>
            </div>

            <div className="flex flex-col">
              <DiagramNode 
                icon={User} 
                title="Admin Control Input" 
                description="Administrator posts notice, schedule files, or events via the admin panel." 
                stepNumber="01"
              />
              
              <DiagramConnector label="Authenticated HTTP Request" />
              
              <DiagramNode 
                icon={Server} 
                title="Flask Backend Server" 
                description="Verifies session tokens, handles file uploads, and acts as API endpoint mediator." 
                stepNumber="02"
                type="highlight"
              />
              
              <DiagramConnector label="SQLAlchemy ORM Commit" />
              
              <DiagramNode 
                icon={Database} 
                title="SQLite Database" 
                description="Stores structured notices, user logs, timetables, and meta references." 
                stepNumber="03"
                type="accent"
              />
              
              <DiagramConnector label="JSON API Response" />
              
              <DiagramNode 
                icon={Tv} 
                title="Student Dashboard UI" 
                description="Renders notices, document previews, and calendar items in real-time." 
                stepNumber="04"
              />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
