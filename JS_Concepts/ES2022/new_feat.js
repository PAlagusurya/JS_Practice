import fetchTabs from "./fetchTabs.js";

const name = "Alagusurya P";
const array = [0, 4, 3, 6, 7];

console.log(array.at(-3));
console.log(name.at(-3));

console.log(await fetchTabs());

const resp = await fetch("https://www.course-api.com/react-tabs-project");
const data = await resp.json();
console.log(data);
