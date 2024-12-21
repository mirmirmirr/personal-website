import { useState } from "react";
import { ExperienceCard } from "../resources/Cards"

export default function Projects() {
  const [selectedCard, setSelectedCard] = useState(null);

  const experiences = [
    { id: 1, title: "Software Engineer Intern", company: "Lockheed Martin", duration: "May 2024 - August 2024" },
    { id: 2, title: "Data Analyst", company: "Johnson & Johnson", duration: "September 2024 - December 2024" },
    { id: 3, title: "Researcher", company: "NASA", duration: "January 2024 - May 2024" },
  ];

  const projects = [
    { id: 11, title: "tomeeto", stack: "React, TailwindCSS, Flask, MySQL", duration: "September 2024 - Present" },
    { id: 12, title: "AIpaca", stack: "React, TailwindCSS, Flask, MySQL", duration: "October 2024" },
    { id: 13, title: "CARPI", stack: "React, TailwindCSS, Flask, MySQL", duration: "September 2024 - Bleh" },
    { id: 14, title: "Lucid", stack: "React, TailwindCSS, Flask, MySQL", duration: "September 2024 - Bleh" },
  ];

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