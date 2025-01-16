// Main Object
const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: {
      elder: "surya",
      younger: {
        first: "aarya",
        second: "kavya",
      },
    },
  },
};

const {
  first,
  city,
  last,
  siblings: {
    sister: {
      younger: { first: frstone, second },
      elder,
    },
  },
} = bob;

console.log(first, last, city, elder, frstone, second);
