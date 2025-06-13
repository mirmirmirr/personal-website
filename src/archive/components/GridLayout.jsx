import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ImageCard from "../../components/cards/ImageCard";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const MasonLayout = React.memo(({ items }) => {
  const breakpoints = { lg: 900, md: 768, sm: 480 };
  const cols = { lg: 4, md: 2, sm: 1 };
  const rowHeight = 10;

  // State to store item heights
  const [itemHeights, setItemHeights] = useState({});

  // Handle height change from child component (ImageCard)
  const handleHeightChange = (index, height) => {
    setItemHeights((prevHeights) => ({
      ...prevHeights,
      [index]: Math.ceil(height / rowHeight), // Store height in grid units
    }));
  };

  // Generate layouts dynamically with measured heights
  const generateLayouts = () => {
    const layouts = { lg: [], md: [], sm: [] };
    console.log(itemHeights);
    items.forEach((item, index) => {
      const itemHeightInRows = itemHeights[index] || 10; // Default to 10 rows if not measured yet

      ["lg", "md", "sm"].forEach((size) => {
        layouts[size].push({
          i: index.toString(),
          x: index % cols[size],
          y: Math.floor(index / cols[size]) * itemHeightInRows,
          w: 1,
          h: 30, // Use dynamically calculated height
        });
      });
    });

    return layouts;
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={generateLayouts()}
      breakpoints={breakpoints}
      cols={cols}
      rowHeight={rowHeight}
      isDraggable={true}
      isResizable={true}
    >
      {items.map((item, index) => (
        <div key={index} className="rounded-sm bg-gray-200 p-4 shadow-md">
          <ImageCard
            imageSrc={item.src}
            title={item.title}
            onHeightChange={(height) => handleHeightChange(index, height)} // Pass the callback to ImageCard
          />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
});

export default MasonLayout;
