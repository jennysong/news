import React from 'react';
import NewsCard from './NewsCard';

function NewsList({ topics, selectedTopic, onTopicSelect }) {
  return (
    <div className="news-list">
      {topics.map((topic, index) => (
        <NewsCard
          key={topic.id}
          topic={topic}
          rank={index + 1}
          isSelected={selectedTopic && selectedTopic.id === topic.id}
          onSelect={() => onTopicSelect(topic)}
        />
      ))}
    </div>
  );
}

export default NewsList;
