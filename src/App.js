import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
import Navbar from './components/Nav/Navbar';
import { MemoryRouter } from 'react-router';
    

function App(lang) {
  return (
    <BrowserRouter history = {MemoryRouter}>
      <div className="App">
       <Navbar />
          <Routes>
            <Route exact path="/" element={<Home lang={lang} />} />
            <Route exact path="/articles" element={<Articles lang={lang} />} />
            <Route exact path="/article/:id/:slug" element={<Article lang={lang} />} />
            <Route path="*" element={<NotFound lang={lang} />} />
          </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
