import { useState, useRef } from "react";
import PortfolioImageCard from "../components/cards/PortfolioImageCard";

export default function ImageGallery({ items, dimensions }) {
  const [positions, setPositions] = useState([]);
  const imageRefs = useRef([]);

  const [height, top, width, left] = dimensions;

  const populateImageDimensions = () => {
    items.forEach((_, index) => {
      const imgElement = imageRefs.current[index];
      if (imgElement) {
        console.log(`Image ${index} dimensions:`, {
          width: imgElement.offsetWidth,
          height: imgElement.offsetHeight,
        });
      }
    });
  };

  const generatePositions = () => {
    let placedPositions = [
      {
        top: 64,
        left: 800,
        width: 400,
        height: 230,
      }
    ];
    const maxTries = 50;

    items.forEach((_, index) => {
      let validPosition = false;
      let attempts = 0;
      let newPos = {};

      while (!validPosition && attempts < maxTries) {
        const randomTop = Math.random() * height + top;
        const randomLeft = Math.random() * width + left;
        const imgElement = imageRefs.current[index];

        if (!imgElement) {
          console.warn(`Image ${index} not loaded yet`);
          return;
        }

        newPos = {
          top: randomTop,
          left: randomLeft,
          width: imgElement.offsetWidth,
          height: imgElement.offsetHeight,
        };

        validPosition = placedPositions.every(
          (pos) => !isOverlapping(pos, newPos)
        );

        attempts++;
      }

      console.log(`Image ${index} placed at:`, newPos);
      placedPositions.push(newPos);
    });

    setPositions(placedPositions);
  };

  return (
    <>
      {items.map((item, index) => (
        <PortfolioImageCard
          key={index}
          imageSrc={item.src}
          title={item.title}
          className={item.className}
          top={positions[index + 1]?.top}
          left={positions[index + 1]?.left}
          innerRef={(el) => {
            imageRefs.current[index] = el;
            if (el) {
              el.onload = () => {
                console.log(`Image ${index} loaded.`);
                populateImageDimensions();
                generatePositions();
              };
            }
          }}
        />
      ))}
    </>
  );
};


const isOverlapping = (pos1, pos2) => {
  return !(
    pos1.left + pos1.width + 10 < pos2.left ||
    pos2.left + pos2.width + 10 < pos1.left ||
    pos1.top + pos1.height + 10 < pos2.top ||
    pos2.top + pos2.height + 10 < pos1.top
  );
};