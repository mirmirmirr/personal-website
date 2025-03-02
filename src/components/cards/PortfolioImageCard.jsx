import classNames from "classnames";

export default function PortfolioImageCard({ imageSrc, title, top, left, className, innerRef }) {
  return (
    <div 
      className={classNames(
        "absolute w-48",
        className
      )}
      style={{
        top,
        left,
      }}
    >
      <img
        ref={innerRef}
        src={imageSrc}
        alt={title}
        // className="rounded-[15px]"
        loading="lazy"
      />
      {/* <div className="m-[10px] font-[500]">{title}</div> */}
    </div>
  );
};