import { actionTypes } from "../actions/actionTypes";

export const filtersReducer = (state, action) => {
    switch(action.type) {
        case actionTypes.FILTER_TODOS:
            return action.filter;
        default:
            return state;
    }
}