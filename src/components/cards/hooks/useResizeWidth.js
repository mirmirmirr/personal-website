import { useState, useEffect } from "react";

export default function useResizeWidth(ref) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return width;
}
