import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { BootSequence } from "./components/BootSequence";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { CursorGlow } from "./components/CursorGlow";
import { EngineeringDomains } from "./components/EngineeringDomains";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { AllProjects, FeaturedProjects } from "./components/Projects";
import { ResumeModal, useResume } from "./components/ResumeModal";
import { profile } from "./data/portfolio";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const resumeState = useResume();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <Background />
      <CursorGlow />
      <AnimatePresence>
        {loading && <BootSequence />}
      </AnimatePresence>

      <Navbar
        onResumeClick={() => setResumeOpen(true)}
        theme={theme}
        onThemeToggle={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
      />
      <main>
        <Hero onResumeClick={() => setResumeOpen(true)} />
        <About />
        <EngineeringDomains />
        <FeaturedProjects />
        <AllProjects />
        <Experience />
        <Certifications />
        <Contact onResumeClick={() => setResumeOpen(true)} />
      </main>
      <footer className="mx-auto max-w-7xl px-4 pb-10 pt-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        Designed and built with precision by <span className="text-cyan-beam">{profile.name}</span>. Â© 2026
      </footer>
      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        resumes={resumeState.resumes}
        status={resumeState.status}
      />
    </>
  );
}

