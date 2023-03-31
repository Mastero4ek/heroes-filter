import { scroll } from './scroll'
import { turnCards } from './turn-cards'
import { capitalize } from './helpers'

function renderData(data) {
	const cardsWrapper = document.getElementById('cards'),
		unknown = 'unknown';

	const error = document.createElement('div');
	error.classList.add('cards-error');

	error.innerHTML = 'Hero not found!'
	cardsWrapper.innerHTML = '';

	data.forEach((item) => {
		const card = document.createElement('div');

		card.classList.add('card');

		card.insertAdjacentHTML('beforeend',
			`<a href="#filter" class="card__link"></a>

				<div class="card__photo">
					<img src=${item.photo ? item.photo : unknown} alt="#">
				</div>

				<h4 class="card__name">${item.name ? capitalize(item.name) : unknown}</h4>

				<div class="card__description">
					<div class="card__value">
						<p class="card__value-txt">RealName: </p>
						<span class="card__txt card-realname">${item.realName ? capitalize(item.realName) : unknown}</span>
					</div>

					<div class="card__value">
						<p class="card__value-txt">Species: </p>
						<span class="card__txt card-species">${item.species ? capitalize(item.species) : unknown}</span>
					</div>

					<div class="card__value">
						<p class="card__value-txt">Citizenship: </p>
						<span class="card__txt card-citizenship">${item.citizenship ? capitalize(item.citizenship) : unknown}</span>
					</div>

					<div class="card__value">
						<p class="card__value-txt">Gender: </p>
						<span class="card__txt card-gender">${item.gender ? capitalize(item.gender) : unknown}</span>
					</div>

					<div class="card__value">
						<p class="card__value-txt">Years of life:</p>
						<span class="card__txt card-birthday">${item.birthDay ? capitalize(item.birthDay) : unknown}-${item.deathDay ? item.deathDay : unknown}</span>
					</div>

					<div class="card__value">
						<p class="card__value-txt">Status: </p>
						<span class="card__txt card-status">${item.status ? capitalize(item.status) : unknown}</span>
					</div>

					<div class="card__value">
						<p class="card__value-txt">Actors: </p>
						<span class="card__txt card-actor">${item.actors ? capitalize(item.actors) : unknown}</span>
					</div>

					<div class="card__value movies">
						<p class="card__value-txt">Movies: </p>
						<span class="card__txt card-movies">${item.movies ? item.movies : unknown}</span>
					</div>
				</div>`
		);

		cardsWrapper.append(card);
	});

	const cards = document.querySelectorAll('.card');

	if (!cards[0]) return cardsWrapper.append(error);
	cards[0].classList.add('card--big');

	scroll();
	turnCards();
}

export { renderData }