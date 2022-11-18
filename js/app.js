const buttonClose = document.querySelector('.header-top__close');
const headerDelivery = document.querySelector('.header-top');
buttonClose.addEventListener('click', () => {
  headerDelivery.style.display = 'none';
})

const link = document.querySelector('.home-banner__view')
link.addEventListener('click', function name(e) {
  e.preventDefault();
})