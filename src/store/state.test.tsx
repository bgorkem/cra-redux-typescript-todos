import { rootReducer } from './state';
import { loginAction, addTodoAction, toggleTodo } from './actions';
import { Todo } from './types';

it('handles login action', () => {
  const currentState = { user: '', todos: [] };
  const newState = rootReducer(currentState, loginAction('bulent'));
  expect(newState.user).toEqual('bulent');
})

it('appends a new todo to the state', () => {
  const todos = [{ id: '1', text: "put the bin out", completed: false }];
  const currentState = { user: '', todos };
  const newTodo: Todo = { id: '2', text: "do the washing up", completed: false };
  const newState = rootReducer(currentState, addTodoAction(newTodo));
  expect(newState.todos.pop()).toEqual(newTodo);
})

it('toggles an existing todo item, changes the todos', ()=>{
  const todos = [
    { id: '1', text: "put the bin out", completed: false },
    { id: '2', text: "iron the shirts", completed: false }
  ];
  const currentState = { user: '', todos };

  const newState = rootReducer(currentState, toggleTodo('2'));
  expect(newState.todos[1].completed).toBe(true);
  expect(newState.todos).not.toEqual(currentState.todos);
})

it('handles non-existing todo item', ()=>{
  const todos = [
    { id: '1', text: "put the bin out", completed: true },
    { id: '2', text: "iron the shirts", completed: false }
  ];
  const currentState = { user: '', todos };

  const newState = rootReducer(currentState, toggleTodo('3'));
  expect(newState.todos).toEqual(currentState.todos);
})