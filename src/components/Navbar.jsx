import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileDown, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio";

export function Navbar({ onResumeClick, theme = "dark", onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-void/[0.78] py-3 shadow-2xl backdrop-blur-2xl" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-beam/30 bg-cyan-beam/10 font-display font-bold text-cyan-beam shadow-glow">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.28em] text-white sm:block">
            Suryakshar
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-pill">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onThemeToggle} className="theme-chip" aria-label="Toggle light and dark mode">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <button onClick={onResumeClick} className="resume-chip" aria-label="Open latest resume">
            <FileDown size={17} />
            <span className="hidden sm:inline">Resume</span>
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-4 rounded-3xl border border-white/10 bg-slate-950/95 p-3 backdrop-blur-xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
