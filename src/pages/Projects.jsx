// Projects.jsx
import { experienceData, projectData } from "../resources/projects.jsx";
import RenderCards from "../components/RenderCards";

export default function Projects() {
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size),
    );

  const renderCards = (items, type) => {
    const groups = chunkArray(items, 3);

    return groups.map((group, idx) => (
      <RenderCards key={idx} items={group} type={type} />
    ));
  };

  return (
    <>
      <p className="mb-2 text-[20px] font-[700]">WORK EXPERIENCE & RESEARCH</p>
      {renderCards(experienceData, "experience")}

      <p className="mt-8 mb-2 text-[20px] font-[700]">PROJECTS</p>
      {renderCards(projectData, "project")}
    </>
  );
}
