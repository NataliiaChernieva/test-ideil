import rangeCardTemplate from '../tamplates/range-card.hbs'

const rangeSlide = document.querySelector('.range-slide')

const renderMarkup = result => {
    const markup = rangeCardTemplate(result);
    rangeSlide.insertAdjacentHTML('afterbegin', markup)
}

$(document).ready(function(){
  $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
});
