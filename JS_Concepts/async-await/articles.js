//Async function always returns a promise

async function printName() {
  return "Alagusurya";
}

// console.log(printName());

async function getName() {
  // Waits for the promise to get settled and then returns the result
  const result = await printName();
  console.log("RES:", result);
}

// getName();

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Susan" },
  { id: 3, name: "Anna" },
];

const articles = [
  { userId: 1, article: "Article 1" },
  { userId: 2, article: "Article 2" },
  { userId: 3, article: "Article 3" },
];

const getUsers = (name) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      resolve(user);
    } else {
      reject("No such name in Users DB");
    }
  });
};

const getArticles = (userId) => {
  return new Promise((resolve, reject) => {
    const userArticles = articles.filter((user) => user.userId === userId);
    if (userArticles) {
      resolve(userArticles);
    } else {
      reject("UserId does not exist in the DB");
    }
  });
};

getUsers("Susan")
  .then((user) =>
    getArticles(user.id).then((res) => console.log(res[0].article))
  )
  .catch((err) => console.log(err));

async function getData() {
  try {
    const user = await getUsers("John");
    const article = await getArticles(user.id);
    console.log("ARTICLES:", article[0].article);
  } catch (e) {
    console.log(e);
  }
}

getData();

/**
 * return ensures sequential execution: Each .then waits for the promise in the previous .then to resolve.
It flattens the chain for better readability.
It enables proper error propagation to the .catch.
 * 
 * 
 */
