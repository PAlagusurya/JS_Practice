// const person = {
//   "name@name": "surya",
// };
// person.age = 25;
// console.log(person["name@name"]);
// console.log(person);

const person = {
  name: "Surya",
  age: 25,
  location: ["Chennai", "Karaikudi"],
};
function updatePerson(key, value) {
  person[key] = value;
}

updatePerson("name", "ram");
updatePerson("age", 34);

console.log(person["age"]);
console.log(person.location);
