export const LOGIN_ACTION = 'LOGIN_ACTION';

export interface LoginActionType {
  type: typeof LOGIN_ACTION;
  payload: {
    user: string;
  };
}

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';

export interface AddTodoActionType {
  type: typeof ADD_TODO_ACTION;
  payload: {
    todo: Todo;
  };
}

export const TOGGLE_TODO_ACTION='TOGGLE_TODO_ACTION';

export interface ToggleTodoActionType {
  type: typeof TOGGLE_TODO_ACTION;
  payload: {
    todoId: string
  }
}

export type SystemActions = AddTodoActionType | LoginActionType | ToggleTodoActionType;


export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type AppState = {
  user: string;
  todos: Todo[];
};

