import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from '../News';
import NotFound from '../NotFound';
import NewsDetail from '../NewsDetail';
import About from '../About';
import Contact from '../Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
