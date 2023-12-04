import './App.css';
import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';

function App() {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  const [loading, setLoading] = useState(false);
  const [newsData, setNewsData] = useState({});

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const fetchData = async () => {
    setLoading(true);
    // setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setNewsData(data.articles);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(newsData);
  return (
    <div className="App">
      <h1>News App</h1>
      {loading ? <p>Loading...</p> : <NewsList news={newsData} />}
    </div>
  );
}

export default App;
