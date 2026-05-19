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

The portfolio uses embedded resume assets:

```text
public/Suryakshar_Konchada_Resume.pdf
public/Suryakshar_Konchada_Core_Resume.pdf
```

To replace them later, add the new files to `public/` and update:

```js
profile.resumes
```

inside `src/data/portfolio.js`.

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
