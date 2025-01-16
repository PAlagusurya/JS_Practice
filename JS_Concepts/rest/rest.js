const fruits = ["apple", "orange", "lemon", "banana", "pear"];
const [fruit, nextOne, ...rest] = fruits;
console.log(fruit, rest);

const person = { name: "John", lastName: "Doe", job: "Developer" };
const { job, ...restOfAttributes } = person;
console.log(job, restOfAttributes);

function getAvgScore(name, ...rest) {
  // by default rest will be []
  const result =
    rest.reduce((total, score) => (total += score), 0) / rest.length;
  return `${name} secured ${result} marks`;
}

const testScores = [100, 98, 100, 99, 98];
const result = getAvgScore(person.name, ...testScores);
console.log(result);

// Important Note: Placement matters for the Rest Operator, and it should always be placed at the end.
