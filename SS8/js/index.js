const APP_ID = '503628701a0938d24cc366e3125f41a1';

const searchInput = document.getElementById("search-input");


const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector(".sunrise");
console.log("sunrise: ", sunrise);
const sunset = document.querySelector(".sunset");

const humidity = document.querySelector(".humidity")
const windSpeed = document.querySelector(".wind-speed");



searchInput.addEventListener("change", (event) => {
  console.log(event.target.value);
  // request dữ liệu tới server thông qua fetch
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${APP_ID}&lang=vi&units=metric`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)

      cityName.innerHTML = data.name;
      weatherState.innerHTML = data.weather[0].description;

      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      temperature.innerHTML = data.main.temp

      sunrise.innerHTML = data.sys.sunrise;
      sunset.innerHTML = data.sys.sunset;

      humidity.innerHTML = data.main.humidity
      windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2)
    });


})