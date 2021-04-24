import React from "react";
import "./App.css";
import ComponentC from "./components/UseContext/ComponentC";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const App = () => {
  return (
    <div className="App">
      <UserContext.Provider value={"Atik"}>
        <ChannelContext.Provider value={'21'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
