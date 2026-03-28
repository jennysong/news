import PerspectivePanel from "./PerspectivePanel";
import StatsBar from "./StatsBar";

export default function TopicCard({ topic }) {
  const { title, summary, category, perspectives, totalArticles } = topic;

  const categoryClass = `category category-${category.toLowerCase()}`;

  return (
    <article className="topic-card">
      <span className={categoryClass}>{category}</span>
      <h2>{title}</h2>
      <p className="summary">{summary}</p>
      <p className="total-articles">
        {totalArticles} articles covering this topic
      </p>

      <h3 className="perspectives-heading">Coverage Statistics</h3>
      <StatsBar perspectives={perspectives} />

      <h3 className="perspectives-heading" style={{ marginTop: "1rem" }}>
        Different Perspectives
      </h3>
      {perspectives.map((p) => (
        <PerspectivePanel key={p.viewpoint} perspective={p} />
      ))}
    </article>
  );
}
