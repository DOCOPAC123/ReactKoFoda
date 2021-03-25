import './App.css';
import ClassCounter from "./components/useState/ClassCounter"
import HooksClassCounter from "./components/useState/HooksClassCounter"
import HooksClassCounterTwo from "./components/useState/HooksClassCounterTwo";
import HooksClassCounterThree from "./components/useState/HooksClassCounterThree";
import ClassCounterOne from "./components/useEffect/ClassCounterOne";
import HooksCounterOne from "./components/useEffect/HooksCounterOne";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne/> */}
      <HooksCounterOne/>
    </div>
  );
}

export default App;
