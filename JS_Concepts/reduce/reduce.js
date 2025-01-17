// cart example
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

const { totalCartItems, totalPriceOfTheCart } = cart.reduce(
  (acc, curr) => {
    acc.totalPriceOfTheCart += curr.price * curr.amount;
    acc.totalCartItems += curr.amount;
    return acc;
  },
  {
    totalCartItems: 0,
    totalPriceOfTheCart: 0,
  }
);

// Number: Stricter and fails for improperly formatted numbers.
// parseFloat: More forgiving but may lead to unintended results if the string contains unexpected characters.
console.log(totalCartItems, Number(totalPriceOfTheCart.toFixed(2)));

/* What is the initialValue if not specified explicitly? */
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.x
// );

// console.log(sum); // 6

const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const result = data.reduce((acc, curr) => {
    const { language } = curr;

    if (language) {
      acc[language] = acc[language] + 1 || 1;
    }
    return acc;
  }, {});
  return result;
};

const finalList = await fetchData();
console.log(finalList);

/**
 * NOTE: The operation accumulator + currentValue.x tries to add an object ({ x: 1 }) and a number (2). When you attempt this, the object gets coerced into a string (via toString), which results in [object Object]2.
 * When an object is coerced, it means that JavaScript automatically converts the object into a primitive value (like a string or a number) because of the context in which it's used. This process happens behind the scenes whenever JavaScript encounters
 * an object in a situation where a primitive value is required
 *
 *
 */
