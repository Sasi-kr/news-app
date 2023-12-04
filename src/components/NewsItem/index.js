import React from 'react';
import './newsItem.css';

function NewsItem({ newsItem }) {
  const { title, author, publishedAt, description, content, url, urlToImage } =
    newsItem;
  return (
    <div className="card">
      <img src={urlToImage} alt={title} />

      <h2>{title}</h2>
      <p>
        {description} - {author} Published at : {publishedAt}
      </p>
      <p>{content}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
}

export default NewsItem;
