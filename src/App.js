import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
import Navbar from './components/Nav/Navbar';
import { MemoryRouter } from 'react-router';
import { useTranslation } from 'react-i18next';

function App() {
  
  const { t, i18n } = useTranslation();
  return (
    <BrowserRouter history = {MemoryRouter}>
      <div className="App">
       <Navbar t={t} />
          <Routes>
            <Route exact path="/" element={<Home t={t} i18n={i18n} />} />
            <Route exact path="/articles" element={<Articles t={t} i18n={i18n} />} />
            <Route exact path="/article/:id/:slug" element={<Article t={t} i18n={i18n} />} />
            <Route path="*" element={<NotFound t={t} i18n={i18n} />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
