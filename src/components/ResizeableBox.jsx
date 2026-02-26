// src/components/ResizableBox.jsx
import { Rnd } from "react-rnd";

export default function ResizableBox({
  children,
  dragging = true,
  width = "100%",
  height = "80%",
}) {
  return (
    <Rnd
      disableDragging={!dragging}
      size={{ width, height }}
      style={{ position: "relative" }}
      className="border-2 border-blue md:pb-30"
    >
      <div>{children}</div>

      {/* Draggable corners */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map(
        (corner) => {
          const position = {
            "top-left": { top: -8, left: -8 },
            "top-right": { top: -8, right: -8 },
            "bottom-left": { bottom: -8, left: -8 },
            "bottom-right": { bottom: -8, right: -8 },
          }[corner];

          return (
            <div
              key={corner}
              className="bg-background-light dark:bg-background-dark absolute h-[15px] w-[15px] border-2 border-blue"
              style={position}
            ></div>
          );
        },
      )}
    </Rnd>
  );
}
