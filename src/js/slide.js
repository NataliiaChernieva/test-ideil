$(document).ready(function(){
  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.first-container-js'
  });

  $('.first-container-js').slick({
  slidesToShow: 4,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true
  });


  $('.focus-slide-container').slick({
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
  arrows: true,
  });
})


