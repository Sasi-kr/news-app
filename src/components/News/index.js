// import modules
import React, { useState, useEffect } from 'react';
// import Component
import NewsItem from '../NewsItem';
import './news.css';

// initialise the component
function News() {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('us');

  // initialise useEffect
  useEffect(() => {
    // API Key
    const API_KEY = process.env.REACT_APP_API_KEY;

    // url to fetch country specific news
    const url = `https://api.thenewsapi.com/v1/news/all?api_token=${API_KEY}&language=en&limit=3`;

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
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  // console.log(selectedCountry);

  return (
    <div className="news-container">
      <header className="news-header">
        {' '}
        <h1 className="">News App</h1>
      </header>

      <main className="news-main">
        <div className="country-select">
          <label htmlFor="">Select Country:</label>
          <select
            id="countrySelect"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="au">Australia</option>
            <option value="us">United States</option>
            <option value="jp">Japan</option>
            <option value="sg">Singapore</option>
            <option value="in">India</option>
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
