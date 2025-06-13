import { useState, useRef, useEffect } from "react";
import PortfolioImageCard from "../components/cards/PortfolioImageCard";
import { use } from "react";
import { image } from "motion/react-client";

export default function ImageGallery({ items }) {
  const [positions, setPositions] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(
    new Array(items.length).fill(false),
  );
  const imageRefs = useRef([]);

  const top = 10;
  const left = 10;
  const width = 2400;
  const height = 1700;

  useEffect(() => {
    if (images.length === items.length) {
      generatePositions();
    }
  }, [images]);

  useEffect(() => {
    if (positions.length - 1 === items.length) {
      setTimeout(() => {
        imagesLoaded.forEach((_, index) => {
          setTimeout(() => {
            setImagesLoaded((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }, index * 100);
        });
      }, 1250);
    }
  }, [positions]);

  const generatePositions = () => {
    let placedPositions = [
      {
        top: 860,
        left: 1050,
        width: 380,
        height: 225,
      },
    ];
    const maxTries = 50;
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
      let validPosition = false;

      let loopPositions =
        placedPositions.length < 10
          ? placedPositions
          : placedPositions.slice(-10);
      for (let pos of loopPositions) {
        let newPos = null;
        let attempts = 0;

        while (!validPosition && attempts < maxTries) {
          attempts++;

          const candidatePositions = [
            {
              top: randomInt(pos.top - padding, pos.top - padding - imgHeight),
              left: pos.left + (Math.random() * pos.width) / 4,
            },
            {
              top: pos.top + (Math.random() * pos.height) / 4,
              left: randomInt(
                pos.left - padding,
                pos.left - padding - imgWidth,
              ),
            },
            {
              top: pos.top + (Math.random() * pos.height) / 4,
              left: randomInt(
                pos.left + pos.width + padding,
                pos.left + pos.width + padding + imgWidth / 4,
              ),
            },
            {
              top: randomInt(
                pos.top + pos.height + padding,
                pos.top + pos.height + padding + imgHeight / 4,
              ),
              left: pos.left + (Math.random() * pos.width) / 4,
            },
          ];

          for (let candidate of candidatePositions) {
            newPos = {
              top: candidate.top,
              left: candidate.left,
              width: imgWidth,
              height: imgHeight,
            };

            const inBounds =
              newPos.left >= 0 &&
              newPos.top >= 0 &&
              newPos.left + newPos.width <= width &&
              newPos.top + newPos.height <= height;

            validPosition =
              inBounds &&
              !placedPositions.some((pos) => isOverlapping(newPos, pos));

            // console.log(validPosition, newPos);

            if (validPosition) {
              const openSpace = computeOpenSpace(newPos, placedPositions);
              if (openSpace < minOpenSpace) {
                minOpenSpace = openSpace;
                bestPosition = newPos;
              }
            }
          }

          // console.log("looping..", validPosition, newPos);
        }
        // console.log(`Attempts for image ${imgElement.alt}:`, attempts, validPosition);

        if (validPosition) break;
      }

      if (!bestPosition) {
        bestPosition = {
          top: top + padding,
          left: left + padding,
          width: imgWidth,
          height: imgHeight,
        };
      }

      // console.log(`Image ${imgElement.alt} placed at:`, bestPosition);
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
            if (el) {
              el.onload = () => {
                setImages((prev) => [...prev, el]);
              };
            }
          }}
          showImage={imagesLoaded[index]}
        />
      ))}
    </>
  );
}

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
    openSpace += xGap + 1.5 * yGap;
  }
  return openSpace;
};

const randomInt = (min, max) => {
  if (max == null) {
    max = min;
    min = 0;
  }
  if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
  }
  return Math.floor(min + (max - min + 1) * Math.random());
};
