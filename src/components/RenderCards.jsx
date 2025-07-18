import { useState, useEffect, useRef } from "react";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectCard from "./cards/ProjectCard";

export default function RenderCards({ items, type }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cardsRef.current && !cardsRef.current.contains(e.target)) {
        setSelectedCard(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleCardSelect = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  const getCardWidthClass = (id) => {
    if (selectedCard === id) return "md:w-[60%]";
    if (selectedCard === null) return "md:w-[32%]";
    return "md:w-[18%]";
  };

  return (
    <div
      ref={cardsRef}
      className="relative mb-4 flex w-full flex-col gap-4 md:flex-row"
    >
      {items.map((item) => {
        const commonProps = {
          key: item.id,
          items: item,
          isSelected: selectedCard === item.id,
          onCardSelect: () => handleCardSelect(item.id),
        };
        return (
          <div
            key={item.id}
            className={`transition-all duration-300 md:h-[225px] ${getCardWidthClass(item.id)}`}
          >
            {type === "experience" ? (
              <ExperienceCard {...commonProps} />
            ) : (
              <ProjectCard {...commonProps} />
            )}
          </div>
        );
      })}
    </div>
  );
}
