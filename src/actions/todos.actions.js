import { actionTypes } from "./actionTypes";

// action to fetch list of todos
export const fetchTodos = (todos) => ({
    type: actionTypes.FETCH_TODOS,
    todos
});

// action to add a new todo
export const addTodo = (title) => ({
    type: actionTypes.ADD_TODO,
    title
});

// action to toggle todo
export const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id
});

// action to remove todo
export const removeTodo = (id) => ({
    type: actionTypes.REMOVE_TODO,
    id
});

// action to filter todo
export const filterTodos = (filter) => ({
    type: actionTypes.FILTER_TODOS,
    filter
});

