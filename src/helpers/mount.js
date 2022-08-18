const mount = (element, container = document.body) => {
  container.appendChild(element);
  return element;
};

export default mount;