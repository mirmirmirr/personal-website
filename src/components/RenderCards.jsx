import { useRef, useState, useEffect } from "react";
import ExperienceCard from "./cards/ExperienceCard";

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
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleCardSelect = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div
      ref={cardsRef}
      className="relative mb-4 flex w-full flex-col gap-4 md:flex-row"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={`transition-all duration-300 md:h-[225px] ${selectedCard === item.id ? "md:w-[60%]" : selectedCard === null ? "md:w-[32%]" : "md:w-[18%]"} `}
        >
          <ExperienceCard
            type={type}
            items={item}
            isSelected={selectedCard === item.id}
            onCardSelect={() => handleCardSelect(item.id)}
          />
        </div>
      ))}
    </div>
  );
}
