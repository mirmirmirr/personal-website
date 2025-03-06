import ResizableBox from "../components/ResizeableBox";
import DragCards from "../components/cards/DragCards";

export default function About() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  return (
    <div className="relative flex flex-col gap-32 items-center justify-center">
      <ResizableBox 
        x={0}
        y={vh * 0.1}
        width={Math.min(vw * 0.85, 1000)}
        height={vh * 0.75}
        dragging={false}
      >
        <div className="absolute top-0 mx-auto flex flex-col items-center justify-center gap-4 p-16 pt-0 -mt-16">
          <img
            src="headshot_circle.png"
            alt="Miranda Headshot 2024"
            className="w-36 h-full object-cover"
          />
          <h1 className="text-[40px] font-[700]">mirmirmirr</h1>
          <p>Hello! My name is Miranda and I'm a junior at Rensselaer Polytechnic Institute, studying Computer Science (CS) and Information Technology and Web Sciences (ITWS). My younger sister actually introduced me to computer science in high school and I was drawn to the field because of the versatility it offered. Later, I added ITWS because I wanted to learn more about the "real-world" applications of technology.</p>
        </div>

        <DragCards />
      </ResizableBox>

      <p>
        I love solving programming problems and finding ways to use technology to make life simpler. I especially love working on projects that sit at the intersection of development and design—creating experiences that are not only visually appealing but also optimized for performance and usability.
      </p>
    </div>
  );
}