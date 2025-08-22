import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount((currCount) => {
      return currCount + 5;
    });
    setCount((currCount) => {
      return currCount + 5;
    });
    setCount((currCount) => {
      return currCount + 5;
    });
  };

  return (
    <div>
      <h3>Count={count}</h3>
      <button onClick={incCount}>Increse Count</button>
    </div>
  );
}
