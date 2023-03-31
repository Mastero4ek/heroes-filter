import { getData } from './getData'
import { renderData } from './render'
import { searchObj } from './helpers'

const filters = () => {
    const gender = document.querySelectorAll('input[name=gender]'),
        status = document.getElementById('status'),
        species = document.getElementById('species'),
        citizenship = document.getElementById('citizenship'),
        movies = document.getElementById('movies'),

        renderBtn = document.getElementById('render-button'),
        deleteBtn = document.getElementById('delete-button');

    let hero = {};
    let newData = [];

    function clearFilters() {
        for (let i = 0; i < gender.length; i++) {
            gender[i].checked = false;
        }

        status.value = '';
        species.value = '';
        citizenship.value = '';
        movies.value = '';
        input.value = '';

        hero = {};
        newData = [];
    }

    function renderMovies(data) {
        newData = [];

        data.forEach(item => {
            for (let i in item.movies) {
                if (item.movies[i] == movies.value) {
                    newData.push(item);
                }
            }
        });

        JSON.stringify(hero) == '{}' ? renderData(newData) : renderData(searchObj(newData, hero));
    }

    for (let i = 0; i < gender.length; i++) {
        gender[i].addEventListener('change', () => {
            if (gender[i].type == "radio" && gender[i].checked) {
                hero.gender = gender[i].value;
            }
        });
    }

    status.addEventListener('change', () => hero.status = status.value);
    species.addEventListener('change', () => hero.species = species.value);
    citizenship.addEventListener('change', () => hero.citizenship = citizenship.value);
    movies.addEventListener('change', () => getData('./db/dbHeroes.json').then((data) => renderMovies(data)));

    renderBtn.addEventListener('click', (e) => {
        e.preventDefault();

        getData('./db/dbHeroes.json').then(data => movies.value == '' ? renderData(searchObj(data, hero)) : renderData(searchObj(newData, hero)));
    });

    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();

        clearFilters();
        getData('./db/dbHeroes.json').then(data => renderData(data));
    });
}

export default filters