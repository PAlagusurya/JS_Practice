const button = document.querySelector("button");

let timeoutId;
let count = 0;

const debounce = (callback, delay) => {
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, delay);
  };
};

const debouncedClick = debounce(() => {
  console.log("You clicked me!");
}, 2000);

button.addEventListener("click", debouncedClick);
