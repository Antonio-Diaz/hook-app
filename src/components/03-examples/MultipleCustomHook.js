import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";
export const MultipleCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; // Validate if exist the data then return data position zero
  return (
    <div>
      <h1>BreakingBad quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">...loading</div>
      ) : (
        <blockquote className="blockquote text-center">
          <p className="mb-2"> {quote} </p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={decrement}>
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
