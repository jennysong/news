export default function PerspectivePanel({ perspective }) {
  const { viewpoint, summary, sentiment, articles } = perspective;

  return (
    <div className={`perspective sentiment-${sentiment}`}>
      <div className="viewpoint-label">{viewpoint}</div>
      <div className="viewpoint-summary">{summary}</div>
      {articles && articles.length > 0 && (
        <ul className="related-articles">
          {articles.map((article, index) => (
            <li key={`${article.url}-${index}`}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
