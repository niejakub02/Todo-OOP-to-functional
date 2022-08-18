import initialState from "../initialState";

const themes = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        todos: [...state.todos],
        themes: !state.themes
      };

    default:
      return state;
  }
};

export default themes;