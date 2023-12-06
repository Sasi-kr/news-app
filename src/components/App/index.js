import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from '../News';
import Home from '../HomePage';
import NotFound from '../NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
