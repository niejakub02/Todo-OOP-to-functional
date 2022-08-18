const todoActions = {
  addTodo: (todo) => ({
    type: 'ADD_TODO',
    name: todo.name,
    id: todo.id,
    done: todo.done
  }),

  toggleTodo: (id) => ({
    type: 'TOGGLE_TODO',
    id: id
  }),

  deleteTodo: (id) => ({
    type: 'DELETE_TODO',
    id: id
  }),
};

export default todoActions;