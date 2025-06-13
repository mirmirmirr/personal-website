import MasonLayout from "../../archive/components/MasonLayout";
import items from "../../resources/portfolio.json";

export default function Artwork() {
  const allPieces = items[0].all;

  return (
    <div>
      <div className="flex w-[450px] flex-col justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-90">
        <h1 className="text-[20px] font-bold">Artwork</h1>
        <p className="text-[14px]">
          I used to love creating art, especially drawing. I don't have a lot of
          time to do it now, but when I can I still draw digitally.
        </p>
      </div>
      <MasonLayout items={allPieces} />
    </div>
  );
}
