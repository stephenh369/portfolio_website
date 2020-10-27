const navHamburger = document.querySelector('#main-nav-hamburger');
const nav = document.querySelector('#main-nav');
const navUL = document.querySelector('#main-nav-ul');

navHamburger.addEventListener('click', () => {
  nav.classList.toggle('expand');
  nav.style.transition = "all ease-out 0.5s";
});

navHamburger.addEventListener('click', () => navUL.classList.toggle('show'));