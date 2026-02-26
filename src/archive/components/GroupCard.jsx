import { useRef } from "react";

export default function GroupCard({ groupName, isSelected, onGroupSelect }) {
  const cardRef = useRef(null);

  const handleGroupSelect = () => {
    if (onGroupSelect) onGroupSelect();
  };

  return (
    <div
      ref={cardRef}
      className={`relative flex ${isSelected ? "border-2 border-blue" : ""}`}
      onClick={handleGroupSelect}
    >
      <div
        className={`w-full rounded-[20px] border-2 p-4 text-[14px] ${isSelected ? "" : "hover:border-blue"}`}
      >
        {groupName}
      </div>

      {isSelected && (
        <>
          <div
            className="bg-background-light dark:bg-background-dark absolute h-[15px] w-[15px] border-2 border-blue"
            style={{ top: -8, left: -8 }}
          ></div>
          <div
            className="bg-background-light dark:bg-background-dark absolute h-[15px] w-[15px] border-2 border-blue"
            style={{ top: -8, right: -8 }}
          ></div>
          <div
            className="bg-background-light dark:bg-background-dark absolute h-[15px] w-[15px] border-2 border-blue"
            style={{ bottom: -8, left: -8 }}
          ></div>
          <div
            className="bg-background-light dark:bg-background-dark absolute h-[15px] w-[15px] border-2 border-blue"
            style={{ bottom: -8, right: -8 }}
          ></div>
        </>
      )}
    </div>
  );
}
