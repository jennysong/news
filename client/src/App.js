import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NewsList from './components/NewsList';
import PerspectivesPanel from './components/PerspectivesPanel';
import StatisticsChart from './components/StatisticsChart';

function App() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [perspectives, setPerspectives] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    axios.get('/api/news/topics')
      .then(res => {
        setTopics(res.data.topics);
        setLoading(false);
        if (res.data.topics.length > 0) handleTopicSelect(res.data.topics[0]);
      })
      .catch(err => {
        setError('Failed to load news topics. Is the server running?');
        setLoading(false);
      });
  }, []);

  const handleTopicSelect = async (topic) => {
    setSelectedTopic(topic);
    setLoadingDetails(true);
    try {
      const [perspRes, statsRes] = await Promise.all([
        axios.get(`/api/news/perspectives/${topic.id}`),
        axios.get(`/api/news/statistics/${topic.id}`)
      ]);
      setPerspectives(perspRes.data);
      setStatistics(statsRes.data);
    } catch (err) {
      console.error('Failed to load topic details:', err);
    }
    setLoadingDetails(false);
  };

  if (loading) return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading today's top stories...</p>
    </div>
  );

  if (error) return (
    <div className="error-screen">
      <h2>⚠️ {error}</h2>
      <p>Make sure the server is running: <code>cd server && node index.js</code></p>
    </div>
  );

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">📰</span>
            <div>
              <h1>PerspectiveNews</h1>
              <p className="tagline">See every side of the story</p>
            </div>
          </div>
          <div className="header-meta">
            <span className="date-badge">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="live-badge">● LIVE</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="topics-section">
          <h2 className="section-title">🔥 Today's Top Stories</h2>
          <NewsList topics={topics} selectedTopic={selectedTopic} onTopicSelect={handleTopicSelect} />
        </section>

        {selectedTopic && (
          <section className="details-section">
            <div className="selected-topic-header">
              <h2>{selectedTopic.title}</h2>
              <p className="topic-description">{selectedTopic.description}</p>
            </div>

            {loadingDetails ? (
              <div className="loading-details"><div className="spinner small"></div><p>Loading perspectives...</p></div>
            ) : (
              <div className="details-grid">
                {statistics && <StatisticsChart statistics={statistics} />}
                {perspectives && <PerspectivesPanel perspectives={perspectives} />}
              </div>
            )}
          </section>
        )}
      </main>

      <footer className="app-footer">
        <p>PerspectiveNews — Balanced coverage from across the political spectrum</p>
      </footer>
    </div>
  );
}

export default App;
