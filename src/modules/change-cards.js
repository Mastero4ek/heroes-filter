const changeCards = () => {
	const cards = document.querySelector('.cards');

	cards.addEventListener('click', ({ target }) => {
		const card = target.closest('.card');

		if (!card || target.closest('.card__description')) return;

		document.querySelector('.card--big').classList.remove('card--big');
		card.classList.add('card--big');
	});
}

export default changeCards