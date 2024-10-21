import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef);
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>

      <hr />

      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="fill out your name"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>Set focus</button>
    </>
  );
};
