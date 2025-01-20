//A promise is an object that returns a value that you hope to receive in the future.

const addColor = (time, color, selector) => {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.style.color = color;
        resolve("Added color");
      } else {
        reject("There is no such element:" + element);
      }
    }, time);
  });
};

// Asynchronous code in synchronous fashion
// When chaining .then() calls, make sure to return the promise from the .then() callback if the next operation depends on its completion.
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  addColor(1000, "red", ".first")
    .then(() => addColor(3000, "brown", ".second"))
    .then(() => addColor(2000, "green", ".third"))
    .catch((err) => console.log(err));
});

// const promise = new Promise((resolve, reject) => {
//   const x = 2;
//   if (x === 2) {
//     resolve("Resolved...");
//   } else {
//     reject("Rejected...");
//   }
// });

// console.log(
//   promise.then((data) => console.log(data)).catch((err) => console.log(err))
// );

/**

[[Prototype]]:Promise 
[[PromiseState]]: "rejected"
[[PromiseResult]]:"Rejected"

 */
