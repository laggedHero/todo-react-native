import { v4 } from 'uuid';

export interface Action {
    readonly type: String;
}

export interface AddTodoAction extends Action {
    readonly id: String;
    readonly text: String;
}

export function isAddTodoAction(object: any): object is AddTodoAction {
    return 'type' in object && object.type === 'ADD_TODO';
}

export interface ToggleTodoAction extends Action {
    readonly id: String;
}

export function isToggleTodoAction(object: any): object is ToggleTodoAction {
    return 'type' in object && object.type === 'TOGGLE_TODO';
}

export interface SetVisibilityFilterAction extends Action {
    readonly filter: String;
}

export function isSetVisibilityFilterAction(object: any): object is SetVisibilityFilterAction {
    return 'type' in object && object.type === 'SET_VIBILITY_FILTER';
}

export const addTodo = (text: String): AddTodoAction => ({
    type: 'ADD_TODO',
    id: v4(),
    text
});

export const toggleTodo = (id: String): ToggleTodoAction => ({
    type: 'TOGGLE_TODO',
    id
});

export const setVisibilityFilter = (filter: String): SetVisibilityFilterAction => ({
    type: 'SET_VIBILITY_FILTER',
    filter
});