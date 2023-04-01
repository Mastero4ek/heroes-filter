import { getData } from "./getData"
import { renderData } from "./render"

const search = () => {
    const input = document.getElementById('input');

    let newData = [];

    function renderByName(data) {
        let value = input.value.trim();

        newData = [];

        if (value != '') {
            data.forEach(item => {
                if (!item.name) return;

                if (item.name.includes(input.value)) {
                    newData.push(item);
                    renderData(newData);
                } else {
                    renderData(newData);
                }
            });
        } else {
            renderData(data);
        }
    }

    input.addEventListener('input', () => getData('./db/dbHeroes.json').then(data => renderByName(data)));
}

export default search