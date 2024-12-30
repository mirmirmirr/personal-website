import { useRef, useState, useEffect } from "react";
import { ExperienceCard } from "../components/Cards";
import Masonry from 'react-masonry-css';
import items from "../resources/projects.json";
import RenderCards from "../components/RenderCards";

export default function Projects() {
  const experiences = items[0].experiences;
  const projects = items[0].projects;

  const cardsRef = useRef(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (cardsRef.current && !cardsRef.current.contains(e.target)) {
        setSelectedCard(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const chunkProjects = (projects, chunkSize) => {
    const result = [];
    for (let i = 0; i < projects.length; i += chunkSize) {
      result.push(projects.slice(i, i + chunkSize));
    }
    return result;
  };

  const renderCards = (items, type) => {
    const groups = chunkProjects(items, 3);
    
    return (
      <div className="w-full border-2 p-6 gap-4 mb-4 pb-4">
        {groups.map((group, groupIndex) => (
          <RenderCards items={group} type={type}/>
        ))}
      </div>
    )
  };

  return (
    <div className="m-8 mt-[0px]">
      <p>Work + Research</p>
      {renderCards(experiences, "experience")}

      <p>Projects</p>
      {renderCards(projects, "project")}
    </div>
  );
}