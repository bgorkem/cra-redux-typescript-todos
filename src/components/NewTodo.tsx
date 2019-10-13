import React, { Fragment, useRef } from 'react';
import './NewTodo.css';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../store/actions';

import uniqueId from 'lodash.uniqueid';


export const NewTodo = () => {
  const dispatch = useDispatch();
  const inputEl = useRef<HTMLInputElement>(null);

  const onAddClick = () => {
    if (inputEl !== null && inputEl.current !== null) {
      const input = inputEl.current;
      dispatch(addTodoAction({ id: uniqueId('td-'), text:input.value, completed: false }))
      input.value= '';
    }
  };

  return (
    <Fragment>
      <div className="newTodo">
        <input ref={inputEl} placeholder="enter new todo" type="text" name="text" id="text" />
        <button onClick={onAddClick}>Add </button>
      </div>
    </Fragment>
  )
};