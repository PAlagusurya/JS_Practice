const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key, person[key]);
}

/**
 * 

- Do not use `for in` on arrays:
  - It's not recommended for arrays because it may iterate over properties rather than values.
  - Use array methods (e.g., `forEach`, `map`) or the `for of` loop for arrays.

---

- The `for in` loop is ideal for objects.
- For arrays, prefer methods or `for of` loops.

 */
