const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];

const data = new Set();
data.add({ 1: "one" });
data.add(3);
data.add("two");

console.log("Data:", data);

console.log("data-has:", data.has(1));
data.delete(3);

console.log("Data-deleted:", data);

console.log("Data-size:", data.size);

const categories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories);
