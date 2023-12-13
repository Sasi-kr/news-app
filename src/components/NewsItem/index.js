import React from 'react';
import { Link } from 'react-router-dom';
import './newsItem.css';

function NewsItem({ id, urlToImage, url, title, description }) {
  return (
    <div className="news-card">
      {' '}
      {/* Apply the card class */}
      <div className="card-image">
        <img src={urlToImage} alt={title} />
      </div>
      <div className="card-content">
        <h2 className="image-title">{title}</h2>
        <p>{description}</p>

        <h3>
          <Link to={`/news/${id}`} target="_blank" rel="noopener noreferrer">
            <span className="">Read More</span>
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default NewsItem;
