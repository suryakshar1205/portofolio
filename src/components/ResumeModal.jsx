import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, FileText, Loader2, X } from "lucide-react";
import { getLatestResume } from "../services/resume";

export function useResume() {
  const [resumes, setResumes] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let mounted = true;
    setStatus("loading");
    getLatestResume()
      .then((latest) => {
        if (!mounted) return;
        setResumes(Array.isArray(latest) ? latest : [latest]);
        setStatus("ready");
      })
      .catch(() => {
        if (!mounted) return;
        setStatus("error");
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { resumes, status };
}

export function ResumeModal({ open, onClose, resumes = [], status }) {
  const [selectedId, setSelectedId] = useState(null);
  const selectedResume = resumes.find((resume) => resume.id === selectedId) || resumes[0];
  const isDocx = selectedResume?.extension === "docx";
  const viewerUrl = isDocx
    ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(selectedResume.url)}`
    : selectedResume?.url;

  useEffect(() => {
    if (open && resumes.length && !selectedId) {
      setSelectedId(resumes[0].id);
    }
  }, [open, resumes, selectedId]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-void/82 px-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Resume viewer"
        >
          <motion.div
            className="relative flex h-[86vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/[0.12] bg-slate-950/90 shadow-glow"
            initial={{ scale: 0.94, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-beam/15 text-cyan-beam">
                  {status === "loading" ? <Loader2 className="animate-spin" /> : <FileText />}
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-white">Choose Resume Version</p>
                  <p className="text-sm text-slate-400">
                    {selectedResume?.label || "Loading embedded resumes..."}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedResume?.url && (
                  <a className="icon-action" href={selectedResume.url} download>
                    <Download size={18} />
                    <span>Download</span>
                  </a>
                )}
                {selectedResume?.url && (
                  <a className="icon-action" href={selectedResume.url} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} />
                    <span>Open</span>
                  </a>
                )}
                <button className="icon-action !px-3" onClick={onClose} aria-label="Close resume viewer">
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 bg-slate-950">
              {status === "loading" && (
                <div className="grid h-full place-items-center text-slate-300">
                  <Loader2 className="mb-4 animate-spin text-cyan-beam" />
                  Loading the resume...
                </div>
              )}
              {resumes.length > 0 && (
                <div className="grid gap-3 border-b border-white/10 bg-white/[0.025] p-4 md:grid-cols-2">
                  {resumes.map((resume) => (
                    <button
                      key={resume.id}
                      type="button"
                      onClick={() => setSelectedId(resume.id)}
                      className={`rounded-3xl border p-4 text-left transition ${
                        selectedResume?.id === resume.id
                          ? "border-cyan-beam/50 bg-cyan-beam/10 shadow-glow"
                          : "border-white/10 bg-white/[0.035] hover:border-cyan-beam/30"
                      }`}
                    >
                      <div className={`mb-3 h-1.5 w-20 rounded-full bg-gradient-to-r ${resume.accent}`} />
                      <h3 className="font-display text-lg font-semibold text-white">{resume.label}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{resume.bestFor}</p>
                    </button>
                  ))}
                </div>
              )}
              {selectedResume?.isFallback && (
                <div className="grid h-full place-items-center p-8 text-center">
                  <div className="max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                    <FileText className="mx-auto mb-4 text-cyan-beam" size={44} />
                    <h3 className="font-display text-2xl font-semibold text-white">Resume folder is ready</h3>
                    <p className="mt-3 text-slate-400">
                      Add a PDF or DOCX file to the website assets, then update the resume path in
                      `src/data/portfolio.js`.
                    </p>
                    <a className="mt-6 inline-flex text-cyan-beam" href={selectedResume.htmlUrl} target="_blank" rel="noreferrer">
                      Open resume location
                    </a>
                  </div>
                </div>
              )}
              {selectedResume && !selectedResume.isFallback && (
                <iframe
                  title={selectedResume.label}
                  src={viewerUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
