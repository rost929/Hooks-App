export const todoReducer = (state, action) => {
  console.log("state", state);
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...state, action.payload];

    case "[TODO] Remove Todo":
      return state.filter((todo) => todo.id != action.payload.id);

    case "[TODO] Toggle Todo":
        console.log(action.payload.id);
        return state.map(todo => {
            if (todo.id === action.payload.id) {
                todo.done =  !todo.done;
            }
            return todo;
        })
    default:
      return state;
  }
};