import items from "../resources/projects.json";
import RenderCards from "../components/RenderCards";
import { useRef, useState, useEffect } from "react";
import { ExperienceCard } from "../components/Cards";


export default function Projects() {
    const [selectedCard, setSelectedCard] = useState(null);
  
  const experiences = items[0].experiences;
  const projects = items[0].projects;

  const chunkProjects = (projects, chunkSize) => {
    const result = [];
    for (let i = 0; i < projects.length; i += chunkSize) {
      result.push(projects.slice(i, i + chunkSize));
    }
    return result;
  };

  const handleCardSelect = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  const renderCards = (items, type) => {
    const groups = chunkProjects(items, 3);
    
    return (
      <>
        {/* <div className="md:hidden">
          {items.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              type={type}
              items={exp}
              isSelected={true}
              onCardSelect={() => handleCardSelect(item.id)}
            />
          ))}
        </div> */}

        <div className="w-full gap-4 mb-4 pb-4">
          {groups.map((group, groupIndex) => (
            <RenderCards key={groupIndex} items={group} type={type}/>
          ))}
        </div>
      </>
    )
  };

  return (
    <div className="mt-8 mt-[0px]">
      <p className="text-[20px] font-[700]">WORK EXPERIENCE & RESEARCH</p>
      {renderCards(experiences, "experience")}

      <p className="text-[20px] font-[700]">PROJECTS</p>
      {renderCards(projects, "project")}
    </div>
  );
}