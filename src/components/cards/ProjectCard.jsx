import { useRef } from "react";
import { Link } from "react-router-dom";
import CardWrapper from "./CardWrapper";
import CardDetailWrapper from "./CardDetailWrapper";
import useResizeWidth from "./hooks/useResizeWidth";

import { AnimatePresence, motion } from "framer-motion";

export default function ProjectCard({ items, isSelected, onCardSelect }) {
  return (
    <CardWrapper isSelectedProp={isSelected} onSelect={onCardSelect}>
      {({ isSelected, showDescription, isExpanded }) => (
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              // initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl overflow-auto bg-white p-8 text-blue-500"
            >
              huhihihihihihihihihihihhihihihihiih
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full"
            >
              <CardDetailWrapper
                items={items}
                isSelected={isSelected}
                showDescription={showDescription}
              >
                <ProjectDetails items={items} isSelected={isSelected} />
              </CardDetailWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </CardWrapper>
  );
}

function ProjectDetails({ items }) {
  const { title, stack, duration, images = [], github } = items;
  const cardRef = useRef(null);
  const cardWidth = useResizeWidth(cardRef);

  return (
    <>
      <div
        ref={cardRef}
        className="h-[120px] w-full items-end transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-90 md:h-[140px]"
      >
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
