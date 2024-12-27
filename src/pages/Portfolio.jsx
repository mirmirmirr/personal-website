import { useState } from "react";
import MasonLayout from "../components/MasonLayout";
import { GroupCard } from "../components/Cards"
import items from "../resources/portfolio.json";

export default function Portfolio() {
  const allPieces = items[0].all;
  const logos = items[0].logos;

  const [activeGroup, setActiveGroup] = useState(allPieces);
  const [chosenGroup, setChosenGroup] = useState("1");

  const handleGroupSelect = (id, groupName) => {
    setChosenGroup((prev) => (prev === id ? null : id));
    setActiveGroup(groupName);
  };

  return (
    <div className="flex flex-col m-8 mt-0">
        <div className="flex flex-row items-center justify-center gap-4 mb-[2vh]">
            <GroupCard key="1" groupName="All Pieces" isSelected={chosenGroup === "1"} onGroupSelect={() => handleGroupSelect("1", allPieces)}/>
            <GroupCard key="2" groupName="Logos" isSelected={chosenGroup === "2"} onGroupSelect={() => handleGroupSelect("2", logos)} />
            <GroupCard key="3" groupName="HackRPI" isSelected={chosenGroup === "3"}/>
        </div>

        <MasonLayout items={activeGroup}/>
    </div>
  );
}