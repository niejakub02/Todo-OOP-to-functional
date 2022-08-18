import { createElement } from ".";
import { appendChild } from ".";

const buildElement = ({ children, ...component }) => {
  const element = createElement(component);
  if (children) {
    children.forEach(child => appendChild(child, element));
  }

  return element;
};

export default buildElement;