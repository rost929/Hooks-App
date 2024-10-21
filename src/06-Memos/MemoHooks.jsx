import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Here we go");
  }
  return `${iterationNumber} iterations perfomed"`;
};

export const MemoHook = () => {
  const { increment, decrement, counter } = useCounter(4000);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>Memo Hook</h1>
      <hr />

      <h4>{memorizedValue}</h4>
      <h2>
        Counter : <small>{counter}</small>
      </h2>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {" "}
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
