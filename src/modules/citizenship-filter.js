import { getData } from "./getData"
import { capitalize } from "./helpers";

const filterCitizenship = () => {
    const citizenshipFilter = document.getElementById('citizenship');

    let citizenship = [],
        currentCitizenship = [];

    function sortValue(data) {
        data.forEach((item) => {
            if (!item.citizenship) return

            citizenship.push(capitalize(item.citizenship));
        });

        currentCitizenship = new Set(citizenship);

        currentCitizenship.forEach((item) => {
            citizenshipFilter.insertAdjacentHTML('beforeend', `<option value="${item.toLowerCase()}">${item}</option>`)
        });
    }

    getData('./db/dbHeroes.json').then(data => sortValue(data));
}

export default filterCitizenship