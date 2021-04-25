import React, { useState, useCallback } from "react";
import "../02-useEffect/effects.css";
import { ShowIncrement } from "./ShowIncrement";
export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );
  return (
    <div>
      <h1>useCallback Hook</h1>
      <hr />
      <p>
        Counter: <small>{counter}</small>
      </p>
      <ShowIncrement increment={increment} />
    </div>
  );
};
