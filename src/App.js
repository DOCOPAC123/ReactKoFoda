import './App.css';
import ClassCounter from "./components/useState/ClassCounter"
import HooksClassCounter from "./components/useState/HooksClassCounter"
import HooksClassCounterTwo from "./components/useState/HooksClassCounterTwo";
import HooksClassCounterThree from "./components/useState/HooksClassCounterThree";

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HooksClassCounter/>
      <br/>
      <p>Hooks Counter Example 2</p>
      <HooksClassCounterTwo/>

      <p>Hooks Counter Example 3</p>
      <HooksClassCounterThree/>
    </div>
  );
}

export default App;
