import MasonLayout from "../../archive/components/MasonLayout";
import items from "../../resources/portfolio.json";

export default function Logos() {
  const allPieces = items[0].all;

  return <MasonLayout items={allPieces} />;
}
