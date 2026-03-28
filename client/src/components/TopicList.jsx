import TopicCard from "./TopicCard";

export default function TopicList({ topics }) {
  return (
    <section>
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </section>
  );
}
