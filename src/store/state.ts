import { AppState, SystemActions, ADD_TODO_ACTION, LOGIN_ACTION, TOGGLE_TODO_ACTION } from "./types";

/**
 * Default Application State, with empty user and todos
 */
const defaultState: AppState = {
  user: 'anonymous',
  todos: [ 
    {id:'todo-1', text:'put the bin out', completed :true },
    {id:'todo-2', text:'do the home work', completed :false }
  ]
};

/**
 * Root State Reducer
 * @param state current state of application
 * @param action action posted
 */
export const rootReducer = (
  state = defaultState,
  action: SystemActions
): AppState => {

  // add todo action
  if (action.type === ADD_TODO_ACTION) {
    const { todo } = action.payload;
    const todos = [...state.todos, todo];
    return { ...state, todos };
  }

  // login action
  if (action.type === LOGIN_ACTION) {
    const { user } = action.payload;
    return { ...state, user };
  }

  // complete todo action
  if (action.type === TOGGLE_TODO_ACTION) {
    const { todoId } = action.payload;
    const toUpdateId = state.todos.findIndex(todo => todo.id === todoId);

    if (toUpdateId > -1) {
      const todos = [...state.todos];
      const currentTodo= todos[toUpdateId];
      const updatedTodo = { ...currentTodo, completed: !currentTodo.completed };
      todos.splice(toUpdateId, 1, updatedTodo);
      return {...state, todos}
    }
  }
  return state;
};
