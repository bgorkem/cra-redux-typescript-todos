import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import { rootReducer } from './state';

// need to declare this as a global..
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

const logger: Middleware = store => next => action => {
  console.log('dispatching action', action);
  const result = next(action);
  console.log('after action', store.getState());
  return result;
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(logger));

export const store = createStore(rootReducer, undefined, enhancer);
