import React, { useState } from "react";

export const CounterApp = () => {
  const [state , setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  const increment = () =>
    setCounter({
        ...state,
      counter1: counter1 + 1
    });
  const decrement = () =>
    setCounter({
        ...state,
      counter1: counter1 + 1
    });

  return (
    <>
      <h1>Counter</h1>
      <hr />
      <div>Counter1: {counter1}</div>
      <div>Counter2: {counter2}</div>
      <div>Counter3: {counter3}</div>

      <button className="btn" onClick={increment}>
        +1
      </button>
      <button className="btn" onClick={decrement}>
        -1
      </button>
    </>
  );
};
