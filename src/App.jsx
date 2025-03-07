import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Footer from './components/Footer.jsx';
import Artwork from './pages/creative/Artwork.jsx';
import Logos from './pages/creative/Logos.jsx';
import HackRPI from './pages/creative/HackRPI.jsx';

function AppLayout() {
  const location = useLocation();
  const isPortfolioPage = location.pathname.startsWith("/portfolio");

  useEffect(() => {
    if (isPortfolioPage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPortfolioPage]);

  return (
    <div className={`mb-32 ${isPortfolioPage ? "" : "p-8 flex justify-center"}`}>
      <div className={isPortfolioPage ? "w-full" : "max-w-[1000px] w-[80vw]"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/art" element={<Artwork />} />
          <Route path="/portfolio/logos" element={<Logos />} />
          <Route path="/portfolio/hackrpi" element={<HackRPI />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
      <Footer />
    </Router>
  );
}

export default App;