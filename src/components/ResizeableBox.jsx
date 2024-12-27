import React from "react";
import { Rnd } from "react-rnd";

export default function ResizableBox({ defaultWidth, defaultHeight, x, y, children }) {
  return (
    <Rnd
      default={{
        x: x,
        y: y,
        width: defaultWidth,
        height: defaultHeight,
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
      <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ top: -8, left: -8 }}></div>
      <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ top: -8, right: -8 }}></div>
      <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ bottom: -8, left: -8 }}></div>
      <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ bottom: -8, right: -8 }}></div>
    </Rnd>
  );
}
