const apiKey = "c22ee88";

const movieInput = document.getElementById("movie-input");
const searchBtn = document.getElementById("search-btn");
const movieResult = document.getElementById("movie-result");

async function fetchMovie(title) {
    movieResult.innerHTML = "<p>Загрузка...</p>";

    const url = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const movie = await response.json();

        if (movie.Response === "False") {
            movieResult.innerHTML = `<p>Фильм не найден.</p>`;
            return;
        }

        const poster = movie.Poster !== "N/A" ? movie.Poster : "default-image.png";

        movieResult.innerHTML = `
            <h2>${movie.Title} (${movie.Year})</h2>
            <img src="${poster}" alt="${movie.Title} poster">
            <p>${movie.Plot}</p>
        `;
    } catch (error) {
        console.error("Ошибка:", error);
        movieResult.innerHTML = `<p>Произошла ошибка при получении данных.</p>`;
    }
}

searchBtn.addEventListener("click", () => {
    const title = movieInput.value.trim();
    if (title) {
        fetchMovie(title);
    } else {
        movieResult.innerHTML = `<p>Пожалуйста, введите название фильма.</p>`;
    }
});

movieInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") searchBtn.click();
});
