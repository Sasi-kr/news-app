import React from 'react';
import './newsItem.css';

function NewsItem({ urlToImage, url, title, description }) {
  return (
    <div className="news-app">
      <img src={urlToImage} alt={title} />
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
    </div>
  );
}

export default NewsItem;
