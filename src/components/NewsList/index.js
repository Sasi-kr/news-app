import React from 'react';

function NewsList({ news }) {
  return (
    <div>
      <h2>NewsList</h2>
      {news.map((item, index) => {
        return (
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewsList;
