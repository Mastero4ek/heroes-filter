function turnCards() {
    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        const startRotateCard = (e) => {
            const halfHeight = card.offsetHeight / 2,
                halfWidth = card.offsetWidth / 2,
                currentHeight = e.offsetY - halfHeight,
                currentWidth = e.offsetX - halfWidth,
                cardBig = document.querySelector('.card--big');

            card.style.transform = `rotateX(${-currentHeight / 6}deg) rotateY(${currentWidth / 6}deg`;
            card.style.boxShadow = `${-currentWidth / 10}px ${-currentHeight / 10}px 1rem .1rem var(--boxShadowColor)`;

            cardBig.style.transform = '';
            cardBig.style.boxShadow = '';
        }

        const stopRotateCard = (e) => {
            card.style.transform = '';
            card.style.boxShadow = '';
        }

        card.addEventListener('mousemove', startRotateCard);
        card.addEventListener('mouseout', stopRotateCard);
    }

}

export { turnCards }