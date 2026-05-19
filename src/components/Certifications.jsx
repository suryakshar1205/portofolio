import { certifications } from "../data/portfolio";
import { Reveal, Section } from "./Section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials and recognitions supporting the AI engineering track.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <Reveal key={cert.title} delay={index * 0.06}>
              <div className="glass-card h-full p-6">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-beam/10 text-cyan-beam">
                  <Icon />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{cert.title}</h3>
                <p className="mt-2 text-slate-400">{cert.issuer}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
