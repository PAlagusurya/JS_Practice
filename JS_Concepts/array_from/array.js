/**Array.from is not a prototype it converts array-like or iterable objects into an array */

const udemy = "udemy"; //string
//console.log(Array.from(udemy)); // 'u', 'd', 'e', 'm', 'y' ]

//const text = document.querySelectorAll(".text"); //returns Nodelist
// console.log(Array.from(text).find((text) => text.innerHTML === "Node"));

//PAGINATION SETUP
const totalItems = Array.from({ length: 100 }, (_, index) => index);
const itemsPerPage = 10;
const pages = totalItems.length / itemsPerPage;

const result = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const data = totalItems.slice(start, start + itemsPerPage);
  return data;
});

console.log(result);
