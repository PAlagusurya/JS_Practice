//Only iterable objects (like arrays, strings, Sets, Maps, and generators) implement the Symbol.iterator property.
const getElement = (selector, isList) => {
  const element = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  if ((element && !isList) || (isList && element.length)) return element;
  throw new Error(`Element with this selector ${selector} is not found`);
};

//console.log(getElement(".heading", false));
console.log(getElement(".list-item", true));
