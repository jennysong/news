export default function PerspectivePanel({ perspective }) {
  const { viewpoint, summary, sentiment } = perspective;

  return (
    <div className={`perspective sentiment-${sentiment}`}>
      <div className="viewpoint-label">{viewpoint}</div>
      <div className="viewpoint-summary">{summary}</div>
    </div>
  );
}
