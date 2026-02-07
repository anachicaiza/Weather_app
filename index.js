function refreshWeather(response) {
    console.log(response);
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;

    let cityElement = document.querySelector("#city");
    let city = response.data.city;


    let descriptionElement = document.querySelector("#description");
    let description = response.data.condition.description;

    let humidityElement = document.querySelector("#humidity");
    let humidity = `${response.data.temperature.humidity}%`;

    let windElement = document.querySelector("#wind-speed");
    let wind = `${response.data.wind.speed}km/h`;

    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

    let iconElement = document.querySelector("#icon");



    temperatureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = city;
    descriptionElement.innerHTML = description;
    humidityElement.innerHTML = humidity;
    windElement.innerHTML = wind;
    timeElement.innerHTML = formatDate(date);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}, `;
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