const array = ["a", "b", "c", "d", "e"];
console.log(array.includes("c"));
console.log(array.includes("d", 3));

const groceries = ["milk", "bread", "eggs", "butter"];

groceries.includes("milk", 1); // false
console.log(groceries.includes("milk", 0));
