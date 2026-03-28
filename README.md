# PerspectiveNews

A React + Node.js news application showing today's top 5 hottest topics with multiple points of view across the political spectrum (left, center-left, center, center-right, right).

## Features

- 🔥 **Top 5 trending topics** with trend scores and category badges
- 📊 **Coverage statistics** — bar chart showing article distribution by perspective
- �� **Multi-perspective articles** — real outlet names spanning the political spectrum
- 🎨 **Dark news-themed UI** — modern design with color-coded perspectives
- ⚡ **Live data** — expandable article summaries with "Read more" toggle

## Perspective Color Coding

| Perspective  | Color   | Outlets (examples)                        |
|--------------|---------|-------------------------------------------|
| Left         | Blue    | The Guardian, Mother Jones, Jacobin        |
| Center-Left  | Purple  | NYT, Washington Post, NPR, The Atlantic   |
| Center       | Green   | Reuters, AP, BBC, Bloomberg, Axios        |
| Center-Right | Amber   | WSJ, The Economist, Politico, USA Today   |
| Right        | Red     | Fox News, NY Post, Daily Wire, Examiner   |

## Quick Start

### Prerequisites
- Node.js 16+
- npm 8+

### Install Dependencies

```bash
# From the project root
npm install           # installs root deps (concurrently)
npm run install:all   # installs server + client deps
```

Or install individually:

```bash
cd server && npm install
cd ../client && npm install
```

### Run in Development

```bash
# From project root — starts both server and client concurrently
npm start
```

Or run separately:

```bash
# Terminal 1 — API server on port 5001
npm run start:server

# Terminal 2 — React dev server on port 3000
npm run start:client
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
cd client && npm run build
```

The build output is in `client/build/`. Serve it with any static file server.

## API Endpoints

| Method | Path                              | Description                          |
|--------|-----------------------------------|--------------------------------------|
| GET    | `/api/news/topics`                | List of top 5 trending topics        |
| GET    | `/api/news/perspectives/:topicId` | Articles grouped by perspective      |
| GET    | `/api/news/statistics/:topicId`   | Article count & % per perspective    |

### Example Responses

**GET /api/news/topics**
```json
{
  "topics": [
    { "id": "ai-regulation", "title": "AI Regulation & Safety", "trendScore": 98, "category": "Technology", ... }
  ],
  "source": "mock"
}
```

**GET /api/news/statistics/ai-regulation**
```json
{
  "topicId": "ai-regulation",
  "total": 10,
  "stats": [
    { "perspective": "left", "count": 2, "percentage": 20 },
    ...
  ]
}
```

## Project Structure

```
news/
├── package.json          # Root — concurrently scripts
├── README.md
├── server/
│   ├── package.json
│   ├── index.js          # Express API server (port 5001)
│   └── data/
│       └── mockData.js   # 5 topics × 10 articles each
└── client/
    ├── package.json      # proxy → http://localhost:5001
    └── src/
        ├── App.js
        ├── App.css
        └── components/
            ├── NewsList.js
            ├── NewsCard.js
            ├── PerspectivesPanel.js
            └── StatisticsChart.js
```

## Topics Covered

1. **AI Regulation & Safety** — Trend Score: 98
2. **Climate & Energy Policy** — Trend Score: 94
3. **Immigration Reform** — Trend Score: 91
4. **Economy & Inflation** — Trend Score: 89
5. **Healthcare & Drug Prices** — Trend Score: 87
