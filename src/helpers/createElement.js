const createElement = (component) => {
  const element = component.element || document.createElement(component.tag);

  for (const prop in component) {
    switch (prop) {
      case 'textContent':
        element.textContent = component[prop];
        break;
      case 'classList':
        component[prop].forEach(className => element.classList.add(className));
        break;
      case 'id':
        element.id = component[prop];
        break;
      case 'attributes':
        component[prop].forEach(({ name, value }) => element.setAttribute(name, value));
        break;
      case 'listeners':
        component[prop].forEach(({ event, callback }) =>
          element.addEventListener(event, callback)
        );
        break;
    }
  }

  return element;
};

export default createElement;