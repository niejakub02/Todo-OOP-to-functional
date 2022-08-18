import { TaskList } from 'components';
import { buildElement } from "helpers";
import './styles.css';

const TaskGroup = ({ headline }) => {
  const element = buildElement({
    tag: 'section',
    classList: ['task-group'],
    children: [
      {
        tag: 'h2',
        textContent: headline,
      },
      {
        element: TaskList({ completed: headline.toLowerCase() === 'done' ? true : false }),
      },
    ],
  });

  return element;
};


export default TaskGroup;