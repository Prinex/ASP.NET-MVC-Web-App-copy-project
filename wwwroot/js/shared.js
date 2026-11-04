const hamburgerMenu = document.querySelector('.hamburger-menu');
const offScreenNavbar = document.querySelector('.primary-navbar');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    offScreenNavbar.classList.toggle('active');
})