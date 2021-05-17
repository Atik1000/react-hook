import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
        return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return {...state,firstCounter:state.firstCounter-action.value}
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const TestCount = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count ={count.firstCounter}</h1>
      <button onClick={() => dispatch({type:"increment",value:5})}>Increment</button>
     
      <button onClick={() => dispatch({type:"decrement",value:1})}>Decrement</button>
      <button onClick={() => dispatch({type:"reset"})}>Reset</button>
    </div>
  );
};

export default TestCount;
