import React from 'react';
import Masonry from 'react-masonry-css';
import { ImageCard } from './Cards';

import Bread16 from '../assets/images/Bread16.jpg';
import cookiesofFortune from "../assets/images/cookiesOfFortune.jpg";
import pursuitOfHappiness from "../assets/images/pursuitOfHappiness.jpg";
import rescuedBananas from "../assets/images/rescuedBa-Na-Nas.jpg";
import onlyPickFive from "../assets/images/onlyPickFive.png";

export default function MasonLayout() {
  const items = [
    { src: Bread16, title: "Bread16" },
    { src: cookiesofFortune, title: "Cookies of Fortune"},
    { src: pursuitOfHappiness, title: "Pursuit of Happiness" },
    { src: rescuedBananas, title: "Rescused Ba Na Nas" },
    { src: onlyPickFive, title: "only pick 5"},
  ];

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
