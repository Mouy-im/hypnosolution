import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
import Navbar from './components/Nav/Navbar';
import { MemoryRouter } from 'react-router';
    

function App() {
  return (
    <BrowserRouter history = {MemoryRouter}>
      <div className="App">
       <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/articles" element={<Articles />} />
            <Route exact path="/article/:id/:slug" element={<Article />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
