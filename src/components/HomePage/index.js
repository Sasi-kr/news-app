import './HomePage.css';

import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div className="HomePage">
        <Link to={`/news`} className="action">
          <h1>Click Me to checkout the latest news</h1>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
