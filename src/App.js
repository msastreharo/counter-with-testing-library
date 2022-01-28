import './App.css';
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const counterIncrease = () => {
      setCounter(counter + 1);
      if (counter >= 10) {
          setCounter(0);
      }
  }


  return (
    <div className="App">
      <button onClick={counterIncrease} data-testid='counterBtn'>Click me!</button>
      <h1 data-testid='counter'>{counter}</h1>
    </div>
  );
}

export default App;
