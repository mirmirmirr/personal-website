import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import items from "../resources/portfolio.json";
import ImageGallery from "../components/ImageGallery";

export default function Portfolio() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative w-screen h-screen overflow-hidden">
      <Port containerRef={containerRef} images={items} />
    </section>
  );
}

const Port = ({ containerRef, images }) => {
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setCenter({
        x: width / 2 - 1250, // Half of container width minus half of Port width
        y: height / 2 - 1000, // Half of container height minus half of Port height
      });
    }
  }, []);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      initial={{ x: 0, y: 0 }}
      animate={{ x: center.x, y: center.y }}
      transition={{ duration: 1 }}
      className="w-[2500px] h-[2000px] absolute flex justify-center items-center"
    >
      <div className="flex items-center flex-col w-[75vw] max-w-[400px] text-center transition-all duration-700 ease-in-out">
        <p>Drag to Explore!</p>
        <h1 className="text-[30px] font-bold">Creative Works</h1>
        <div className="flex flex-col gap-2">
          <p>I love creating art in my free time.</p>
          <p>Although I don't have much time to draw anymore, I still try to find ways to stay connected to my creative side.</p>
          <p>Whether it be creating club logos are designing posters and graphics, I love creating things.</p>
        </div>
      </div>

      <ImageGallery items={images.art} />
    </motion.div>
  );
};
