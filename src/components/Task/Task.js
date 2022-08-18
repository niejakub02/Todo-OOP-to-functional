import { Button } from 'components';
import { buildElement } from 'helpers';
import { todoActions } from 'store';
import './styles.css';

const Task = ({ name, id, dispatch }) => {
  const element = buildElement({
    tag: 'li',
    classList: ['task'],
    id,
    attributes: [
      {
        name: 'draggable',
        value: true,
      },
    ],
    children: [
      {
        tag: 'h3',
        textContent: name,
      },
      {
        element: Button({
          textContent: '',
          onClick: () => {
            dispatch(todoActions.deleteTodo(id));
            element.remove();
          },
          children: [
            {
              tag: 'i',
              textContent: 'close',
            },
          ],
        }),
      },
    ],
  });

  const dragStartHandler = (e) => {
    e.dataTransfer.setData('text/plain', element.id);
    e.dataTransfer.effectAllowed = 'move';
    element.classList.add('dragged');
  };
  
  const dragEndHandler = () => {
    element.classList.remove('dragged');
  };

  element.addEventListener('dragstart', dragStartHandler);
  element.addEventListener('dragend', dragEndHandler);

  return element;
};

export default Task;