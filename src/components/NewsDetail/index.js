import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './newsDetail.css';

const NewsDetail = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const newsId = useParams().id;

  // check if the useParams successfully return the id object
  // console.log(newsId);
  //   run the fetch call using useEffect

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const url = `https://api.thenewsapi.com/v1/news/uuid/${newsId}?api_token=${API_KEY}`;

    setLoading(true);
    const fetchDetail = async () => {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        throw new Error('Api response was not ok');
      } else {
        const detail = await response.json();
        setDetail(detail);
        console.log(detail);
        setLoading(false);
      }
    };
    fetchDetail();
  }, [newsId]);

  // check if the data fetched successfully
  console.log(detail);

  // pass the data in the UI
  return (
    <div className="news-detail-container ">
      <h2 className="news-detail-title">News Detail</h2>;
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h2>{detail.title}</h2>
          <img
            className="news-detail-image"
            src={detail.image_url}
            alt={detail.title}
          />
          <p className="news-detail-description">{detail.description}</p>
          <Link to={detail.url} className="news-detail-readmore">
            <p>Read more</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
