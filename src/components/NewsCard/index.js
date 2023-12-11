import React from 'react';
// import './newsCard.css';

function NewsCard({ newsItem }) {
  const { title, author, publishedAt, description, content, url, urlToImage } =
    newsItem;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5">
      <img className=" w-full" src={urlToImage} alt={title} />
      <div className="px-6 py-4 p-5">
        <div className="font-bold text-xl mb-2 text-blue">{title}</div>
        <p className="text-gray-700 text-base"> {description}</p>
        <p className="text-gray-700 text-base mt-4 font-bold">
          {author} Published at : {publishedAt}
        </p>
      </div>
      <p className="p-5">{content}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" More Info>
        <p className="mr-5 font-bold-400 text-blue-500 text-right pb-5 hover:font-bold  transition-all duration-100">
          More Info
        </p>
      </a>
    </div>
  );
}

export default NewsCard;
