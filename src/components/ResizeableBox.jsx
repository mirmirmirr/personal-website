import React, { useRef } from "react";
import { Rnd } from "react-rnd";
import { cn } from "../resources/utils";

export default function ResizableBox({
  x,
  y,
  width,
  height,
  children,
  dragging = true,
}) {
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
      <div
        className="absolute h-[15px] w-[15px] border-2 border-highlight-blue bg-background-light dark:bg-background-dark"
        style={{ top: -8, left: -8 }}
      ></div>
      <div
        className="absolute h-[15px] w-[15px] border-2 border-highlight-blue bg-background-light dark:bg-background-dark"
        style={{ top: -8, right: -8 }}
      ></div>
      <div
        className="absolute h-[15px] w-[15px] border-2 border-highlight-blue bg-background-light dark:bg-background-dark"
        style={{ bottom: -8, left: -8 }}
      ></div>
      <div
        className="absolute h-[15px] w-[15px] border-2 border-highlight-blue bg-background-light dark:bg-background-dark"
        style={{ bottom: -8, right: -8 }}
      ></div>
    </Rnd>
  );
}
