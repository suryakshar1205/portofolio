import { profile } from "../data/portfolio";

export async function getLatestResume() {
  try {
    const response = await fetch(`/resume-manifest.json?v=${Date.now()}`);
    if (response.ok) {
      const manifest = await response.json();
      if (Array.isArray(manifest.resumes) && manifest.resumes.length) {
        return manifest.resumes;
      }
    }
  } catch {
    // Fall back to the static profile config when running without a generated manifest.
  }

  return profile.resumes.map((resume) => ({
    ...resume,
    path: resume.url,
    htmlUrl: resume.url,
    updatedAt: null
  }));
}
