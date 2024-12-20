export function ImageCard({ imageSrc, title}) {
  return (
    <div className="rounded ">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-[15px]"
      />
      <div className="m-[10px] font-[500]">{title}</div>
    </div>
  );
};

export function GroupCard() {
  return (
    <div className="bg-gray-200 w-[250px] p-4 rounded-[15px] "> 
      nnn
    </div>
  ); 
}