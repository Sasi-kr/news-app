// import './App.css';
import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';

function App() {
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  const [loading, setLoading] = useState(true);
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
      // console.log(data);
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
  // console.log(newsData);
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4 text-center">
        {' '}
        <h1 className="text-3xl font-semibold underline">News App</h1>
      </header>
      <main className="container mx-auto py-6">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <NewsList news={newsData} />
        )}
      </main>
    </div>
  );
}

export default App;
