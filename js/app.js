const btn = document.querySelector('.header-nav__btn');
const menu = document.querySelector('.header-nav__menu')
btn.addEventListener('click', () => {
  btn.classList.toggle('header-nav__btn--active');
  menu.classList.toggle('header-nav__menu--active');
})

const btnFilter = document.querySelector('.catalog-top__menu');
const filter = document.querySelector('.catalog-filter');
btnFilter.addEventListener('click', () => {
  filter.classList.toggle('catalog-filter__active');
})

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function () {
  dropdown.classList.toggle('active');
}

function show(a) {
  document.querySelector('.text02').value = a;
}


const buttonClose = document.querySelector('.header-top__close');
const headerDelivery = document.querySelector('.header-top');
buttonClose.addEventListener('click', () => {
  headerDelivery.style.display = 'none';
})

const link = document.querySelector('.home-banner__view')
link.addEventListener('click', function name(e) {
  e.preventDefault();
})


