import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { increment, decrement, counter } = useCounter(0);
  

  const [show, setShow] = useState(true)
  return (
    <>
      <h1>Memorize</h1>
      <hr />

      <h3>Counter : <Small value={counter}/></h3>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}> Show/Hide {JSON.stringify(show)}</button>
    </>
  );
};
