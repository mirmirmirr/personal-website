import { useRef } from "react";
import items from "../resources/portfolio.json";
import { motion } from "framer-motion";
import ImageGallery from "../components/ImageGallery";

export default function Portfolio() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef} 
      className="relative max-h-screen place-items-center"
    >
      <Port containerRef={containerRef} images={items}/>
    </section>
  );
}

const Port = ({ containerRef, images }) => {
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      className="w-[2500px] h-[1500px] relative place-items-center"
    >

      <div className="flex items-center flex-col w-[400px] pt-16 text-center">
        <p>Drag to Explore!</p>
        <h1 className="text-[30px] font-[700]">Creative Works</h1>
        <p>I used to love creating art, especially drawing. I don't have a lot of time to do it now, but when I can I still try to keep in touch with my creative side.</p>
      </div>

      <ImageGallery items={images.all} dimensions={[900, 10, 1000, 10]} />
      <ImageGallery items={images.logos} dimensions={[500, 10, 1100, 1200]} />
      <ImageGallery items={images.hackrpi} dimensions={[650, 600, 1000, 1200]} />
      
    </motion.div>
  );
}