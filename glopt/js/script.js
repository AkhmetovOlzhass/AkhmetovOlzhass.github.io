$(document).ready(function(){
  $('[data-modal="promo-button"]').on('click', function() {
      $('.overlay, #modal-icon').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
      $('.overlay, #modal-icon').fadeOut('slow')
  });
  $('.corousel__inner').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    prevArrow: '<button class="button__corousel"><img src="icons/left.png" alt="#"></button>',
    nextArrow:'<button class="button__corousel"><img src="icons/right.png" alt="#"></button>',
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else{
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})