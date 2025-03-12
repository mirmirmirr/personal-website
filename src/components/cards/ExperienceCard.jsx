import { useState, useEffect, useRef } from "react";
import SelectedBorderIndicators from "../SelectedBorderIndicators";
import { Link } from "react-router-dom";
import Image from "../Image";

export default function ExperienceCard( {type, items, isSelected: initialSelected, onCardSelect} ) {
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
    setIsSelected(!isSelected);
    if (onCardSelect) onCardSelect();
  };

  return (
    <div  
      ref={cardRef} onClick={handleCardClick} 
      className={`relative items-center h-full justify-center transition-all duration-300 ${isSelected ? "border-2 border-[#3395ff]" : ""}`}
    >
      {type === "experience" ? (
        <WorkDetails items={items} isSelected={isSelected} showDescription={showDescription} />
      ) : (
        <ProjectDetails items={items} isSelected={isSelected} showDescription={showDescription} />
      )}
      
      {isSelected && <SelectedBorderIndicators />}
    </div> 
  ); 
}

function WorkDetails({ items, isSelected, showDescription }) {
  const { title, company, duration, description, images = [], bgColor } = items;

  return (
    <div
      className={`gap-8 p-4 rounded-[15px] border-[2px] border-gray-300 ${showDescription ? "flex flex-col md:flex-row" : ""} ${
        isSelected ? "" : `hover:border-2 hover:border-[#3395ff]`
      }`}
      style={{ width: "100%", height: "100%" }}
    >
      <div className={`w-[100%] ${isSelected ? "min-w-[160px]" : "hover:scale-90 hover:-translate-y-2"} transition-transform duration-300 ease-in-out`}>
        <div className="flex mb-2 ">
          {images.map((image, index) => (
            <Image 
              src={image}
              alt={title}
              key={index}
              className="w-16 h-auto object-contain"
            />
          ))}
        </div>
        <div>{company}</div>
        <div className="font-[600] text-[14px]">{title}</div>
        <div className="text-[14px]">{duration}</div>
      </div>

      <div aria-hidden={!showDescription} className={`exp-description text-[14px]`}>
        <div className="flex flex-col gap-4">
          {description.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>

    </div>
  );
}

function ProjectDetails({ items, isSelected, showDescription }) {
  const { title, stack, duration, description, images = [], github } = items;
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setCardWidth(entry.contentRect.width);
    });

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative gap-4 p-4 rounded-[15px] border-[2px] border-gray-300 overflow-hidden ${showDescription ? "flex flex-col md:flex-row" : ""} ${
        isSelected ? "" : `hover:border-2 hover:border-[#3395ff]`
      }`}
      style={{ width: "100%", height: "100%" }}
    >
      
      <div ref={cardRef} className={`w-[100%] ${isSelected ? "min-w-[160px]" : "group h-[225px]"} `}>

        <div className="w-[100%] h-[120px] md:h-[140px] items-end group-hover:scale-90 group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
          <div className="font-[600]">{title}</div>
          <div className="text-[14px]">{duration}</div>
          <Link 
            to={github} target="_blank" 
            rel="noopener noreferrer" 
            className="text-[14px] underline hover:text-highlightBlue" 
            onClick={(e) => e.stopPropagation()}
          > 
            Github
          </Link>
          <div className="flex flex-row flex-wrap gap-2 mt-4">
            {stack.map((tech, index) => (
              <div key={index} className="text-[12px] p-[5px] rounded-lg bg-blue-100 dark:bg-highlightBlue">{tech}</div>
            ))}
          </div>
        </div>

        {cardWidth >= 200 && images.length > 0 && (
          <div className="flex mt-8 mb-2">
            <img 
              loading="lazy"
              src={images[0]} 
              alt={title}
              className="w-full md:w-[320px] h-auto max-h-[200px] object-cover object-top rounded-[15px] group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-300 ease-in-out origin-bottom bottom-8" 
            />
          </div>
        )}

      </div>

      <div aria-hidden={!showDescription} className={`exp-description text-[14px]`}>
        <div className="flex flex-col gap-4">
          {description.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    </div>
  );
}