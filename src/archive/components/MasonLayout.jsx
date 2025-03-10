import React from 'react';
import Masonry from 'react-masonry-css';
import ImageCard from '../../components/cards/ImageCard';
import { useState, useEffect } from 'react';

const MasonLayout = React.memo(({ items }) => {
  const calculateBreakpoints = () => {
    const screenWidth = window.innerWidth;

    // Calculate the number of columns ensuring each column is <= 300px
    const columns = Math.floor(screenWidth / 300);

    return {
      default: 4,
      1100: Math.min(4, Math.floor(1100 / 300)),
      700: Math.min(4, Math.floor(700 / 300)),
      500: Math.min(1, 1),
    };
  };

  const [breakpointCols, setBreakpointCols] = useState(calculateBreakpoints());

  useEffect(() => {
    const handleResize = () => setBreakpointCols(calculateBreakpoints());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded shadow-md">
          <ImageCard key={index} imageSrc={item.src} title={item.title} />
        </div>
      ))}
    </Masonry>
  );
});

export default MasonLayout;
