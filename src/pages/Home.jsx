import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import mirandaImage from "/miranda.png";
import rightArrow from "/icons/rightarrow.svg";
import ResizableBox from "../components/ResizeableBox";
import Projects from "./Projects";

export default function Landing() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size dynamically
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width: vw, height: vh } = windowSize;
  const isSmallScreen = vw < 768;

  return (
    <>
      {/* Resizable Box with Intro */}
      <div className="h-screen md:h-fit relative mt-16">
        <ResizableBox
          x={isSmallScreen ? 0 : -25}
          y={0}
          width={Math.min(vw * 0.8, 1000)}
          height={Math.min(vh * 0.5, 400)}
        >
          <div className="p-4 flex flex-col items-center md:items-start justify-center transition-all duration-700 ease-in-out">
            <div className="text-xl font-normal mt-4 -mb-[20px] md:-mb-[30px] ml-2">
              hello! my name is
            </div>
            <h1 className="text-[10vw] max-text-[40px] font-normal underline decoration-[#3395ff] decoration-2">
              Miranda
            </h1>
            <div className="md:hidden text-center p-6 text-xl">
              i'm studying <span className="font-bold">computer science</span> and{" "}
              <span className="font-bold">information technology and web sciences</span> at
              Rensselaer Polytechnic Institute.
            </div>
            <img className="w-[90%] md:hidden mt-2" src={mirandaImage} alt="Miranda" />
          </div>
        </ResizableBox>
      </div>

      {/* Large Image on Bigger Screens */}
      <img
        className="hidden md:block max-w-[520px] w-[38%] left-[58%] top-[25%] z-10 absolute"
        src={mirandaImage}
        alt="Miranda"
      />

      {/* About Section (Desktop) */}
      <div
        className="hidden md:block overflow-hidden relative z-50 transition-all duration-700 ease-in-out"
        style={{ height: "clamp(0px, 50vh, 500px)" }}
      >
        <div className="w-[331px] h-[133px] mt-16 text-xl">
          i'm studying <span className="font-bold">computer science</span> and{" "}
          <span className="font-bold">information technology and web sciences</span> at
          Rensselaer Polytechnic Institute.
          <Link to="/about" className="flex flex-row gap-2 text-highlightBlue hover:font-semibold">
            more about me
            <img
              src={rightArrow}
              className="w-5 h-5 fill-highlightBlue dark:invert transition-transform duration-300 group-hover:scale-110"
              alt="right arrow"
            />
          </Link>
        </div>
      </div>

      {/* Projects Section */}
      <Projects />
    </>
  );
}