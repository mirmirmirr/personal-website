// src/pages/Landing.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Image from "../components/Image";
import ResizableBox from "../components/ResizeableBox";
import Projects from "./Projects";
import rightArrow from "/icons/rightarrow.svg";

export default function Landing() {
  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const isSmallScreen = vw < 640;

  useEffect(() => {
    function handleResize() {
      setVw(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative mt-4 h-svh md:mt-16 md:h-fit">
        <ResizableBox dragging={!isSmallScreen}>
          <div className="flex h-[80dvh] flex-col items-center justify-center p-2 transition-all duration-700 ease-in-out md:h-fit md:items-start">
            <div className="mt-4 -mb-[20px] ml-2 text-xl font-normal md:-mb-[30px]">
              Hello! My name is
            </div>
            <h1 className="text-[10vw] font-normal underline decoration-blue decoration-2">
              Miranda
            </h1>
            <div className="p-6 text-center text-xl md:hidden">
              I am studying <span className="font-bold">computer science</span>{" "}
              and
              <span className="font-bold">
                {" "}
                information technology and web sciences
              </span>{" "}
              at Rensselaer Polytechnic Institute.
            </div>
            <img
              className="mt-2 w-[90%] md:hidden"
              src="/miranda.png"
              alt="Miranda"
              fetchPriority="high"
            />
          </div>
        </ResizableBox>
      </div>

      {/* Desktop Image */}
      <Image
        src="/miranda.png"
        alt="Miranda"
        className="absolute top-[25%] left-[58%] z-10 hidden w-[38%] max-w-[520px] md:block"
        priority={true}
        lazy={false}
      />

      {/* About Section for Desktop */}
      <div
        className="relative z-50 hidden overflow-hidden transition-all duration-700 ease-in-out md:block"
        style={{ height: "clamp(0px, 50vh, 500px)" }}
      >
        <div className="text-md mt-16 h-[133px] w-[331px]">
          I am studying <span className="font-bold">computer science</span> and
          <span className="font-bold">
            {" "}
            information technology and web sciences
          </span>{" "}
          at Rensselaer Polytechnic Institute.
          <Link
            to="/about"
            className="group flex flex-row gap-2 text-[#0071D5] hover:font-semibold dark:text-blue"
          >
            more about me
            <img
              src={rightArrow}
              className="h-5 w-5 fill-blue transition-transform duration-300 group-hover:scale-110 dark:invert"
              alt="right arrow"
            />
          </Link>
        </div>
      </div>

      {/* Projects */}
      <Projects />
    </>
  );
}
