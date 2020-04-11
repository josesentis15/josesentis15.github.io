const DURATION = 400;

const getHeight = elem => {
  elem.style.display = 'block';
  const height = elem.scrollHeight + 'px';
  elem.style.display = '';

  return height;
}

const setHeight = (elem, height = '') => {
  elem.style.height = height;
}

// Show an element
const show = (elem, toggleClass) => {
  const height = getHeight(elem, toggleClass);

  elem.parentElement.classList.add(toggleClass);
  setHeight(elem, height);

  window.setTimeout(() => { setHeight(elem); }, DURATION);
}

// Hide an element
const hide = (elem, toggleClass) => {
  setHeight(elem, elem.scrollHeight + 'px');

  window.setTimeout(() => {
    setHeight(elem, 0);
    elem.parentElement.classList.remove(toggleClass);
  }, 1);
}

// Toggle element visibility
const toggle = (elem, toggleClass) => {
  if (elem.parentElement.classList.contains(toggleClass)) {
    hide(elem, toggleClass);
    return;
  }

  show(elem, toggleClass);
}

export { toggle, hide, show };
