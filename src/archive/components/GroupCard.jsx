import { useRef } from "react";

export default function GroupCard({ groupName, isSelected, onGroupSelect }) {
  const cardRef = useRef(null);

  const handleGroupSelect = () => {
    if (onGroupSelect) onGroupSelect();
  };

  return (
    <div
      ref={cardRef}
      className={`relative flex ${isSelected ? "border-2 border-highlight-blue" : ""}`}
      onClick={handleGroupSelect}
    >
      <div
        className={`w-full rounded-[20px] border-2 p-4 text-[14px] ${isSelected ? "" : "hover:border-highlight-blue"}`}
      >
        {groupName}
      </div>

      {isSelected && (
        <>
          <div
            className="absolute h-[15px] w-[15px] border-2 border-highlight-blue bg-background-light dark:bg-background-dark"
            style={{ top: -8, left: -8 }}
          ></div>
          <div
            className="absolute h-[15px] w-[15px] border-2 border-highlight-blue bg-background-light dark:bg-background-dark"
            style={{ top: -8, right: -8 }}
          ></div>
          <div
            className="absolute h-[15px] w-[15px] border-2 border-highlight-blue bg-background-light dark:bg-background-dark"
            style={{ bottom: -8, left: -8 }}
          ></div>
          <div
            className="absolute h-[15px] w-[15px] border-2 border-highlight-blue bg-background-light dark:bg-background-dark"
            style={{ bottom: -8, right: -8 }}
          ></div>
        </>
      )}
    </div>
  );
}
