import { createElement } from ".";

const appendChild = (child, container) => {
  if (!child) return;

  const element = createElement(child);
  container.append(element);

  if (child.children) {
    child.children.forEach(nestedChild => appendChild(nestedChild, element));
  }
};

export default appendChild;