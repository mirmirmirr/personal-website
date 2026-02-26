import { Link } from "react-router-dom";
import { cn } from "../../lib/classnames";
import BaseCard from "./BaseCard";

export default function ProjectCard({
  items,
  isSelected,
  isShrunk,
  onCardSelect,
}) {
  const { title, stack, duration, images = [], github } = items;

  return (
    <BaseCard
      isSelectedProp={isSelected}
      onSelect={onCardSelect}
      description={items.description}
    >
      <div className="h-[120px] w-full items-end transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-90 md:h-[140px]">
        <div className="font-semibold">{title}</div>
        {duration.map((d, i) => (
          <div key={i} className="text-[14px]">
            {d}
          </div>
        ))}
        <Link
          to={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] underline hover:text-blue"
          onClick={(e) => e.stopPropagation()}
        >
          Github
        </Link>
        <div className={cn("mt-2 flex flex-wrap gap-2", isShrunk && "hidden")}>
          {stack.map((tech, index) => (
            <div
              key={index}
              className="rounded-lg bg-blue-100 p-[5px] text-[12px] dark:bg-blue/40"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {images.length > 0 && (
        <div
          className={cn("mt-8 mb-2 flex", (isShrunk || isSelected) && "hidden")}
        >
          <img
            loading="lazy"
            src={images[0]}
            alt={title}
            className="bottom-8 h-auto max-h-[200px] w-full origin-bottom rounded-[15px] object-cover object-top transition-transform duration-300 ease-in-out group-hover:-translate-y-4 group-hover:scale-110 md:w-[320px]"
          />
        </div>
      )}
    </BaseCard>
  );
}
