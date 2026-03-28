import React, { useState } from 'react';

const perspectiveConfig = {
  'left': { label: 'Left', color: '#2563EB', emoji: '◀◀' },
  'center-left': { label: 'Center-Left', color: '#7C3AED', emoji: '◀' },
  'center': { label: 'Center', color: '#059669', emoji: '●' },
  'center-right': { label: 'Center-Right', color: '#D97706', emoji: '▶' },
  'right': { label: 'Right', color: '#DC2626', emoji: '▶▶' },
};

function ArticleCard({ article, color }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="article-card" style={{ borderLeftColor: color }}>
      <div className="article-source" style={{ color }}>
        {article.source}
        <span className="article-date">{new Date(article.publishedAt).toLocaleDateString()}</span>
      </div>
      <h4 className="article-title">{article.title}</h4>
      <p className={`article-summary ${expanded ? 'expanded' : ''}`}>{article.summary}</p>
      <button className="read-more-btn" onClick={() => setExpanded(!expanded)} style={{ color }}>
        {expanded ? 'Show less ▲' : 'Read more ▼'}
      </button>
    </div>
  );
}

function PerspectivesPanel({ perspectives }) {
  const perspectiveOrder = ['left', 'center-left', 'center', 'center-right', 'right'];

  return (
    <div className="perspectives-panel">
      <h3 className="panel-title">📊 Perspectives Across the Spectrum</h3>
      <div className="spectrum-bar">
        {perspectiveOrder.map(p => {
          const config = perspectiveConfig[p];
          const count = perspectives.perspectives[p]?.length || 0;
          return (
            <div key={p} className="spectrum-segment" style={{ background: config.color, flex: Math.max(count, 0.5) }} title={`${config.label}: ${count} articles`}>
              {count > 0 && <span>{count}</span>}
            </div>
          );
        })}
      </div>
      <div className="perspectives-columns">
        {perspectiveOrder.map(perspKey => {
          const config = perspectiveConfig[perspKey];
          const articles = perspectives.perspectives[perspKey] || [];
          if (articles.length === 0) return null;
          return (
            <div key={perspKey} className="perspective-column">
              <div className="perspective-header" style={{ background: config.color + '22', borderBottom: `3px solid ${config.color}` }}>
                <span className="perspective-emoji">{config.emoji}</span>
                <span className="perspective-label" style={{ color: config.color }}>{config.label}</span>
                <span className="perspective-count" style={{ background: config.color }}>{articles.length}</span>
              </div>
              <div className="articles-list">
                {articles.map(article => (
                  <ArticleCard key={article.id} article={article} color={config.color} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PerspectivesPanel;
