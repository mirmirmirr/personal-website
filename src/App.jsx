import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx'; // Add Resume page
import Footer from './components/Footer.jsx';
import Artwork from './pages/creative/Artwork.jsx';
import Logos from './pages/creative/Logos.jsx';
import HackRPI from './pages/creative/HackRPI.jsx';

function App() {
  return (
    <Router>
      <div className="p-8 flex justify-center">
        {/* <Header /> */}
        <div className='max-w-[1000px] w-[80vw]'>
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
      <Footer />
    </Router>
  );
}

export default App;
