import { useState, useEffect } from "react";
import TopicList from "./components/TopicList";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:4000/api/topics";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className="error">Failed to load topics: {error}</div>;
  }

  if (!data) {
    return <div className="loading">Loading today&apos;s top topics…</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📰 News Perspectives</h1>
        <p className="date">Top stories for {data.date}</p>
      </header>
      <TopicList topics={data.topics} />
    </div>
  );
}
