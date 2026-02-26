import BaseCard from "./BaseCard";
import { cn } from "../../lib/classnames";

export default function ExperienceCard({
  items,
  isSelected,
  isShrunk,
  onCardSelect,
}) {
  const { title, company, duration, images = [] } = items;

  return (
    <BaseCard
      isSelectedProp={isSelected}
      onSelect={onCardSelect}
      description={items.description}
      showHoverMessage
    >
      <div
        className={cn(
          "flex w-full flex-col items-start transition-transform duration-500 ease-in-out",
          isSelected
            ? "min-w-[160px]"
            : "group-hover:-translate-y-2 group-hover:scale-90",
        )}
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

        <div className="w-full truncate text-base font-semibold">{company}</div>
        <div className="w-full truncate text-sm">{title}</div>

        <div
          className={cn(
            "w-full overflow-hidden transition-all duration-500 ease-in-out",
            isShrunk ? "max-h-0 opacity-0" : "max-h-20 opacity-100",
          )}
        >
          {duration.map((d, i) => (
            <div key={i} className="truncate text-sm">
              {d}
            </div>
          ))}
        </div>
      </div>
    </BaseCard>
  );
}
