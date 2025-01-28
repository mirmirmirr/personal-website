export default function About() {
  return (
    <div className="mt-8 grid grid-cols-[1fr_1fr] gap-4 items-center">
      <img
        src="/mirandaHeadshot.png"
        alt="Miranda Headshot 2024"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-col gap-4">
        <p>
          I'm a junior at Rensselaer Polytechnic Institute, studying Computer Science (CS) and Information Technology and Web Sciences (ITWS). My younger sister actually introduced me to computer science through a high school elective she took, and I was drawn to the field because of the versatility it offered. Later, I added ITWS because I wanted to learn more about the "real-world" applications of technology.
        </p>
        <p>
          I've stuck with this path because I found that I enjoy solving programming problems and finding ways to use technology to make life more accessible and simpler. I especially love working on projects that sit at the intersection of development and design—creating experiences that are not only visually appealing but also optimized for performance and usability.
        </p>
        <p>
          In my free time, I enjoy spending time with friends, eating, and drawing. Recently, I’ve also started learning about photography and am excited to play around with it!
        </p>
      </div>
    </div>
  );
}
