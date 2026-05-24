# PDF Resume Builder, Vue.js Frontend

A full Vue.js web application that lets users enter their resume data through a guided form interface and generate a polished, downloadable PDF resume on the spot. No Word docs, no messy formatting, just fill it in and get a professional resume out.

48 commits. 15 branches. This one was built seriously.

Automating the most painful part of job hunting is birarenze work and genuinely useful.

---

## What It Does

- Users fill in resume data: personal info, work experience, education, skills
- Choose from resume templates (e.g., `ClassicTemplate`)
- Instantly generates a formatted PDF resume
- Fully SPA with Vue Router
- CI/CD via GitHub Actions (`.github/workflows`)

---

## Tech Stack

- **Framework:** Vue.js 3
- **Routing:** Vue Router
- **PDF Generation:** Integrated PDF plugin (`plugins/`)
- **Styling:** Custom CSS (`styles/`)
- **Build:** Babel + webpack/Vite
- **Deploy:** GitHub Actions, `.htaccess` for server routing

---

## Project Structure

```
project3-frontend-vue/
├── src/
│   ├── components/         # Reusable Vue components
│   ├── views/              # Page-level views
│   ├── services/           # API and data services
│   ├── plugins/            # PDF generation plugin
│   ├── styles/             # Global CSS
│   ├── assets/             # Images and static assets
│   ├── App.vue             # Root component
│   └── ClassicTemplate.vue # Resume template component
├── router/                 # Vue Router config
├── public/                 # Static HTML entry
├── dist/                   # Production build output
└── .github/workflows/      # CI/CD pipeline
```

---

## Running Locally

```bash
npm install
npm run serve
```

Build for production:

```bash
npm run build
```

---

## Backend
This is the frontend half of a full-stack project. The backend is at [project2-backend-node-forke](https://github.com/lacebx/project2-backend-node-forke), handles user auth and data persistence via Node.js + MySQL.

---

## Context
Built as the frontend component of a capstone-style full-stack project. The goal was to take user-provided resume data, format it beautifully, and export it as a PDF. The 15 branches and 48 commits tell the story of a project that kept growing beyond its original scope.
