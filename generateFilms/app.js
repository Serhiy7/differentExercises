// API ключ OMDB
const apiKey = "c22ee88"; // Замените на свой API-ключ

// Получаем элементы с DOM
const movieInput = document.getElementById("movie-input");
const searchBtn = document.getElementById("search-btn");
const movieResult = document.getElementById("movie-result");

// Функция для поиска фильма по названию
async function fetchMovie(title) {
    const url = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

    try {
        // Отправляем запрос к API
        const response = await fetch(url);
        const movie = await response.json();

        // Проверяем, был ли фильм найден
        if (movie.Response === "False") {
            movieResult.innerHTML = `<p>Фильм не найден.</p>`;
            return;
        }

        // Отображаем информацию о фильме
        movieResult.innerHTML = `
            <h2>${movie.Title} (${movie.Year})</h2>
            <img src="${movie.Poster}" alt="${movie.Title} poster">
            <p>${movie.Plot}</p>
        `;
    } catch (error) {
        console.error("Ошибка:", error);
        movieResult.innerHTML = `<p>Произошла ошибка при получении данных.</p>`;
    }
}

// Обработчик события для кнопки поиска
searchBtn.addEventListener("click", () => {
    const title = movieInput.value.trim();
    if (title) {
        fetchMovie(title); // Ищем фильм
    } else {
        movieResult.innerHTML = `<p>Пожалуйста, введите название фильма.</p>`;
    }
});
