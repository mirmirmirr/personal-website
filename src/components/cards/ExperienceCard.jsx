import { useState, useEffect, useRef } from "react";
import SelectedBorderIndicators from "../SelectedBorderIndicators";
import { Link } from "react-router-dom";
import Image from "../Image";

export default function ExperienceCard({
  type,
  items,
  isSelected: initialSelected,
  onCardSelect,
}) {
  const [isSelected, setIsSelected] = useState(initialSelected);
  const [showDescription, setShowDescription] = useState(false);
  const cardRef = useRef(null);
  const cardDetailRef = useRef(null);

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
      ref={cardRef}
      onClick={handleCardClick}
      className={`relative h-full items-center justify-center transition-all duration-300 ${isSelected ? "border-2 border-highlight-blue" : ""}`}
    >
      <CardDetailWrapper
        items={items}
        isSelected={isSelected}
        showDescription={showDescription}
        cardDetailRef={cardDetailRef}
      >
        {type === "experience" ? (
          <WorkDetails
            items={items}
            isSelected={isSelected}
            cardRef={cardDetailRef}
          />
        ) : (
          <ProjectDetails items={items} cardRef={cardDetailRef} />
        )}
      </CardDetailWrapper>
      {isSelected && <SelectedBorderIndicators />}
    </div>
  );
}

function CardDetailWrapper({
  items,
  isSelected,
  showDescription,
  cardDetailRef,
  children,
}) {
  return (
    <div
      className={`relative gap-4 overflow-hidden rounded-[15px] border-2 border-gray-300 p-4 ${showDescription ? "flex flex-col md:flex-row" : ""} ${isSelected ? "" : `hover:border-2 hover:border-highlight-blue`} `}
      style={{ width: "100%", height: "100%" }}
    >
      <div
        ref={cardDetailRef}
        className={`w-full ${isSelected ? "min-w-[160px]" : "group h-[225px]"} `}
      >
        {children}
      </div>

      <div
        aria-hidden={!showDescription}
        className={`exp-description text-[14px]`}
      >
        <div className="flex flex-col gap-4">
          {items.description.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkDetails({ items, isSelected, cardRef }) {
  const { title, company, duration, description, images = [], bgColor } = items;
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
    <>
      <div
        className={`w-full ${isSelected ? "min-w-[160px]" : "group-hover:-translate-y-2 group-hover:scale-90"} transition-transform duration-300 ease-in-out`}
      >
        <div className="mb-2 flex">
          {images.map((image, index) => (
            <Image
              src={image}
              alt={title}
              key={index}
              className="h-auto w-16 object-contain"
            />
          ))}
        </div>
        <div>{company}</div>
        <div className="text-[14px] font-semibold">{title}</div>
        <div className="text-[14px]">{duration}</div>
      </div>

      {cardWidth >= 200 && (
        <div className="mt-2 flex hidden justify-center md:block">
          <div className="origin-bottom text-center text-[14px] text-[#0071D5] opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100">
            Click for more information
          </div>
        </div>
      )}

      <div
        className={`absolute bottom-4 w-[90%] text-center md:hidden ${isSelected ? "opacity-0" : "opacity-100"} transition-opacity duration-300 ease-in-out`}
      >
        <div className="origin-bottom text-center text-[14px] text-[#0071D5] transition-all duration-300 ease-in-out group-hover:-translate-y-2">
          Click for more information
        </div>
      </div>
    </>
  );
}

function ProjectDetails({ items, cardRef }) {
  const { title, stack, duration, description, images = [], github } = items;
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
    <>
      <div className="h-[120px] w-full items-end transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-90 md:h-[140px]">
        <div className="font-semibold">{title}</div>
        <div className="text-[14px]">{duration}</div>
        <Link
          to={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] underline hover:text-highlight-blue"
          onClick={(e) => e.stopPropagation()}
        >
          Github
        </Link>
        <div className="mt-4 flex flex-row flex-wrap gap-2">
          {stack.map((tech, index) => (
            <div
              key={index}
              className="rounded-lg bg-blue-100 p-[5px] text-[12px] dark:bg-highlight-blue"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {cardWidth >= 200 && images.length > 0 && (
        <div className="mt-8 mb-2 flex">
          <img
            loading="lazy"
            src={images[0]}
            alt={title}
            className="bottom-8 h-auto max-h-[200px] w-full origin-bottom rounded-[15px] object-cover object-top transition-transform duration-300 ease-in-out group-hover:-translate-y-4 group-hover:scale-110 md:w-[320px]"
          />
        </div>
      )}
    </>
  );
}
