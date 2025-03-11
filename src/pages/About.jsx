import ResizableBox from "../components/ResizeableBox";
import DragCards from "../components/cards/DragCards";

export default function About() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const isSmallScreen = vw < 640;

  return (
    <div className="flex flex-col justify-center w-full transition-all duration-700 ease-in-out">
      <div className="flex flex-col items-center justify-center gap-4 p-2 md:p-16">
        <img
          src="headshot_circle.png"
          alt="Miranda Headshot 2024"
          className="w-36 h-full object-cover"
          fetchpriority="high"
        />
        <h1 className="text-[40px] font-[700]">mirmirmirr</h1>
        <p className="text-center">
          Hi! I'm Miranda, a junior at Rensselaer Polytechnic Institute, pursuing a dual degree in Computer Science and Information Technology & Web Sciences. My passion for technology started when I became the go-to 'tech person' in my family — I spent hours troubleshooting phone and computer issues and teaching my grandpa easier ways to use his phone.  At the end of high school, my sister inspired me to choose computer sicence as my major, and I've been loving it ever since.
        </p>
      </div>

      <div className="flex items-center justify-center w-full max-w-4xl my-8 md:my-0">
        <ResizableBox
          x={0}
          y={0}
          width={Math.min(vw * 0.85, 1000)}
          height={isSmallScreen ? vh * 0.6 : 350}
          dragging={false}
        >
          <DragCards />
        </ResizableBox>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 my-8 mt-0 md:my-0 p-2 md:p-16 text-center">
        <p>
          I love solving programming problems and finding ways to use technology to make life simpler. I especially love working on projects that sit at the intersection of development and design—creating experiences that are not only visually appealing but also optimized for performance and usability. Fascinated by the endless possibilities of technology, I'm always looking for new ways to learn and grow!
        </p>
      </div>

      <button
        className="bg-blue-100 hover:bg-highlightBlue hover:text-white dark:hover:bg-[#9CC4F5] dark:hover:text-black dark:bg-highlightBlue rounded-[15px] px-6 py-2 mx-auto"
        onClick={() => window.open('/MirandaZheng_Resume.pdf', '_blank')}
      >
        Get my resume!
      </button>
    </div>
  );
}