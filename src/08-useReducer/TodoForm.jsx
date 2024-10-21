import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoForm = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    id: 1,
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };

    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="What it has to do?"
          className="form-control"
          name="description"
          value={description}
          onChange={(e) => onInputChange(e)}
        />
        <button className="btn btn-outline-primary mt-2 w-25" type="submit">
          Add
        </button>
      </form>
    </>
  );
};
