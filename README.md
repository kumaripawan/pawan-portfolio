# Pawan Kumari — Portfolio

> Modern, fast, and responsive developer portfolio built with **Next.js + TypeScript + Tailwind CSS**. Features a starfield background, glassmorphism UI, gradient accents, smooth inertial scrolling, and accessible, content‑driven sections.

---

## 🚀 Live

* **Production**: https://pawan-portfolio-alpha.vercel.app/#home
* 
* 

---

## ✨ Features

* Starfield animated background
* Dark glass (blurred) sections with high contrast
* Gradient headings & rainbow accents
* Sticky header with pill nav
* **Smooth scrolling** (wheel + anchor + buttons) powered by **Lenis**
* Sections: **Projects**, **Skills**, **Experience**, **Education**, **Certifications**
* Right‑side **Stats rail** (Years of Experience, Completed Projects)
* Mobile‑first, accessible semantics (focus rings, reduced‑motion fallbacks)

---

## 🧰 Tech Stack

Tech Stack

Framework: Next.js 13

Language: TypeScript

Styling: TailwindCSS

Chatbot: react-draggable
, re-resizable

Deployment: Vercel

---

## 📁 Project Structure

```
app/
  components/
    Header.tsx
    Footer.tsx
    Starfield.tsx
    SmoothScroll.tsx
    StatsRail.tsx
    Projects.tsx
    Skills.tsx
    Experience.tsx
    Edu.tsx
    certs.tsx
  page.tsx          # home page (hero + sections)
public/
  images/pawan-headshot.png
app/data/
  projects.ts
  skills.ts
  experience.ts
  education.ts
  certifications.ts
```

---

## 🛠️ Setup & Scripts

**Requirements**: Node.js 18+ and npm.

```bash
# install dependencies
npm ci

# run locally at http://localhost:3000
npm run dev

# production build (static export to ./out)
npm run build

# optional: preview exported site locally
npx serve out
```


---

## 🧿 Smooth Scrolling

Implemented via `app/components/SmoothScroll.tsx`:

* Intercepts **anchors** (`<a href="#id">`) and **buttons** with `data-scroll="#id"` in **capture phase** for reliable Lenis navigation
* Offsets for the sticky header automatically
* Respects `prefers-reduced-motion`

Example button:

```tsx
<button data-scroll="#education" className="...">Education</button>
```

---
🤖 ChatBot

Draggable & resizable UI

Starts minimized by default

Allows sending messages to a backend API (/api/chat)

## ☁️ Deploy

### Option A — Vercel (recommended)

1. Import the repo at Vercel → **Add New → Project**.
2. Framework: **Next.js** · Build: `next build` · Output: **`out`**.
3. Deploy → get `https://your-project.vercel.app`.

CLI:

```bash
npm i -g vercel
vercel
vercel --prod   # set output directory to: out
```

### Option B — GitHub Pages (Actions)

Add `.github/workflows/pages.yml`:

```yaml
name: Deploy Next.js static export to GitHub Pages
on: { push: { branches: [ main ] }, workflow_dispatch: {} }
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: true }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run build   # produces ./out
      - uses: actions/upload-pages-artifact@v3
        with: { path: ./out }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then push and enable **Settings → Pages → Source: GitHub Actions**.

---

## 🐞 Troubleshooting

* **Git identity**: `git config --global user.name "Your Name"` and `git config --global user.email "username@users.noreply.github.com"`
* **Hash links jump (not smooth)**: ensure `SmoothScroll.tsx` is included in `app/layout.tsx` and nav items are anchors or have `data-scroll`.
* **Static assets missing on Pages**: confirm build produced `out/` and Pages uses the Action above.

---

## 📄 License

MIT © Pawan Kumari

---

## 🙌 Credits

Design & built by **Pawan Kumari**. Starfield effect + glass UI + smooth scroll crafted for a clean, focused portfolio.



















