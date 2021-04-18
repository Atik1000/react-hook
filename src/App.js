import React from 'react';
import "./App.css";
import HookCounter from './components/HookCounter';
import HookCOunterTwo from './components/HookCOunterTwo';
import HookObj from './components/HookObj';

const App = () => {
  return (
    <div className="App">
      <HookCounter/>
      <HookCOunterTwo/>
      <HookObj/>
    </div>
  );
};

export default App;