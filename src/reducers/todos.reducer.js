import { v4 } from "uuid";
import { actionTypes } from "../actions/actionTypes";

export const todosReducer = (state=[], action) => {
    switch(action.type) {
        case actionTypes.FETCH_TODOS:
            return action.todos;
        case actionTypes.ADD_TODO:
            const newTodo = {
                id: v4(),
                title: action.title,
                completed: false
              };
            return [newTodo, ...state];
        case actionTypes.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            },[]);
            default:
                return state;
    }
}