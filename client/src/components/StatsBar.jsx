export default function StatsBar({ perspectives }) {
  return (
    <div className="stats-bar-container">
      {perspectives.map((p) => (
        <div className="stats-bar-row" key={p.viewpoint}>
          <span className="stats-bar-label">{p.viewpoint}</span>
          <div className="stats-bar-track">
            <div
              className={`stats-bar-fill sentiment-${p.sentiment}`}
              style={{ width: `${p.percentage}%` }}
            />
          </div>
          <span className="stats-bar-value">
            {p.articleCount} articles ({p.percentage}%)
          </span>
        </div>
      ))}
    </div>
  );
}
