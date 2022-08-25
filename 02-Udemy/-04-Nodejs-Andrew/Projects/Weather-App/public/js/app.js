console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`/weather?address=${location}`)
    .then(async (res) => {
      return res.json();
    })
    .then((data) => {
      messageOne.textContent = "";
      const {
        observation_time,
        temperature,
        weather_descriptions,
        wind_speed,
        pressure,
      } = data.current;

      messageOne.textContent = weather_descriptions;
      messageTwo.textContent = temperature;
    })

    .catch((err) => {
      console.log(err);
      messageOne.classList.add("error");
      messageOne.textContent =
        "Error happened, check your inputs and try again";
    });
});
