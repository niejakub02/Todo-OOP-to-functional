const combineReducers = (...reducers) => {
  return (state, payload) => {
    return reducers.reduce((prevState, reducer) => {
      return reducer(prevState, payload);
    }, state);
  };
};

export default combineReducers;