const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
$( document ).on( 'click', '.menu__overlay', function( event ) {
  event.preventDefault();
  menu.classList.remove('active');
});

$('.objects__wrapper').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev slick-prev-2 gray"><svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5823 0.833496L0.208374 13.2075L12.5823 25.5814L14.6459 23.5193L4.33254 13.2075L14.6459 2.89558L12.5823 0.833496Z" fill="#FD9800"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-next-2"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34479 24.874L14.7188 12.5001L2.34479 0.126106L0.281251 2.18819L10.5946 12.5001L0.281251 22.8119L2.34479 24.874Z" fill="#FD9800"/></svg></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
var filtered = false;
$('.finished').on('click', function(){
  filtered = false;
  $('.objects__wrapper').slick('slickUnfilter');
  if (filtered === false) {
    $('.objects__wrapper').slick('slickFilter','.finished-elem');
    filtered = true;
  } else {
    filtered = true;
  }
  if ($('.socials').hasClass('active') || $('.all').hasClass('active')) {
    $('.socials').removeClass('active');
    $('.all').removeClass('active');
    $('.finished').addClass('active');
  }
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slick-next').addClass('gray');
  } else {
    $('.slick-next').removeClass('gray');
  }
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slick-prev').addClass('gray');
  } else {
    $('.slick-prev').removeClass('gray');
  }
});
$('.all').on('click', function(){
  filtered = false;
  $('.objects__wrapper').slick('slickUnfilter');
  if (filtered === false) {
    $('.objects__wrapper').slick('slickFilter','.objects__wrapper-block');
    filtered = true;
  } else {
    filtered = true;
  }
  if ($('.socials').hasClass('active') || $('.finished').hasClass('active')) {
    $('.socials').removeClass('active');
    $('.finished').removeClass('active');
    $('.all').addClass('active');
  }
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slick-next').addClass('gray');
  } else {
    $('.slick-next').removeClass('gray');
  }
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slick-prev').addClass('gray');
  } else {
    $('.slick-prev').removeClass('gray');
  }
});
$('.socials').on('click', function(){
  filtered = false;
  $('.objects__wrapper').slick('slickUnfilter');
  if (filtered === false) {
    $('.objects__wrapper').slick('slickFilter','.social-elem');
    filtered = true;
  } else {
    filtered = true;
  }
  if ($('.all').hasClass('active') || $('.finished').hasClass('active')) {
    $('.all').removeClass('active');
    $('.finished').removeClass('active');
    $('.socials').addClass('active');
  }
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slick-next').addClass('gray');
  } else {
    $('.slick-next').removeClass('gray');
  }
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slick-prev').addClass('gray');
  } else {
    $('.slick-prev').removeClass('gray');
  }
});
$('.objects__wrapper').on('afterChange', function() {
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slick-next').addClass('gray');
  } else {
    $('.slick-next').removeClass('gray');
  }
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slick-prev').addClass('gray');
  } else {
    $('.slick-prev').removeClass('gray');
  }
});

$(document).ready(function(){
  $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
      } else {
          $('.pageup').fadeOut();
      }
  });

  $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
  });
});
$('.special__choose-1').on('click', function(){
  $('.special__blocks-first').addClass('special__wrapper-active');
  $('.special__blocks-second').removeClass('special__wrapper-active');
  $('.special__choose-1').addClass('special-active-border');
  $('.special__choose-2').removeClass('special-active-border');
  $('.special .container .special__block-2').removeClass('special-active');
});
$('.special__choose-2').on('click', function(){
  $('.special__blocks-second').addClass('special__wrapper-active');
  $('.special__blocks-first').removeClass('special__wrapper-active');
  $('.special__choose-2').addClass('special-active-border');
  $('.special__choose-1').removeClass('special-active-border');
  $('.special .container .special__block').removeClass('special-active');
});
const specialWrapper = $('.special__blocks-first .col-xl-4');
const specialBlock = $('.special .container .special__block');
for (let i = 0; i < specialWrapper.length; i++) {
  for (let a = 0; a < specialBlock.length; a++) {
    specialWrapper[i].addEventListener('click', e => {
      if (i == a) {
        specialBlock[i].classList.add('special-active');
        specialWrapper[i].classList.add('special__wrapper-title');
      } else {
        specialBlock[a].classList.remove('special-active');
        specialWrapper[a].classList.remove('special__wrapper-title');
      }
    });
  }
}
const specialWrapper2 = $('.special__blocks-second .col-xl-4');
const specialBlock2 = $('.special .container .special__block-2');
for (let i = 0; i < specialWrapper2.length; i++) {
  for (let a = 0; a < specialBlock2.length; a++) {
    specialWrapper2[i].addEventListener('click', e => {
      if (i == a) {
        specialBlock2[i].classList.add('special-active');
        specialWrapper2[i].classList.add('special__wrapper-title');
      } else {
        specialBlock2[a].classList.remove('special-active');
        specialWrapper2[a].classList.remove('special__wrapper-title');
      }
    });
  }
}

$('.lab-slider__slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev slick-prev-2 gray"><svg width="20" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.83 5L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H16V5H3.83Z" fill="#FD9800""/><defs><linearGradient id="paint0_linear" x1="8" y1="0" x2="8" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#1F1E1B"/><stop offset="1" stop-color="#505050"/></linearGradient></defs></svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-next-2"><svg width="20" height="16" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.17 7L8.59 10.59L10 12L16 6L10 0L8.59 1.41L12.17 5H0V7H12.17Z" fill="#FD9800"/></svg></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
$('.lab-slider__slide').on('afterChange', function() {
  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slick-next').addClass('gray');
  } else {
    $('.slick-next').removeClass('gray');
  }
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slick-prev').addClass('gray');
  } else {
    $('.slick-prev').removeClass('gray');
  }
});