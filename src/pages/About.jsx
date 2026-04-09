import ResizableBox from "../components/ResizeableBox";
import DragCards from "../components/cards/DragCards";

export default function About() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isSmallScreen = vw < 640;

  return (
    <div className="flex w-full flex-col justify-center transition-all duration-700 ease-in-out">
      <div className="flex flex-col items-center justify-center gap-4 p-2 md:p-16">
        <img
          src="pictures/headshot_circle.png"
          alt="Miranda Headshot 2024"
          className="h-full w-36 object-cover"
          fetchPriority="high"
        />
        <h1 className="text-[40px] font-bold">mirmirmirr</h1>
        <p className="text-center">
          Hi! I&apos;m Miranda, a senior at Rensselaer Polytechnic Institute,
          pursuing a dual degree in Computer Science and Information Technology
          & Web Sciences. My passion for technology started when I became the
          go-to &apos;tech person&apos; in my family — I spent hours
          troubleshooting phone and computer issues and teaching my grandpa
          easier ways to use his phone. At the end of high school, my sister
          inspired me to choose computer science as my major, and I&apos;ve been
          loving it ever since.
        </p>
      </div>

      <div className="my-8 flex w-full max-w-4xl items-center justify-center md:my-0">
        <ResizableBox
          width={Math.min(vw * 0.85, 1000)}
          height={isSmallScreen ? vh * 0.6 : 350}
          dragging={false}
        >
          <DragCards />
        </ResizableBox>
      </div>

      <div className="my-8 mt-0 flex flex-col items-center justify-center gap-4 p-2 text-center md:my-0 md:p-16">
        <p>
          I love solving programming problems and finding ways to use technology
          to make life simpler. I especially love working on projects that sit
          at the intersection of development and design—creating experiences
          that are not only visually appealing but also optimized for
          performance and usability. Fascinated by the endless possibilities of
          technology, I am always looking for new ways to learn and grow!
        </p>
      </div>

      <button
        className="mx-auto rounded-[15px] bg-blue-100 px-6 py-2 hover:bg-blue hover:text-white dark:bg-blue dark:hover:bg-[#9CC4F5] dark:hover:text-black"
        onClick={() => window.open("/MirandaZheng_Resume.pdf", "_blank")}
      >
        Get my resume!
      </button>
    </div>
  );
}
