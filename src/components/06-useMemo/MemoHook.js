import React, { useState, useMemo } from "react";
import "../02-useEffect/effects.css";
import { useCounter } from "../../Hooks/useCounter";
export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const heavyProcess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
      console.log("Ahi vamos...");
    }
    return `${iterations} iterations done`;
  };
  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);
  return (
    <div>
      <h1>MemoHook</h1>
      <hr />
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <p>{memoHeavyProcess}</p>
      <button onClick={increment} className="btn btn-outline-primary">
        +1
      </button>
      <button
        className="btn btn-secondary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hidden" : "show"} {JSON.stringify(show)}
      </button>
    </div>
  );
};
