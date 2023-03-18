const API_KEY = "YOUR_API_KEY";
const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const weatherCity = document.getElementById("weather-city");
const weatherIcon = document.getElementById("weather-icon");
const weatherTemp = document.getElementById("weather-temp");
const weatherFeelsLike = document.getElementById("weather-feels-like");
const weatherHumidity = document.getElementById("weather-humidity");
const weatherWindSpeed = document.getElementById("weather-wind-speed");
const weatherDescription = document.getElementById("weather-description");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      weatherCity.textContent = data.name;
      weatherTemp.textContent = `${data.main.temp.toFixed(1)} °C`;
      weatherFeelsLike.textContent = `${data.main.feels_like.toFixed(1)} °C`;
      weatherHumidity.textContent = `${data.main.humidity}%`;
      weatherWindSpeed.textContent = `${data.wind.speed.toFixed(1)} m/s`;
      weatherDescription.textContent = data.weather[0].description;
      weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      weatherIcon.alt = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please try again later.");
    });
});
