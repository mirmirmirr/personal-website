import { useState } from "react";
import { ExperienceCard } from "../components/Cards";
import Masonry from 'react-masonry-css';
import items from "../resources/projects.json";

export default function Projects() {
  const [selectedCard, setSelectedCard] = useState(null);

  const experiences = items[0].experiences;

  const projects = items[0].projects;

  const handleCardSelect = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  const renderCards = (items, type) => (

<div className="flex flex-wrap w-full border-2 p-6 gap-4 mb-4 relative">
{items.map((item) => (
      // <div key={item.id}>

        <ExperienceCard
          key={item.id}
          type={type}
          items={item}
          isSelected={selectedCard === item.id}
          onCardSelect={() => handleCardSelect(item.id)}
        />
      // </div>
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