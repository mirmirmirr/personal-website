import { useState, useEffect, useRef } from "react";
import useOutsideClick from "./hooks/useOutsideClick";
import SelectedBorderIndicators from "../SelectedBorderIndicators";
import { Rnd } from "react-rnd";

export default function CardWrapper({ isSelectedProp, onSelect, children }) {
  const [isSelected, setIsSelected] = useState(isSelectedProp || false);
  const [showDescription, setShowDescription] = useState(false);
  const cardRef = useRef(null);

  const [resizeWidth, setResizeWidth] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

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

  // Deselect on outside click
  // useOutsideClick(cardRef, () => {
  //   setIsSelected(false);
  //   setIsExpanded(false); // collapse on outside click
  // });

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
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 z-100 bg-gray-700/40"
          onClick={() => {
            setIsExpanded(false);
            handleClick();
          }}
        />
      )}

      <Rnd
        ref={cardRef}
        disableDragging
        enableResizing={{
          topRight: isExpanded ? false : true,
          bottomLeft: isExpanded ? false : true,
          topLeft: isExpanded ? false : true,
          bottomRight: isExpanded ? false : true,
        }}
        size={
          isExpanded ? dimensions : { width: "100%", height: "100%" } // fallback when not expanded
        }
        onResize={(e, direction, ref, delta, position) => {
          if (!isSelected || isExpanded) return;

          const newWidth = ref.offsetWidth;
          setResizeWidth(newWidth);

          if (newWidth > 600 && !isExpanded) {
            // setIsExpanded(true);
            // const viewportWidth = window.innerWidth;
            // const viewportHeight = window.innerHeight;
            // setDimensions({
            //   width: viewportWidth - 100, // for padding around (20px each side)
            //   height: viewportHeight - 100,
            // });
          }
        }}
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
          className={`relative h-full w-full rounded-xl bg-white transition-all duration-300`}
        >
          {children({ isSelected, showDescription, isExpanded })}
        </div>
        {isSelected && <SelectedBorderIndicators />}
      </Rnd>
    </>
  );
}
