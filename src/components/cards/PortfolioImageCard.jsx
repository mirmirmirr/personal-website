import { twMerge } from "tailwind-merge";

export default function PortfolioImageCard({ imageSrc, title, top, left, width, innerRef, showImage }) {
  // console.log("Class applied to div:", className);

  return (
    <div 
      className={twMerge(
        "absolute",  // Ensure absolute positioning
        `${showImage ? "opacity-100 transition-opacity duration-500 ease-in-out" : "opacity-0"}`
      )}
      style={{ top, left, width }}
    >
      <img
        ref={innerRef}
        src={imageSrc}
        alt={title}
        // className="rounded-[15px] w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  );
};