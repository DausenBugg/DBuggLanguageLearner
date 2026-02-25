# Nihongo Journey

A lightweight Japanese learning web app focused on **6-month tourist survival speaking fluency**, with writing essentials, cultural etiquette lessons, daily streaks, and progress tracking.

## Stack

- React + Vite + TypeScript
- Tailwind CSS
- Browser localStorage for streak/progress
- GitHub Pages deployment via GitHub Actions

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

- Push to `main`.
- Ensure GitHub Pages is set to **GitHub Actions** in repository settings.
- Workflow file: `.github/workflows/deploy.yml`.

## Notes

- Speaking playback uses browser speech synthesis (`ja-JP`)
- Pronunciation scoring uses browser speech recognition where supported
- Progress and streak are stored locally in the browser
