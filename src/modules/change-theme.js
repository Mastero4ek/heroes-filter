const changeTheme = () => {
    const body = document.querySelector('body'),
        toggleBtn = document.getElementById('toggle');

    localStorage.getItem('theme-btn') === 'true' ? toggleBtn.checked = true : toggleBtn.checked = false;

    toggleBtn.addEventListener('change', () => {
        if (toggleBtn.checked) {
            body.classList.toggle('dark-theme');

            localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
            localStorage.setItem('theme-btn', true);
        } else {
            body.classList.toggle('dark-theme');

            localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
            localStorage.setItem('theme-btn', false);
        }
    });
}

export default changeTheme