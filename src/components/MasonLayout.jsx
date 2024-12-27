import React from 'react';
import Masonry from 'react-masonry-css';
import { ImageCard } from './Cards';

export default function MasonLayout({ items }) {

  const calculateBreakpoints = () => {
    const screenWidth = window.innerWidth;

    // Calculate the number of columns ensuring each column is <= 300px
    const columns = Math.floor(screenWidth / 300);

    return {
      default: columns,
      1100: Math.min(columns, Math.floor(1100 / 300)),
      700: Math.min(columns, Math.floor(700 / 300)),
      500: Math.min(columns, 1),
    };
  };

  // Get the calculated breakpoints
  const breakpointCols = calculateBreakpoints();

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
}
