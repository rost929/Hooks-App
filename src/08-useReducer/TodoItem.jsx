import React from "react";

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${
            todo.done && "text-decoration-line-through"
          } w-25`}
        >
          {todo.description}
        </span>

        <div className="">
          <button
            className="align-self-center btn btn-outline-secondary border border-white "
            onClick={() => onToggleTodo(todo)}
          >
            {todo.done ? "uncheck" : "check"}
          </button>
        </div>

        {/* 
        {
 */}
        <button className="btn btn-danger" onClick={() => onRemoveTodo(todo)}>
          Delete
        </button>
      </li>
    </>
  );
};
