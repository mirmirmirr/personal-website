export default function CardDetailWrapper({
  items,
  isSelected,
  showDescription,
  children,
}) {
  return (
    <div
      className={`relative gap-4 overflow-hidden rounded-[15px] border-2 border-gray-300 p-4 ${showDescription ? "flex flex-col md:flex-row" : ""} ${!isSelected ? "hover:border-2 hover:border-highlight-blue" : ""} `}
      style={{ width: "100%", height: "100%" }}
    >
      <div
        className={`w-full ${isSelected ? "min-w-[160px]" : "group h-[225px]"}`}
      >
        {children}
      </div>

      <div
        aria-hidden={!showDescription}
        className="exp-description text-[14px]"
      >
        <div className="flex flex-col gap-4">
          {items.description.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
