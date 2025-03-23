const apiKey = "YOUR_API_KEY"; // Замените на свой API-ключ OpenWeatherMap
const cityInput = document.getElementById("city-input");
const getWeatherButton = document.getElementById("get-weather");
const weatherResult = document.getElementById("weather-result");
const loadingIndicator = document.getElementById("loading");

// Function to display weather data on the page
function displayWeather(data) {
  const html = `
        <h2>${data.name}</h2>
        <p><strong>🌡️ Температура:</strong> ${data.main.temp} °C</p>
        <p><strong>📖 Описание:</strong> ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
      `;
  weatherResult.innerHTML = html;
  weatherResult.classList.add("show");
}

// Async function to get weather from OpenWeatherMap API
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  loadingIndicator.style.display = "block";
  weatherResult.classList.remove("show");
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Город не найден");
    }
    const weather = await res.json();
    // Save last searched city in localStorage
    localStorage.setItem("lastCity", city);
    displayWeather(weather);
  } catch (error) {
    weatherResult.innerHTML = `<p>${error.message}</p>`;
    weatherResult.classList.add("show");
    console.error("Ошибка:", error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

// Event listener for button click
getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    weatherResult.innerHTML = `<p>Пожалуйста, введите название города.</p>`;
    weatherResult.classList.add("show");
  }
});

// Event listener for "Enter" key press in the input field
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeatherButton.click();
  }
});

// On page load, check if a last searched city exists in localStorage
window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    cityInput.value = lastCity;
    getWeather(lastCity);
  }
});
// the best
