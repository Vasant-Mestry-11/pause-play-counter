import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // increment count on each second

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // reset the counter

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter Application</h1>

      <p>Count: {count}</p>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
