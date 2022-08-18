const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        name: action.name,
        done: action.done
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state;
                
      return {
        ...state,
        done: !state.done,
        wasToggled: true
      };

    default:
      return state;
  }
};

export default todo; 