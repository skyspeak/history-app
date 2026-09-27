# Time Trail

A kids history web app for ages **7–12**. Browse a discover shelf, walk an era timeline, read short stories, and try a quick quiz.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. All stories are curated locally — no auth or database.

## Run locally

```bash
cd time-trail
npm install
npm run dev
```

Dev server binds `0.0.0.0:43127` (webpack). Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

Other scripts:

```bash
npm run build
npm run start   # production server on port 43127
npm run lint
```

## What’s inside

- **Discover** — horizontal shelf of stories on mobile; grid on desktop
- **Timeline** — era bands with story stops
- **Story pages** — short paragraphs, a fun fact, and a 3-question quiz
- **Empty / loading / error** states for main routes

## Inspiration (ideas only, not copied code)

- [Chronos_App](https://github.com/ElsaDonnat/Chronos_App) — era timeline bands, learn-then-quiz flow
- [explorers_app](https://github.com/aliceloudon/explorers_app) — discoverable topic shelf + post-read quiz
- [Historical-App-React-Native-UI](https://github.com/joestackss/Historical-App-React-Native-UI) — browsable destination-style home cards
