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
        x: width / 2 - 1000, // Half of container width minus half of Port width
        y: height / 2 - 1000, // Half of container height minus half of Port height
      });
    }
  }, []);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      initial={{ x: center.x, y: center.y }}
      animate={{ x: center.x, y: center.y }}
      transition={{ duration: 0.5 }}
      className="w-[2000px] h-[2000px] absolute flex justify-center items-center"
    >
      <div className="flex items-center flex-col w-[75vw] max-w-[400px] text-center">
        <p>Drag to Explore!</p>
        <h1 className="text-[30px] font-[700]">Creative Works</h1>
        <p>
          I used to love creating art, especially drawing. I don't have a lot of
          time to do it now, but when I can I still try to keep in touch with my
          creative side.
        </p>
      </div>

      <ImageGallery items={images.art} />
    </motion.div>
  );
};
