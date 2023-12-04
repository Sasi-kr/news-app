import './App.css';
import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';

function App() {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
  // const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  const [loading, setLoading] = useState(false);
  // const [country, setCountry] = useState('Australia');
  const [newsData, setNewsData] = useState({});
  // const [error, setError] = useState(null);

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const fetchData = () => {
    setLoading(true);
    // setError(null);
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))

      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(newsData);
  return (
    <div className="App">
      <h1>News App</h1>

      <NewsList news={newsData} />
    </div>
  );
}

export default App;
