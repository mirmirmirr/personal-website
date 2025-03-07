import items from "../resources/projects.json";
import RenderCards from "../components/RenderCards";

export default function Projects() {  
  const experiences = items[0].experiences;
  const projects = items[0].projects;

  const chunkProjects = (projects, chunkSize) => {
    const result = [];
    for (let i = 0; i < projects.length; i += chunkSize) {
      result.push(projects.slice(i, i + chunkSize));
    }
    return result;
  };

  const renderCards = (items, type) => {
    const groups = chunkProjects(items, 3);
    
    return (
      <div className="w-full gap-4">
        {groups.map((group, groupIndex) => (
          <RenderCards key={groupIndex} items={group} type={type}/>
        ))}
      </div>
    )
  };

  return (
    <>
      <p className="text-[20px] font-[700] mb-2">WORK EXPERIENCE & RESEARCH</p>
      {renderCards(experiences, "experience")}

      <p className="text-[20px] font-[700] mb-2 mt-8">PROJECTS</p>
      {renderCards(projects, "project")}
    </>
  );
}