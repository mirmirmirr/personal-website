import items from "../resources/projects.json";
import RenderCards from "../components/RenderCards";
import { div } from "motion/react-m";
import ExpandableCard from "../components/cards/ExpandableCard";

export default function Projects() {
  // const experiences = items[0].experiences;
  // const projects = items[0].projects;

  // const chunkProjects = (projects, chunkSize) => {
  //   const result = [];
  //   for (let i = 0; i < projects.length; i += chunkSize) {
  //     result.push(projects.slice(i, i + chunkSize));
  //   }
  //   return result;
  // };

  // const renderCards = (items, type) => {
  //   const groups = chunkProjects(items, 3);

  //   return (
  //     <div className="w-full gap-4">
  //       {groups.map((group, groupIndex) => (
  //         <RenderCards key={groupIndex} items={group} type={type}/>
  //       ))}
  //     </div>
  //   )
  // };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <ExpandableCard></ExpandableCard>
      <ExpandableCard></ExpandableCard>
      <ExpandableCard></ExpandableCard>
      <ExpandableCard></ExpandableCard>
      <ExpandableCard></ExpandableCard>
      <ExpandableCard></ExpandableCard>
    </div>
  );
}
