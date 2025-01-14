import { useRef, useState, useEffect } from "react";
import { ExperienceCard } from "../components/Cards";

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
    <div ref={cardsRef} className="flex flex-wrap w-full mb-4 gap-4 relative">
      {items.map((item) => (
        <div key={item.id} className={`transition-all duration-300 ${selectedCard === item.id ? "w-[60%]" : selectedCard === null ? "w-[32%]" : "w-[18%]"}`}>

        <ExperienceCard
          key={item.id}
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