import React, { useRef } from "react";

export const Component = ({ items }) => {
  const itemsEls = useRef(new Array());
  return (
    <div>
      {items.map((item, index) => {
        const getRef = (element) => itemsEls.current.push(element);
        // console.log(itemsEls)
        return (
          <p key={index} ref={getRef}>
            {item.title}
          </p>
        );
      })}
    </div>
  );
};
