import { useState } from "react";
import MasonLayout from "../components/MasonLayout";
import GroupCard from "../components/cards/GroupCard";
import items from "../resources/portfolio.json";
import ReactGridLayout from "../components/GridLayout";
import { Component } from "../components/component";

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
    // <div className="flex flex-col gap-4 min-h-screen">
    //   <div
    //     className="p-8 gap-8 rounded-[20px] group h-[200px] flex border-2 hover:border-highlight-blue cursor-pointer"
    //     onClick={() => window.location.href = '/portfolio/art'}
    //   >
    //     <div className="w-[450px] group-hover:scale-90 group-hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col justify-center">
    //       <h1 className="text-[20px] font-bold">Artwork</h1>
    //       <p className="text-[14px]">I used to love creating art, especially drawing. I don't have a lot of time to do it now, but when I can I still draw digitally.</p>
    //     </div>
    //     <div className="flex gap-4 group-hover:scale-90 transition-transform duration-300 ease-in-out">
    //       {allPieces.slice(0, 4).map((_, index) => (
    //         <img key={index} src={allPieces[index].src} alt={allPieces[index].alt} className="w-[100px] object-cover rounded-[20px] bg-highlight-blue" />
    //       ))}
    //     </div>
    //   </div>
    //   <div className="p-8 gap-8 rounded-[20px] group h-[200px] flex border-2 hover:border-highlight-blue">
    //     <div className="w-[450px] group-hover:scale-90 group-hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col justify-center">
    //       <h1 className="text-[20px] font-bold">Logos</h1>
    //       <p className="text-[14px]">To continue being involved with my creative side, I've offered to redesign a lot of logos for cultural clubs on RPI's campus and got involved in artistic roles in clubs like HackRPI and Chinese American Student Association (CASA).</p>
    //     </div>
    //     <div className="flex gap-4 group-hover:scale-90 transition-transform duration-300 ease-in-out">
    //       {logos.slice(0, 4).map((_, index) => (
    //         <img key={index} src={logos[index].src} alt={logos[index].alt} className="w-[100px] object-cover rounded-[20px]" />
    //       ))}
    //     </div>
    //   </div>
    //   <div className="p-8 gap-8 rounded-[20px] group h-[200px] flex flex-col justify-center border-2 hover:border-highlight-blue">
    //     <div className="w-[450px] group-hover:scale-90 group-hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col justify-center">
    //       <h1 className="text-[20px] font-bold">HackRPI</h1>
    //       <p className="text-[14px]">I served as the Director of Marketing for HackRPI for two years, helping with branding, recruitment, website creation, and marketing!</p>
    //     </div>
    //   </div>
    //   <div className="p-8 gap-8 rounded-[20px] group h-[200px] flex flex-col justify-center border-2 hover:border-highlight-blue">
    //     <div className="w-[450px] group-hover:scale-90 group-hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col justify-center">
    //       <h1 className="text-[20px] font-bold">Chinese American Student Association (CASA)</h1>
    //       <p className="text-[14px]">I joined CASA my sophmore year as the Graphics Chair and have been creating graphics and chinese-oriented merch since!</p>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col min-h-screen">
        <div className="flex flex-row items-center justify-center gap-4 mb-[2vh]">
            <GroupCard key="1" groupName="Artwork" isSelected={chosenGroup === "1"} onGroupSelect={() => handleGroupSelect("1", allPieces)}/>
            <GroupCard key="2" groupName="Logos" isSelected={chosenGroup === "2"} onGroupSelect={() => handleGroupSelect("2", logos)} />
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