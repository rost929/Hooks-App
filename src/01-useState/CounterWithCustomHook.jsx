import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

  const { counter , increment, decrement, reset } = useCounter();
  
  const [inputValue, setInputValue] = useState(1);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value, typeof Number(value));
    if(Number(value) > 100) {
      setInputValue(1);
      e.target.value = "";
      return;
    }
    setInputValue(Number(value))
  }
  
  return (
    <>
      <h1>Counter {counter} </h1>
      <hr />

      <input  className="input" type="number" onChange={(e) => handleChange(e)}/>
  
      <button className="btn btn-primary" onClick={() => increment(inputValue)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => decrement(inputValue)} >
        -1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
    </>
  );
};
