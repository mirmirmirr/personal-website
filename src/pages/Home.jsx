import mirandaImage from '../assets/miranda.png';
import ResizableBox from "../components/ResizeableBox";
import Projects from './Projects';

export default function Landing() {
  return (
    <div className=''>
      <div className="w-[1220px] h-screen overflow-hidden">
        <ResizableBox defaultWidth={1000} defaultHeight={400} x={50} y={100}>
          <div className="p-4 flex flex-col items-start justify-center">
            <div className="text-xl font-normal mt-4 -mb-[30px] ml-2">
              hello! my name is
            </div>
            <div className="text-[10vw] font-normal underline decoration-[#3395ff] decoration-2">Miranda</div>
          </div>
        </ResizableBox>

        <img className="w-[520px] h-[528px] left-[55vw] top-[30vh] z-10 absolute" src={mirandaImage} />
        <div className="w-[331px] h-[133px] left-[170px] top-[550px] absolute text-xl">
          i’m studying <span className="font-bold">computer science </span> and <span className="font-bold">information technology and web sciences </span>at Rensselaer Polytechnic Insititute.
        </div>
      
      </div>

      <Projects />

    </div>
  );
}