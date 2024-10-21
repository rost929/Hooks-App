import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useTodo } from "../hooks";

export const TodoApp = () => {

  const {
    todos,
    pendings,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp (10) <small> Pendings: {pendings} </small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoForm onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
