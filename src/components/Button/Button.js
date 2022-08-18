import { buildElement } from 'helpers';
import './styles.css';

const Button = ({ textContent, onClick, children }) => {
  const element = buildElement({
    tag: 'button',
    classList: children ? ['button', 'square'] : ['button'],
    textContent,
    listeners: [
      {
        event: 'click',
        callback: onClick,
      },
    ],
    children,
  });

  return element;
};

export default Button;