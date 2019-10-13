import { LoginActionType, AddTodoActionType, LOGIN_ACTION, ADD_TODO_ACTION, Todo, ToggleTodoActionType, TOGGLE_TODO_ACTION } from "./types";

export function loginAction(user: string): LoginActionType {
  return {
    type: LOGIN_ACTION,
    payload: {
      user
    }
  };
}


export function addTodoAction(todo: Todo): AddTodoActionType {
  return {
    type: ADD_TODO_ACTION,
    payload: {
      todo
    }
  };
}

export function toggleTodo(todoId: string):ToggleTodoActionType {
  return {
    type: TOGGLE_TODO_ACTION,
    payload: {
      todoId
    }
  };
}