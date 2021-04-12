import React, { useState } from "react";
import "../02-useEffect/effects.css";
import { useCounter } from "../../Hooks/useCounter";
import { Small } from "./Small";
export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Memorize</h1>
      <hr />

      <h2>
        Counter: <Small value={counter} />
      </h2>

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
