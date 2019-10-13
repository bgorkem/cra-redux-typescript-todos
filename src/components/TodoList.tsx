import React from 'react';

import { AppState } from '../store/types';
import { useSelector, useDispatch } from 'react-redux';

import { Todo } from '../store/types';
import { toggleTodo } from '../store/actions';

import './TodoList.css';


const List = ({ todos, toggle }: { todos: Todo[], toggle: (todoId: string) => any }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <input type='checkbox' checked={todo.completed} onChange={() => { toggle(todo.id) }}></input>
        {`${todo.text}`}
      </li>
    ))}
  </ul>
);


export const TodoList = () => {
  let todos = useSelector((state: AppState) => state.todos)
  let dispatch = useDispatch();
  console.log('todos', todos);
  return (
    <List todos={todos} toggle={(todoId: string) => { dispatch(toggleTodo(todoId)) }} />
  )
}
