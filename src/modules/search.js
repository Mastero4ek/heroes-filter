import { getData } from "./getData"
import { renderData } from "./render"
import { searchObj } from "./helpers"

const search = () => {
    const input = document.getElementById('input');

    let names = [];

    function renderByName(data) {
        let value = input.value.trim();
        let stringLength = input.value.length;

        if (value != '') {
            for (let i = 0; i < data.length; i++) {
                let name = data[i].name.split('').slice(0, stringLength).join('');

                if (name == input.value) {
                    renderData(searchObj(data, data[i]))
                }
            }
        } else {
            renderData(data)
        }
    }

    input.addEventListener('input', () => getData('./db/dbHeroes.json').then(data => renderByName(data)));
}

export default search