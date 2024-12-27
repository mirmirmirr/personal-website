import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx'; // Add Resume page
import Header from './components/Header.jsx';

function App() {
  return (
    <Router>
      <div className='flex flex-col'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
