import { twMerge } from "tailwind-merge";

export default function PortfolioImageCard({
  imageSrc,
  title,
  top,
  left,
  width,
  innerRef,
  showImage,
}) {
  return (
    <div
      className={twMerge(
        "absolute",
        `${showImage ? "opacity-100 transition-opacity duration-500 ease-in-out" : "opacity-0"}`,
      )}
      style={{ top, left, width }}
    >
      <img ref={innerRef} src={imageSrc} alt={title} loading="lazy" />
    </div>
  );
}
