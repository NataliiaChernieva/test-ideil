$('.slide-container').slick({
  autoplay: true,
  autoplaySpeed: 2000,
})

$('.range-slide').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  
});


$('.popular-now').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
});


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.first-container'
});
$('.first-container').slick({
  slidesToShow: 4,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true
});