// Original Array
const people = [
  {
    name: "Saiteja",
    age: 28,
    position: "Developer",
  },
  {
    name: "Bala",
    age: 31,
    position: "QA",
  },
  {
    name: "Karthik",
    age: 23,
    position: "Support",
  },
];

const names = people.map((person) => `<h2>${person.name}</h2>`);
console.log(names);
// The querySelector() method returns the first element that matches a CSS selector.
const result = document.querySelector("#result");

result.innerHTML = names.join("");
// names.join("") - returns string
