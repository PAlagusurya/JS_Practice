const button = document.querySelector(".btn");

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

button.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "red";
    setTimeout(() => {
      second.style.color = "green";
      setTimeout(() => {
        third.style.color = "brown";
      }, 2000);
    }, 4000);
  }, 1000);
});

// Callback hell occurs with asynchronous operations executed in sequence.
