import './App.css';
import React from "react";
import ClassCounter from "./components/useState/ClassCounter"
import HooksClassCounter from "./components/useState/HooksClassCounter"
import HooksClassCounterTwo from "./components/useState/HooksClassCounterTwo";
import HooksClassCounterThree from "./components/useState/HooksClassCounterThree";
import ClassCounterOne from "./components/useEffect/ClassCounterOne";
import HooksCounterOne from "./components/useEffect/HooksCounterOne";

export const UserContext = React.createContext();
export const ProjectContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Rohit">
        <ProjectContext.Provider value="Coding ki Marli">
          <p>Hooks Counter Example 3</p>
          <HooksClassCounterThree/>
        </ProjectContext.Provider>
      </UserContext.Provider>
      {/* <ClassCounterOne/> */}
      <HooksCounterOne/>
    </div>
  );
}

export default App;
