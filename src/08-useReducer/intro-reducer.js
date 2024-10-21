
const initialstate = [{
    id: 1,
    todos: "Collect soul stone",
    done: false
}];


const todoReducer = (state = initialstate, action) => {

    return state;
}

const todos = todoReducer();

console.log(todos);