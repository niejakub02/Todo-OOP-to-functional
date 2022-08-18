import { buildElement } from 'helpers';
import './index.css';

const Input = ({ name, type, onChange }) => {
  const element = buildElement({
    tag: 'label',
    textContent: `${name}:`,
    classList: ['input'],
    children: [
      {
        tag: 'input',
        listeners: [
          {
            event: 'change',
            callback: onChange,
          },
        ],
        attributes: [
          {
            name: 'name',
            value: name,
          },
          {
            name: 'type',
            value: type,
          },
        ],
      },
    ],
  });

  return element;
};

export default Input;