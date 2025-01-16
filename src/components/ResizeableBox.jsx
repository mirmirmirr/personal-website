import React from "react";
import { Rnd } from "react-rnd";

export default function ResizableBox({ children }) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  return (
    <Rnd
      default={{
        x: -20,
        y: vh * 0.1,
        width: Math.min(vw * 0.8, 1000),
        height: Math.min(vh * 0.5, 400),
      }}
      minWidth={50}
      minHeight={50}
      style={{
        border: "2px solid #3395ff",
        borderRadius: "4px",
        position: "relative",
      }}
    >
    <div>{children}</div>

      {/* Add draggable corners */}
      <div className="absolute w-[15px] h-[15px] bg-backgroundLight dark:bg-backgroundDark border-2 border-[#3395ff]" style={{ top: -8, left: -8 }}></div>
      <div className="absolute w-[15px] h-[15px] bg-backgroundLight dark:bg-backgroundDark border-2 border-[#3395ff]" style={{ top: -8, right: -8 }}></div>
      <div className="absolute w-[15px] h-[15px] bg-backgroundLight dark:bg-backgroundDark border-2 border-[#3395ff]" style={{ bottom: -8, left: -8 }}></div>
      <div className="absolute w-[15px] h-[15px] bg-backgroundLight dark:bg-backgroundDark border-2 border-[#3395ff]" style={{ bottom: -8, right: -8 }}></div>
    </Rnd>
  );
}
