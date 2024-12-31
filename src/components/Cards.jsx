import { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import { Link } from "react-router-dom";

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

export function ExperienceCard( {type, items, isSelected: initialSelected, onCardSelect} ) {
  const [isSelected, setIsSelected] = useState(initialSelected);
  const [showDescription, setShowDescription] = useState(false);

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
    <div  
      ref={cardRef} onClick={handleCardClick} 
      className={`relative flex flex-col items-center h-[200px] justify-center transition-all duration-300`}
    >
      <Rnd       
        className={`relative ${isSelected ? "border-2 border-[#3395ff]" : ""}`}
        enableResizing={isSelected}
        disableDragging={true}

        size={{ width: "100%", height: "100%" }}

        onResizeStop={(e, direction, ref) => {
          setSize({ width: ref.style.width, height: ref.style.height });
        }} 
      >
        {type === "experience" && (
          <WorkDetails items={items} isSelected={isSelected} showDescription={showDescription}/>
        )}

        {type === "project" && (
          <ProjectDetails items={items} isSelected={isSelected} showDescription={showDescription}/>
        )}
        
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

function WorkDetails({ items, isSelected, showDescription }) {
  const { title, company, duration, description, images = [], bgColor } = items;

  return (
    <div
      className={`flex flex-row gap-8 border-2 p-4 rounded-[15px] ${
        isSelected ? "" : `hover:border-[#3395ff] hover:bg-${bgColor} hover:bg-opacity-40 hover:text-${bgColor}`
      }`}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="w-[100%]">
        <div className="flex mb-2">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${title} logo ${index}`} className="w-16 h-auto object-contain" />
          ))}
        </div>
        <div>{title}</div>
        <div className="font-[600] text-[14px]">{company}</div>
        <div className="text-[14px]">{duration}</div>
      </div>
      {showDescription && (
        <div className="text-[14px]">{description}</div>
      )}
    </div>
  );
}

function ProjectDetails({ items, isSelected, showDescription }) {
  const { title, stack, duration, description, images = [], github } = items;

  return (
    <div
      className={`relative flex flex-row gap-8 border-2 p-4 rounded-[15px] ${
        isSelected ? "" : `hover:border-[#3395ff]`
      }`}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="w-[100%] items-end">
        <div className="flex mb-2">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${title} logo ${index}`} className="w-16 h-auto object-contain" />
          ))}
        </div>
        <div>{title}</div>
        <div className="text-[14px]">{stack}</div>
        <div className="text-[14px]">{duration}</div>
        <Link 
          to={github} target="_blank" 
          rel="noopener noreferrer" 
          className="text-[14px] underline hover:text-highlightBlue" 
          onClick={(e) => e.stopPropagation()}
        > 
          Github
        </Link>
      </div>
      {showDescription && (
        <div className="w-[100%] text-[14px]">
            {description}         
        </div>
      )}
    </div>
  );
}