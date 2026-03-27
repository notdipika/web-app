import { useState } from "react";
import "./Counter.css";

export default function Counter() 
{
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter</h2>

      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
