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
      <div className="relative mt-4 h-svh md:mt-16 md:h-fit">
        <ResizableBox
          x={isSmallScreen ? 0 : -25}
          y={0}
          width={Math.min(vw * 0.8, 1000)}
          height={isSmallScreen ? vh * 0.8 : 350}
          dragging={isSmallScreen ? false : true}
        >
          <div className="flex h-[80dvh] flex-col items-center justify-center p-2 transition-all duration-700 ease-in-out md:h-fit md:items-start">
            <div className="text-xl mt-4 -mb-[20px] ml-2 font-normal md:-mb-[30px]">
              hello! my name is
            </div>
            <h1 className="max-text-[40px] text-[10vw] font-normal underline decoration-highlight-blue decoration-2">
              Miranda
            </h1>
            <div className="text-xl p-6 text-center md:hidden">
              i'm studying <span className="font-bold">computer science</span>{" "}
              and{" "}
              <span className="font-bold">
                information technology and web sciences
              </span>{" "}
              at Rensselaer Polytechnic Institute.
            </div>
            <img
              className="mt-2 w-[90%] md:hidden"
              src="/miranda.png"
              alt="Miranda"
              fetchpriority="high"
            />
          </div>
        </ResizableBox>
      </div>

      {/* Large Image on Bigger Screens */}
      <Image
        src="/miranda.png"
        alt="Miranda"
        className="absolute top-[25%] left-[58%] z-10 hidden w-[38%] max-w-[520px] md:block"
        priority={true}
        lazy={false}
      />

      {/* About Section (Desktop) */}
      <div
        className="relative z-50 hidden overflow-hidden transition-all duration-700 ease-in-out md:block"
        style={{ height: "clamp(0px, 50vh, 500px)" }}
      >
        <div className="text-xl mt-16 h-[133px] w-[331px]">
          i'm studying <span className="font-bold">computer science</span> and{" "}
          <span className="font-bold">
            information technology and web sciences
          </span>{" "}
          at Rensselaer Polytechnic Institute.
          <Link
            to="/about"
            className="flex flex-row gap-2 text-[#0071D5] hover:font-semibold dark:text-[#3395FF]"
          >
            more about me
            <img
              src={rightArrow}
              className="h-5 w-5 fill-highlight-blue transition-transform duration-300 group-hover:scale-110 dark:invert"
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
