import React from 'react';
import NewsItem from '../NewsItem';
function NewsList({ news }) {
  return (
    <div>
      <h2>NewsList</h2>
      {news.map((item, index) => {
        return <NewsItem key={index} newsItem={item} />;
      })}
    </div>
  );
}

export default NewsList;
