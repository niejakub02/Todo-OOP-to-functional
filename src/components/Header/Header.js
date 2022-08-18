import { Form } from 'components';
import { buildElement } from 'helpers';
import './styles.css';

const Header = () => {
  const element = buildElement({
    tag: 'header',
    classList: ['header'],
    children: [
      {
        element: Form(),
      },
    ],
  });

  return element;
};

export default Header;

