import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from '../News';
import NotFound from '../NotFound';
import NewsDetail from '../NewsDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
