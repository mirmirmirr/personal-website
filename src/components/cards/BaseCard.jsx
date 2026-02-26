import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SelectedBorderIndicators from "../SelectedBorderIndicators";
import { Rnd } from "react-rnd";
import { cn } from "../../lib/classnames";

export default function BaseCard({
  isSelectedProp,
  onSelect,
  description,
  children,
  showHoverMessage = false,
}) {
  const [isSelected, setIsSelected] = useState(isSelectedProp || false);
  const [showDescription, setShowDescription] = useState(false);
  const cardRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  // Sync with parent selection
  useEffect(() => {
    setIsSelected(isSelectedProp);
  }, [isSelectedProp]);

  // Collapse expanded state when parent deselects card
  useEffect(() => {
    if (!isSelectedProp) {
      setIsExpanded(false);
    }
  }, [isSelectedProp]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsSelected(false);
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  // Handle description delay
  useEffect(() => {
    if (isSelected) {
      const timer = setTimeout(() => setShowDescription(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowDescription(false);
    }
  }, [isSelected]);

  const handleClick = () => {
    if (isExpanded) return; // disable click when expanded
    const willSelect = !isSelected;
    setIsSelected(willSelect);
    if (!willSelect) {
      setIsExpanded(false); // collapse on deselect
    }
    if (onSelect) onSelect();
  };

  return (
    <Rnd
      ref={cardRef}
      disableDragging
      enableResizing={!isExpanded}
      size={{ width: "100%", height: "100%" }}
      style={{
        position: isExpanded ? "fixed" : "relative",
        inset: isExpanded ? "0" : "auto",
        flexGrow: isExpanded ? 0 : 1,
        transition: "all 0.3s ease-in-out",
        zIndex: isExpanded ? 999 : isSelected ? 50 : "auto",
        border: isSelected ? "2px solid #3395ff" : "none",
        backgroundColor: isExpanded ? "white" : undefined,
        margin: isExpanded ? "auto" : undefined,
      }}
    >
      <div
        onClick={handleClick}
        className={`relative h-full w-full rounded-xl transition-all duration-300`}
      >
        <motion.div
          key="collapsed"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-full w-full"
        >
          <div
            className={`relative gap-4 overflow-hidden rounded-[15px] border-2 border-gray-300 bg-white dark:border-gray-400 dark:bg-black ${
              showDescription ? "flex flex-col md:flex-row" : ""
            } ${!isSelected ? "hover:border-2 hover:border-blue dark:hover:border-blue" : ""} `}
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className={`w-full p-4 ${
                isSelected ? "min-w-[160px]" : "group h-[225px]"
              }`}
            >
              {children}

              {showHoverMessage && !isSelected && (
                <div
                  className={cn(
                    "pointer-events-none absolute bottom-4 left-0 flex w-full justify-center transition-opacity duration-500",
                    isSelected ? "opacity-0" : "opacity-100",
                  )}
                >
                  <div
                    className={cn(
                      "origin-bottom truncate text-[14px] text-blue transition-all duration-500 ease-in-out",
                      "opacity-100 group-hover:-translate-y-2 group-hover:opacity-100 md:opacity-0",
                    )}
                  >
                    Click for more information
                  </div>
                </div>
              )}
            </div>

            <div
              aria-hidden={!showDescription}
              className="exp-description overflow-y-auto text-[14px] md:[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
            >
              {showDescription && (
                <div className="flex flex-col gap-4 p-4">
                  {description.map((element, index) => (
                    <p key={index}>{element}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      {isSelected && <SelectedBorderIndicators />}
    </Rnd>
  );
}
