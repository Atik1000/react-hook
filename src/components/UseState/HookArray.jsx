import React, { useState } from "react";

const HookArray = () => {
  const [number, setNumber] = useState([]);
  const addItem = () => {
    setNumber([
      ...number,
      {
        id: number.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      {number.map((num) => (
        <li key={num.id}>{num.value}</li>
      ))}
      <button onClick={addItem}>Add me Item</button>
    </div>
  );
};

export default HookArray;
