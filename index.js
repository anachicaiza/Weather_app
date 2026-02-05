let form = document.querySelector("#search-form");
form.addEventListener("submit", searchSubmit);

function searchSubmit(event) {
    event.preventDefault();
    let inputElement = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = inputElement.value;
}