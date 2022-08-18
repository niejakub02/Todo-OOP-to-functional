import { Header, TaskGroup } from 'components';
import { buildElement } from "helpers";
import './styles.css';


const Layout = () => {
  const element = buildElement({
    tag: 'div',
    id: 'layout',
    classList: ['layout'],
    children: [
      {
        element: Header(),
        classList: ['layout__header'],
      },
      {
        tag: 'main',
        classList: ['layout__main'],
        children: [
          {
            element: TaskGroup({ headline: 'Pending' })
          },
          {
            element: TaskGroup({ headline: 'Done' })
          }
        ]
      }
    ],
  });

  return element;
};

export default Layout;