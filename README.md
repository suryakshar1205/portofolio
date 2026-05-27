# Suryakshar Konchada AI Portfolio

A futuristic, dark, animated AI engineer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Quick Start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Easy Editing

Most portfolio content is in one file:

```text
src/data/portfolio.js
```

Edit this file to change:

- Name, headline, email, GitHub, LinkedIn, phone
- Hero typing lines
- About summary
- Skills and progress levels
- Featured projects
- All projects grid
- Experience and internships
- Research/engineering cards
- Certifications
- Contact links
- Resume GitHub repository settings

UI components are in:

```text
src/components/
```

Global visual styling is in:

```text
src/styles.css
tailwind.config.js
```

## Resumes

The portfolio automatically scans resume files from `public/` and `public/resumes/` during `npm run dev` and `npm run build`.

Recommended filename patterns:

```text
public/SURYAKSHAR_KONCHADA_RESUME_A.pdf
public/SURYAKSHAR_KONCHADA_RESUME_C.pdf
```

You can use different names, but include clear keywords so the site labels them correctly:

```text
AI resume: include AI, ML, or RESUME_A in the filename
Core resume: include CORE, ECE, COMMUNICATION, TELECOM, or RESUME_C in the filename
```

Only PDF and DOCX files are supported. If more than two resume files exist, the build picks the best AI/Core pair it can infer from filenames.

## Deployment

### Vercel

Use the default Vite settings:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages

For a project page, set the base path to the repository name before building:

```bash
$env:VITE_BASE_PATH="/portofolio/"
npm run build
```

Then deploy `dist/`. The included script can deploy with `gh-pages`:

```bash
npm run deploy
```

If your GitHub repository has a different name, replace `/portofolio/` with `/<repo-name>/`.
