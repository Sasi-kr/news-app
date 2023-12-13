// import modules
import React, { useState, useEffect } from 'react';
// import Component
import NewsItem from '../NewsItem';
import NavBar from '../NavBar';
import './news.css';

// initialise the component
function News() {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // initialise useEffect
  useEffect(() => {
    // API Key
    const API_KEY = process.env.REACT_APP_API_KEY;

    // url to fetch country specific news
    const url = `https://api.thenewsapi.com/v1/news/${selectedCategory}?api_token=${API_KEY}&language=en&limit=3`;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data.data);
        setNewsData(data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };
    // console.log('Api called');
    fetchData(url);
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // console.log(selectedCountry);

  return (
    <div className="news-container">
      <header className="news-header">
        <NavBar />
      </header>

      <main className="news-main">
        <div className="category-select">
          <label htmlFor="">Select Category:</label>
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="top">Top Stories</option>
            <option value="all">All Stories</option>
          </select>
        </div>

        {loading ? (
          <p className="">Loading...</p>
        ) : (
          newsData.map((article) => {
            return (
              <div className="app" key={article.uuid}>
                <NewsItem
                  id={article.uuid}
                  urlToImage={article.image_url}
                  url={article.url}
                  title={article.title}
                  description={article.description}
                />
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}

export default News;
