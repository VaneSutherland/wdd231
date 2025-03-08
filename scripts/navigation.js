const hamburgerButton = document.getElementById('hamburger-menu');
const navMenu = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if (hamburgerButton.textContent === '☰') {
        hamburgerButton.textContent = '✖'; 
    } else {
        hamburgerButton.textContent = '☰'; 
    }
});