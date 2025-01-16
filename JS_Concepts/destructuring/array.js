const fruits = ["orange", "banana", "lemon"];

const friends = ["john", "peter", "bob", "anna", "kelly"];

const [frnd1, frnd2, , frnd3, , frnd4] = friends;
console.log(frnd1, frnd2, frnd3, frnd4); //john peter anna undefined

//swapping made easier

let one = 5;
let two = 4;
let three = 3;
let four = 6;

[one, two, three, four] = [two, three, four, one];
console.log(one, two, three, four); //4 3 6 5
