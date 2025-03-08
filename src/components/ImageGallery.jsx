import { useState, useRef } from "react";
import PortfolioImageCard from "../components/cards/PortfolioImageCard";

export default function ImageGallery({ items }) {
  const [positions, setPositions] = useState([]);
  const imageRefs = useRef([]);

  const top = 10;
  const left = 10;

  const generatePositions = () => {
    let placedPositions = [
      {
        top: 890,
        left: 800,
        width: 400,
        height: 230,
      },
    ];
    const maxTries = 100;
    const padding = 30;

    items.forEach((_, index) => {
      const imgElement = imageRefs.current[index];

      if (!imgElement) {
        console.warn(`Image ${index} not loaded yet`);
        return;
      }

      const imgWidth = imgElement.offsetWidth;
      const imgHeight = imgElement.offsetHeight;


      let bestPosition = null;
      let minOpenSpace = Infinity;

      let loopPositions = [];

      if (placedPositions.length < 10) loopPositions = placedPositions;
      else loopPositions = placedPositions.slice(placedPositions.length - 10);

      for (let pos of loopPositions) {
        let validPosition = false;
        let newPos = null;
        let attempts = 0;

        while (!validPosition && attempts < maxTries) {
          attempts++;

          const candidatePositions = [
            { top: randomInt(pos.top - padding, pos.top - padding - imgHeight), left: pos.left + Math.random() * padding },
            { top: pos.top + Math.random() * padding, left: randomInt(pos.left - padding, pos.left - padding - imgWidth) },
            { top: pos.top + Math.random() * padding, left: randomInt(pos.left + pos.width + padding, pos.left + pos.width + padding + imgWidth/4) },
            { top: randomInt(pos.top + pos.height + padding, pos.top + pos.height + padding + imgHeight/4), left: pos.left + Math.random() * padding }
          ]

          for (let candidate of candidatePositions) {
            newPos = {
              top: candidate.top,
              left: candidate.left,
              width: imgWidth,
              height: imgHeight,
            }

            validPosition = placedPositions.every(
              (pos) => !isOverlapping(pos, newPos)
            );

            console.log(validPosition, newPos);

            if (validPosition) {
              const openSpace = computeOpenSpace(newPos, placedPositions);
              if (openSpace < minOpenSpace) {
                minOpenSpace = openSpace;
                bestPosition = newPos;
              }
            }
          }

          console.log("looping..", validPosition, newPos);
        }

        if (validPosition) {
          break;
        }
      }

      if (!bestPosition) {
        bestPosition = {
          top: top + padding,
          left: left + padding,
          width: imgWidth,
          height: imgHeight,
        };
      }

      console.log(`Image ${imgElement.alt} placed at:`, bestPosition);
      placedPositions.push(bestPosition);
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
          width={item.width}
          top={positions[index + 1]?.top}
          left={positions[index + 1]?.left}
          innerRef={(el) => {
            imageRefs.current[index] = el;
            if (el && index === items.length - 1) {
              el.onload = () => {
                console.log(`Image ${index} loaded.`);
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
    pos1.left + pos1.width + 20 < pos2.left ||
    pos2.left + pos2.width + 20 < pos1.left ||
    pos1.top + pos1.height + 20 < pos2.top ||
    pos2.top + pos2.height + 20 < pos1.top
  );
};

const computeOpenSpace = (newPos, placedPositions) => {
  let openSpace = 0;

  for (let pos of placedPositions) {
    const xGap = Math.abs(newPos.left - pos.left);
    const yGap = Math.abs(newPos.top - pos.top);
    openSpace += xGap + yGap; // Sum of distances to all placed images
  }

  return openSpace;
};

const randomInt = (min, max) => {
  if (max == null) { max = min; min = 0; }
  if (min > max) { var tmp = min; min = max; max = tmp; }
  return Math.floor(min + (max - min + 1) * Math.random());
}