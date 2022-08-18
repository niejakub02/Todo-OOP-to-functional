import todos from './reducers/todosReducer';
import themes from './reducers/themesReducer';
import combineReducers from './reducers/combineReducers';
import initialState from "./initialState";

const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => {
      listener(action);
    });
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const unsubscribe = (listener) => {
    listeners.filter(l => l !== listener);
  };

  const getState = () => {
    return state;
  };

  return { dispatch, subscribe, unsubscribe, getState };
};

const rootReducer = combineReducers(todos, themes);
const store = createStore(rootReducer, initialState);

export default store;
