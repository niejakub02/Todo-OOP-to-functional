import todo from "./todoReducer";
import initialState from "../initialState";

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          todo({}, action)
        ],
        themes: state.themes
      };

    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(t => todo(t, action)),
        themes: state.themes
      };

    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(t => (t.id !== action.id)),
        themes: state.themes
      };

    case 'SET_TODO_STATE':
      return {
        todos: state.todos.map(t => todo(t, action)),
        themes: state.themes
      };

    case 'COPY_TODO':
      return {
        todos: [
          ...state.todos,
          todo(state.todos, action)
        ],   
        themes: state.themes
      };

    default:
      return state;
  }
};

export default todos; 