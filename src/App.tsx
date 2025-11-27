import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const [pausedCounter, setPausedCounter] = useState<null | number>(null);

  // increment count on each second
  useEffect(() => {
    if (pausedCounter) {
      return;
    }
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [pausedCounter]);

  // reset the counter
  const handleReset = () => {
    setCount(0);
  };

  // pause counter
  const handlePause = () => {
    setPausedCounter(count);
  };

  // continue counter
  const handleContinue = () => {
    setPausedCounter(null);
  };

  return (
    <div>
      <h1>Counter Application</h1>

      <p>Count: {count}</p>

      <button onClick={handleContinue}>Continue</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
