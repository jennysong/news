const express = require('express');
const cors = require('cors');
const { topics, getArticlesByTopic } = require('./data/mockData');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// GET /api/news/topics - returns top 5 topics
app.get('/api/news/topics', (req, res) => {
  const topicSummaries = topics.map(({ id, title, description, trendScore, category }) => ({
    id, title, description, trendScore, category
  }));
  res.json({ topics: topicSummaries, source: 'mock' });
});

// GET /api/news/perspectives/:topicId - returns articles grouped by perspective
app.get('/api/news/perspectives/:topicId', (req, res) => {
  const { topicId } = req.params;
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return res.status(404).json({ error: 'Topic not found' });

  const grouped = {
    left: [],
    'center-left': [],
    center: [],
    'center-right': [],
    right: []
  };

  topic.articles.forEach(article => {
    if (grouped[article.perspective]) {
      grouped[article.perspective].push(article);
    }
  });

  res.json({ topicId, title: topic.title, perspectives: grouped });
});

// GET /api/news/statistics/:topicId - returns statistics per perspective
app.get('/api/news/statistics/:topicId', (req, res) => {
  const { topicId } = req.params;
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return res.status(404).json({ error: 'Topic not found' });

  const counts = { left: 0, 'center-left': 0, center: 0, 'center-right': 0, right: 0 };
  topic.articles.forEach(a => { if (counts[a.perspective] !== undefined) counts[a.perspective]++; });

  const total = topic.articles.length;
  const stats = Object.entries(counts).map(([perspective, count]) => ({
    perspective,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0
  }));

  res.json({ topicId, title: topic.title, total, stats });
});

app.listen(PORT, () => console.log(`News server running on port ${PORT}`));
