import { Link } from "react-router-dom";

import Image from "../components/Image";
import rightArrow from "/icons/rightarrow.svg";
import ResizableBox from "../components/ResizeableBox";
import Projects from "./Projects";

export default function Landing() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const isSmallScreen = vw < 640;

  return (
    <>
      {/* Resizable Box with Intro */}
      <div className="h-svh md:h-fit relative mt-4 md:mt-16">
        <ResizableBox
          x={isSmallScreen ? 0 : -25}
          y={0}
          width={Math.min(vw * 0.8, 1000)}
          height={isSmallScreen ? vh * 0.8 : 350}
          dragging={isSmallScreen ? false : true}
        >
          <div className="p-2 h-[80dvh] md:h-fit flex flex-col items-center md:items-start justify-center transition-all duration-700 ease-in-out">
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
            <img className="w-[90%] md:hidden mt-2" src="/miranda.png" alt="Miranda" fetchpriority="high" />
          </div>
        </ResizableBox>
      </div>

      {/* Large Image on Bigger Screens */}
      <Image
        src="/miranda.png"
        alt="Miranda"
        className="hidden md:block max-w-[520px] w-[38%] left-[58%] top-[25%] z-10 absolute"
        priority={true}
        lazy={false}
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
          <Link to="/about" className="flex flex-row gap-2 text-[#0071D5] dark:text-[#3395FF] hover:font-semibold">
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