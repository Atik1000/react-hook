import React, { useState } from "react";
import "./App.css";
import CountCounrter from "./CountCounrter";
import CountFunction from "./CountFunction";
import TestCount from "./useReducer/text";



const App = () => {
  const [count,setCount]=useState()
  return (
    <div className="App">
      {/* <TestCount/> */}
      <CountCounrter count={count}/>
      <CountFunction setCount={setCount}/>

    </div>
  );
};

export default App;
