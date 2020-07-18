let url = "http://localhost:3000/weather?address=";

let form = document.getElementById("form");
let inp = document.getElementById("address");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(inp.value);
  fetch(`${url}${inp.value}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        // return console.log(data.error);
        let errMsg = document.getElementById("errorMessage");
        errMsg.innerHTML = data.error;
      }
      console.log(data);
      let msg = document.getElementById("message");
      const { location, forecastData } = data;
      let text = `The location is ${location}. The conditions is ${forecastData.weather_descriptions.join(
        ","
      )}. <br/>
      The outside temperature is ${
        forecastData.temperature
      }.<br/> It feels like ${forecastData.feelslike}`;
      msg.innerHTML = text;
    })
    .catch((error) => console.log(error));
});
