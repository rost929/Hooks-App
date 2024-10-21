import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  const handleNewTodo = (todo) => {
    dispatchTodo({
      type: "[TODO] Add Todo",
      payload: todo,
    });
  };

  const handleRemoveTodo = (todo) => {
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: todo,
    });
  };

  const handleToggleTodo = (todo) => {
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: todo,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const pendings = todos.filter((todo) => todo.done === false).length;

  return {
    todos,
    pendings,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo
  };
};
