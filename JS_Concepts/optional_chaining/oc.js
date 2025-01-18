// Original Array
const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  { name: "peter", location: { street: "123 Pine street" } },
  {
    name: "susan",
    location: { street: "123 Apple street", timezone: { offset: "+9:00" } },
  },
];

people.forEach((person) => {
  //   console.log(
  //     person.location &&
  //       person.location.timezone &&
  //       person.location.timezone.offset
  //   );
  console.log(person?.location?.timezone?.offset || "+8:00");
});

/**
 * Optional chaining simplifies accessing deeply nested properties.
 * Prevents errors when properties are undefined.
 * Use the || operator for default values.
 */
