import { profile } from "../data/portfolio";

export async function getLatestResume() {
  return profile.resumes.map((resume) => ({
    ...resume,
    path: resume.url,
    htmlUrl: resume.url,
    updatedAt: null
  }));
}
