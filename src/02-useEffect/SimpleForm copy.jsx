import React, { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Juan",
    email: "juamps16@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target}) => {
    const { name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    console.log("useEffect called");
  }, [])

  useEffect(() => {
    console.log("formState change");
  }, [formState])

  useEffect(() => {
    console.log("email change");
  }, [email])
  

  return (
    <>
      <h1>Simple Form</h1>
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
    </>
  );
};
