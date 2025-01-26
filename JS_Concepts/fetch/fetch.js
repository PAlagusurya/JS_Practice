const url = "https://www.course-api.com/react-tours-project";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data[0].id))
//   .catch((error) => {
//     console.log(error);
//   });

const fetchData = async () => {
  try {
    // Fetch always returns a response and it captures only network error so we need to check if the response is ok or not before processing further
    const data = await fetch(url);
    if (!data.ok) {
      const message = `There was an error with status code ${data.status}`;
      throw new Error(message);
    }
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});
