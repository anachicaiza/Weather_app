function refreshWeather(response) {
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

    getForecast(response.data.city);
}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
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

function getForecast(city) {
    let apiKey = "b739b64actfb7710ab2aa8f6044o4c38";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayForecast);
}

function displayForecast(response) {
    console.log(response.data)
    let forecastElement = document.querySelector("#forecast");
    let days = ["Tues", "Wed", "Thu", "Fri", "Sat"];
    let forecastHtml = "";

    days.forEach(function (day) {
        forecastHtml =
            forecast.innerHTML +
            `
    <div class="forecast-day">
            <div class="forecast-date">${day}</div>
            <div class="forecast-icon"></div>
            <div class="forecast-temperatures">
                <div class="forecast-temperature"><strong>18°</strong></div>
                <div class="forecast-temperature">10°</div>
            </div>
    </div> 
    `;

        forecastElement.innerHTML = forecastHtml;
    })

}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchSubmit);

searchCity("London");