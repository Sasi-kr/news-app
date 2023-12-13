import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <h2>Welcome to our news app!</h2>
        <p>
          We aim to provide you with the latest and most relevant news stories
          from around the world. Our team works tirelessly to gather information
          and present it to you in an easy-to-access format.
        </p>

        <h3>What We Offer</h3>
        <ul>
          <li>
            <strong>Top Stories:</strong> Stay updated with the most important
            news headlines.
          </li>
          <li>
            <strong>All Stories:</strong> Explore news from all different
            domains.
          </li>
        </ul>

        <h3>Contact Us</h3>
        <p>
          If you have any inquiries, feedback, or suggestions, feel free to
          reach out to us. We appreciate your engagement and are always open to
          hearing from our audience. You can contact us through the "contact us"
          form on our website.
        </p>
      </div>
      <div className="back-home">
        <button className="btn">
          <Link to={'/'}> Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
