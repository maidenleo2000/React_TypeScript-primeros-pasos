import React, { useState } from "react";
import "./ItemCounter.css";

interface Props {
  name: string;
  //   quantity: number | undefined;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  //   const handleClick = () => {
  //     console.log(`click ${name}`);
  //   };

  return (
    <>
      {/* <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
        }}
      > */}
      <section className="item-row">
        {/* <span
          style={{
            width: 150,
            color: count === 1 ? "red" : "black",
          }}
        > */}

        <span
          className="item-text"
          style={{ color: count === 1 ? "red" : "black" }}
        >
          {name}
        </span>
        <button
          onMouseEnter={() => {
            console.log(`Mouse Enter ${name}`);
          }}
          //   onClick={() => {
          //     console.log(`click ${name}`);
          //     // console.log(event);
          //   }}
          onClick={handleAdd}
        >
          +1
        </button>
        <span>{count}</span>
        <button onClick={handleSubstract}>-1</button>
      </section>
    </>
  );
};
