import { actionTypes } from "./actionTypes";

// action to fetch list of todos
export const fetchTodos = (todos) => ({
    type: actionTypes.FETCH_TODOS,
    todos
});

// action to add a new todo
export const addNewTodo = (title) => ({
    type: actionTypes.ADD_TODO,
    title
});

// action to toggle todo
export const toggleTodoItems = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id
});

// action to remove todo
export const removeTodoItem = (id) => ({
    type: actionTypes.REMOVE_TODO,
    id
});

// action to filter todo
export const filterTodosList = (filter) => ({
    type: actionTypes.FILTER_TODOS,
    filter
});

