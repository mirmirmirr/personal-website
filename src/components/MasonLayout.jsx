import React from 'react';
import Masonry from 'react-masonry-css';
import { ImageCard } from './Cards';

import items from "../resources/portfolio.json";

export default function MasonLayout() {
  const allPieces = items[0].all;
  // console.log(allPieces)

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
      {allPieces.map((item, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded shadow-md">
          <ImageCard key={index} imageSrc={item.src} title={item.title} />
        </div>
      ))}
    </Masonry>
  );
}
