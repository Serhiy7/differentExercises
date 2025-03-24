const apiKey = "YOUR_API_KEY";
const cityInput = document.getElementById("city-input");
const getWeatherButton = document.getElementById("get-weather");
const weatherResult = document.getElementById("weather-result");
const loadingIndicator = document.getElementById("loading");

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

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  loadingIndicator.style.display = "block";
  weatherResult.classList.remove("show");
  weatherResult.innerHTML = "";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Город не найден");
    const weather = await res.json();
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

getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    weatherResult.innerHTML = `<p>Пожалуйста, введите название города.</p>`;
    weatherResult.classList.add("show");
  }
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeatherButton.click();
});

window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity && lastCity.trim()) {
    cityInput.value = lastCity;
    getWeather(lastCity);
  }
});
