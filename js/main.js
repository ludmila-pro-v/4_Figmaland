// menu

const menuElem = document.querySelector('.menu__nav');
const buttonElem = document.querySelector('.menu__btn-small');
const humburgerElem = document.querySelector('.menu__hamburger');

const toggleMenu = () => {
    menuElem.classList.toggle('menu__nav-active');
    humburgerElem.classList.toggle('menu__hamburger-active');
};

buttonElem.addEventListener('click', toggleMenu);

menuElem.addEventListener('click', (event) => {
    const target = event.target;
  
    if (target.classList.contains('menu-list__link')) {
      toggleMenu();
    }
});

// scroll

const scrollButtons = document.querySelectorAll('.scroll');

for (let scrollButton of scrollButtons) {
  scrollButton.addEventListener('click', function(e) {
    e.preventDefault()

    const blockID = scrollButton.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
}