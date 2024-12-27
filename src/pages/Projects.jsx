import { useState } from "react";
import { ExperienceCard } from "../components/Cards"
import items from "../resources/projects.json";

export default function Projects() {
  const [selectedCard, setSelectedCard] = useState(null);

  const experiences = items[0].experiences;

  const projects = items[0].projects;

  const handleCardSelect = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  const renderCards = (items, type) => (
    <div className="flex items-center justify-center gap-4 mb-[2vh] border-2 p-6">
      {items.map((item) => (
        <ExperienceCard
          key={item.id}
          title={item.title}
          company={item.company}
          stack={item.stack}
          duration={item.duration}
          isSelected={selectedCard === item.id}
          onCardSelect={() => handleCardSelect(item.id)}
        />
      ))}
    </div>
  );

  return (
    <div className="m-8 mt-[0px]">
      <p>Work + Research</p>
      {renderCards(experiences, "experience")}

      <p>Projects</p>
      {renderCards(projects, "project")}
    </div>
  );
}