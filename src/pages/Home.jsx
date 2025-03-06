import mirandaImage from '/miranda.png';
import ResizableBox from "../components/ResizeableBox";
import Projects from './Projects';
import { Link } from 'react-router-dom'; // Correct import for Router
import rightArrow from '/icons/rightarrow.svg'

export default function Landing() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  
  return (
    <>
      <ResizableBox
        x={-20}
        y={vh * 0.1}
        width={Math.min(vw * 0.8, 1000)}
        height={Math.min(vh * 0.5, 400)}
      >
        <div className="p-4 flex flex-col items-center md:items-start justify-center">
          <div className="text-xl font-normal mt-4 -mb-[20px] md:-mb-[30px] ml-2">
            hello! my name is
          </div>
          <div style={{ fontSize: 'clamp(40px, 10vw, 160px)' }} className="text-[10vw] max-text-[40px] font-normal underline decoration-[#3395ff] decoration-2">Miranda</div>
          <img className="w-[90%] md:hidden mt-2" src={mirandaImage} />
        </div>
      </ResizableBox>

      <img className="hidden md:block max-w-[520px] w-[38%] left-[58%] top-[25%] z-10 absolute" src={mirandaImage} />

      <div style={{ height: 'clamp(0px, 50vh, 500px)' }} className="hidden md:block overflow-hidden relative z-50">
        <div className="w-[331px] h-[133px] top-[50%] absolute text-xl">
          i’m studying <span className="font-bold">computer science </span> and <span className="font-bold">information technology and web sciences </span>at Rensselaer Polytechnic Insititute

          <Link to="/about" className='flex flex-row gap-2 text-highlightBlue hover:font-[600]'> 
             more about me
            <img
              src={rightArrow}
              className="w-[20px] h-[20px] fill-highlightBlue dark:invert transition-transform duration-300 group-hover:scale-110"
              alt="right arrow"
            />
          </Link>

        </div>
      </div>

      <div className="md:hidden w-[85vw] h-[35vh] overflow-hidden flex items-end justify-center mb-8">
        <div className="w-[331px] h-[133px] text-xl">
          i’m studying <span className="font-bold">computer science </span> and <span className="font-bold">information technology and web sciences </span>at Rensselaer Polytechnic Insititute.
        </div>
      </div>

      <Projects />

    </>
  );
}