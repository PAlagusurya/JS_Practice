//case sensitive,optional paramters to start search from index

const name = "John";
console.log(name.includes("o"));

console.log(name.includes("J", 0));

console.log(name.includes("J", 1));

const products = [{ title: "Mobile" }, { title: "Pencil" }, { title: "NOte" }];

const data = products.filter((product) =>
  product.title.toLowerCase().includes("o")
);
console.log(data);
