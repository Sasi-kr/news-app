// import './App.css';
import React, { useState, useEffect } from 'react';
import NewsList from '../NewsList';

function App() {
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('us');

  // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  // const url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${API_KEY}`;
  // const url = `https://newsapi.org/v2/everything?q=${searchInput}&from=2023-11-07&sortBy=popularity&apiKey=${API_KEY}`;

  const handleSubmit = (e) => {
    setSearchInput(e.target.value);
  };
  console.log(searchInput);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  console.log(selectedCountry);

  // useEffect(() => {
  //   const url = `https://newsapi.org/v2/everything?q=${searchInput}&from=2023-11-07&sortBy=popularity&apiKey=${API_KEY}`;
  //   fetchData(url);
  // }, [searchInput]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${API_KEY}`;

    async function fetchData(url) {
      setLoading(true);
      // setError(null);
      try {
        const response = await fetch(url);
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
    }
    console.log('Api called');
    fetchData(url);
  }, [selectedCountry]);
  console.log(newsData);

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
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="searchInput">Search News</label>
          <input
            type="text"
            value={searchInput}
            name="searchInput"
            className="ml-5 pl-2"
          />
          <button className="btn-sm">Submit</button>
        </form>

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
