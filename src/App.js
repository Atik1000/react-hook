import React from 'react';
import "./App.css";
import HookCounter from './components/UseEffect/HookCounter';
import MouseContainer from './components/UseEffect/MouseContainer';

const App = () => {
  return (
    <div className="App">
   <HookCounter/>
 <MouseContainer/>
    </div>
  );
};

export default App;