function scroll() {
    const cardLinks = document.querySelectorAll('.card__link'),
        scrollBtn = document.querySelector('.scroll-btn');

    const scrollFrom = (elem) => {
        const href = elem.getAttribute("href"),
            block = document.querySelector(href);

        block.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    cardLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            scrollFrom(link);
        });
    });

    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();

        scrollFrom(scrollBtn);
    });
}

export { scroll }