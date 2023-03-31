import { getData } from "./getData";
import { renderData } from "./render";

const search = () => {
    const input = document.getElementById('input');

    function renderByName(data) {
        let value = input.value.trim();

        data.forEach((item) => {
            if (value != '') {
                if (item.name.search(value) == -1) {
                    console.log(item)
                }
            } else {
                renderData(data)
            }
        });
    }

    input.addEventListener('input', () => getData('./db/dbHeroes.json').then(data => renderByName(data)));
}

export default search