function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}


function searchCity(city) {
    let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(refreshWeather);
}

function searchSubmit(event) {
    event.preventDefault();
    let inputElement = document.querySelector("#search-form-input");
    searchCity(inputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchSubmit);

searchCity("London");