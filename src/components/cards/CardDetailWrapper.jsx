export default function CardDetailWrapper({
  items,
  isSelected,
  showDescription,
  children,
}) {
  return (
    <div
      className={`relative gap-4 overflow-hidden rounded-[15px] border-2 border-gray-300 ${showDescription ? "flex flex-col md:flex-row" : ""} ${!isSelected ? "hover:border-2 hover:border-highlight-blue" : ""} `}
      style={{ width: "100%", height: "100%" }}
    >
      <div
        className={`w-full p-4 ${isSelected ? "min-w-[160px]" : "group h-[225px]"}`}
      >
        {children}
      </div>

      <div
        aria-hidden={!showDescription}
        className="exp-description overflow-y-auto text-[14px] md:[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
      >
        <div className="flex flex-col gap-4 p-4">
          {items.description.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
