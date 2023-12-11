// import modules
import React, { useState, useEffect } from 'react';
// import Component
import NewsItem from '../NewsItem';

// initialise the component
function App() {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('us');

  // initialise useEffect
  useEffect(() => {
    // API Key
    // const API_KEY = process.env.REACT_APP_API_KEY;
    // url to fetch country specific news
    // const url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${API_KEY}`;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d570e32d1c8c4aff8d4c78bb04091bf2`;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data.articles);
        setNewsData(data.articles);
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
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4 text-center">
        {' '}
        <h1 className="text-3xl font-semibold underline">News App</h1>
      </header>

      <main className="container mx-auto py-6">
        <div>
          <label htmlFor="countrySelect">Select Country:</label>
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
          <p className="text-center">Loading...</p>
        ) : (
          newsData.map((article, index) => {
            return (
              <div key={index}>
                <NewsItem
                  urlToImage={article.urlToImage}
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

export default App;
