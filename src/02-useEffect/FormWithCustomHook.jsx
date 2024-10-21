import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, onCapitalizeInput, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  useEffect(() => {
    console.log("formState change");
  }, [formState]);

  useEffect(() => {
    console.log("email change");
  }, [email]);

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => onInputChange(e)}
      />

      <input
        type="email"
        className="form-control mt-2"
        name="email"
        placeholder="mi.gordo.bello@gmail.com"
        value={email}
        onChange={(e) => onInputChange(e)}
      />

      <input
        type="password"
        className="form-control mt-2"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => onInputChange(e)}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
      <button className="btn btn-secondary mt-2" onClick={(e) => onCapitalizeInput(e)}>Capitalize</button>
    </>
  );
};
