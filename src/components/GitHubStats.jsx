import { Github } from "lucide-react";
import { profile } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function GitHubStats() {
  const username = profile.githubUsername;
  const theme = "tokyonight";

  return (
    <Section id="github" eyebrow="GitHub Integration" title="Auto-updating development activity, languages, and repository signal.">
      <Reveal>
        <div className="glass-panel overflow-hidden p-5 sm:p-7">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.06] text-white">
                <Github />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">github.com/{username}</h3>
                <p className="text-slate-400">These cards refresh automatically from public GitHub data.</p>
              </div>
            </div>
            <a className="mini-button" href={profile.github} target="_blank" rel="noreferrer">
              Open GitHub
            </a>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <img
              className="github-card"
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&bg_color=0d1117&title_color=22d3ee&icon_color=8b5cf6&text_color=cbd5e1`}
              alt="GitHub repository stats"
              loading="lazy"
            />
            <img
              className="github-card"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&bg_color=0d1117&title_color=22d3ee&text_color=cbd5e1`}
              alt="GitHub top languages"
              loading="lazy"
            />
          </div>
          <img
            className="github-card mt-5"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=0d1117&color=22d3ee&line=8b5cf6&point=60a5fa`}
            alt="GitHub contribution activity graph"
            loading="lazy"
          />
        </div>
      </Reveal>
    </Section>
  );
}
