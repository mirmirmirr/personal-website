import { useRef, useState, useEffect } from "react";
import { ExperienceCard } from "../components/Cards";

export default function RenderCards({items, type}) {
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
    //     <div ref={cardsRef} className="w-full border-2 p-6 gap-4 mb-4">
    //     {projectGroups.map((group, groupIndex) => (
    //       <div key={groupIndex} className="w-full flex flex-wrap gap-4 mb-4 relative">
    //         {group.map((item) => (
    //           <div
    //             key={item.id}
    //             className={`${
    //               selectedCard === item.id
    //                 ? "w-[65%]"
    //                 : selectedCard === null
    //                 ? "w-[32%]" // Slightly smaller than 25% to account for gaps
    //                 : "w-[15%]"
    //             }`}
    //           >
    //             <ExperienceCard
    //               type={"project"}
    //               items={item}
    //               isSelected={selectedCard === item.id}
    //               onCardSelect={() => handleCardSelect(item.id)}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     ))}
    //   </div>

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