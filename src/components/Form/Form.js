import { Button, Input } from 'components';
import { buildElement } from 'helpers';
import { store, todoActions } from 'store';
import './styles.css';

const onSubmit = e => {
  e.preventDefault();
  
  const form = e.currentTarget;
  const taskName = form.task.value.trim();

  if (!taskName) return;
  const task = {
    name: taskName,
    id: Math.random().toString(),
    done: false
  };

  store.dispatch(todoActions.addTodo(task));
  form.reset();
};

const Form = () => {
  const FormButton = Button({
    textContent: 'Add Task',
  });

  const FormInput = Input({
    name: 'task',
    type: 'text',
  });

  const element = buildElement({
    tag: 'form',
    classList: ['form'],
    listeners: [
      {
        event: 'submit',
        callback: onSubmit,
      },
    ],
    children: [
      {
        element: FormInput,
      },
      {
        element: FormButton,
      },
    ],
  });

  return element;
};

export default Form;