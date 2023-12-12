import React from 'react';
import { Link } from 'react-router-dom';
import './newsItem.css';

function NewsItem({ id, urlToImage, url, title, description }) {
  return (
    <div className="news-app">
      <div className="news-item">
        <img className="news-image" src={urlToImage} alt={title} />
        <div>
          <p>{description}</p>

          <h3>
            {' '}
            <Link to={`/news/${id}`} target="_blank" rel="noopener noreferrer">
              <span className="">read_more</span>{' '}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
