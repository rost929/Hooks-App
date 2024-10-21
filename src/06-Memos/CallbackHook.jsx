import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const [show, setShow] = useState(true);

  const increment = useCallback(
    () => {
        console.log("SetCounter", counter + 1);
        setCounter((value) => value + 1);
    },
    [counter],
  )
  

  /* const incrementFather = () => {
    
  }; */

  return (
    <>
      <h1>usecallback Hook: {counter} </h1>
      <hr />

      <ShowIncrement increment={increment} />
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        {" "}
        Show/Hide {JSON.stringify(show)}
      </button>
   </>
  );
};
