import MasonLayout from "../../components/MasonLayout"
import items from "../../resources/portfolio.json";

export default function HackRPI() {
  const allPieces = items[0].all;

  return (
    <MasonLayout items={allPieces} />
  )
}