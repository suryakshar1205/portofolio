import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const publicDir = join(process.cwd(), "public");
const scanDirs = [publicDir, join(publicDir, "resumes")];
const supported = new Set([".pdf", ".docx"]);

function extensionOf(fileName) {
  const index = fileName.lastIndexOf(".");
  return index === -1 ? "" : fileName.slice(index).toLowerCase();
}

function toPublicUrl(filePath) {
  return `/${relative(publicDir, filePath).split(sep).map(encodeURIComponent).join("/")}`;
}

function inferType(fileName) {
  const lower = fileName.toLowerCase();
  if (/(core|ece|electronic|communication|telecom|resume[_-]?c|\bc\b)/.test(lower)) {
    return {
      id: "core",
      label: "ECE/Core Resume",
      bestFor: "Electronics, telecom, embedded systems, wireless communication, and signal processing roles.",
      accent: "from-plasma to-violet-pulse",
      rank: 2
    };
  }

  if (/(ai|ml|machine|data|resume[_-]?a|\ba\b)/.test(lower)) {
    return {
      id: "ai",
      label: "AI/ML Resume",
      bestFor: "AI/ML, NLP, computer vision, data science, and applied AI roles.",
      accent: "from-cyan-beam to-plasma",
      rank: 1
    };
  }

  return {
    id: "resume",
    label: "Resume",
    bestFor: "General portfolio and recruiter review.",
    accent: "from-cyan-beam to-plasma",
    rank: 9
  };
}

const files = scanDirs.flatMap((directory) => {
  try {
    return readdirSync(directory)
      .map((name) => join(directory, name))
      .filter((filePath) => statSync(filePath).isFile())
      .filter((filePath) => supported.has(extensionOf(filePath)));
  } catch {
    return [];
  }
});

const selected = [];
const seenIds = new Set();

for (const filePath of files
  .map((filePath) => {
    const name = filePath.split(sep).at(-1);
    return { filePath, name, ...inferType(name) };
  })
  .sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name))) {
  const uniqueId = seenIds.has(filePath.id) ? `${filePath.id}-${selected.length + 1}` : filePath.id;
  seenIds.add(filePath.id);
  selected.push({
    id: uniqueId,
    label: filePath.label,
    name: filePath.name,
    url: toPublicUrl(filePath.filePath),
    extension: extensionOf(filePath.name).replace(".", ""),
    bestFor: filePath.bestFor,
    accent: filePath.accent
  });

  if (selected.length === 2) break;
}

writeFileSync(
  join(publicDir, "resume-manifest.json"),
  `${JSON.stringify({ generatedAt: new Date().toISOString(), resumes: selected }, null, 2)}\n`
);

console.log(`Generated resume manifest with ${selected.length} resume(s).`);
