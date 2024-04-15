import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import NotFound from './pages/NotFound';
import './style/App.scss';

function App() {
  return (
      <BrowserRouter>
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/accomodation" element={<Accomodation />} />
              {/* Page 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
