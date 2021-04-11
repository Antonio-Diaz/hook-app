import React, { useState } from "react";
import "../02-useEffect/effects.css";
import { MultipleCustomHook } from "../03-examples/MultipleCustomHook";
export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <h3>RealExampleRef</h3>
      <hr />
      {show && <MultipleCustomHook />}
      <button className="btn btn-primary mt-5" onClick={handleClick}>
        {show ? "hidden" : "show"}
      </button>
    </div>
  );
};
