import { useRef } from "react";
import CardWrapper from "./CardWrapper";
import CardDetailWrapper from "./CardDetailWrapper";
import useResizeWidth from "./hooks/useResizeWidth";

import { AnimatePresence, motion } from "framer-motion";

export default function ExperienceCard({ items, isSelected, onCardSelect }) {
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
                <WorkDetails items={items} isSelected={isSelected} />
              </CardDetailWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </CardWrapper>
  );
}

function WorkDetails({ items, isSelected }) {
  const { title, company, duration, images = [] } = items;
  const cardRef = useRef(null);
  const cardWidth = useResizeWidth(cardRef);

  return (
    <>
      <div
        ref={cardRef}
        className={`w-full transition-transform duration-300 ease-in-out ${
          isSelected
            ? "min-w-[160px]"
            : "group-hover:-translate-y-2 group-hover:scale-90"
        }`}
      >
        <div className="mb-2 flex">
          {images.map((image, index) => (
            <img
              src={image}
              alt={title}
              key={index}
              className="h-auto w-16 object-contain"
            />
          ))}
        </div>
        <div>{company}</div>
        <div className="text-[14px] font-semibold">{title}</div>
        {duration.map((d, i) => (
          <div key={i} className="text-[14px]">
            {d}
          </div>
        ))}
      </div>

      {cardWidth >= 200 && (
        <div className="mt-2 hidden justify-center md:flex">
          <div className="origin-bottom text-center text-[14px] text-[#0071D5] opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100">
            Click for more information
          </div>
        </div>
      )}

      <div
        className={`absolute bottom-4 w-[90%] text-center transition-opacity duration-300 ease-in-out md:hidden ${
          isSelected ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="origin-bottom text-center text-[14px] text-[#0071D5] transition-all duration-300 ease-in-out group-hover:-translate-y-2">
          Click for more information
        </div>
      </div>
    </>
  );
}
