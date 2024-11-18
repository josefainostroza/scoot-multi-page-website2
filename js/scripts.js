const menuIconElement = document.getElementById('icon-menu');
const navMenuElement = document.getElementById('nav-menu');
const menuElement = document.getElementById('menu');

let toggle = false;

const toggleMenu = () => {
  navMenuElement.classList.toggle('menu-show'); //transladar de izq a der
  document.body.classList.toggle('showing-menu'); //cortina negra
  if (toggle) {
    menuIconElement.src = '/assets/images/icons/hamburger.svg';

    toggle = false;
  } else {
    menuIconElement.src = '/assets/images/icons/close.svg';
    toggle = true;
  }
};
menuIconElement.addEventListener('click', toggleMenu);
