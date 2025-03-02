import { twMerge } from "tailwind-merge";

export default function PortfolioImageCard({ imageSrc, title, top, left, className, innerRef }) {
  console.log("Class applied to div:", className);

  return (
    <div 
      className={twMerge(
        "absolute w-80",  // Ensure absolute positioning
        className    // This applies the width settings like md:w-48
      )}
      style={{ top, left }}
    >
      <img
        ref={innerRef}
        src={imageSrc}
        alt={title}
        className="rounded-[15px] w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  );
};