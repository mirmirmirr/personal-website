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
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleCardSelect = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div
      ref={cardsRef}
      className="relative mb-4 flex w-full flex-col gap-4 md:h-[225px] md:flex-row"
    >
      {items.map((item) => {
        const isSelected = selectedCard === item.id;
        const hasSelection = selectedCard !== null;
        const isShrunk = hasSelection && !isSelected;

        const flexLayoutClass = isSelected
          ? "md:grow-[4] md:basis-0"
          : hasSelection
            ? "md:grow-[1] md:basis-0"
            : "md:grow-[2] md:basis-0";

        return (
          <div
            key={item.id}
            className={`w-full transition-all duration-500 ease-in-out ${flexLayoutClass}`}
          >
            {type === "experience" ? (
              <ExperienceCard
                items={item}
                isSelected={isSelected}
                isShrunk={isShrunk} // Pass it down!
                onCardSelect={() => handleCardSelect(item.id)}
              />
            ) : (
              <ProjectCard
                items={item}
                isSelected={isSelected}
                isShrunk={isShrunk} // Pass it down!
                onCardSelect={() => handleCardSelect(item.id)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
