function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0 ${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return `${days[dayIndex]} ${hours}:${minutes}`;
}

function displayWeatherConditions(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchcity(city) {
  let apiKey = "e3015a327d1663bfa913f4b1041aef6e";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeatherConditions);
}

function displayWeatherConditions(response) {
  let city = documentquerySelector("#search-query").value;
  documentquerySelector("#city").innerHTML = response.data.name;
  documentquerySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  documentquerySelector("#humidity").innerHTML = response.data.main.humidity;
  documentquerySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  documentquerySelector("#discription").innerHTML =
    response.data.weather[0].main;
}

function handleSumbit(event) {
  event.preventDefault();
  let apiKey = "e3015a327d1663bfa9134b1041aef6e";
  axios.get(apiUrl).then(displayWeatherConditions);
}

function searchLocation(position) {
  let apiKey = "e3015a327d1663bfa913f4b1041aef6e";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeatherConditions);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
let currentTime = new Date();
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(currentTime);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", currentLocation);

searchcity("New York");
