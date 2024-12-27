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

export function GroupCard({ groupName, isSelected: initialSelected, onGroupSelect}) {
  const [isSelected, setIsSelected] = useState(initialSelected);
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

  const handleGroupSelect = () => {
    setIsSelected(true);
    if (onGroupSelect) onGroupSelect();
  };

  return (
    <div ref={cardRef} className={`relative flex transition-all duration-300 ${isSelected ? "border-2 border-[#3395ff] flex-[4]" : "flex-[1]"}`} onClick={handleGroupSelect}>
      <div className={`bg-gray-200 w-[100%] p-4 rounded-[15px] border-2 ${isSelected ? "" : "hover:border-[#3395ff]"}`}>
        {groupName}
      </div>

      {isSelected && (
        <>
            <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ top: -8, left: -8 }}></div>
            <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ top: -8, right: -8 }}></div>
            <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ bottom: -8, left: -8 }}></div>
            <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ bottom: -8, right: -8 }}></div>   
            </>   
      )}
    </div>
  ); 
}

export function ExperienceCard( {items, isSelected: initialSelected, onCardSelect} ) {
  const [isSelected, setIsSelected] = useState(initialSelected);
  const [showDescription, setShowDescription] = useState(false);

  const cardRef = useRef(null);

  const { title, company, stack, duration, description, images = [], bgColor } = items;

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

  useEffect(() => {
    if (isSelected) {
      const timer = setTimeout(() => {
        setShowDescription(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowDescription(false);
    }
  }, [isSelected]);

  const handleCardClick = () => {
    setIsSelected(true);
    if (onCardSelect) onCardSelect();
  };

  return (
    <div  ref={cardRef} onClick={handleCardClick} 
          className={`relative flex flex-col items-center h-[200px] justify-center transition-all duration-300 ${
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
      className={`flex flex-row gap-8 border-2 p-4 rounded-[15px] ${isSelected ? "" : `hover:border-[#3395ff] hover:bg-${bgColor} hover:bg-opacity-40 hover:text-${bgColor}`}`}
      style={{ width: "100%", height: "100%"}}
    >  
      <div className="w-[100%]">
        <div className="flex mb-2">
          {images.map((image, index) => (
              <img key={index} src={image} alt={`${title} logo ${index}`} className="w-16 h-auto object-contain"/>
            ))}
        </div>
        <div>{title}</div>
        <div className="font-[600] text-[14px]">{company}</div>
        <div className="text-[14px]">{stack}</div>
        <div className="text-[14px]">{duration}</div>
      </div>

      {showDescription && (
        <div>{description}</div>
      )}
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
