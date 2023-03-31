import { getData } from "./getData"

const filterMovies = () => {
    const moviesFilter = document.getElementById('movies');

    let movies = [],
        currentMovies = [];

    function sortValue(data) {
        data.forEach((item) => {
            if (!item.movies) return

            item.movies.find((e) => {
                movies.push(e);
            });
        });

        currentMovies = new Set(movies);

        currentMovies.forEach((item) => {
            moviesFilter.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`)
        });
    }

    getData('./db/dbHeroes.json').then(data => sortValue(data));
}

export default filterMovies