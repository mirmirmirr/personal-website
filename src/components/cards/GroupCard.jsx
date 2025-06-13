import { useRef } from "react";

export default function GroupCard({ groupName, isSelected, onGroupSelect}) {
  const cardRef = useRef(null);

  const handleGroupSelect = () => {
    if (onGroupSelect) onGroupSelect();
  };

  return (
    <div ref={cardRef} className={`relative flex ${isSelected ? "border-2 border-highlight-blue" : ""}`} onClick={handleGroupSelect}>
      <div className={`w-full p-4 rounded-[20px] text-[14px] border-2 ${isSelected ? "" : "hover:border-highlight-blue"}`}>
        {groupName}
      </div>

      {isSelected && (
        <>
            <div className="absolute w-[15px] h-[15px] bg-background-light dark:bg-background-dark border-2 border-highlight-blue" style={{ top: -8, left: -8 }}></div>
            <div className="absolute w-[15px] h-[15px] bg-background-light dark:bg-background-dark border-2 border-highlight-blue" style={{ top: -8, right: -8 }}></div>
            <div className="absolute w-[15px] h-[15px] bg-background-light dark:bg-background-dark border-2 border-highlight-blue" style={{ bottom: -8, left: -8 }}></div>
            <div className="absolute w-[15px] h-[15px] bg-background-light dark:bg-background-dark border-2 border-highlight-blue" style={{ bottom: -8, right: -8 }}></div>   
            </>   
      )}
    </div>
  ); 
}