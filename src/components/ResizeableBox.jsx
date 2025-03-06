import React, { useRef } from "react";
import { Rnd } from "react-rnd";
import { cn } from "../resources/utils";

export default function ResizableBox({ x, y, width, height, children, dragging=true}) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  return (
    <Rnd
      default={{
        x: x,
        y: y,
        width: width,
        height: height,
      }}
      disableDragging={!dragging}
      minWidth={50}
      minHeight={50}
      style={{
        border: "2px solid #3395ff",
        borderRadius: "4px",
        position: "relative",
      }}
      className="h-fit"
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
