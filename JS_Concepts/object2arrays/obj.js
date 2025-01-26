const person = {
  name: "John",
  age: 25,
  address: { name: "New York", zip: 12345 },
};

console.log(Object.keys(person));
console.log(Object.values(person));
const arr = Object.entries(person);

for (const [key, value] of arr) {
  console.log("K:", key, "V:", value);
}
