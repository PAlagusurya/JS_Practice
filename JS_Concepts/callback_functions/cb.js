function makeUpperCase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleCallback(name, cb) {
  const fullName = `${name}.P`;
  cb(fullName);
}

handleCallback("Surya", reverseString);
handleCallback("Surya", makeUpperCase);
handleCallback("Surya", (value) =>
  console.log("Inline Function as Callback", value)
);

const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("I am clicked");
});

//Deferred Execution: Decide when a function gets invoked
