import mirandaImage from '../assets/miranda.png';
import ResizableBox from "../resources/ResizeableBox";

export default function Landing() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <ResizableBox defaultWidth={1000} defaultHeight={400}>
          <div className="text-black text-xl font-normal mt-4 -mb-[30px] ml-2">
              hello! my name is
          </div>
          <div className="text-black text-[8vw] font-normal underline decoration-[#3395ff] decoration-2">Miranda</div>
      </ResizableBox>

      <img className="w-[661px] h-[667px] left-[55vw] top-[25vh] absolute" src={mirandaImage} />
      <div className="w-[331px] h-[133px] left-[118px] top-[586px] absolute"><span class="text-black text-xl font-normal font-['Poppins']">i’m studying </span><span class="text-black text-xl font-bold font-['Poppins']">computer science </span><span class="text-black text-xl font-normal font-['Poppins']">and </span><span class="text-black text-xl font-bold font-['Poppins']">information technology and web sciences </span><span class="text-black text-xl font-normal font-['Poppins']">at Rensselaer Polytechnic Insititute.</span></div>
    
    </div>
  );
}