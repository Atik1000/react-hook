import React from "react";

const CountFunction = ({ setCount }) => {

  return (
    <div>
      <button onClick={()=>setCount('Atik')}>Increment</button>
    </div>
  );
};

export default CountFunction;
