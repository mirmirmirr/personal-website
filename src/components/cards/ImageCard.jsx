export default function ImageCard({ imageSrc, title}) {
  return (
    <div className="rounded ">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-[15px]"
        loading="lazy"
      />
      <div className="m-[10px] font-[500]">{title}</div>
    </div>
  );
};