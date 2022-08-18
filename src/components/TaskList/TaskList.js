import { Task } from 'components';
import { buildElement } from 'helpers';
import { store, todoActions } from 'store';
import './styles.css';

const TaskList = ({ completed }) => {
  let tasks;

  const element = buildElement({
    tag: 'ul',
    classList: ['task-list'],
  });

  const dragOverHandler = (e) => {
    if (e.dataTransfer) {
      e.preventDefault();
      element.classList.add('droppable');
    }
  };
  
  const dragLeaveHandler = () => {
    element.classList.remove('droppable');
  };
  
  const dropHandler = e => {
    const droppedId = e.dataTransfer.getData('text/plain');
    if (tasks.find(({ id }) => id === droppedId)) return;
    store.dispatch(todoActions.toggleTodo(droppedId));
  };
  
  const updateList = () => {
    const { todos } = store.getState();
    tasks = todos.filter(({ done }) => done === completed);
    element.replaceChildren();
    tasks.forEach(({ id, name, done, wasToggled }) => {
      const task = Task({ name, id, dispatch: store.dispatch });
      element.append(task);
      if (wasToggled) {
        !done && task.classList.add('done');
        setTimeout(() => {
          done ? task.classList.add('done') : task.classList.remove('done');
        }, 0);
      }
    });
  };
  
  element.addEventListener('dragover', dragOverHandler);
  element.addEventListener('dragleave', dragLeaveHandler);
  element.addEventListener('drop', dropHandler);

  store.subscribe(updateList);

  return element;
};

export default TaskList;