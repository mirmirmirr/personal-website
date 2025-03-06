import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../resources/utils";

export default function DragCards() {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/group.png"
        alt="Example image"
        rotate="6deg"
        bottom="5%"
        left="7%"
        className="w-36 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/family.jpg"
        alt="Example image"
        rotate="12deg"
        bottom="5%"
        left="60%"
        className="w-36 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/picture.JPEG"
        alt="Example image"
        rotate="-6deg"
        bottom="5%"
        left="40%"
        className="w-36 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/littleme.png"
        alt="Example image"
        rotate="8deg"
        bottom="5%"
        left="35%"
        className="w-24 md:w-36"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, bottom, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        bottom,
        left,
        rotate,
        zIndex,
      }}
      className={cn(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};