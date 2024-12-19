import React from 'react';
import Masonry from 'react-masonry-css';

export default function MasonryExample() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
  ];

  return (
    <Masonry
      breakpointCols={{ 
        default: 4, 
        1100: 3, 
        700: 2, 
        500: 1 
      }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded shadow-md">
          {item}
        </div>
      ))}
    </Masonry>
  );
}
