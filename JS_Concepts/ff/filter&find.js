const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 20, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

//Return Array
const filteredPeople = people.filter((item) => item.age === 20);
//singleInstance
const filteredFindPeople = people.find((item) => item.age === 20);
console.log(filteredPeople[0].name);
console.log(filteredFindPeople.name);
