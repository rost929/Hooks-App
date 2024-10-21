import { useState } from "react";

export const useForm = (initialForm = {}) => {
const [formState, setFormState] = useState(initialForm);

  const onResetForm = () => {
    setFormState({
      ...initialForm,
    });
  };

  const onCapitalizeInput = () => {
    const values = Object.entries(formState).map(([key, value]) => [key, value.toUpperCase()]);
    setFormState(Object.fromEntries(values))
  }

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    //const capitilize = value.toUpperCase();
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onCapitalizeInput
  };
};

/* {
    username: "",
    email: "",
    password: "",
  } */
