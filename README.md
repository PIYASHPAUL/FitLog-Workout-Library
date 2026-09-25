# 💪 FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of
twelve lifts, drill into detailed instructions and specs for each one, lock
lifts into **Today's Plan**, save others for later, and track your session
metrics live — all without needing an account.

**Live Site:** _add your deployed link here_
**Repository:** https://github.com/ProgrammingHero1/B14-A6-Fit-Log

---

## 🧰 Technologies Used

- **Next.js 14** (App Router) — routing, layouts, client/server components
- **React 18** — UI and state management via Context API
- **Tailwind CSS** — styling, responsive layout, dark theme
- **lucide-react** — icon set
- **Browser `localStorage`** — persists Today's Plan and Saved lists across reloads
- **FitLog REST API** — `https://api.abcz.workers.dev/api/fitlog` for live workout data

## ✨ Key Features

1. **Sortable workout library** — a responsive 3×4 grid of all twelve lifts fetched live
   from the API, with a "Sort by" dropdown (Duration / Calories / Rating).
2. **Detailed workout pages** — two-column layout with full specs (equipment,
   difficulty, sets, reps, duration, calories, rating) and step-by-step instructions.
3. **Today's Plan & Saved workflow** — add a lift to today's plan (capped at 5) or
   save it for later, straight from the detail page, with instant toast feedback and
   live navbar badge counters.
4. **My Plan dashboard** — live Exercises / Minutes / Calories summary, tabbed
   Today's Plan / Saved views, Mark as Done and Remove actions, and a friendly empty state.
5. **Persistent state** — Today's Plan and Saved lists survive a page refresh via
   `localStorage`, so progress is never lost.
6. **Fully responsive & polished UX** — mobile/tablet/desktop layouts, a custom
   404 page, loading states, and accessible focus styles throughout.

## 🗂️ Project Structure

```
app/
  layout.js             Root layout: fonts, providers, Navbar/Footer
  page.js               Home page (Hero + Library)
  not-found.js          Custom 404 page
  workout/[id]/page.js  Workout detail page
  my-plan/page.js       My Plan page
components/             UI building blocks (Navbar, Hero, WorkoutCard, etc.)
context/                WorkoutsContext, PlanContext, ToastContext
lib/                    api.js (FitLog API client), storage.js (localStorage)
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📬 Submission

- Live Link:
- GitHub Repository Link: https://github.com/ProgrammingHero1/B14-A6-Fit-Log
