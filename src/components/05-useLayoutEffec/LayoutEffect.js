import React, { useLayoutEffect, useRef } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "./LayoutEffect.css";
export const LayoutEffect = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0]; // Validate if exist the data then return data position zero
  const pTag = useRef();
  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-2">
          {quote}
        </p>
      </blockquote>
      <button
        className="btn btn-primary"
        onClick={decrement} 
        disabled={counter === 1 ? true : false}
      >
        previous Quote
      </button>
      <button className="btn btn-primary" onClick={reset}>
        reset
      </button>
      <button className="btn btn-primary" onClick={increment}>
        next Quote
      </button>
    </div>
  );
};
