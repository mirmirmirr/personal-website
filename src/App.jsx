import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";

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
    <div
      className={`mb-32 ${isPortfolioPage ? "" : "flex justify-center p-8"}`}
    >
      <div className={isPortfolioPage ? "w-full" : "w-[80vw] max-w-[1000px]"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
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
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
