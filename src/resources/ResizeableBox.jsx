import React from "react";
import { Rnd } from "react-rnd";

export default function ResizableBox({ defaultWidth, defaultHeight, children }) {
  return (
    <Rnd
      default={{
        x: 100,
        y: 50,
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
    <div className="p-4 flex flex-col items-start justify-center">{children}</div>

      {/* Add draggable corners */}
      <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ top: -8, left: -8 }}></div>
      <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ top: -8, right: -8 }}></div>
      <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ bottom: -8, left: -8 }}></div>
      <div className="absolute w-[15px] h-[15px] bg-white border-2 border-[#3395ff]" style={{ bottom: -8, right: -8 }}></div>
    </Rnd>
  );
}
