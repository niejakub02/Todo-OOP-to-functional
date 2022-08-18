import { Layout } from './components';
import { buildElement } from './helpers';

const App = () => {
  const element = buildElement({
    tag: 'div',
    id: 'root',
    children: [
      {
        element: Layout(),
      },
    ],
  });

  return element;
};

export default App;