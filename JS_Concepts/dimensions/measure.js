//To get the dimensions of the window.

const width = window.innerWidth;
const height = window.innerHeight;

console.log("WIDTH:", width, "HEIGHT:", height);

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  const dimensionOfBox = document.querySelector(".box").getBoundingClientRect();
  console.log(dimensionOfBox);
});
