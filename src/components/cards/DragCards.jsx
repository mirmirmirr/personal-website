import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../resources/utils";

export default function DragCards() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const cards = [
    {
      src: "/group.png",
      alt: "Group Photo",
      rotate: "6deg",
      bottom: isSmallScreen ? "85%" : "15%",
      left: isSmallScreen ? "-5%" : "7%",
      className: "w-60 md:w-80",
    },
    {
      src: "/family.jpg",
      alt: "Family Photo",
      rotate: "12deg",
      bottom: isSmallScreen ? "0%" : "15%",
      left: isSmallScreen ? "40%" : "60%",
      className: "w-60 md:w-80",
    },
    {
      src: "/photographer.JPEG",
      alt: "Photographer",
      rotate: "-6deg",
      bottom: isSmallScreen ? "50%" : "15%",
      left: isSmallScreen ? "60%" : "40%",
      className: "w-60 md:w-80",
    },
    {
      src: "/littleme.png",
      alt: "Young Miranda",
      rotate: "8deg",
      bottom: isSmallScreen ? "0%" : "15%",
      left: isSmallScreen ? "5%" : "35%",
      className: "w-32 md:w-36",
    },
  ];

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      {cards.map((card, index) => (
        <Card key={index} containerRef={containerRef} {...card} />
      ))}
    </div>
  );
}

const Card = ({ containerRef, src, alt, bottom, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const elements = document.querySelectorAll(".drag-elements");
    let maxZ = 0;

    elements.forEach((el) => {
      const z = parseInt(window.getComputedStyle(el).zIndex);
      if (!isNaN(z)) maxZ = Math.max(maxZ, z);
    });

    setZIndex(maxZ + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{ bottom, left, rotate, zIndex }}
      className={cn(
        "drag-elements absolute cursor-grab bg-neutral-200 p-1 pb-4 active:cursor-grabbing",
        className,
      )}
      src={src}
      alt={alt}
      loading="lazy"
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};
