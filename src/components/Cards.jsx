import { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";

export function ImageCard({ imageSrc, title}) {
  return (
    <div className="rounded ">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-[15px]"
      />
      <div className="m-[10px] font-[500]">{title}</div>
    </div>
  );
};

export function GroupCard( {groupName} ) {
  return (
    <div className="bg-gray-200 w-[250px] p-4 rounded-[15px] "> 
      {groupName}
    </div>
  ); 
}

export function ExperienceCard( {title, company, stack, duration, description, isSelected: initialSelected, onCardSelect} ) {
  const [isSelected, setIsSelected] = useState(initialSelected);
  const [size, setSize] = useState({ width: "30vw", height: "20vh" });
  const cardRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsSelected(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleCardClick = () => {
    setIsSelected(true);
    if (onCardSelect) onCardSelect();
  };

  return (
    <div  ref={cardRef} onClick={handleCardClick} 
          className={`relative flex flex-col items-center h-[20vh] justify-center transition-all duration-300 ${
        isSelected ? "flex-[4]" : "flex-[1]"
      }`}
>
      <Rnd       
      className={`relative ${isSelected ? "border-2 border-[#3395ff]" : ""}`}
      enableResizing={isSelected}
      disableDragging={true}

      style={{ width: "100%", height: "100%" }}
      size={{ width: "100%", height: "100%" }}

      // size={{ width: size.width, height: size.height }}
      onResizeStop={(e, direction, ref) => {
        setSize({ width: ref.style.width, height: ref.style.height });
      }} 
    >
     <div 
      className={`border-2 p-4 rounded-[15px] bg-gray-200 ${isSelected ? "" : "hover:border-[#3395ff]"}`}
      style={{ width: "100%", height: "100%"}}
> 
        <div>{title}</div>
        <div className="font-[600] text-[14px]">{company}</div>
        <div className="text-[14px]">{stack}</div>
        <div className="text-[14px]">{duration}</div>
      </div>
      
      {isSelected && (
        <>
            <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ top: -8, left: -8 }}></div>
            <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ top: -8, right: -8 }}></div>
            <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ bottom: -8, left: -8 }}></div>
            <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ bottom: -8, right: -8 }}></div>   
            </>   
      )}
    </Rnd> 

    </div>
  ); 
}
