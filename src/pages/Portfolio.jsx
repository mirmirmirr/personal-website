import { useState } from "react";
import MasonLayout from "../components/MasonLayout";
import { GroupCard } from "../components/Cards"
import items from "../resources/portfolio.json";

export default function Portfolio() {
  const allPieces = items[0].all;
  const logos = items[0].logos;

  const [activeGroup, setActiveGroup] = useState(allPieces);
  const [chosenGroup, setChosenGroup] = useState("1");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleGroupSelect = (id, groupName) => {
    if (chosenGroup !== id) {
      setIsTransitioning(true); // Start transition
      setTimeout(() => {
        setChosenGroup(id);
        setActiveGroup(groupName);
        setIsTransitioning(false); // End transition
      }, 300); // Match this duration with the Tailwind transition
    }
  };
  
  if (!items || items.length === 0) {
    return <div>Loading...</div>;
  }  

  return (
    <div className="flex flex-col m-8 min-h-screen">
        <div className="flex flex-row items-center justify-center gap-4 mb-[2vh]">
            <GroupCard key="1" groupName="All Pieces" isSelected={chosenGroup === "1"} onGroupSelect={() => handleGroupSelect("1", allPieces)}/>
            <GroupCard key="2" groupName="Logos" isSelected={chosenGroup === "2"} onGroupSelect={() => handleGroupSelect("2", logos)} />
            {/* <GroupCard key="3" groupName="HackRPI" isSelected={chosenGroup === "3"}/> */}
        </div>

        <div
        className={`transition-opacity duration-700 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <MasonLayout items={activeGroup} />
      </div>
    </div>
  );
}