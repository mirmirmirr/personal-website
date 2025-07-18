import { useEffect, useRef } from "react";

export default function useOutsideClick(ref, handler) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      savedHandler.current(event);
    };

    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [ref]);
}
