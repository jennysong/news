import React from 'react';

const categoryColors = {
  'Technology': '#0ea5e9',
  'Environment': '#10b981',
  'Politics': '#8b5cf6',
  'Health': '#f43f5e',
  'Economy': '#f59e0b',
};

function NewsCard({ topic, rank, isSelected, onSelect }) {
  const isHot = topic.trendScore >= 85;
  const categoryColor = categoryColors[topic.category] || '#64748b';

  return (
    <div className={`news-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <div className="card-rank">#{rank}</div>
      <div className="card-content">
        <div className="card-meta">
          <span className="card-category" style={{ background: categoryColor + '22', color: categoryColor, border: `1px solid ${categoryColor}44` }}>
            {topic.category}
          </span>
          {isHot && <span className="hot-badge">🔥 HOT</span>}
          <span className="trend-score">↑ {topic.trendScore}</span>
        </div>
        <h3 className="card-title">{topic.title}</h3>
        <p className="card-description">{topic.description}</p>
      </div>
      <div className="card-arrow">{isSelected ? '▼' : '▶'}</div>
    </div>
  );
}

export default NewsCard;
