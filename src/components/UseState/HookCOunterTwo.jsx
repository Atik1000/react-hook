import React, { useState } from "react";

const HookCOunter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 1; i <= 5; i++) {
     setCount(pre=>pre+1)
    
    }
  };
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(pre=>pre + 1)}>Increment</button>
      <button onClick={() => setCount(count=>count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment Five</button>
    </div>
  );
};

export default HookCOunter;
