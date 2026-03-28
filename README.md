# News Perspectives

A React + Node.js app that surfaces today's top 5 trending news topics and
presents **multiple perspectives** on each—especially opposing viewpoints—so
you can see how different sides frame the same story.

## Features

- **Top 5 Trending Topics** – curated list of the day's hottest stories.
- **Multiple Perspectives** – each topic shows at least two opposing
  viewpoints plus a balanced take.
- **Coverage Statistics** – bar charts show how many articles lean toward
  each perspective, giving a quick sense of media emphasis.

## Project Structure

```
news/
├── client/          # React front-end (Vite)
│   └── src/
│       ├── components/
│       │   ├── TopicCard.jsx
│       │   ├── TopicList.jsx
│       │   ├── PerspectivePanel.jsx
│       │   └── StatsBar.jsx
│       ├── App.jsx
│       └── index.css
├── server/          # Express API back-end
│   └── src/
│       ├── routes/topics.js
│       ├── services/newsService.js
│       └── index.js
└── package.json     # root convenience scripts
```

## Getting Started

### Prerequisites

- **Node.js** ≥ 18

### Install dependencies

```bash
npm run install:all
```

### Run in development

Start the API server and the React dev server in two terminals:

```bash
# Terminal 1 – API (port 4000)
npm run dev:server

# Terminal 2 – React (port 3000, proxies /api to :4000)
npm run dev:client
```

Open <http://localhost:3000> in your browser.

### Build for production

```bash
npm run build:client
npm run start:server
```

## Extending with a Real News API

The server currently returns curated mock data so the app works out of the
box with no API keys. To connect a live source:

1. Sign up for a news API (e.g. [NewsAPI.org](https://newsapi.org) or
   [GNews](https://gnews.io)).
2. Store your key in `server/.env` as `NEWS_API_KEY=...`.
3. Update `server/src/services/newsService.js` to fetch and transform live
   data using the same response shape.