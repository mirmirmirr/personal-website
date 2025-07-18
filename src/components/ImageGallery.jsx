import savedPositions from "../resources/positions.json";

import { useState, useRef, useEffect } from "react";
import PortfolioImageCard from "./cards/PortfolioImageCard";

export default function ImageGallery({ items }) {
  const [imagesLoaded, setImagesLoaded] = useState(
    new Array(items.length).fill(false),
  );
  const imageRefs = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      items.forEach((_, index) => {
        setTimeout(() => {
          setImagesLoaded((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 100);
      });
    }, 1250);
  }, []);

  return (
    <>
      {items.map((item, index) => (
        <PortfolioImageCard
          key={index}
          imageSrc={item.src}
          title={item.title}
          width={item.width}
          top={savedPositions[index + 1]?.top}
          left={savedPositions[index + 1]?.left}
          innerRef={(el) => {
            imageRefs.current[index] = el;
          }}
          showImage={imagesLoaded[index]}
        />
      ))}
    </>
  );
}
