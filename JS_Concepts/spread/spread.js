//If you want to copy an object to a new variable and manipulate it without affecting original object
const person = { name: "John", job: "Developer" };
const newPerson = { ...person, city: "Chennai", job: "Painter" };
console.log(person); //{ name: 'John', job: 'Developer' }
console.log(newPerson); //{ name: 'John', job: 'Painter', city: 'Chennai' }

const boys = ["John", "Jake"];
const girls = ["Anna", "Kate"];
const bestFriend = "Arnold";

const friends = [...boys, bestFriend, ...girls]; //[ 'John', 'Jake', 'Arnold', 'Anna', 'Kate' ]
const newList = [...friends]; //[ 'John', 'Jim', 'Arnold', 'Anna', 'Kate' ]
newList[1] = "Jim";

console.log(friends, newList);

const udemy = "udemy";
const letters = [...udemy];
console.log(letters); // ['u', 'd', 'e', 'm', 'y']
