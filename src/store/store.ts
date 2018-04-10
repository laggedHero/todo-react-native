import { createStore, combineReducers } from 'redux';
import * as Action from '../actions/actions';

export interface Todo {
    readonly id: String;
    readonly text: String;
    readonly completed: boolean;
}

const todo = (state: Todo, action: Action.Action) => {
    if (Action.isAddTodoAction(action)) {
        return {
            id: action.id,
            text: action.text,
            completed: false
        };
    }
    if (Action.isToggleTodoAction(action)) {
        if (state.id !== action.id) {
            return state;
        }

        return {
            ...state,
            completed: !state.completed
        };
    }
    return state;
};

const todos = (state: Todo[] = [], action: Action.Action) => {
    if (Action.isAddTodoAction(action)) {
        return [...state, todo(undefined, action)];
    }
    if (Action.isToggleTodoAction(action)) {
        return state.map((t) => todo(t, action));
    }
    return state;
};

const visibilityFilter = (state = 'SHOW_ALL', action: Action.Action) => {
    if (Action.isSetVisibilityFilterAction(action)) {
        return action.filter;
    };
    return state;
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default createStore(todoApp);