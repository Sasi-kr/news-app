import React from 'react';
import './newsItem.css';

function NewsItem({ urlToImage, url, title, description }) {
  return (
    <div className="news-app">
      <div className="news-item">
        <img className="news-image" src={urlToImage} alt={title} />
        <div>
          <p>{description}</p>

          <h2>
            {' '}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}{' '}
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
