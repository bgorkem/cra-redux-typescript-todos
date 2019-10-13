import React from 'react';
import './App.css';

import { store } from './store';
import {TodoList} from './components/TodoList';
import {NewTodo} from './components/NewTodo';
import UserLogin from './components/UserLogin';

import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <UserLogin/>
        </header>
        <TodoList/>
         <NewTodo/>
      </div>
    </Provider>
  );
}

export default App;
