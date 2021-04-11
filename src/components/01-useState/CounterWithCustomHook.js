import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import "./Counter.css";

export const CounterWithCustomHook = () => {
  const { decrement, increment, state, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with Customer Hook: {state} </h1>
      <hr />

      <button onClick={() => increment(2)} className="btn btn-primary">
        +1
      </button>

      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>

      <button onClick={() => decrement(2)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
