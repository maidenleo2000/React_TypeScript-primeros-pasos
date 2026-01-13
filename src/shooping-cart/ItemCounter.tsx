import React from "react";

interface Props {
  name: string;
}

export const ItemCounter = ({ name }: Props) => {
  return (
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        <span
          style={{
            width: 150,
          }}
        >
          {name}
        </span>
        <button>+1</button>
        <span>10</span>
        <button>-1</button>
      </section>
    </>
  );
};
