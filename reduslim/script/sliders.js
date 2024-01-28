let mainHeaderSlider = $(".main-header__list--slider").data('init-slider');
let compositionSlider = $(".composition__list").data('init-slider');
let reviewsSlider = $(".reviews__list").data('init-slider');
let leftArrow = $(".reviews__toggle--left");
let rightArrow = $(".reviews__toggle--right");

$('.reviews__list').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  speed: 1500,
  arrows: true,
  centerMode: true,
  prevArrow: leftArrow,
  nextArrow: rightArrow,
  responsive: [
      {
          breakpoint: 992,
          settings: {
            infinite: true,
            dots: true,
            arrows: false,
            centerMode: true,
          }
      },
  ]
});

$(window).on('resize', function(e){
  let mainHeaderSlider = $(".main-header__list--slider").data('init-slider');
  let compositionSlider = $(".composition__list").data('init-slider');

  if(window.innerWidth < 992){
    if(mainHeaderSlider != 1){
      $('.main-header__list--slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true
      }).data({'init-slider': 1});
    }

    if(compositionSlider != 1){
      $('.composition__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }).data({'init-slider': 1});
    }
  }
  else {
    if(mainHeaderSlider == 1){
      $('.main-header__list--slider').slick('unslick').data({'init-slider': 0});
    }

    if(compositionSlider == 1){
      $('.composition__list').slick('unslick').data({'init-slider': 0});
    }
  }
}).trigger('resize')