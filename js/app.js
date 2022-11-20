 $('.card-slider__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.card-slider__thumb'
});
$('.card-slider__thumb').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.card-slider__big',
  dots: false,
  centerMode: false,
  vertical: true,
  arrows: false,
  focusOnSelect: true,
  speed: 1000,
  cssEase: 'linear'
});

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





