import React from 'react';
import NewsCard from '../NewsCard';
function NewsList({ news }) {
  return (
    <div>
      <h2>NewsList</h2>
      {news.map((item, index) => {
        return <NewsCard key={index} newsItem={item} />;
      })}
    </div>
  );
}

export default NewsList;
